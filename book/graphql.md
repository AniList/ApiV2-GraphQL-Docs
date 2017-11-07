# GraphQL

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
var query = `
query ($id: Int) {
  Media (id: $id, type: ANIME) {
    id
    title {
      romaji
      english
      native
    }
  }
}
`;

var variables = {
    id: 15125
};

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
$query = '
query ($id: Int) {
  Media (id: $id, type: ANIME) {
    id
    title {
      romaji
      english
      native
    }
  }
}
';

$variables = [
    "id" => 15125
];

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
query = '''
query ($id: Int) {
  Media (id: $id, type: ANIME) {
    id
    title {
      romaji
      english
      native
    }
  }
}
'''

variables = {
    'id': 15125
}
url = 'https://graphql.anilist.co'

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

{% method -%}
Let's write another query, this time a search request with a page of data and more relation fields such as main characters and their voice actors for the media.

{% sample lang="js" -%}
```js
var query = `
query ($id: Int, $page: Int, $search: String) {
  Page (page: $page) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (id: $id, search: $search) {
      id
      title {
        romaji
      }
      genres
      characters (role: MAIN) {
        edges {
          node {
            id
            name {
              first
              last
            }
          }
          role
          voiceActors {
            id
            name {
              first
              last
            }
          }
        }
      }
    }
  }
}
`;

var variables = {
    search: "Fate/Zero",
    page: 1
};

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
    
fetch(url, options).then(handleResponse)
                   .then(handleData)
                   .catch(handleError);
```
This request will return [this JSON response](https://hastebin.com/enisafovoq.json). 

{% sample lang="php" -%}
```php
$query = '
query ($id: Int, $page: Int, $search: String) {
  Page (page: $page) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (id: $id, search: $search) {
      id
      title {
        romaji
      }
      genres
      characters (role: MAIN) {
        edges {
          node {
            id
            name {
              first
              last
            }
          }
          role
          voiceActors {
            id
            name {
              first
              last
            }
          }
        }
      }
    }
  }
}
';

$variables = [
    "search" => "Fate/Zero",
    "page" => 1
];

$http = new GuzzleHttp\Client;
$response = $http->post('https://graphql.anilist.co', [
    'json' => [
        'query' => $query,
        'variables' => $variables,
    ]
]);

```
This request will return [this JSON response](https://hastebin.com/enisafovoq.json). 


{% sample lang="python" -%}

```python
query = '''
query ($id: Int, $page: Int, $search: String) {
    Page (page: $page) {
        pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
            perPage
        }
        media (id: $id, search: $search) {
            id
            title {
                romaji
            }
            genres
            characters (role: MAIN) {
                edges {
                    node {
                        id
                        name {
                            first
                            last
                        }
                    }
                    role
                    voiceActors {
                        id
                        name {
                            first
                            last
                        }
                    }
                }
            }
        }
    }
}
'''
variables = {
    'search': 'Fate/Zero',
    'page': 1
}
url = 'https://graphql.anilist.co'

response = requests.post(url, json={'query': query, 'variables': variables})

```
This request will return [this JSON response](https://hastebin.com/enisafovoq.json). 

{% endmethod %}

<div class='flash'>
Note that we've left the $id variable in the query but have not included it in our variables array. <br>
This is valid and the AniList GraphQL server will simply ignore any variables in the query that are not included in the variables object. <br>
This can allow you to make more complex and flexible queries without the need to modify the query string directly. 
</div>
<br>


### What's Next

Now you have a basic idea of how GraphQL requests work, you should test writing your own queries using our [interactive GraphiQL editor](https://anilist.co/graphiql). All the available queries, fields and types are visible on the right side of the page. 

You can also view our [API reference documentation](https://anilist.github.io/ApiV2-GraphQL-Docs/) for the same information in a nicer view.

If you plan on adding user authentication to your client you should also read the [OAuth](/oauth.md) and [Mutation](/graphql/mutations.md) pages.
<br><br><br><br>
