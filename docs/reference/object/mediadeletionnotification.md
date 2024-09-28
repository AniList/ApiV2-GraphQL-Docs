---
title: MediaDeletionNotification Reference
---

### MediaDeletionNotification
Notification for when a media tracked in a user's list is deleted from the site
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
The id of the Notification
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="/reference/enum/notificationtype">NotificationType</a></td>
<td>
The type of notification
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deletedMediaTitle</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The title of the deleted media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>context</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The reason for the media deletion
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reason</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The reason for the media deletion
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The time the notification was created at
</td>
</tr>
</tbody>
</table>