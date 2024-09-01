const fetch = require('node-fetch');

var query = `
{
  Viewer {
    id
    name
  }
}
`;
const accessToken = getAccessToken();

const url = 'https://graphql.anilist.co',
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

function handleResponse(response) {
	console.log(response);
}