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

			// If we've reached the end of the table, add it to the documentation and start a new one
			if (line.includes("</table>")) {
				builtDocumentation.push({ section: currentSection, type: currentType, content: typeStringBuilder.trim(), });
				typeStringBuilder = "";
			}
		},
		typeUrl: (type) => {
			return `/reference/${type.kind.toLowerCase()}/${type.name.toLowerCase()}`;
		}
	});

	await fs.rm(path.join(process.cwd(), "docs", "reference"), { recursive: true });
	await fs.mkdir(path.join(process.cwd(), "docs", "reference"), { recursive: true });

	// Build the sidebar
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

	await fs.writeFile(path.join(process.cwd(), "docs", "reference", "sidebar.json"), JSON.stringify(sidebar, null, 2));

	// Print the documentation
	await Promise.all(builtDocumentation.map(async ({ section, type, content }) => {
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