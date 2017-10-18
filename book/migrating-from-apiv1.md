# Migrating from API v1

### Api Route

All GraphQL Api requests should be made as a POST request to `https://graphql.anilist.co`. The `/api/*` route is longer used excluding OAuth routes which are now at `/api/v2/`.

### Migration Queries

We've created a collection of Api v2 queries that aim to replicate the REST routes of Api v1 as closely as possible. You can view them [here](https://github.com/AniList/ApiV2-GraphQL-Docs/tree/master/migration).

### OAuth

Sadly the OAuth packages used for Api v1 have been deprecated and will stop receiving necessary updates in the near future. As such we have moved to a new more modern implementation of OAuth. It is possible to use both Api versions of OAuth at the same time but they can not access each others Api version routes.

* The Client Credentials grant has been removed as public Api data no longer requires OAuth.
* You will need to create new OAuth Api v2 clients & credentials, and generate new tokens for your application and users.
* JWT tokens are now used instead of string tokens. 
* Tokens are now long lived, and will not expire every hour.
* Refresh tokens are no longer supported due to the long lived tokens.
* The implicit grant type is now available.
* The `api/auth/authorize` route is now `api/v2/oauth/authorize`
* The `api/auth/access_token` route is now `api/v2/oauth/token`

[View the OAuth docs page for more info about getting OAuth setup for Api v2.](/oauth.md)

### Snake Case to Camel Case

All fields are now in camelCase instead of snake\_case.

If you would like to have the fields in snake case we recommend not using GraphQL aliasing for this, as you need to apply it to every requested field. Instead it would be better to automatically handle the conversion on your client after you have received the data.

### Aliasing

If you would prefer field names to be more similar to their Api v1 counterparts, you can use the Alias feature GraphQL.

Simply put the name you would prefer and a colon before the field name. For example `totalEpisodes: episodes` will return the episodes field with the key as totalEpisodes.

### Small Models

As GraphQL allows you to specify the exact fields you would like to receive, Api v2 does not have the Small/Full models of Api v1.

### Misc

* All dates \(excluding FuzzyDateTypes\) are now Unix timestamps in seconds.



