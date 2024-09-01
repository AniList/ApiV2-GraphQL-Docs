// This example uses the following crates:
// serde_json = "1.0"
// reqwest = "0.11.8"
// tokio = { version = "1.0", features = ["macros", "rt-multi-thread"] }

use serde_json::json;
use reqwest::Client;

// Query to use in request
const QUERY: &str = "
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
";

#[tokio::main]
async fn main() {
    let client = Client::new();
    // Define query and variables
    let json = json!({"query": QUERY, "variables": {"id": 15125}});
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
    // Get json
    let result: serde_json::Value = serde_json::from_str(&resp.unwrap()).unwrap();
    println!("{:#}", result);
}