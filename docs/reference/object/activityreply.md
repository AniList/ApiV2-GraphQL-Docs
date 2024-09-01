---
title: ActivityReply Reference
---

### ActivityReply
Replay to an activity item
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
The id of the reply
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userId</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the replies creator
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>activityId</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the parent activity
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>text</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The reply text
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
<td colspan="2" valign="top"><strong>likeCount</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The amount of likes the reply has
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isLiked</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the currently authenticated user liked the reply
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The time the reply was created at
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="/reference/object/user">User</a></td>
<td>
The user who created reply
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>likes</strong></td>
<td valign="top">[<a href="/reference/object/user">User</a>]</td>
<td>
The users who liked the reply
</td>
</tr>
</tbody>
</table>