# Getting started with the AniList GraphQL API

### What is GraphQL?

GraphQL is a strongly typed Api query language that provides an alternative to REST. It allows clients to define the structure of the data required, and exactly the same structure of the data is returned from the server. This avoids both the problems of over and under-fetching data, while also allowing for a more powerful and flexible Api.

<div class='flash'>
Before reading these docs and using the Api its highly recommended you familiarize yourself with GraphQL by reading the <a href='http://graphql.org/learn/queries/' target='_blank'>official GraphQL documentation</a>
</div>

### Making a GraphQL API Request

<div class='flash' style='margin-bottom:15px;'>
All requests made to the AniList GraphQL API must be made as a POST request to 'https://graphql.anilist.co'.
</div>

When you make a request you'll need to include 2 payload objects, `query`, and `variables`.
<br>

* query: contains your query or mutation strings.
* variables: contains the variable values used within your query.

You can omit the variables object and instead hard-code your values inside your query, however, this is not recommended past the simplest of queries.


{% method -%}
#### Example Query Request

Let's write a simple query to get an anime by its id.

{% sample lang="js" -%}
```js
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
```
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


{% sample lang="php" -%}
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
```
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

{% sample lang="python" -%}
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
```
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
{% endmethod %}


