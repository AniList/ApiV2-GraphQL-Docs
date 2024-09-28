# Media List

When you need to get the user's list, you have two options:

1. A paginated `MediaList` query

	This can be useful when you don't need to know their full list, but only a portion of it. This is what's used by AniList's list overview on the home page.

2. The `MediaListCollection` query

	This will return the user's full list all at once, split up by status and custom lists where applicable.

::: warning
Even when making authenticated requests, the user is not inferred. You will need to specify the user in the query to get the correct list (entry).
:::

## Get a single list entry

There are two main ways to get a specific list entry:

* By the list entry ID itself
* By the media ID, usually paired with the user ID or user name

### By entry ID

When getting a `MediaList` entry, keep in mind that the `id` field is for the list entry ID itself, not a media ID. This ID can be obtained in a few different ways:

* The `mediaListEntry` field on the `Media` object (requires authentication)
* The `id` field returned by the `SaveMediaListEntry` mutation
* Through the `MediaListCollection` query

[Apollo Studio](https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fgraphql.anilist.co&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABABQAkAlmOkQJKoA0RZiYFAhrdXY8zAM74uNeigCURYAB08UpESIBZBG3YAZCvxQkqNSmCasOw5kc4GiAodzJW8XCdNnyFRKjLmuiZyR5df3Zy8FFAoUABsEXyDghTwIOHYAKwo-WIBfNNdMmJy5dJB0oA)

```graphql
query ($id: Int, $mediaId: Int, $userId: Int) {
  MediaList(id: $id, mediaId: $mediaId, userId: $userId) {
    id
    media {
      id
      title {
        romaji
      }
    }
  }
}
```

Don't worry about those extra arguments, they will be ignored by the server if you don't provide them.

### By media ID

::: warning
If you only use the `mediaId` field, it is very unlikely that you will get the entry for the user you want. It should be used in conjunction with the `userId` or `userName` fields.
:::

Because of how we wrote the above query, we can reuse it here without any changes. All we have to do is send `mediaId` and `userId` values instead of an `id` value.

### From the `Media` object

If you are making a request to the `Media` object, you can use the `mediaListEntry` field to get the list entry for the authenticated user. Requesting this field while not authenticated will return `null`.

[Apollo Studio](https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fgraphql.anilist.co&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABABQAkAlmOkQJKoCEAlEcADp5tJFECyCYCgEMSVGpTAt2nbjyJUOXOURQUUAGwStFs5XghwhAKwo7lAXzNzEgoQBkKAZxQBRVIW0zlPBV7mW-AK5zIhBzIA)

```graphql
query ($id: Int!) {
  Media(id: $id) {
    id
    title {
      romaji
    }
    mediaListEntry {
      id
    }
  }
} 
```

## Get a full list

::: warning
Currently, the `MediaListCollection` is limited to returning the 11,000 most recently updated unique entries. 

This only affects a handful of users, all of whom have only achieved that many entries by using their lists for unintended purposes.
:::

When you really do need the user's complete list, you can use the `MediaListCollection` query.

This response will automatically split up the list by status and custom lists where applicable, resulting in a list of lists.

::: tip
Do not skip over the user's custom lists. Users can hide entries from the default status lists, but they can still be accessed through the custom lists. 

If you skip the custom lists, you could very likely miss entries that are only available in the custom lists.
:::

When requesting the list, the `type` argument is required and you must provide either a `userId` or `userName`.

[Apollo Studio](https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fgraphql.anilist.co&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABABQAkKBADgukQLIJgCWAhgCrUICEANEWRgBnfAEkwdUam4BKIsAA6eBUiIMmbADLMhKAMIQANoYRQUzCEhKUadCl37CxEgU7zi5i5arVFDOlCF5JRVfXyRWRBCfMOQUPGYEIK9QsN9mMGi030QWVmDvbLCMrKK1cxQTAtSytTwIOFYAK2ZSsoBfNrTOwu6untSBpHaQdqA)

```graphql
query ($type: MediaType!, $userId: Int!) {
  MediaListCollection(type: $type, userId: $userId) {
    lists {
      name
      entries {
        id
        media {
          id
          title {
            romaji
          }
        }
      }
    }
  }
}
```