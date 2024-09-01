# Media

The `Media` family of queries will most likely be your most used ones. In turn, they are also some of the most flexible and powerful queries we have.

`Media` encompasses both anime and manga entries, so if you are looking for a specific type of media, you will need to use the `type` argument.
IDs are not unique across either type of media. If ID `1` is an anime entry, there will never be a manga entry with the same ID.

::: tip
The ID of an anime or manga entry can be found in the URL of the AniList page. For example, in the URL `https://anilist.co/anime/1/Cowboy-Bebop`, the ID is `1`.
:::

::: warning
If you are filtering by `type` (`ANIME` for example) and request an ID that is actually used for the other type (`MANGA` in this case), you will receive a `404` response code.
:::

## Get media by ID

This is one of the most barebones queries you can make. It will directly return the media with the specified ID. If the ID does not match up with a media, you will receive a `404` response code.

[Apollo Studio](https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fgraphql.anilist.co&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABABQAkAlmOkQJKoCURwAOni0iygLIJgUBDUlRqUwTVu04ouVNhy5cUFFABsEzedMUo8EOAIBWFLTq7IA5qooBnABamZTpAOUA3BI64BfR76neIN5AA)

```graphql
query ($id: Int) {
	Media (id: $id) {
		id
		title {
			romaji
			english
			native
		}
	}
}
```

## Search anime by title

This query will search for anime entries based on a search query. In this case, the `search` argument is a `String!` type, which means it is required and the query will fail if it is not provided.

Notice how it is now wrapped in a `Page` object. This allows it to return multiple results, and also allows you to paginate through the results. For more information on pagination, check out the [pagination](/guide/graphql/pagination) guide.

We've also hardcoded the `type` argument to `ANIME` to only return anime entries. This could be a variable as well, but this shows how you can mix and match as needed.

::: note
"Getting an anime by name" is not something you can do. Titles are not unique, so there is no 1:1 relationship between a title and a media entry.
The best you can do is search for the title and hope the first result is the correct one.
:::

[Apollo Studio](https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fgraphql.anilist.co&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABABQAkAzggIZ5QAW6RAyingJZIDmAhAJRFgAHTxCkRIgAVqXBIJFiJExGHbUSVWgyaUadegBoiKAgAcETAIIA5AJIBZAKIDho8UonswC9x5TsUABs5V0UPJTwIOGoAK3YfcKVkLkD2CnoExKIkan8ANwRMjwBfIqJStwkKsWqkEGKgA)

```graphql
query ($search: String!) {
  Page {
    media(search: $search, type: ANIME) {
      id
      title {
        romaji
        english
        native
      }
    }
  }
}
```

## Get the relations of a media

In many cases, you might want to know all the related media of an entry: prequels, sequels, side stories, and more. We can do this with the `relations` field.

Since `relations` is a connection, we will need to use the `edges` field to know how the related media are connected. You can read more about how connections work [here](/guide/graphql/connections). 

[Apollo Studio](https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fgraphql.anilist.co&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABABQAkAlmOkQJKoCEAlEcADp5tJFECyCYCgENSVGpTAt2nbjyJUOXOURQUUAGwStFs5XghwhAKwo7lAXzNy8CdUNUQkAZ20zlPAQHMEL6Uvc8NnYOSAAqBAAOCFYBSBBgWn66AfJgMSmqGonpKUT6hiY57pZuKSX%2BFunlstXmIOZAA)

```graphql
query ($id: Int!) {
  Media (id: $id) {
    id
    title {
      romaji
    }
    relations {
      edges {
        relationType
        node {
          id
          title {
            romaji
          }
        }
      }
    }
  }
}
```

## Get all light novels from 2020

It's time to get a bit more advanced with our queries. In this example, we will be getting all the light novels that started publishing in 2020.

Light novels are found under the `MANGA` type with the `NOVEL` format. We can use the `format` argument to filter by the format of the media.

To get a range of dates, we will use the `startDate_greater` and `startDate_lesser` arguments. These arguments are of the `FuzzyDateInt` type, which means they are integers that represent a date.

Also notice how instead of making the `page` argument required, we are setting it to `1` by default.

::: info
`FuzzyDateInt` is in the format of `YYYYMMDD`.
:::

[Apollo Studio](https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fgraphql.anilist.co&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABABQAkADgIYDmC6RAkqkQLxECMAlEcADp4%2BSIkQAKtBCWp0GlCT36DhIotITMAZhF4ChKlQAsqAZwByCAB4pxdXcpEBfO-sRgAllRLP9RFAQr0RACyAIKmAOIh3vpaeHBUKAymAPIAagCiADLRKsYoVHgoACIJCAD6NHgIpXgMAEwADI0NLQ05InkFxaVlADYIxsb49U0crW1K%2BgrtRG5gMyhuKP06kz4ieBDxAFZuM05rjt4HQg4gDkA)

```graphql
query ($page: Int = 1) {
  Page(page: $page) {
    pageInfo {
      hasNextPage
    }
    media(
      type: MANGA
      format: NOVEL
      startDate_greater: 20200000
      startDate_lesser: 20210000
    ) {
      id
      title {
        romaji
      }
    }
  }
}
```

## Advanced browse page

