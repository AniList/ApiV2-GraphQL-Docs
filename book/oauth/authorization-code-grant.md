# Authorization Code Grant

Once you've created your client, you can use your client ID and secret to request an authorization code and access token from AniList.


{% method -%}
### Redirecting For Authorization

First, your client should make a redirect request to `https://anilist.co/api/v2/oauth/authorize` with the required parameters, like so:

{% sample lang="js" -%}
```html
<a href='https://anilist.co/api/v2/oauth/authorize?client_id={client_id}&redirect_uri={redirect_uri}&response_type=code'>Login with AniList</a>
```

{% sample lang="php" -%}
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

{% endmethod %}

### User Approval
Once the user has been redirected they will be asked to approve your client's permissions. 
If the user is not logged in they will first be taken to the standard login page and then automatically redirected to the client approval page.

Once the user has approved your client they will be redirected to your redirect URI, included in URL parameters will be a `code` parameter that includes the Authorization Code. 
You'll exchange this code for an access token in the next step.

{% method -%}
### Converting Authorization Codes To Access Tokens
Your client should make a POST request to `https://anilist.co/api/v2/oauth/token`. 
The request should include the authorization code that was issued by AniList, along with other required information about your client.

{% sample lang="js" -%}
```js
var request = require('request');

var options = {
  uri: 'https://anilist.co/api/v2/oauth/token',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  json: {
    'grant_type': 'authorization_code',
    'client_id': '{client_id}',
    'client_secret': '{client_secret}',
    'redirect_uri': '{redirect_uri}', // http://example.com/callback
    'code': '{code}', // The Authorization Code received previously
  }
};

request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body.access_token);
  }
});
```
This will return a JSON response containing the JWT `access_token`.


{% sample lang="php" -%}
```php
$http = new GuzzleHttp\Client;

$response = $http->post('https://anilist.co/api/v2/oauth/token', [
    'form_params' => [
        'grant_type' => 'authorization_code',
        'client_id' => '{client_id}',
        'client_secret' => '{client_secret}',
        'redirect_uri' => '{redirect_uri}', // http://example.com/callback
        'code' => '{code}', // The Authorization code received previously
    ],
    'headers' => [
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    ]
]);

return json_decode($response->getBody())->access_token;
```

This will return a JSON response containing the JWT `access_token`.

{% endmethod %}

{% method -%}

### Making Authenticated Requests

To make authenticated requests you'll need to add the `Authorization` header, with the value of "Bearer " plus the user's access token.


{% sample lang="js" -%}
```js
var options = {
  uri: 'https://graphql.anilist.co',
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + accessToken,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  json: {
    'query': query,
  }
};

request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body.data);
  }
});
```

{% sample lang="php" -%}
```php
$response = $http->request('POST', 'https://graphql.anilist.co', [
    'headers' => [
        'Authorization' => 'Bearer ' . $accessToken,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    ],
]);
```
{% endmethod %}



