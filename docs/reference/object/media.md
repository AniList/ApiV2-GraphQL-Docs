---
title: Media Reference
---

### Media
Anime or Manga
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The id of the media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>idMal</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The mal id of the media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="/reference/object/mediatitle">MediaTitle</a></td>
<td>
The official titles of the media in various languages
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="/reference/enum/mediatype">MediaType</a></td>
<td>
The type of the media; anime or manga
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>format</strong></td>
<td valign="top"><a href="/reference/enum/mediaformat">MediaFormat</a></td>
<td>
The format the media was released in
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="/reference/enum/mediastatus">MediaStatus</a></td>
<td>
The current releasing status of the media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">version</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Provide 2 to use new version 2 of sources enum
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Short description of the media's story and characters
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">asHtml</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
Return the string in pre-parsed html instead of markdown
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startDate</strong></td>
<td valign="top"><a href="/reference/object/fuzzydate">FuzzyDate</a></td>
<td>
The first official release date of the media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endDate</strong></td>
<td valign="top"><a href="/reference/object/fuzzydate">FuzzyDate</a></td>
<td>
The last official release date of the media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>season</strong></td>
<td valign="top"><a href="/reference/enum/mediaseason">MediaSeason</a></td>
<td>
The season the media was initially released in
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>seasonYear</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The season year the media was initially released in
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>seasonInt</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The year & season the media was initially released in
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>episodes</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The amount of episodes the anime has when complete
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>duration</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The general length of each anime episode in minutes
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>chapters</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The amount of chapters the manga has when complete
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>volumes</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The amount of volumes the manga has when complete
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>countryOfOrigin</strong></td>
<td valign="top"><a href="/reference/scalar/countrycode">CountryCode</a></td>
<td>
Where the media was created. (ISO 3166-1 alpha-2)
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isLicensed</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the media is officially licensed or a self-published doujin release
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>source</strong></td>
<td valign="top"><a href="/reference/enum/mediasource">MediaSource</a></td>
<td>
Source type the media was adapted from.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">version</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Provide 2 or 3 to use new version 2 or 3 of sources enum
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hashtag</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Official Twitter hashtags for the media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>trailer</strong></td>
<td valign="top"><a href="/reference/object/mediatrailer">MediaTrailer</a></td>
<td>
Media trailer or advertisement
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updatedAt</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
When the media's data was last updated
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>coverImage</strong></td>
<td valign="top"><a href="/reference/object/mediacoverimage">MediaCoverImage</a></td>
<td>
The cover images of the media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bannerImage</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The banner image of the media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>genres</strong></td>
<td valign="top">[<a href="/reference/scalar/string">String</a>]</td>
<td>
The genres of the media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>synonyms</strong></td>
<td valign="top">[<a href="/reference/scalar/string">String</a>]</td>
<td>
Alternative titles of the media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>averageScore</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
A weighted average score of all the user's scores of the media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>meanScore</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Mean score of all the user's scores of the media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>popularity</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The number of users with the media on their list
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isLocked</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
Locked media may not be added to lists our favorited. This may be due to the entry pending for deletion or other reasons.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>trending</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The amount of related activity in the past hour
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>favourites</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The amount of user's who have favourited the media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="/reference/object/mediatag">MediaTag</a>]</td>
<td>
List of tags that describes elements and themes of the media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relations</strong></td>
<td valign="top"><a href="/reference/object/mediaconnection">MediaConnection</a></td>
<td>
Other media in the same or connecting franchise
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>characters</strong></td>
<td valign="top"><a href="/reference/object/characterconnection">CharacterConnection</a></td>
<td>
The characters in the media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/charactersort">CharacterSort</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">role</td>
<td valign="top"><a href="/reference/enum/characterrole">CharacterRole</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">page</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The page
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">perPage</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The amount of entries per page, max 25
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>staff</strong></td>
<td valign="top"><a href="/reference/object/staffconnection">StaffConnection</a></td>
<td>
The staff who produced the media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/staffsort">StaffSort</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">page</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The page
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">perPage</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The amount of entries per page, max 25
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>studios</strong></td>
<td valign="top"><a href="/reference/object/studioconnection">StudioConnection</a></td>
<td>
The companies who produced the media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/studiosort">StudioSort</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">isMain</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isFavourite</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a>!</td>
<td>
If the media is marked as favourite by the current authenticated user
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isFavouriteBlocked</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a>!</td>
<td>
If the media is blocked from being added to favourites
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isAdult</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the media is intended only for 18+ adult audiences
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nextAiringEpisode</strong></td>
<td valign="top"><a href="/reference/object/airingschedule">AiringSchedule</a></td>
<td>
The media's next episode airing schedule
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>airingSchedule</strong></td>
<td valign="top"><a href="/reference/object/airingscheduleconnection">AiringScheduleConnection</a></td>
<td>
The media's entire airing schedule
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">notYetAired</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
Filter to episodes that have not yet aired
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">page</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The page
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">perPage</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The amount of entries per page, max 25
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>trends</strong></td>
<td valign="top"><a href="/reference/object/mediatrendconnection">MediaTrendConnection</a></td>
<td>
The media's daily trend stats
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/mediatrendsort">MediaTrendSort</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">releasing</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
Filter to stats recorded while the media was releasing
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">page</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The page
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">perPage</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The amount of entries per page, max 25
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>externalLinks</strong></td>
<td valign="top">[<a href="/reference/object/mediaexternallink">MediaExternalLink</a>]</td>
<td>
External links to another site related to the media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>streamingEpisodes</strong></td>
<td valign="top">[<a href="/reference/object/mediastreamingepisode">MediaStreamingEpisode</a>]</td>
<td>
Data and links to legal streaming episodes on external sites
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rankings</strong></td>
<td valign="top">[<a href="/reference/object/mediarank">MediaRank</a>]</td>
<td>
The ranking of the media in a particular time span and format compared to other media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mediaListEntry</strong></td>
<td valign="top"><a href="/reference/object/medialist">MediaList</a></td>
<td>
The authenticated user's media list entry for the media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reviews</strong></td>
<td valign="top"><a href="/reference/object/reviewconnection">ReviewConnection</a></td>
<td>
User reviews of the media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/reviewsort">ReviewSort</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">page</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The page
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">perPage</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The amount of entries per page, max 25
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recommendations</strong></td>
<td valign="top"><a href="/reference/object/recommendationconnection">RecommendationConnection</a></td>
<td>
User recommendations for similar media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/recommendationsort">RecommendationSort</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">page</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The page
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">perPage</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The amount of entries per page, max 25
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stats</strong></td>
<td valign="top"><a href="/reference/object/mediastats">MediaStats</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>siteUrl</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The url for the media page on the AniList website
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>autoCreateForumThread</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the media should have forum thread automatically created for it on airing episode release
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isRecommendationBlocked</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the media is blocked from being recommended to/from
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isReviewBlocked</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the media is blocked from being reviewed
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>modNotes</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Notes for site moderators
</td>
</tr>
</tbody>
</table>