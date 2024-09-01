---
title: Studio Reference
---

### Studio
Animation or production company
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
The id of the studio
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a>!</td>
<td>
The name of the studio
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isAnimationStudio</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a>!</td>
<td>
If the studio is an animation studio or a different kind of company
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top"><a href="/reference/object/mediaconnection">MediaConnection</a></td>
<td>
The media the studio has worked on
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
<td colspan="2" align="right" valign="top">isMain</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the studio was the primary animation studio of the media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">onList</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
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
<td colspan="2" valign="top"><strong>siteUrl</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The url for the studio page on the AniList website
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isFavourite</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a>!</td>
<td>
If the studio is marked as favourite by the currently authenticated user
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>favourites</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The amount of user's who have favourited the studio
</td>
</tr>
</tbody>
</table>