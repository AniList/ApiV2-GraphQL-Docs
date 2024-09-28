---
title: AiringSchedule Reference
---

### AiringSchedule
Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate.
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
The id of the airing schedule item
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>airingAt</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The time the episode airs at
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>timeUntilAiring</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
Seconds until episode starts airing
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>episode</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The airing episode number
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mediaId</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The associate media id of the airing episode
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top"><a href="/reference/object/media">Media</a></td>
<td>
The associate media of the airing episode
</td>
</tr>
</tbody>
</table>