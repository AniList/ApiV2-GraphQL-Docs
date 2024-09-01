---
title: Errors
description: Errors in the AniList GraphQL API.
---

# Errors

Errors are returned as part of the GraphQL response. You can find them in the `errors` field of the response object.

Errors can be returned in a variety of situations, such as when a query is invalid, when an argument is missing, when a field is not available, or if the server is unable to fulfill the request.

Always check the `errors` field of the response object to see if there are any errors. Errors can contain positional information about where the error occurred in the query, which can be useful for debugging.

::: warning
Even if you recieve a status code of `200`, you may still receive an error. This is because the GraphQL server may return an error even if the request was successful.
:::

### Example

```json
{
  "data": null,
  "errors": [
    {
      "message": "Cannot query field \"nonexistentField\" on type \"MediaList\".",
      "status": 400,
      "locations": [
        {
          "line": 4,
          "column": 5
        }
      ]
    }
  ]
}
```

## Validation Errors

When making a [mutation](mutations.md) that doesn't pass our validation rules, you'll recieve a similar error to the one above, but with an additional `validation` field. 

You may display these validation messages to the user if you wish.

```json
{
  "data": null,
  "errors": [
    {
      "message": "validation",
      "status": 400,
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "validation": {
        "id": [
          "The selected id is invalid."
        ],
        "score": [
          "The score may not be greater than 100."
        ]
      }
    }
  ]
}
```