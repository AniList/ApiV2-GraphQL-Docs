---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "AniList"
  tagline: "10 years of data aggregation and counting"
  image:
    light: /hero_light.png
    dark: /hero_dark.png
    alt: AniList
  actions:
    - theme: brand
      text: Get Started 
      link: /guide/introduction
    - theme: alt
      text: Playground
      link: https://studio.apollographql.com/sandbox/explorer?endpoint=https://graphql.anilist.co

features:
  - title: GraphQL Powered
    details: AniList uses GraphQL to power its API, allowing you to query and manipulate data in a flexible and efficient way.
    # icon:
    #   src: /graphql.svg
    #   alt: GraphQL Logo
    link: /guide/graphql/
    linkText: Read about GraphQL
  - title: Large Data Set
    details: AniList has over 20 thousand anime entries and over 100 thousand manga entries, with more constantly being added.
    link: https://anilist.co/site-stats
    linkText: View live data stats 
  - title: Battle Tested
    details: AniList and AniChart are both built on the same API, ensuring a high level of compatibility and reliability.
---