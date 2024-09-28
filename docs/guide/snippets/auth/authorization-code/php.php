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
        'Accept' => 'application/json'
    ]
]);

return json_decode($response->getBody())->access_token;