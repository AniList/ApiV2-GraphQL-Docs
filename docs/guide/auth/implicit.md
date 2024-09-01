---
title: Implicit Grant
description: Authenticating with the AniList API using the Implicit Grant.
---

# Implicit Grant

Once you have [created an application](./#creating-an-application), you can use your client ID to request an access token.

The implicit grant is a simpler alternative to the authorization code grant. Instead of exchanging an authorization code for an access token,
you can simply recieve an access token directly. 

::: info
The access token is returned in the URL fragment of the redirect URI. This is to prevent the server from having to store the access token.

This flow should only be used for applications where the user's client will be making the requests.
:::

## Redirecting for authorization

Redirect your client to `https://anilist.co/api/v2/oauth/authorize` with the required parameters.

::: code-group
```html
<a href='https://anilist.co/api/v2/oauth/authorize?client_id={client_id}&response_type=token'>Login with AniList</a>
```
```php
$query = [
    'client_id' => '{client_id}',
    'response_type' => 'token'    
];


$url = 'https://anilist.co/api/v2/oauth/authorize?' . urldecode(http_build_query($query));

// ...
echo "<a href='$url'>Login with Anilist</a>";
```
:::

* `client_id` - The client ID of your application

## User Approval

Once the user has been redirected, they will be shown a page asking them to approve your application. If the user is not logged in, they will be prompted to log in first.

## Retrieving the access token

Once the user has approved your application, they will be redirected back to the redirect URI you specified in your application settings. Their redirect will include a JWT `access_token` parameter in the URL **fragment**. 

With this token, you can [make authenticated requests](authenticated-requests) to the AniList API.