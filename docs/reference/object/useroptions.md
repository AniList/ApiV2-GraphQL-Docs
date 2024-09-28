---
title: UserOptions Reference
---

### UserOptions
A user's general options
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
<td colspan="2" valign="top"><strong>titleLanguage</strong></td>
<td valign="top"><a href="/reference/enum/usertitlelanguage">UserTitleLanguage</a></td>
<td>
The language the user wants to see media titles in
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>displayAdultContent</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
Whether the user has enabled viewing of 18+ content
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>airingNotifications</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
Whether the user receives notifications when a show they are watching aires
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>profileColor</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Profile highlight color (blue, purple, pink, orange, red, green, gray)
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notificationOptions</strong></td>
<td valign="top">[<a href="/reference/object/notificationoption">NotificationOption</a>]</td>
<td>
Notification options
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>timezone</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The user's timezone offset (Auth user only)
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>activityMergeTime</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>staffNameLanguage</strong></td>
<td valign="top"><a href="/reference/enum/userstaffnamelanguage">UserStaffNameLanguage</a></td>
<td>
The language the user wants to see staff and character names in
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>restrictMessagesToFollowing</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
Whether the user only allow messages from users they follow
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>disabledListActivity</strong></td>
<td valign="top">[<a href="/reference/object/listactivityoption">ListActivityOption</a>]</td>
<td>
The list activity types the user has disabled from being created from list updates
</td>
</tr>
</tbody>
</table>