This is a trimmed down version of the query made by [AniList's browse page](https://anilist.co/search/anime) to show just how powerful the API can be.

[Apollo Studio](https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fgraphql.anilist.co&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABABQA6eZSRRAJAA4CGA5gukQJKpEC8RAjBSo1aASzDsuKIdTooC9NkQCyCMKMYAVBQhkjRAZwCCYGABsU7AEIQIZhI2p8AZozMHdlWbQ%2BM8UAAt2AGUUPFEkZj06Zwg8OEZLIgBtVXVGADE4hJQAXWifFESYA3Y0jVDigwKoCBhUQgB5Z0bw5gj2AGE6hoJusE9hOgM6-yVyxmDRqEHvXxGkMrUKhwWC%2BYgkAE0HPElUAoJdkLCIqK8RTYAZQySbOwckQ92rhAMPPaIMmAAvH4IACKJBBSZ5%2BADieAcKHw7G%2Bf0BwNBFzoCHohggA1e71hnAOKNoaIxA0h0NxyKGtFMeESomubw%2B%2B2kBOptM2pOBnwp3kCjHoMLw2MZeOZlN5-PwHIFTIKADc7PAEELyfjKfKzIqpSrRd4zKIZkgPGArAR2MkpPkCYYbgajdZbPZHAVWEgoaUUqFwpFLZSEAAPKAagZgcHIN1mz1nH3eIrMd3JSPegr%2BwMwYOaFjxxPMaMiOARURweAZ5gAJUcAGsZQSRngkqllpM4nleCkAAqNNsAVSuRlLHE0WwA%2BgCAKLBToAGiIE8apdHI-HnWjAEoiMBom2WAgSExWOwGNvp4o8Fv90QAEwABjXG5RND3IKQsXX0RoNACjAMADl-Sgz7M75EAAvm%2BRCIOk5D3u%2B4gHuIYE0PIigHkhgFAUQGyLMMqybAhRCxPEiRDh0MTZIkeEGEUKAlAelFVHhtT1GEBDNK0ojtFhtCMb0rFtBEFHTEoPiCRRuyBLRYkBHh1y3AeMmUaJX6bDsfgSUp2y7BRRR1kCMJDnqFZCUcfhaX4KC6Qg%2BkMritDGYK1mUNBNB0TpwJDswUKcgedlao5QxAUSIwDAYVk4p8hLokFSoOXhgWYm87medKqKRfFvl4ayKB0kgoXClSMA0ll9JhRlBVsjlHlkuFmXZelTlEOKAohfYYUHo1%2BDKn5shAe1eAhZVXl0L1dX%2Be%2B6qKs1DkHuNiCdXhM0JQNyW0AtI3de%2Beq2moJocGAxGcZtyBGiaeHWvqR1qHBBg2hdYB4S6UL7QeD1vPdYaWUgEAoE9qIBkGaihq6r31bGP20LG1QgywQ6fd9JGEn9aZqCWkOjTQ%2BZIIWxYsOWSBVnQGNY3AJa4xWAl1rRzancYpgWFdJjmDqQG3qdd0g6IKD2K%2B9U0HgEAJAAVqIeGgdBotDOLSDASAwFAA)

```graphql
query (
  $page: Int = 1
  $id: Int
  $type: MediaType
  $isAdult: Boolean = false
  $search: String
  $format: [MediaFormat]
  $status: MediaStatus
  $countryOfOrigin: CountryCode
  $source: MediaSource
  $season: MediaSeason
  $seasonYear: Int
  $year: String
  $onList: Boolean
  $yearLesser: FuzzyDateInt
  $yearGreater: FuzzyDateInt
  $episodeLesser: Int
  $episodeGreater: Int
  $durationLesser: Int
  $durationGreater: Int
  $chapterLesser: Int
  $chapterGreater: Int
  $volumeLesser: Int
  $volumeGreater: Int
  $licensedBy: [Int]
  $isLicensed: Boolean
  $genres: [String]
  $excludedGenres: [String]
  $tags: [String]
  $excludedTags: [String]
  $minimumTagRank: Int
  $sort: [MediaSort] = [POPULARITY_DESC, SCORE_DESC]
) {
  Page(page: $page, perPage: 20) {
    pageInfo {
      hasNextPage
    }
    media(
      id: $id
      type: $type
      season: $season
      format_in: $format
      status: $status
      countryOfOrigin: $countryOfOrigin
      source: $source
      search: $search
      onList: $onList
      seasonYear: $seasonYear
      startDate_like: $year
      startDate_lesser: $yearLesser
      startDate_greater: $yearGreater
      episodes_lesser: $episodeLesser
      episodes_greater: $episodeGreater
      duration_lesser: $durationLesser
      duration_greater: $durationGreater
      chapters_lesser: $chapterLesser
      chapters_greater: $chapterGreater
      volumes_lesser: $volumeLesser
      volumes_greater: $volumeGreater
      licensedById_in: $licensedBy
      isLicensed: $isLicensed
      genre_in: $genres
      genre_not_in: $excludedGenres
      tag_in: $tags
      tag_not_in: $excludedTags
      minimumTagRank: $minimumTagRank
      sort: $sort
      isAdult: $isAdult
    ) {
      id
      title {
        romaji
      }
    }
  }
}
```