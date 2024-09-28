const fetch = require('node-fetch');

fetch("https://anilist.co/api/v2/oauth/token", {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
		"Accept": "application/json"
	},
	body: JSON.stringify({
		"grant_type": "authorization_code",
		"client_id": "{client_id}",
		"client_secret": "{client_secret}",
		"redirect_uri": "{redirect_uri}", // http://example.com/callback
		"code": "{code}", // The Authorization Code received previously
	})
}).then(handleResponse);

function handleResponse(response) {
	if (response.statusCode == 200) {
		console.log(response.body.access_token);
	}
}