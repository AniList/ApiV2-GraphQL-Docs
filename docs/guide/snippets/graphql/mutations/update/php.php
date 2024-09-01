$query = '
mutation ($listEntryId: Int, $mediaId: Int, $status: MediaListStatus) {
  SaveMediaListEntry(id: $listEntryId, mediaId: $mediaId, status: $status) {
    id
    status
  }
}
';

$variables = [
    "listEntryId" => 4,
    "status" => "COMPLETED"
];

$http = new GuzzleHttp\Client;
$response = $http->post('https://graphql.anilist.co', [
    'json' => [
        'query' => $query,
        'variables' => $variables,
    ]
]);