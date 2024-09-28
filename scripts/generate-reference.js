const { promises: fs } = require("fs");
const path = require("path");
const { loadSchemaJSON, renderSchema } = require("graphql-markdown");
const { group } = require("radash");

/**
 * @typedef {Object} DocumentationItem
 * @property {string} section
 * @property {string} type
 * @property {string} content
 */

async function main() {
	const schema = await loadSchemaJSON("https://graphql.anilist.co");
	/**
	 * @type {DocumentationItem[]}
	 */
	const builtDocumentation = [];

	let typeStringBuilder = "";
	let currentSection = "";
	let currentType = "";
	renderSchema(schema, {
		title: "AniList API Reference",
		skipTableOfContents: true,
		printer: (line) => {
			line = line.trim();
			if (line.startsWith("# ")) {
				return;
			}

			// Get the current section or type
			if (line.startsWith("## ")) {
				let newSection = line.replace("## ", "");
				if (newSection.endsWith("s"))
					newSection = newSection.slice(0, -1);
				currentSection = newSection;
				return;
			} else if (line.startsWith("### "))
				currentType = line.replace("### ", "");

			typeStringBuilder += line + "\n";

			// If we've reached the end of the table, add it to the documentation and start a new page
			if (line.includes("</table>")) {
				builtDocumentation.push({ section: currentSection, type: currentType, content: typeStringBuilder.trim(), });
				typeStringBuilder = "";
			}
		},
		// We patch this in to rewrite links from anchors to unique pages
		// We do this because the library generates everything as a single page, but we split it into multiple pages
		// See graphql-markdown+7.0.0.patch in the patches directory 
		typeUrl: (type) => {
			return `/reference/${type.kind.toLowerCase()}/${type.name.toLowerCase()}`;
		}
	});

	// Clear out old files
	await fs.rm(path.join(process.cwd(), "docs", "reference"), { recursive: true });
	await fs.mkdir(path.join(process.cwd(), "docs", "reference"), { recursive: true });

	// Build the sidebar
	// TODO(Nick) Look into nesting object types under their common prefix
	// ie: Character -> [CharacterConnection, CharacterName, CharacterImage, ...]
	let sidebar = group(builtDocumentation, ({ section }) => section);
	sidebar = Object.entries(sidebar).map(([k, v]) => {
		if (k === "Query" || k === "Mutation") {
			return {
				text: k,
				link: `/reference/${k.toLowerCase()}`,
			}
		}

		return {
			text: k,
			items: v.map(({ type }) => ({
				text: type,
				link: `/reference/${k.toLowerCase()}/${type.toLowerCase()}`,
			}))
		}
	});

	sidebar = [
		{
			text: "API Reference",
			link: "/reference/"
		},
		...sidebar,
	];

	await fs.writeFile(path.join(process.cwd(), "docs", "reference", "sidebar.json"), JSON.stringify(sidebar, null, 2));

	// Create the index page
	const filePath = path.join(process.cwd(), "docs", "reference", "index.md");
	fs.mkdir(filePath.split(path.sep).slice(0, -1).join(path.sep), { recursive: true });
	const fileContent = `---\ntitle: API Reference\n---\n\n${indexContent}`;
	await fs.writeFile(filePath, fileContent);

	// Print the documentation
	await Promise.all(builtDocumentation.map(async ({ section, type, content }) => {
		// Split root query and mutation types into the top level sidebar section
		if (section === "Query" || section === "Mutation") {
			const filePath = path.join(process.cwd(), "docs", "reference", section.toLowerCase() + ".md");
			fs.mkdir(filePath.split(path.sep).slice(0, -1).join(path.sep), { recursive: true });
			const fileContent = `---\ntitle: ${section} Reference\n---\n\n# Root ${section}\n\n${content}`;
			await fs.writeFile(filePath, fileContent);
			return;
		}

		const filePath = path.join(process.cwd(), "docs", "reference", section.toLowerCase(), type.toLowerCase() + ".md");
		fs.mkdir(filePath.split(path.sep).slice(0, -1).join(path.sep), { recursive: true });
		const fileContent = `---\ntitle: ${type} Reference\n---\n\n${content}`;
		await fs.writeFile(filePath, fileContent);
	}));
}

main();

const indexContent = `# API Reference

While we recommend using [Apollo Studio](https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fgraphql.anilist.co) to explore the API, we also provide these reference pages for quickly finding information.

These pages are manually generated and may not always be up to date.

::: warning
There is a known issue where Scalar types do not get generated. Links for these types will lead to a 404 page.
:::
`