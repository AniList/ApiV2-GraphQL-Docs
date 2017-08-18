# Rate Limiting

Rate limiting is currently set to 60 requests per minute.

When you make a request to the AniList API you'll receive `X-RateLimit-Limit` and `X-RateLimit-Remaining` headers in the response.

```
HTTP/1.1 200 OK
... other headers here ...
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 59
```

If you go over the rate limit you'll receive a 1-minute timeout, any further requests in this timeout period will also include the `Retry-After` and `X-RateLimit-Reset` response headers. 

`Retry-After` contains the number of seconds before you can make another accepted request. 

`X-RateLimit-Reset` contains the Unix timestamp of when you can make another accepted request. 

```
HTTP/1.1 429 Too Many Requests
... other headers here ...
Retry-After: 30
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1502035959
```
```
{
  "data": null,
  "errors": [
    {
      "message": "Too Many Requests.",
      "status": 429
    }
  ]
}
```
