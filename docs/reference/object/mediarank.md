---
title: MediaRank Reference
---

### MediaRank
The ranking of a media in a particular time span and format compared to other media
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
The id of the rank
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rank</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The numerical rank of the media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="/reference/enum/mediaranktype">MediaRankType</a>!</td>
<td>
The type of ranking
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>format</strong></td>
<td valign="top"><a href="/reference/enum/mediaformat">MediaFormat</a>!</td>
<td>
The format the media is ranked within
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>year</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The year the media is ranked within
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>season</strong></td>
<td valign="top"><a href="/reference/enum/mediaseason">MediaSeason</a></td>
<td>
The season the media is ranked within
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>allTime</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the ranking is based on all time instead of a season/year
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>context</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a>!</td>
<td>
String that gives context to the ranking type and time span
</td>
</tr>
</tbody>
</table>