---
title: ThreadComment Reference
---

### ThreadComment
Forum Thread Comment
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
The id of the comment
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userId</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The user id of the comment's owner
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>threadId</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of thread the comment belongs to
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>comment</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The text content of the comment (Markdown)
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
The amount of likes the comment has
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isLiked</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the currently authenticated user liked the comment
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>siteUrl</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The url for the comment page on the AniList website
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The time of the comments creation
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updatedAt</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The time of the comments last update
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>thread</strong></td>
<td valign="top"><a href="/reference/object/thread">Thread</a></td>
<td>
The thread the comment belongs to
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="/reference/object/user">User</a></td>
<td>
The user who created the comment
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>likes</strong></td>
<td valign="top">[<a href="/reference/object/user">User</a>]</td>
<td>
The users who liked the comment
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>childComments</strong></td>
<td valign="top"><a href="/reference/scalar/json">Json</a></td>
<td>
The comment's child reply comments
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isLocked</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the comment tree is locked and may not receive replies or edits
</td>
</tr>
</tbody>
</table>