# Rate Limiting

Rate limiting is currently set to 90 requests per minute.

When you make a request to the AniList API you'll receive `X-RateLimit-Limit` and `X-RateLimit-Remaining` headers in the response.

```text
HTTP/1.1 200 OK
... other headers here ...
X-RateLimit-Limit: 90
X-RateLimit-Remaining: 59
```

If you go over the rate limit you'll receive a 1-minute timeout, any further requests in this timeout period will also include the `Retry-After` and `X-RateLimit-Reset` response headers.

`Retry-After` contains the number of seconds before you can make another accepted request.

`X-RateLimit-Reset` contains the Unix timestamp of when you can make another accepted request.

```text
HTTP/1.1 429 Too Many Requests
... other headers here ...
Retry-After: 30
X-RateLimit-Limit: 90
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1502035959
```

```text
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

## Rate Limit Raise

__Due to server limitations we are not currently offering rate limit raises.__

For applications running on a server \(such as a discord bot\) the current rate limit may be too restrictive to allow your application to function consistently. If this is the case for your application you may request a manual rate limit raise for a specific IP address.

Title: Rate Limit Raise {App Name}

Body

* Your AniList username.
* The IP address you wish to have the rate limit raised for.
* The rate limit \(max number of requests per minute\) you would prefer to have.
* A short description of your application.
* Any relevant links, such as the app's website, github or app store page.
* Some form of evidence that your application requires a rate limit raise to function properly.

Please bear in mind depending on the past and current standing of your account, and application reputation we may not always be able to provide you with your preferred rate limit raise.

