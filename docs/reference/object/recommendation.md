---
title: Recommendation Reference
---

### Recommendation
Media recommendation
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
The id of the recommendation
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rating</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Users rating of the recommendation
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userRating</strong></td>
<td valign="top"><a href="/reference/enum/recommendationrating">RecommendationRating</a></td>
<td>
The rating of the recommendation by currently authenticated user
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top"><a href="/reference/object/media">Media</a></td>
<td>
The media the recommendation is from
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mediaRecommendation</strong></td>
<td valign="top"><a href="/reference/object/media">Media</a></td>
<td>
The recommended media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="/reference/object/user">User</a></td>
<td>
The user that first created the recommendation
</td>
</tr>
</tbody>
</table>