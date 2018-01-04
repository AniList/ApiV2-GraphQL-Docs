# GraphQL Errors

When you make an invalid request you'll receive a response with an `errors` object.

```
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

### Validation Errors

When you make a **mutation** request that doesn't pass our validation checks, you'll receive a similar response to above but with an additional `validation` object within the errors object.

You may display these validation error messages directly to the user if you wish.

```
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



