---
title: User Reference
---

### User
A user
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
The id of the user
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a>!</td>
<td>
The name of the user
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>about</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The bio written by user (Markdown)
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
<td colspan="2" valign="top"><strong>avatar</strong></td>
<td valign="top"><a href="/reference/object/useravatar">UserAvatar</a></td>
<td>
The user's avatar images
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bannerImage</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The user's banner images
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isFollowing</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the authenticated user if following this user
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isFollower</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If this user if following the authenticated user
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isBlocked</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the user is blocked by the authenticated user
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bans</strong></td>
<td valign="top"><a href="/reference/scalar/json">Json</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>options</strong></td>
<td valign="top"><a href="/reference/object/useroptions">UserOptions</a></td>
<td>
The user's general options
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mediaListOptions</strong></td>
<td valign="top"><a href="/reference/object/medialistoptions">MediaListOptions</a></td>
<td>
The user's media list options
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>favourites</strong></td>
<td valign="top"><a href="/reference/object/favourites">Favourites</a></td>
<td>
The users favourites
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">page</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Deprecated. Use page arguments on each favourite field instead.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>statistics</strong></td>
<td valign="top"><a href="/reference/object/userstatistictypes">UserStatisticTypes</a></td>
<td>
The users anime & manga list statistics
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>unreadNotificationCount</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The number of unread notifications the user has
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>siteUrl</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The url for the user page on the AniList website
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>donatorTier</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The donation tier of the user
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>donatorBadge</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Custom donation badge text
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>moderatorRoles</strong></td>
<td valign="top">[<a href="/reference/enum/modrole">ModRole</a>]</td>
<td>
The user's moderator roles if they are a site moderator
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
When the user's account was created. (Does not exist for accounts created before 2020)
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updatedAt</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
When the user's data was last updated
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stats</strong> ⚠️</td>
<td valign="top"><a href="/reference/object/userstats">UserStats</a></td>
<td>
The user's statistics
<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>
Deprecated. Replaced with statistics field.
</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>moderatorStatus</strong> ⚠️</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
If the user is a moderator or data moderator
<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>
Deprecated. Replaced with moderatorRoles field.
</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>previousNames</strong></td>
<td valign="top">[<a href="/reference/object/userpreviousname">UserPreviousName</a>]</td>
<td>
The user's previously used names.
</td>
</tr>
</tbody>
</table>