---
title: ActivityLikeNotification Reference
---

### ActivityLikeNotification
Notification for when a activity is liked
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
<td colspan="2" valign="top"><strong>userId</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The id of the user who liked to the activity
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
<td colspan="2" valign="top"><strong>activityId</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The id of the activity which was liked
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>context</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The notification context text
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The time the notification was created at
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>activity</strong></td>
<td valign="top"><a href="/reference/union/activityunion">ActivityUnion</a></td>
<td>
The liked activity
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="/reference/object/user">User</a></td>
<td>
The user who liked the activity
</td>
</tr>
</tbody>
</table>