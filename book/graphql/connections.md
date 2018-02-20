# Connections, Edges, & Nodes

## Connections

Connections fields allow you to paginate through one-to-many or many-to-many relation, as well as access any intermediate data.
All connections have 3 root fields `pageInfo`, `edges`, and `nodes`.

We'll be using the media (anime) character relation in these examples. 

## Edges

An anime can have many characters, and those characters have a specific role in the anime (Main, Support, or Background), the character can also have multiple voice actors for the particular anime. The role and voice actors do no belong to the character or the anime themselves, they belong to the connection between the two, and thus live on the `edges` field, example:

```
{
  Media {
    characters(page: 1) {
      edges { # Array of character edges
        role
        voiceActors { # Array of voice actors of this character for the anime
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
```

## Nodes

To access the characters themselves use the `node` field on the `edges` field:
```
{
  Media {
    characters(page: 1) {
      edges { # Array of character edges
        node { # Character node
          id
          name {
            first
            last
          }
        }
        role
        voiceActors { # Array of voice actors of this character for the anime
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
```

If you don't need any of the intermediate data via the edge you can call the nodes data directly via the `nodes` (plural) field on the connection: 
```
{
  Media {
    characters(page: 1) {
      nodes { # Array of character nodes
        id
        name {
          first
          last
        }
      }
    }
  }
}
```

## Page Info

The `pageInfo` field on the connection is the same as a `pageInfo` field on the root Page query. All connections also have the pagination arguments available such as `perPage` and `page`.

```
{
  Media {
    characters(page: 1, perPage: 10) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      edges {
        node { # The character data node
          id
          name {
            first
            last
          }
        }
        role
        voiceActors (language: JAPANESE) { # Array of voice actors of this character for the anime
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
```