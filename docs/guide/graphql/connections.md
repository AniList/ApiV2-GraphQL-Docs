---
title: Connections
description: Connections in the AniList GraphQL API.
---

# Connections

Connection fields allow you to paginate through one-to-many or many-to-many relationships as well as access any intermediate data. All connections have 3 root fields: `edges`, `nodes`, and `pageInfo`.

## Edges

Edges are the intermediate data between the parent and child nodes. They are the relational link between the two, containing data pertaining to *how* the two are related along with a reference to the child node.

### Example

To help understand how these connections work, we'll use the relationship between `Media` and `Character` as an example.

An anime can have many characters, and a character can appear in many anime. These characters have a specific role in the anime (Main, Support, or Background) and they can have multiple voice actors in a single anime.

Neither the role nor the list ofvoice actors make sense to be stored in the `Character` object, so that connecting data lives on the `CharacterEdge` object.

```graphql
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

Nodes are the actual child data of the connection. You can access them with the `node` field on the edge object. 

::: tip
If you do not need to access any of the intermediate data, you can use the `nodes` field instead of `edges`. 
:::