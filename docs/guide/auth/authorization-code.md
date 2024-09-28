---
title: Authorization Code Grant
description: Authenticating with the AniList API using the Authorization Code Grant.
---

# Authorization Code Grant

Once you have [created an application](./#creating-an-application), you can use your client ID and client secret to request an authorization code.

## Redirecting for authorization

The first step is to redirect the user to the authorization URL `https://anilist.co/api/v2/oauth/authorize` with the required parameters.

::: code-group
```html
<a href="https://anilist.co/api/v2/oauth/authorize?client_id={client_id}&redirect_uri={redirect_uri}&response_type=code">Login with AniList</a> 
```
```php
$query = [
    'client_id' => '{client_id}',
    'redirect_uri' => '{redirect_uri}', // http://example.com/callback
    'response_type' => 'code'    
];


$url = 'https://anilist.co/api/v2/oauth/authorize?' . urldecode(http_build_query($query));

// ...
echo "<a href='$url'>Login with Anilist</a>";
```
:::

* `client_id` - The client ID of your application
* `redirect_uri` - The redirect URI of your application.

::: warning
The redirect URI you use in your authorization request must exactly match the redirect URI you used in your application settings.
:::

## User Approval

Once the user has been redirected, they will be shown a page asking them to approve your application. If the user is not logged in, they will be prompted to log in first.

Once the user has approved your application, they will be redirected back to the redirect URI you specified. Their redirect will contain a `code` query parameter representing the authorization code.
In the next step, you will exchange this code for an access token.

## Converting codes to tokens

Once you have an authorization code, you can exchange it for an access token. To do this, you will need to make a POST request to the `https://anilist.co/api/v2/oauth/token` endpoint.
The request body should include the authorization code that was issued by AniList along with the client ID and client secret of your application.

::: code-group
<<< @/guide/snippets/auth/authorization-code/javascript.js{js:line-numbers} [Javascript]
<<< @/guide/snippets/auth/authorization-code/php.php{php:line-numbers} [PHP]
:::

* `client_id` - The client ID of your application
* `client_secret` - The client secret of your application
* `redirect_uri` - The redirect URI of your application
* `code` - The authorization code received from the user

The response will contain an `access_token` field with a JWT token. With this token, you can [make authenticated requests](authenticated-requests) to the AniList API.