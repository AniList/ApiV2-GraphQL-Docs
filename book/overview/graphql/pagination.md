# Pagination

By default the Api will return a single result object, if you want to receive a page with an array of objects, you'll need to use the Page query. You can usually wrap your normal query in a Page query with minimal changes to receive a page.

For example your want a page of characters, the normal query type for this is `Character`, to receive the pagination version of this you would wrap your inner query with the Page query and change `Character` to `characters`, lowercase and plural.

The Page query also provides the `pageInfo` field which provides information about the current page and full result set.

Let's write another query, this time a search query with a page of media data.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
var query = `
query ($id: Int, $page: Int, $perPage: Int, $search: String) {
  Page (page: $page, perPage: $perPage) {
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
    }
  }
}
`;

var variables = {
    search: "Fate/Zero",
    page: 1,
    perPage: 3
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

This request will return the following JSON response:

```text
{
  "data": {
    "Page": {
      "pageInfo": {
        "total": 7,
        "currentPage": 1,
        "lastPage": 3,
        "hasNextPage": true,
        "perPage": 3
      },
      "media": [
        {
          "id": 10087,
          "title": {
            "romaji": "Fate\/zero"
          }
        },
        {
          "id": 11741,
          "title": {
            "romaji": "Fate\/zero 2nd Season"
          }
        },
        {
          "id": 13183,
          "title": {
            "romaji": "Fate\/zero Remix"
          }
        }
      ]
    }
  }
}
```
{% endtab %}

{% tab title="PHP" %}
```php
$query = '
query ($id: Int, $page: Int, $perPage: Int, $search: String) {
  Page (page: $page, perPage: $perPage) {
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
    }
  }
}
';

$variables = [
    "search" => "Fate/Zero",
    "page" => 1,
    "perPage" => 3
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

```text
{
  "data": {
    "Page": {
      "pageInfo": {
        "total": 7,
        "currentPage": 1,
        "lastPage": 3,
        "hasNextPage": true,
        "perPage": 3
      },
      "media": [
        {
          "id": 10087,
          "title": {
            "romaji": "Fate\/zero"
          }
        },
        {
          "id": 11741,
          "title": {
            "romaji": "Fate\/zero 2nd Season"
          }
        },
        {
          "id": 13183,
          "title": {
            "romaji": "Fate\/zero Remix"
          }
        }
      ]
    }
  }
}
```
{% endtab %}

{% tab title="Python" %}
```python
query = '''
query ($id: Int, $page: Int, $perPage: Int, $search: String) {
    Page (page: $page, perPage: $perPage) {
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
        }
    }
}
'''
variables = {
    'search': 'Fate/Zero',
    'page': 1,
    'perPage': 3
}
url = 'https://graphql.anilist.co'

response = requests.post(url, json={'query': query, 'variables': variables})
```

This request will return the following JSON response:

```text
{
  "data": {
    "Page": {
      "pageInfo": {
        "total": 7,
        "currentPage": 1,
        "lastPage": 3,
        "hasNextPage": true,
        "perPage": 3
      },
      "media": [
        {
          "id": 10087,
          "title": {
            "romaji": "Fate\/zero"
          }
        },
        {
          "id": 11741,
          "title": {
            "romaji": "Fate\/zero 2nd Season"
          }
        },
        {
          "id": 13183,
          "title": {
            "romaji": "Fate\/zero Remix"
          }
        }
      ]
    }
  }
}
```
{% endtab %}

{% tab title = "Rust" %}
```rust
// This example uses 3 crates serde_json, reqwest, tokio

use serde_json::json;
use reqwest::Client;

// Query to use in request
const QUERY: &str = "
query ($id: Int, $page: Int, $perPage: Int, $search: String) {
    Page (page: $page, perPage: $perPage) {
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
        }
    }
}
";

#[tokio::main]
async fn main() {
    let client = Client::new();
    // Define query and variables
    let json = json!(
        {
            "query": QUERY,
            "variables": {
                "search": "Fate/Zero",
                "page": 1,
                "perPage": 3
            }
        }
    );
    // Make HTTP post request 
    let resp = client.post("https://graphql.anilist.co/")
                .header("Content-Type", "application/json")
                .header("Accept", "application/json")
                .body(json.to_string())
                .send()
                .await
                .unwrap()
                .text()
                .await;
    // Get json output
    let result: serde_json::Value = serde_json::from_str(&resp.unwrap()).unwrap();
    println!("{:#?}", result);
}
```

This request will return the following JSON response:

```text
{
  "data": {
    "Page": {
      "pageInfo": {
        "total": 7,
        "currentPage": 1,
        "lastPage": 3,
        "hasNextPage": true,
        "perPage": 3
      },
      "media": [
        {
          "id": 10087,
          "title": {
            "romaji": "Fate\/zero"
          }
        },
        {
          "id": 11741,
          "title": {
            "romaji": "Fate\/zero 2nd Season"
          }
        },
        {
          "id": 13183,
          "title": {
            "romaji": "Fate\/zero Remix"
          }
        }
      ]
    }
  }
}
```

{% endtab %}
{% endtabs %}

{% hint style="info" %}
Note that we've left the $id variable from our previous example in this query but have not included it in our variables array. This is valid and the AniList GraphQL server will simply ignore any variables in the query that are not included in the variables object. This can allow you to make more complex and flexible queries without the need to modify the query string directly.
{% endhint %}

## Collections

For some data sets you might need the entire response at once and accessing them via pagination doesn't make much sense. For these edge cases we provide Collection queries.

Examples of these are the `GenreCollection` which provides a small array of all the possible genres a media can have, or the `MediaListCollection` query which provides a more useful pre-formatted alternative the paginated MediaList query.

