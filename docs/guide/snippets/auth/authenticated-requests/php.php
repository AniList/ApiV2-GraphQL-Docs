
$query = '
{
  Viewer {
    id
		name
  }
}
';
$accessToken = getAccessToken();

$http = new GuzzleHttp\Client;
$response = $http->request('POST', 'https://graphql.anilist.co', [
    'headers' => [
        'Authorization' => 'Bearer ' . $accessToken,
        'Accept' => 'application/json',
        'Content-Type' => 'application/json',
    ],
    'json' => [
        'query' => $query,
    ]
]);

$result = json_decode($response->getBody(), true);