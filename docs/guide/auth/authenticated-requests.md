---
title: Authenticated Requests
description: Making authenticated requests to the AniList API.
---

# Authenticated Requests

Once you have an access token, you can make authenticated requests to the AniList API on behalf of the user.

To make authenticated requests, you will need to include the access token in the `Authorization` header of your request as a "Bearer" token. 

::: code-group
<<< @/guide/snippets/auth/authenticated-requests/javascript.js{js:line-numbers} [Javascript]
<<< @/guide/snippets/auth/authenticated-requests/php.php{php:line-numbers} [PHP]
:::

## JWT Tokens

The access tokens provided by the authorization flows are JWT tokens. You can use a JWT library to decode the token and get the user's ID, expiration date, and other information.

You can try it out yourself on your own tokens by pasting them into [jwt.io](https://jwt.io).