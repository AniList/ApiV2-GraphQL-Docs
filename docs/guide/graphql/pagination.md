---
title: Pagination
description: Pagination in the AniList GraphQL API.
---

# Pagination

You might have noticed that all the top level queries ([`Media`](https://studio.apollographql.com/sandbox/schema/reference/objects/Query?query=Media), [`Character`](https://studio.apollographql.com/sandbox/schema/reference/objects/Query?query=Character), [`Staff`](https://studio.apollographql.com/sandbox/schema/reference/objects/Query?query=Staff), etc) return single object.
If you want to get multiple objects, you will need to use the [`Page`](https://studio.apollographql.com/sandbox/schema/reference/objects/Query?query=Page) top level query.

In most cases, you can simply wrap your query in a `Page` object with minimal other changes.

::: info Example
If you want a page of characters, the normal query would be `Character`. To receive a paginated list of characters, you would wrap your `Character` query with `Page` and rename `Character` to `characters`.
:::

## `Page` field limitations

The schema for `Page` shows that it has many data fields available. ie: `media`, `characters`, `staff`, etc.

Only one of these fields can be used in a single `Page` query. This means that a single `Page` query cannot return paginated data for multiple types of data.

The `pageInfo` field is exempt from this rule.

::: tip :heavy_check_mark: Valid

  The `Page` query only has one data field along with the optional `pageInfo` field.

  ```graphql
  {
    Page {
      pageInfo {
        hasNextPage
      }
      media {
        id
      }
    }
  }
  ```
:::


::: danger :x: Invalid

  The `Page` query has multiple data fields, but only one of them can be used in a single query.

  ```graphql
  {
    Page {
      pageInfo {
        hasNextPage
      }
      media {
        id
      }
      characters {
        id
      }
    }
  }
  ```
:::

## PageInfo

The `Page` query also provides the `pageInfo` field, which contains information about the current page and the total number of pages.

::: warning `PageInfo` Degredation
Currently, the `PageInfo` object is limited in functionality due to performance issues. The `total` and `lastPage` fields are not currently accurate. You should only rely on `hasNextPage` for any pagination logic.
:::

## Making a paginated query

Let's write another query. This time, we'll make a basic search query to get a list of `Media` entries.

:::details Example Query
Let's create a simple query to get an anime by it's unique ID.

[Apollo Studio](https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fgraphql.anilist.co&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABABQAkAlmOkQJKoA0RZADgIYDmCN9KTr%2BAAqdudRswDOCNnigALGgGUUeCkg4BKIsAA6eHUiJFhXUuy41WIpiyEjLtvCYRbd%2Bw0aLmE9AGYRtPQNPT1g8PGQUZyCPELk2CQA5BAAPKJEYkKNHaPcQgF9Mz0QwCjZSKksqJikZeUta2TlXIpCqVs8UChQAGwRAvKyjPAg4NgArCg6jQsGZotmDfJAGEAA3GTKAIz6JDBA3YKIdEEb5E5oTgDE2FAQAegAtfAgThiKT7wuiAEZ3wc%2Bdi43wAzDFlvkgA)

::: code-group
<<< @/guide/snippets/graphql/pagination/javascript.js{js:line-numbers} [Javascript]
<<< @/guide/snippets/graphql/pagination/php.php{php:line-numbers} [PHP]
<<< @/guide/snippets/graphql/pagination/python.py{py:line-numbers} [Python]
<<< @/guide/snippets/graphql/pagination/rust.rs{rs:line-numbers} [Rust]
:::

The request in the above example will return the following JSON response:

```json
{
  "data": {
    "Page": {
      "pageInfo": {
        "currentPage": 1,
        "hasNextPage": true,
        "perPage": 3
      },
      "media": [
        {
          "id": 55191,
          "title": {
            "romaji": "Fate/Zero"
          }
        },
        {
          "id": 10087,
          "title": {
            "romaji": "Fate/Zero"
          }
        },
        {
          "id": 33649,
          "title": {
            "romaji": "Fate/Zero"
          }
        }
      ]
    }
  }
}
```

::: info
Note how the query still uses the `$id` variable but we did not provide a value for it in the variables object. This is valid and the GraphQL server will simply ignore any variables that are not provided. This allows you to make more complex and flexible queries without the need to modify the query string directly.
:::

::: tip
For stronger type safety, you can define your variables in the query with a `!` to indicate that they are required.

ie: `($id: Int!)`
:::

## Collections

Some top level queries return collections of data. These collections are used when pagination does not make sense, but there is still a need to return a list of items.

Examples:
* [`GenreCollection`](https://studio.apollographql.com/sandbox/explorer?searchQuery=Query.GenreCollection)

	Returns a list of all genres in use on AniList.
* [`MediaListCollection`](https://studio.apollographql.com/sandbox/explorer?searchQuery=Query.MediaListCollection)

	Returns a list of all anime or manga entries on a user's list.