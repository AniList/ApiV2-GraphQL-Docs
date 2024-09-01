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
        link: "/reference/query",
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
      { icon: 'github', link: 'https://github.com/AniList' },
    ]
  }
})
