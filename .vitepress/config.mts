import { defineConfig } from 'vitepress'
import referenceSidebar from "../docs/reference/sidebar.json";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AniList API Docs",
  description: "Developer documentation for the AniList API.",
  srcDir: "docs",
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/anilist.png' }]
  ],
  themeConfig: {
    logo: "/anilist.png",
    search: {
      provider: "local"
    },
    outline: "deep",
    nav: [
      {
        text: "Guide",
        link: "/guide/introduction",
        activeMatch: "^/guide/"
      },
      {
        text: "Reference",
        link: "/reference/",
        activeMatch: "^/reference/"
      },
      {
        text: "AniList",
        link: "https://anilist.co/",
      },
      {
        text: "AniChart",
        link: "https://anichart.net"
      },
    ],
    sidebar: {
      "/guide/": [
        {
          text: 'Introduction',
          items: [
            {
              text: "What is AniList?",
              link: "/guide/introduction"
            },
            {
              text: "Terms of Use",
              link: "/guide/terms-of-use"
            },
            {
              text: "Considerations",
              link: "/guide/considerations"
            },
            {
              text: "Rate Limiting",
              link: "/guide/rate-limiting"
            }
          ]
        },
        {
          text: "GraphQL",
          collapsed: false,
          items: [
            {
              text: "Getting Started",
              link: "/guide/graphql/",
            },
            {
              text: "Pagination",
              link: "/guide/graphql/pagination",
            },
            {
              text: "Connections",
              link: "/guide/graphql/connections",
            },
            {
              text: "Errors",
              link: "/guide/graphql/errors",
            },
            {
              text: "What's next?",
              link: "/guide/graphql/whats-next",
            },
            {
              text: "Mutations",
              link: "/guide/graphql/mutations",
            }
          ]
        },
        {
          text: "Authentication",
          collapsed: false,
          items: [
            {
              text: "Getting Started",
              link: "/guide/auth/",
            },
            {
              text: "Authorization Code Grant",
              link: "/guide/auth/authorization-code"
            },
            {
              text: "Implicit Grant",
              link: "/guide/auth/implicit"
            },
            {
              text: "Authenticated Requests",
              link: "/guide/auth/authenticated-requests"
            }
          ]
        },
        {
          text: "Query Examples",
          link: "/guide/graphql/queries/",
          collapsed: true,
          items: [
            {
              text: "Media",
              link: "/guide/graphql/queries/media"
            },
            {
              text: "Media List",
              link: "/guide/graphql/queries/media-list"
            },
            {
              text: "User",
              link: "/guide/graphql/queries/user"
            }
          ]
        },
        {
          text: "Migration",
          collapsed: true,
          items: [
            {
              text: "Migrating from API v1",
              link: "/guide/migration/version-1/"
            }
          ],
        }
      ],
      "/reference/": referenceSidebar,
    },
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/anilist' },
      { icon: 'twitter', link: 'https://twitter.com/AniListco' },
      {
        icon: {
          svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bluesky</title><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/></svg>`
        },
        link: "https://bsky.app/profile/anilist.co"
      },
      { icon: 'github', link: 'https://github.com/AniList' },
    ]
  }
})
