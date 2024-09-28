---
title: Mutations
description: Creating and modifying data on the AniList.
---

# Mutations

[Mutations](https://graphql.org/learn/queries/#mutations) allow you to create, update, and delete data. All mutations require authentication, so you will need to [obtain an access token](/guide/auth/) before you can use them.

::: tip
Unlike queries, where you can exclude the `query` keyword, mutations require the `mutation` keyword.
:::

The majority of our mutations have the following prefixes:

* `Save`: Create new or update existing data

	We usually determine if you would like to create or update data depending on if you provide an `id` or not. 

* `Delete`: Delete data

	This will usually return a [`Deleted`](https://studio.apollographql.com/sandbox/schema/reference/objects/Deleted) object type. However, some mutations will return an updated version of the sibling data if this is more useful.

* `Toggle`: Toggle a boolean value

::: info Authorization needed
In the examples below, you will also need to include your access token in the `Authorization` header of your request. For the sake of brevity, we will be skipping that step here.
:::

## Create

Let's create a new media list entry on our user's list. We'll use [Cowboy Bebop](https://anilist.co/anime/1), which has an ID of `1`, as an example.

:::details Example Query
[Apollo Studio](https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fgraphql.anilist.co&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIAKAEgBsCBnFAUVQCcBPASTHRPdQBoSFRGAK5O3XigEV6%2BGLW4BZBCNwAZOigDKeFPICUJYAB1mx0iS24AbgmWqN9JijZkCXQTScsOYAcNFxQQCxPxJZPQVBCIMjU3MSRJJ3eItEmNpUxIBfVNyzJBA%2BEGtcZlEAIyoEWgwQEwLE4ywVQLBm7gBGPiySZoyOvpAAYQBVACVxhgA5ABVmvJBsoA)

::: code-group
<!-- <<< @/guide/snippets/graphql/mutations/javascript.js{js:line-numbers} [Javascript] -->
<<< @/guide/snippets/graphql/mutations/create/php.php{php:line-numbers} [PHP]
<!-- <<< @/guide/snippets/graphql/mutations/python.py{py:line-numbers} [Python] -->
<!-- <<< @/guide/snippets/graphql/mutations/rust.rs{rs:line-numbers} [Rust] -->
:::

The request in the above example will return the following JSON response:

```json
{
  "data": {
    "SaveMediaListEntry": {
        "id": 4,
        "status": "CURRENT"
    }
  }
}
```

Keep in mind that the `id` that was returned is the ID of the newly created list entry.

## Update

Using the `id` returned above, we can update the status of the list entry.

Note how the above mutation includes the `$listEntryId` variable, which is used to identify the list entry to update. It went unused in the example above, but we can make use of it now.

:::details Example Query
[Apollo Studio](https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fgraphql.anilist.co&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIAKAEgBsCBnFAUVQCcBPASTHRPdQBoSFRGAK5O3XigEV6%2BGLW4BZBCNwAZOigDKeFPICUJYAB1mx0iS24AbgmWqN9JijZkCXQTScsOYAcNFxQQCxPxJZPQVBCIMjU3MSRJJ3eItEmNpUxIBfVNyzJBA%2BEGtcZlEAIyoEWgwQEwLE4xAvRh9OZu4AFj4skmaMzv6QAGEAeUUABTUGABUGABFmvJBsoA)

If using the above studio link, you will need to replace the `listEntryId` variable with the ID returned from the previous mutation.

::: code-group
<!-- <<< @/guide/snippets/graphql/mutations/javascript.js{js:line-numbers} [Javascript] -->
<<< @/guide/snippets/graphql/mutations/update/php.php{php:line-numbers} [PHP]
<!-- <<< @/guide/snippets/graphql/mutations/python.py{py:line-numbers} [Python] -->
<!-- <<< @/guide/snippets/graphql/mutations/rust.rs{rs:line-numbers} [Rust] -->
:::

The request in the above example will return an identical response to the one above, but with the `status` field updated to `COMPLETED`.