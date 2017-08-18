# Implicit Grant

Once you've created your client, you can use your client ID to request an access token from AniList.

The implicit grant is similar to the authorization code grant; however, the token is returned to the client without exchanging an authorization code. This grant is most commonly used for JavaScript or mobile applications where the client credentials can't be securely stored.

{% method -%}
### Redirecting For Authorization

First, your client should make a redirect request to `https://anilist.co/api/v2/oauth/authorize` with the required parameters, like so:

{% sample lang="js" -%}
```html
<a href='https://anilist.co/api/v2/oauth/authorize?client_id={client_id}&response_type=token'>Login with AniList</a>
```

{% sample lang="php" -%}
```php
$query = [
    'client_id' => '{client_id}',
    'response_type' => 'token'    
];


$url = 'https://anilist.co/api/v2/oauth/authorize?' . urldecode(http_build_query($query));

// ...
echo "<a href='$url'>Login with Anilist</a>";
```

{% endmethod %}

### User Approval
Once the user has been redirected they will be asked to approve your client's permissions. 
If the user is not logged in they will first be taken to the standard login page and then automatically redirected to the client approval page.

### Retrieving the Access Token
Once the user has approved your client they will be redirected to your redirect URI, included in URL parameters will be a `access_token` parameter that includes the JWT access token used to make requests on their behalf. 

{% method -%}
### Making Authenticated Requests

To make authenticated requests you'll need to add the `Authorization` header, with the value of "Bearer " plus the user's access token.


{% sample lang="js" -%}
```js
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

{% sample lang="php" -%}
```php
$http = new GuzzleHttp\Client;

$response = $http->request('POST', 'https://graphql.anilist.co', [
    'headers' => [
        'Accept' => 'application/json',
        'Authorization' => 'Bearer ' . $accessToken,
    ],
]);
```

{% endmethod %}

