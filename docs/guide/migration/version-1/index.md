---
title: Migrating from APIv1
description: Migrating from the AniList API v1.
---

# Migrating from API v1

:::info
API v1 was shut down in 2019 when the [AniChart](https://anichart.net) rewrite was completed.

At this point, this page should not be useful to the vast majority of API consumers. This page is retained for historical purposes.
:::

## API Route

All GraphQL API requests should be made as a `POST` request to `https://graphql.anilist.co`. The `/api/*` route is longer used excluding [OAuth](/guide/auth/) routes which are now at `/api/v2/`. 

## Migration Queries

We've created a collection of API v2 queries that aim to replicate the REST routes of API v1 as closely as possible. You can view them [here](https://github.com/AniList/ApiV2-GraphQL-Docs/tree/master/docs/guide/migration/version-1/migrations).

## OAuth

Sadly the OAuth packages used for API v1 have been deprecated and will stop receiving necessary updates in the near future. As such we have moved to a new more modern implementation of OAuth. It is possible to use both API versions of OAuth at the same time but they can not access each others API version routes.

* The Client Credentials grant has been removed as public API data no longer requires OAuth.
* You will need to create new OAuth API v2 clients & credentials, and generate new tokens for your application and users.
* JWT tokens are now used instead of string tokens. 
* Tokens are now long lived, and will not expire every hour.
* Refresh tokens are no longer supported due to the long lived tokens.
* The implicit grant type is now available.
* The `api/auth/authorize` route is now `api/v2/oauth/authorize`.
* The `api/auth/access_token` route is now `api/v2/oauth/token`,

## Snake case to camel case

All fields are now in `camelCase` instead of `snake_case`.

If you would like to have the fields in snake case we recommend not using GraphQL aliasing for this, as you need to apply it to every requested field. Instead it would be better to automatically handle the conversion on your client after you have received the data.

## Media Titles

In API v1 when we didn't have any data for an anime or manga's English or Japanese titles AniList would supply the romaji title in its place instead of a null value. This allowed client developers to easily implement the user's preferred title language without needing to check if the title in the preferred language was available.

In API v2 this is no longer the case, we now provide a `userPreferred` title field that automatically returns the title in the authenticated user's preferred title language, or if no user is authenticated it will return the romaji title as a default. As such when we don't have any data for the English or Japanese (now `native`) version of the title these fields will return `null`.

## Aliasing

If you would prefer field names to be more similar to their API v1 counterparts, you can use the alias feature GraphQL.

Simply put the name you would prefer and a colon before the field name. For example `totalEpisodes: episodes` will return the `episodes` field with the key as `totalEpisodes`.

## Small Models

As GraphQL allows you to specify the exact fields you would like to receive, API v2 does not have the small/full models of API v1.

## Misc

* All dates (excluding `FuzzyDate` types) are now Unix timestamps in seconds.