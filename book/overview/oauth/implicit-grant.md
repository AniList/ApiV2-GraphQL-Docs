# Implicit Grant

Once you've created your client, you can use your client ID to request an access token from AniList.

The implicit grant is similar to the authorization code grant; however, the token is returned to the client without exchanging an authorization code. This grant is most commonly used for JavaScript or mobile applications where the client credentials can't be securely stored.

## Redirecting For Authorization

First, your client should make a redirect request to `https://anilist.co/api/v2/oauth/authorize` with the required parameters, like so:

{% tabs %}
{% tab title="HTML" %}
```markup
<a href='https://anilist.co/api/v2/oauth/authorize?client_id={client_id}&response_type=token'>Login with AniList</a>
```
{% endtab %}

{% tab title="PHP" %}
```php
$query = [
    'client_id' => '{client_id}',
    'response_type' => 'token'    
];


$url = 'https://anilist.co/api/v2/oauth/authorize?' . urldecode(http_build_query($query));

// ...
echo "<a href='$url'>Login with Anilist</a>";
```
{% endtab %}
{% endtabs %}

## User Approval

Once the user has been redirected they will be asked to approve your client's permissions. If the user is not logged in they will first be taken to the standard login page and then automatically redirected to the client approval page.

## Retrieving the Access Token

Once the user has approved your client they will be redirected to your redirect URI, included in the URL **fragment** will be an `access_token` parameter that includes the JWT access token used to make requests on their behalf.

## Making Authenticated Requests

To make authenticated requests you'll need to add the `Authorization` header, with the value of "Bearer " plus the user's access token.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
var url = 'https://graphql.anilist.co',
    options = {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query
        })
    };

fetch(url, options).then(handleResponse, handleError);

function handleResponse (response) {
    console.log(response);
}
```
{% endtab %}

{% tab title="PHP" %}
```php
$http = new GuzzleHttp\Client;

$response = $http->request('POST', 'https://graphql.anilist.co', [
    'headers' => [
        'Authorization' => 'Bearer ' . $accessToken,
        'Accept' => 'application/json',
        'Content-Type' => 'application/json',
    ],
]);
```
{% endtab %}

{% tab title="C#" %}
```cs
using Flurl;
using Flurl.Http;

public static async Task<string> GetUserId()
{
    var result = await "https://graphql.anilist.co"
        .WithOAuthBearerToken({YOUR BEARER TOKEN HERE})
        .PostJsonAsync(new
        {
            query = "{YOUR QUERY STRING HERE}"
        })
        .ReceiveString(); // For demo purposes, I will use ReceiveString method. But you should use ReceiveJson method to access the data

    return result;
}
```
{% endtab %}
{% endtabs %}

