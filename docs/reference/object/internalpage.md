---
title: InternalPage Reference
---

### InternalPage
Page of data (Used for internal use only)
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
<td colspan="2" valign="top"><strong>mediaSubmissions</strong></td>
<td valign="top">[<a href="/reference/object/mediasubmission">MediaSubmission</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">submissionId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">assigneeId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status</td>
<td valign="top"><a href="/reference/enum/submissionstatus">SubmissionStatus</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="/reference/enum/mediatype">MediaType</a></td>
<td>
Filter by the media's type
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/submissionsort">SubmissionSort</a>]</td>
<td>
The order the results will be returned in
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>characterSubmissions</strong></td>
<td valign="top">[<a href="/reference/object/charactersubmission">CharacterSubmission</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">characterId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the submitter of the submission
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">assigneeId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status</td>
<td valign="top"><a href="/reference/enum/submissionstatus">SubmissionStatus</a></td>
<td>
Filter by the status of the submission
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/submissionsort">SubmissionSort</a>]</td>
<td>
The order the results will be returned in
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>staffSubmissions</strong></td>
<td valign="top">[<a href="/reference/object/staffsubmission">StaffSubmission</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">staffId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the submitter of the submission
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">assigneeId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status</td>
<td valign="top"><a href="/reference/enum/submissionstatus">SubmissionStatus</a></td>
<td>
Filter by the status of the submission
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/submissionsort">SubmissionSort</a>]</td>
<td>
The order the results will be returned in
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>revisionHistory</strong></td>
<td valign="top">[<a href="/reference/object/revisionhistory">RevisionHistory</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the user id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the media id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">characterId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the character id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">staffId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the staff id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">studioId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the studio id
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reports</strong></td>
<td valign="top">[<a href="/reference/object/report">Report</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">reporterId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">reportedId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>modActions</strong></td>
<td valign="top">[<a href="/reference/object/modaction">ModAction</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">modId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userBlockSearch</strong></td>
<td valign="top">[<a href="/reference/object/user">User</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">search</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Filter by search query
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="/reference/object/pageinfo">PageInfo</a></td>
<td>
The pagination information
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>users</strong></td>
<td valign="top">[<a href="/reference/object/user">User</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the user id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">name</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Filter by the name of the user
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">isModerator</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
Filter to moderators only if true
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">search</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Filter by search query
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/usersort">UserSort</a>]</td>
<td>
The order the results will be returned in
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top">[<a href="/reference/object/media">Media</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the media id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">idMal</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the media's MyAnimeList id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">startDate</td>
<td valign="top"><a href="/reference/scalar/fuzzydateint">FuzzyDateInt</a></td>
<td>
Filter by the start date of the media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">endDate</td>
<td valign="top"><a href="/reference/scalar/fuzzydateint">FuzzyDateInt</a></td>
<td>
Filter by the end date of the media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">season</td>
<td valign="top"><a href="/reference/enum/mediaseason">MediaSeason</a></td>
<td>
Filter by the season the media was released in
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">seasonYear</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The year of the season (Winter 2017 would also include December 2016 releases). Requires season argument
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="/reference/enum/mediatype">MediaType</a></td>
<td>
Filter by the media's type
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="/reference/enum/mediaformat">MediaFormat</a></td>
<td>
Filter by the media's format
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status</td>
<td valign="top"><a href="/reference/enum/mediastatus">MediaStatus</a></td>
<td>
Filter by the media's current release status
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">episodes</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by amount of episodes the media has
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">duration</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the media's episode length
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">chapters</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the media's chapter count
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">volumes</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the media's volume count
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">isAdult</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
Filter by if the media's intended for 18+ adult audiences
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">genre</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Filter by the media's genres
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">tag</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Filter by the media's tags
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">minimumTagRank</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Only apply the tags filter argument to tags above this rank. Default: 18
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">tagCategory</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Filter by the media's tags with in a tag category
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">onList</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
Filter by the media on the authenticated user's lists
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">licensedBy</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Filter media by sites name with a online streaming or reading license
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">licensedById</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter media by sites id with a online streaming or reading license
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">averageScore</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the media's average score
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">popularity</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the number of users with this media on their list
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="/reference/enum/mediasource">MediaSource</a></td>
<td>
Filter by the source type of the media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">countryOfOrigin</td>
<td valign="top"><a href="/reference/scalar/countrycode">CountryCode</a></td>
<td>
Filter by the media's country of origin
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">isLicensed</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the media is officially licensed or a self-published doujin release
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">search</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Filter by search query
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id_not</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the media id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by the media id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id_not_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by the media id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">idMal_not</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the media's MyAnimeList id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">idMal_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by the media's MyAnimeList id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">idMal_not_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by the media's MyAnimeList id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">startDate_greater</td>
<td valign="top"><a href="/reference/scalar/fuzzydateint">FuzzyDateInt</a></td>
<td>
Filter by the start date of the media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">startDate_lesser</td>
<td valign="top"><a href="/reference/scalar/fuzzydateint">FuzzyDateInt</a></td>
<td>
Filter by the start date of the media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">startDate_like</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Filter by the start date of the media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">endDate_greater</td>
<td valign="top"><a href="/reference/scalar/fuzzydateint">FuzzyDateInt</a></td>
<td>
Filter by the end date of the media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">endDate_lesser</td>
<td valign="top"><a href="/reference/scalar/fuzzydateint">FuzzyDateInt</a></td>
<td>
Filter by the end date of the media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">endDate_like</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Filter by the end date of the media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">format_in</td>
<td valign="top">[<a href="/reference/enum/mediaformat">MediaFormat</a>]</td>
<td>
Filter by the media's format
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">format_not</td>
<td valign="top"><a href="/reference/enum/mediaformat">MediaFormat</a></td>
<td>
Filter by the media's format
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">format_not_in</td>
<td valign="top">[<a href="/reference/enum/mediaformat">MediaFormat</a>]</td>
<td>
Filter by the media's format
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status_in</td>
<td valign="top">[<a href="/reference/enum/mediastatus">MediaStatus</a>]</td>
<td>
Filter by the media's current release status
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status_not</td>
<td valign="top"><a href="/reference/enum/mediastatus">MediaStatus</a></td>
<td>
Filter by the media's current release status
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status_not_in</td>
<td valign="top">[<a href="/reference/enum/mediastatus">MediaStatus</a>]</td>
<td>
Filter by the media's current release status
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">episodes_greater</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by amount of episodes the media has
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">episodes_lesser</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by amount of episodes the media has
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">duration_greater</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the media's episode length
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">duration_lesser</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the media's episode length
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">chapters_greater</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the media's chapter count
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">chapters_lesser</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the media's chapter count
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">volumes_greater</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the media's volume count
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">volumes_lesser</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the media's volume count
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">genre_in</td>
<td valign="top">[<a href="/reference/scalar/string">String</a>]</td>
<td>
Filter by the media's genres
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">genre_not_in</td>
<td valign="top">[<a href="/reference/scalar/string">String</a>]</td>
<td>
Filter by the media's genres
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">tag_in</td>
<td valign="top">[<a href="/reference/scalar/string">String</a>]</td>
<td>
Filter by the media's tags
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">tag_not_in</td>
<td valign="top">[<a href="/reference/scalar/string">String</a>]</td>
<td>
Filter by the media's tags
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">tagCategory_in</td>
<td valign="top">[<a href="/reference/scalar/string">String</a>]</td>
<td>
Filter by the media's tags with in a tag category
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">tagCategory_not_in</td>
<td valign="top">[<a href="/reference/scalar/string">String</a>]</td>
<td>
Filter by the media's tags with in a tag category
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">licensedBy_in</td>
<td valign="top">[<a href="/reference/scalar/string">String</a>]</td>
<td>
Filter media by sites name with a online streaming or reading license
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">licensedById_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter media by sites id with a online streaming or reading license
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">averageScore_not</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the media's average score
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">averageScore_greater</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the media's average score
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">averageScore_lesser</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the media's average score
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">popularity_not</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the number of users with this media on their list
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">popularity_greater</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the number of users with this media on their list
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">popularity_lesser</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the number of users with this media on their list
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source_in</td>
<td valign="top">[<a href="/reference/enum/mediasource">MediaSource</a>]</td>
<td>
Filter by the source type of the media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/mediasort">MediaSort</a>]</td>
<td>
The order the results will be returned in
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>characters</strong></td>
<td valign="top">[<a href="/reference/object/character">Character</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by character id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">isBirthday</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
Filter by character by if its their birthday today
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">search</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Filter by search query
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id_not</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by character id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by character id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id_not_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by character id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/charactersort">CharacterSort</a>]</td>
<td>
The order the results will be returned in
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>staff</strong></td>
<td valign="top">[<a href="/reference/object/staff">Staff</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the staff id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">isBirthday</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
Filter by staff by if its their birthday today
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">search</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Filter by search query
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id_not</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the staff id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by the staff id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id_not_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by the staff id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/staffsort">StaffSort</a>]</td>
<td>
The order the results will be returned in
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>studios</strong></td>
<td valign="top">[<a href="/reference/object/studio">Studio</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the studio id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">search</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Filter by search query
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id_not</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the studio id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by the studio id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id_not_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by the studio id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/studiosort">StudioSort</a>]</td>
<td>
The order the results will be returned in
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mediaList</strong></td>
<td valign="top">[<a href="/reference/object/medialist">MediaList</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by a list entry's id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by a user's id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userName</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Filter by a user's name
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="/reference/enum/mediatype">MediaType</a></td>
<td>
Filter by the list entries media type
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status</td>
<td valign="top"><a href="/reference/enum/medialiststatus">MediaListStatus</a></td>
<td>
Filter by the watching/reading status
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the media id of the list entry
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">isFollowing</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
Filter list entries to users who are being followed by the authenticated user
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">notes</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Filter by note words and #tags
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">startedAt</td>
<td valign="top"><a href="/reference/scalar/fuzzydateint">FuzzyDateInt</a></td>
<td>
Filter by the date the user started the media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">completedAt</td>
<td valign="top"><a href="/reference/scalar/fuzzydateint">FuzzyDateInt</a></td>
<td>
Filter by the date the user completed the media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">compareWithAuthList</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
Limit to only entries also on the auth user's list. Requires user id or name arguments.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by a user's id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status_in</td>
<td valign="top">[<a href="/reference/enum/medialiststatus">MediaListStatus</a>]</td>
<td>
Filter by the watching/reading status
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status_not_in</td>
<td valign="top">[<a href="/reference/enum/medialiststatus">MediaListStatus</a>]</td>
<td>
Filter by the watching/reading status
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status_not</td>
<td valign="top"><a href="/reference/enum/medialiststatus">MediaListStatus</a></td>
<td>
Filter by the watching/reading status
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaId_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by the media id of the list entry
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaId_not_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by the media id of the list entry
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">notes_like</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Filter by note words and #tags
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">startedAt_greater</td>
<td valign="top"><a href="/reference/scalar/fuzzydateint">FuzzyDateInt</a></td>
<td>
Filter by the date the user started the media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">startedAt_lesser</td>
<td valign="top"><a href="/reference/scalar/fuzzydateint">FuzzyDateInt</a></td>
<td>
Filter by the date the user started the media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">startedAt_like</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Filter by the date the user started the media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">completedAt_greater</td>
<td valign="top"><a href="/reference/scalar/fuzzydateint">FuzzyDateInt</a></td>
<td>
Filter by the date the user completed the media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">completedAt_lesser</td>
<td valign="top"><a href="/reference/scalar/fuzzydateint">FuzzyDateInt</a></td>
<td>
Filter by the date the user completed the media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">completedAt_like</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Filter by the date the user completed the media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/medialistsort">MediaListSort</a>]</td>
<td>
The order the results will be returned in
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>airingSchedules</strong></td>
<td valign="top">[<a href="/reference/object/airingschedule">AiringSchedule</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the id of the airing schedule item
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the id of associated media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">episode</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the airing episode number
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">airingAt</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the time of airing
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">notYetAired</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
Filter to episodes that haven't yet aired
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id_not</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the id of the airing schedule item
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by the id of the airing schedule item
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id_not_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by the id of the airing schedule item
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaId_not</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the id of associated media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaId_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by the id of associated media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaId_not_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by the id of associated media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">episode_not</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the airing episode number
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">episode_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by the airing episode number
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">episode_not_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by the airing episode number
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">episode_greater</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the airing episode number
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">episode_lesser</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the airing episode number
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">airingAt_greater</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the time of airing
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">airingAt_lesser</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the time of airing
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/airingsort">AiringSort</a>]</td>
<td>
The order the results will be returned in
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mediaTrends</strong></td>
<td valign="top">[<a href="/reference/object/mediatrend">MediaTrend</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the media id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">date</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by date
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">trending</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by trending amount
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">averageScore</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by score
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">popularity</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by popularity
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">episode</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by episode number
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">releasing</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
Filter to stats recorded while the media was releasing
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaId_not</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the media id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaId_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by the media id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaId_not_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by the media id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">date_greater</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by date
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">date_lesser</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by date
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">trending_greater</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by trending amount
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">trending_lesser</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by trending amount
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">trending_not</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by trending amount
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">averageScore_greater</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by score
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">averageScore_lesser</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by score
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">averageScore_not</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by score
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">popularity_greater</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by popularity
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">popularity_lesser</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by popularity
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">popularity_not</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by popularity
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">episode_greater</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by episode number
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">episode_lesser</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by episode number
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">episode_not</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by episode number
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/mediatrendsort">MediaTrendSort</a>]</td>
<td>
The order the results will be returned in
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notifications</strong></td>
<td valign="top">[<a href="/reference/union/notificationunion">NotificationUnion</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="/reference/enum/notificationtype">NotificationType</a></td>
<td>
Filter by the type of notifications
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">resetNotificationCount</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
Reset the unread notification count to 0 on load
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type_in</td>
<td valign="top">[<a href="/reference/enum/notificationtype">NotificationType</a>]</td>
<td>
Filter by the type of notifications
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>followers</strong></td>
<td valign="top">[<a href="/reference/object/user">User</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
User id of the follower/followed
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/usersort">UserSort</a>]</td>
<td>
The order the results will be returned in
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>following</strong></td>
<td valign="top">[<a href="/reference/object/user">User</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
User id of the follower/followed
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/usersort">UserSort</a>]</td>
<td>
The order the results will be returned in
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>activities</strong></td>
<td valign="top">[<a href="/reference/union/activityunion">ActivityUnion</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the activity id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the owner user id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">messengerId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the id of the user who sent a message
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the associated media id of the activity
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="/reference/enum/activitytype">ActivityType</a></td>
<td>
Filter by the type of activity
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">isFollowing</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
Filter activity to users who are being followed by the authenticated user
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">hasReplies</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
Filter activity to only activity with replies
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">hasRepliesOrTypeText</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
Filter activity to only activity with replies or is of type text
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">createdAt</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the time the activity was created
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id_not</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the activity id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by the activity id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id_not_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by the activity id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId_not</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the owner user id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by the owner user id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId_not_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by the owner user id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">messengerId_not</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the id of the user who sent a message
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">messengerId_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by the id of the user who sent a message
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">messengerId_not_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by the id of the user who sent a message
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaId_not</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the associated media id of the activity
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaId_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by the associated media id of the activity
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaId_not_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by the associated media id of the activity
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type_not</td>
<td valign="top"><a href="/reference/enum/activitytype">ActivityType</a></td>
<td>
Filter by the type of activity
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type_in</td>
<td valign="top">[<a href="/reference/enum/activitytype">ActivityType</a>]</td>
<td>
Filter by the type of activity
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type_not_in</td>
<td valign="top">[<a href="/reference/enum/activitytype">ActivityType</a>]</td>
<td>
Filter by the type of activity
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">createdAt_greater</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the time the activity was created
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">createdAt_lesser</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the time the activity was created
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/activitysort">ActivitySort</a>]</td>
<td>
The order the results will be returned in
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>activityReplies</strong></td>
<td valign="top">[<a href="/reference/object/activityreply">ActivityReply</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the reply id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">activityId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the parent id
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>threads</strong></td>
<td valign="top">[<a href="/reference/object/thread">Thread</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the thread id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the user id of the thread's creator
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">replyUserId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the user id of the last user to comment on the thread
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">subscribed</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
Filter by if the currently authenticated user's subscribed threads
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">categoryId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by thread category id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaCategoryId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by thread media id category
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">search</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Filter by search query
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id_in</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Filter by the thread id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/threadsort">ThreadSort</a>]</td>
<td>
The order the results will be returned in
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>threadComments</strong></td>
<td valign="top">[<a href="/reference/object/threadcomment">ThreadComment</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the comment id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">threadId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the thread id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by the user id of the comment's creator
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/threadcommentsort">ThreadCommentSort</a>]</td>
<td>
The order the results will be returned in
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reviews</strong></td>
<td valign="top">[<a href="/reference/object/review">Review</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by Review id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by media id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by user id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaType</td>
<td valign="top"><a href="/reference/enum/mediatype">MediaType</a></td>
<td>
Filter by media type
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/reviewsort">ReviewSort</a>]</td>
<td>
The order the results will be returned in
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recommendations</strong></td>
<td valign="top">[<a href="/reference/object/recommendation">Recommendation</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by recommendation id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by media id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaRecommendationId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by media recommendation id
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by user who created the recommendation
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">rating</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by total rating of the recommendation
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">onList</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
Filter by the media on the authenticated user's lists
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">rating_greater</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by total rating of the recommendation
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">rating_lesser</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Filter by total rating of the recommendation
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/recommendationsort">RecommendationSort</a>]</td>
<td>
The order the results will be returned in
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>likes</strong></td>
<td valign="top">[<a href="/reference/object/user">User</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">likeableId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the likeable type
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="/reference/enum/likeabletype">LikeableType</a></td>
<td>
The type of model the id applies to
</td>
</tr>
</tbody>
</table>