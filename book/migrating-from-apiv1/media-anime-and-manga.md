# Media \(Anime & Manga\)

In Api v1 Anime & Manga were primarily treated as separate model types but sometimes also grouped under a "Series" type.

in Api v2 Anime & Manga are always included under the same type of "Media".

| Api v1 | Api v2 | Notes |
| :--- | :--- | :--- |
| series\_type | type | MediaType enum, \(ANIME, MANGA\) |
| type | format | MediaFormat enum \(TV, MOVIE etc\) |
| title\_romaji, title\_english, title\_japanese | title { romaji, english, native, userPreferred } | MediaTitle type. |
| airing\_status/publishing\_status | status | MediaStatus enum, \(FINISHED, RELEASING, NOT\_YET\_RELEASED, CANCELLED\) |
| total\_episodes, total\_chapters, total\_volumes | episodes, chapters, volumes |  |
| start\_date, end\_date, start\_date\_fuzzy,end\_date\_fuzzy | startDate, endDate | FuzzyDateType with nullable year, month, and day fields. |
| season | season | Season enum \(WINTER, SPRING etc\). |
| adult | isAdult |  |
| favourite | isFavourite |  |

## Requests

Here are some of the common media requests for Api v1 and how to replicate them in Api v2. We recommend you customize these queries by removing unneeded fields and adding extra arguments to get exact data response you require.

### Anime/Manga: /anime\|manga/{id}

```
query {
  Media (id: {id}, type: {ANIME|MANGA}) {
    id
    title {
      romaji
      english
      native
    }
    startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }
    coverImage {
      large
      medium
    }
    bannerImage
    format
    type
    status
    episodes
    chapters
    volumes
    season
    description
    averageScore
    meanScore
    genres
    synonyms
    nextAiringEpisode {
      airingAt
      timeUntilAiring
      episode
    }
  }
}
```

## Series search: /{series\_type}/search/{query}

```
query {
  Page (page: 1, perPage: {1-50}) {
    media (search: "{searchString}") {
      id
      ...
    }
    pageInfo {
      perPage
      currentPage
      lastPage
      total
      hastNextPage
    }
  }
}
```

## Anime Airing: /anime/{id}/airing

```
{
  Media (id: {id}, type: ANIME) {
    id
    airingSchedule {
      nodes {
        airingAt
        timeUntilAiring
        episode
      }
      pageInfo {
        perPage
        currentPage
        lastPage
        total
        hastNextPage
      }
    }
  }
}
```



