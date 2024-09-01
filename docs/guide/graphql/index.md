---
title: Getting Started
description: Getting started with AniList's GraphQL API.
---

# What is GraphQL?

[GraphQL](https://graphql.org/) is a strongly typed API query language. It allows clients to define the structure of data required and the server will respond with data in the same structure. This helps avoid the problems of both over and under-fetching data, while also allowing for a more powerful and flexible API.

:::info Prerequisite Knowledge
Before continuing, it is highly recommended that you familiarize yourself with GraphQL. The [official GraphQL documentation](https://graphql.org/learn/) is a good place to start.
:::

## Making a GraphQL API request

AniList requires all GraphQL requests be made as `POST` requests to `https://graphql.anilist.co`. 

When making a request, you will need to include 2 objects in your payload: `query` and `variables`.

* `query`: This is your query or mutation string. It defines the data and shape of data that you would like.
* `variables`: Contains the values for the variables used within your query.

The `variables` object is optional if you are not using any, however, it is recommended that you use variables wherever it makes sense.

:::details Example Query
Let's create a simple query to get an anime by it's unique ID.

[Apollo Studio](https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fgraphql.anilist.co&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABABQAkAlmOkQJKoCURwRAxEQCIIBmFSCRAO4ALClGFEAbgEM8FaQCMANggDOQikqVEFAmKoRgifIimECc%2BYiSoMAOnjtIiRALKH5pKjUpgANKYEAA4INACCAHK0rgCiTCzs9AZ4KEQQMHhSsvLKasaoEKbmRJaERLIA5vDIKOo2YEwkKMGhRJHRMcbqwrJgALRQEGCG%2BUUWuIT2js4uxmAOTrOmFCgqzAszS3gQcNIAVhQbSy7IFUoUqsJHx0jSKBSSCNcuAL7Xb9MvIH4gMnKKKlUGBAwGudhAVHBNAAjABWaEAJlhGy%2BLyAA)

::: code-group
<<< @/guide/snippets/graphql/getting-started/javascript.js{js:line-numbers} [Javascript]
<<< @/guide/snippets/graphql/getting-started/php.php{php:line-numbers} [PHP]
<<< @/guide/snippets/graphql/getting-started/python.py{py:line-numbers} [Python]
<<< @/guide/snippets/graphql/getting-started/rust.rs{rs:line-numbers} [Rust]
:::

The request in the above example will return the following JSON response:

```json
{
  "data": {
    "Media": {
      "id": 15125,
      "title": {
        "romaji": "Teekyuu",
        "english": "Teekyuu",
        "native": "てーきゅう"
      }
    }
	}
}
```

##  Tooling

GraphQL has been used in major projects throughout the industry for over a decade, including Airbnb, Intuit, Microsoft, and more. It is battle tested and has [many powerful tools](https://github.com/chentsulin/awesome-graphql) for you to use.

These are some recommended tools for working with AniList:

* [Apollo Studio](https://studio.apollographql.com/sandbox/explorer)

	Apollo Studio is a powerful tool for exploring and testing your GraphQL queries. It is a great way to get started with GraphQL and AniList.

* [GraphQL Codegen](https://the-guild.dev/graphql/codegen)
	
	Skip service-specific API clients and generate always up-to-date typings for your language of choice. 