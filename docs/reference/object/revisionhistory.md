---
title: RevisionHistory Reference
---

### RevisionHistory
Feed of mod edit activity
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
<td colspan="2" valign="top"><strong>action</strong></td>
<td valign="top"><a href="/reference/enum/revisionhistoryaction">RevisionHistoryAction</a></td>
<td>
The action taken on the objects
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>changes</strong></td>
<td valign="top"><a href="/reference/scalar/json">Json</a></td>
<td>
A JSON object of the fields that changed
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="/reference/object/user">User</a></td>
<td>
The user who made the edit to the object
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top"><a href="/reference/object/media">Media</a></td>
<td>
The media the mod feed entry references
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>character</strong></td>
<td valign="top"><a href="/reference/object/character">Character</a></td>
<td>
The character the mod feed entry references
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>staff</strong></td>
<td valign="top"><a href="/reference/object/staff">Staff</a></td>
<td>
The staff member the mod feed entry references
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>studio</strong></td>
<td valign="top"><a href="/reference/object/studio">Studio</a></td>
<td>
The studio the mod feed entry references
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>externalLink</strong></td>
<td valign="top"><a href="/reference/object/mediaexternallink">MediaExternalLink</a></td>
<td>
The external link source the mod feed entry references
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
When the mod feed entry was created
</td>
</tr>
</tbody>
</table>