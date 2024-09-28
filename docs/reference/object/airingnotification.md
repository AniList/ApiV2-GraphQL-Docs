---
title: AiringNotification Reference
---

### AiringNotification
Notification for when an episode of anime airs
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
<td colspan="2" valign="top"><strong>animeId</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The id of the aired anime
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>episode</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The episode number that just aired
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contexts</strong></td>
<td valign="top">[<a href="/reference/scalar/string">String</a>]</td>
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
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top"><a href="/reference/object/media">Media</a></td>
<td>
The associated media of the airing schedule
</td>
</tr>
</tbody>
</table>