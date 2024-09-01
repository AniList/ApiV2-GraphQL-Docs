---
title: Thread Reference
---

### Thread
Forum Thread
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
The id of the thread
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The title of the thread
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>body</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The text body of the thread (Markdown)
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
<td colspan="2" valign="top"><strong>userId</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The id of the thread owner user
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>replyUserId</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the user who most recently commented on the thread
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>replyCommentId</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the most recent comment on the thread
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>replyCount</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The number of comments on the thread
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>viewCount</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The number of times users have viewed the thread
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isLocked</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the thread is locked and can receive comments
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isSticky</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the thread is stickied and should be displayed at the top of the page
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isSubscribed</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the currently authenticated user is subscribed to the thread
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>likeCount</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The amount of likes the thread has
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isLiked</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the currently authenticated user liked the thread
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repliedAt</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The time of the last reply
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The time of the thread creation
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updatedAt</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The time of the thread last update
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="/reference/object/user">User</a></td>
<td>
The owner of the thread
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>replyUser</strong></td>
<td valign="top"><a href="/reference/object/user">User</a></td>
<td>
The user to last reply to the thread
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>likes</strong></td>
<td valign="top">[<a href="/reference/object/user">User</a>]</td>
<td>
The users who liked the thread
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>siteUrl</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The url for the thread page on the AniList website
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>categories</strong></td>
<td valign="top">[<a href="/reference/object/threadcategory">ThreadCategory</a>]</td>
<td>
The categories of the thread
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mediaCategories</strong></td>
<td valign="top">[<a href="/reference/object/media">Media</a>]</td>
<td>
The media categories of the thread
</td>
</tr>
</tbody>
</table>