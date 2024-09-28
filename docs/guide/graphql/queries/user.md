# User

## Get the currently authenticated user

Unlike many other queries, the `Viewer` query infers the current user from the access token. This is the simplest way to get the current user.

::: info
If you only require the user ID, you can use a JWT library to decode the access token and get the user ID from the `sub` field.
:::

[Apollo Studio](https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fgraphql.anilist.co&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABMADp6lJFEBqAlggO74nmXXV1htUdICGiHtQC%2BPESBFA)

```graphql
query {
  Viewer {
    id
    name
  }
}
```