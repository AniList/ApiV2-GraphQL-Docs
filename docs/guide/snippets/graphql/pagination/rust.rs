// This example uses 3 crates serde_json, reqwest, tokio

use serde_json::json;
use reqwest::Client;

// Query to use in request
const QUERY: &str = "
query ($id: Int, $page: Int, $perPage: Int, $search: String) {
    Page (page: $page, perPage: $perPage) {
        pageInfo {
            currentPage
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