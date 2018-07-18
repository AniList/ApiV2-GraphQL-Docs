# Getting Started

## What is GraphQL?

GraphQL is a strongly typed Api query language that provides an alternative to REST. It allows clients to define the structure of the data required, and exactly the same structure of the data is returned from the server. This avoids both the problems of over and under-fetching data, while also allowing for a more powerful and flexible Api.

 Before reading these docs and using the Api its highly recommended you familiarize yourself with GraphQL by reading the [official GraphQL documentation](http://graphql.org/learn/queries/)

## Making a GraphQL API Request

{% hint style="info" %}
#### All requests made to the AniList GraphQL API must be made as a POST request to 'https://graphql.anilist.co'.
{% endhint %}

When you make a request you'll need to include 2 payload objects, `query`, and `variables`. 

* query: contains your query or mutation strings.
* variables: contains the variable values used within your query.

You can omit the variables object and instead hard-code your values inside your query, however, this is not recommended past the simplest of queries.

### Example Query Request

Let's write a simple query to get an anime by its id.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
// Here we define our query as a multi-line string
// Storing it in a separate .graphql/.gql file is also possible
var query = `
query ($id: Int) { # Define which variables will be used in the query (id)
  Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
    id
    title {
      romaji
      english
      native
    }
  }
}
`;

// Define our query variables and values that will be used in the query request
var variables = {
    id: 15125
};

// Define the config we'll need for our Api request
var url = 'https://graphql.anilist.co',
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    };

// Make the HTTP Api request
fetch(url, options).then(handleResponse)
                   .then(handleData)
                   .catch(handleError);

function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

function handleData(data) {
    console.log(data);
}

function handleError(error) {
    alert('Error, check console');
    console.error(error);
}
```

This request will return the following JSON response:

```text
"data": {
    "Media": {
        "id": 15125,
        "title": {
            "romaji": "Teekyuu",
            "english": null,
            "native": "てーきゅう"
        }
    }
  }
}
```
{% endtab %}

{% tab title="PHP" %}
```php
// Here we define our query as a multi-line string
$query = '
query ($id: Int) { # Define which variables will be used in the query (id)
  Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
    id
    title {
      romaji
      english
      native
    }
  }
}
';

// Define our query variables and values that will be used in the query request
$variables = [
    "id" => 15125
];

// Make the HTTP Api request
$http = new GuzzleHttp\Client;
$response = $http->post('https://graphql.anilist.co', [
    'json' => [
        'query' => $query,
        'variables' => $variables,
    ]
]);
```

This request will return the following JSON response:

```text
"data": {
    "Media": {
        "id": 15125,
        "title": {
            "romaji": "Teekyuu",
            "english": null,
            "native": "てーきゅう"
        }
    }
  }
}
```
{% endtab %}

{% tab title="Python" %}
```python
# Here we define our query as a multi-line string
query = '''
query ($id: Int) { # Define which variables will be used in the query (id)
  Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
    id
    title {
      romaji
      english
      native
    }
  }
}
'''

# Define our query variables and values that will be used in the query request
variables = {
    'id': 15125
}

url = 'https://graphql.anilist.co'

# Make the HTTP Api request
response = requests.post(url, json={'query': query, 'variables': variables})
```

This request will return the following JSON response:

```text
"data": {
    "Media": {
        "id": 15125,
        "title": {
            "romaji": "Teekyuu",
            "english": null,
            "native": "てーきゅう"
        }
    }
  }
}
```
{% endtab %}
{% endtabs %}

