---
title: CharacterEdge Reference
---

### CharacterEdge
Character connection edge
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
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="/reference/object/character">Character</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the connection
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>role</strong></td>
<td valign="top"><a href="/reference/enum/characterrole">CharacterRole</a></td>
<td>
The characters role in the media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Media specific character name
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>voiceActors</strong></td>
<td valign="top">[<a href="/reference/object/staff">Staff</a>]</td>
<td>
The voice actors of the character
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">language</td>
<td valign="top"><a href="/reference/enum/stafflanguage">StaffLanguage</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/staffsort">StaffSort</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>voiceActorRoles</strong></td>
<td valign="top">[<a href="/reference/object/staffroletype">StaffRoleType</a>]</td>
<td>
The voice actors of the character with role date
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">language</td>
<td valign="top"><a href="/reference/enum/stafflanguage">StaffLanguage</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/staffsort">StaffSort</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top">[<a href="/reference/object/media">Media</a>]</td>
<td>
The media the character is in
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>favouriteOrder</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The order the character should be displayed from the users favourites
</td>
</tr>
</tbody>
</table>