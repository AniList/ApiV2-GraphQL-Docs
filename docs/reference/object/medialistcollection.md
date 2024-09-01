---
title: MediaListCollection Reference
---

### MediaListCollection
List of anime or manga
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
<td colspan="2" valign="top"><strong>lists</strong></td>
<td valign="top">[<a href="/reference/object/medialistgroup">MediaListGroup</a>]</td>
<td>
Grouped media list entries
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="/reference/object/user">User</a></td>
<td>
The owner of the list
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hasNextChunk</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If there is another chunk
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>statusLists</strong> ⚠️</td>
<td valign="top">[[<a href="/reference/object/medialist">MediaList</a>]]</td>
<td>
A map of media list entry arrays grouped by status
<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>
Not GraphQL spec compliant, use lists field instead.
</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">asArray</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customLists</strong> ⚠️</td>
<td valign="top">[[<a href="/reference/object/medialist">MediaList</a>]]</td>
<td>
A map of media list entry arrays grouped by custom lists
<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>
Not GraphQL spec compliant, use lists field instead.
</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">asArray</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td></td>
</tr>
</tbody>
</table>