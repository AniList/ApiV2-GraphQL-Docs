---
title: TextActivity Reference
---

### TextActivity
User text activity
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
The id of the activity
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userId</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The user id of the activity's creator
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="/reference/enum/activitytype">ActivityType</a></td>
<td>
The type of activity
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>replyCount</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The number of activity replies
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>text</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The status text (Markdown)
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
<td colspan="2" valign="top"><strong>siteUrl</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The url for the activity page on the AniList website
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isLocked</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the activity is locked and can receive replies
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isSubscribed</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the currently authenticated user is subscribed to the activity
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>likeCount</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The amount of likes the activity has
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isLiked</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the currently authenticated user liked the activity
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isPinned</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the activity is pinned to the top of the users activity feed
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The time the activity was created at
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="/reference/object/user">User</a></td>
<td>
The user who created the activity
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>replies</strong></td>
<td valign="top">[<a href="/reference/object/activityreply">ActivityReply</a>]</td>
<td>
The written replies to the activity
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>likes</strong></td>
<td valign="top">[<a href="/reference/object/user">User</a>]</td>
<td>
The users who liked the activity
</td>
</tr>
</tbody>
</table>