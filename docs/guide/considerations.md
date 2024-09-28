---
title: Considerations
description: Things to keep in mind while using the AniList API.
---

# Considerations

## API Stability

While we strive to provide the best possible API, we cannot guarantee that the API will always be available. In cases of severe outages, we may lower the rate limits from those listed [here](./rate-limiting) or in extreme cases, temporarily suspend access to the API.

When these actions are taken, it will be announced in the AniList Discord server. More accessible way to communicate these changes are in consideration.

If the API is unavailable, you will receive a `403` error code with a GraphQL error message.

::: details Example API unavailable error
```json
{
  "errors": [
    {
      "message": "The AniList API has been temporarily disabled due to severe stability issues. Please check the official AniList Discord for more information.",
      "status": 403,
      "locations": [
        {
          "line": 1,
          "column": 1
        }
      ]
    }
  ],
  "data": null
}
```
:::

## Manual Blocking

In very rare cases, AniList may block your IP address from accessing the API. This is usually due to a large number of requests being made from a single IP address. 

Excessive requests will never reach our origin servers, but we will manually block your IP address with a custom message letting you know that you have been blocked and why.

## Adult Content

Many app stores prohibit 18+ content. If you intend to distribute your app on platforms like the Apple App Store, Google Play, or the Microsoft Store, please be aware that AniList entries may contain adult content.

Where possible, we allow adult content to be filtered. However, this is not always possible, and we cannot guarantee that our filtering will always be accurate or that our definition of "adult" content meets the same standards of other services.

::: warning
"Ecchi" shows are not considered "adult" content on AniList. This has been known to cause issues with the Apple app store and Google Adsense in the past.   
:::

We also cannot ensure the data provided by our users will always be non-adult (primarily activity and forum data).

We recommend you do additional checks and limit the data shown on your client to comply with the standards of any services you may be using.