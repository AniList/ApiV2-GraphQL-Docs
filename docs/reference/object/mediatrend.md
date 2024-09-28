---
title: MediaTrend Reference
---

### MediaTrend
Daily media statistics
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
<td colspan="2" valign="top"><strong>mediaId</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The id of the tag
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>date</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The day the data was recorded (timestamp)
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>trending</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The amount of media activity on the day
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
<td colspan="2" valign="top"><strong>popularity</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The number of users with the media on their list
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>inProgress</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The number of users with watching/reading the media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>releasing</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a>!</td>
<td>
If the media was being released at this time
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>episode</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The episode number of the anime released on this day
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top"><a href="/reference/object/media">Media</a></td>
<td>
The related media
</td>
</tr>
</tbody>
</table>