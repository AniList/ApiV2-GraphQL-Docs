---
title: MediaTag Reference
---

### MediaTag
A tag that describes a theme or element of the media
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
The id of the tag
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a>!</td>
<td>
The name of the tag
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
A general description of the tag
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The categories of tags this tag belongs to
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rank</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The relevance ranking of the tag out of the 100 for this media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isGeneralSpoiler</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the tag could be a spoiler for any media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isMediaSpoiler</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the tag is a spoiler for this media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isAdult</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the tag is only for adult 18+ media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userId</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The user who submitted the tag
</td>
</tr>
</tbody>
</table>