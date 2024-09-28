---
title: Review Reference
---

### Review
A Review that features in an anime or manga
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
The id of the review
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userId</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The id of the review's creator
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mediaId</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The id of the review's media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mediaType</strong></td>
<td valign="top"><a href="/reference/enum/mediatype">MediaType</a></td>
<td>
For which type of media the review is for
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>summary</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
A short summary of the review
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>body</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The main review body text
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
<td colspan="2" valign="top"><strong>rating</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The total user rating of the review
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ratingAmount</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The amount of user ratings of the review
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userRating</strong></td>
<td valign="top"><a href="/reference/enum/reviewrating">ReviewRating</a></td>
<td>
The rating of the review by currently authenticated user
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>score</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The review score of the media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>private</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the review is not yet publicly published and is only viewable by creator
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>siteUrl</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The url for the review page on the AniList website
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The time of the thread creation
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updatedAt</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The time of the thread last update
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="/reference/object/user">User</a></td>
<td>
The creator of the review
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top"><a href="/reference/object/media">Media</a></td>
<td>
The media the review is of
</td>
</tr>
</tbody>
</table>