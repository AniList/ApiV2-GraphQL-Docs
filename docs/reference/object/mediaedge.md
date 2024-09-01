---
title: MediaEdge Reference
---

### MediaEdge
Media connection edge
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
<td valign="top"><a href="/reference/object/media">Media</a></td>
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
<td colspan="2" valign="top"><strong>relationType</strong></td>
<td valign="top"><a href="/reference/enum/mediarelation">MediaRelation</a></td>
<td>
The type of relation to the parent model
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">version</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Provide 2 to use new version 2 of relation enum
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isMainStudio</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a>!</td>
<td>
If the studio is the main animation studio of the media (For Studio->MediaConnection field only)
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>characters</strong></td>
<td valign="top">[<a href="/reference/object/character">Character</a>]</td>
<td>
The characters in the media voiced by the parent actor
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>characterRole</strong></td>
<td valign="top"><a href="/reference/enum/characterrole">CharacterRole</a></td>
<td>
The characters role in the media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>characterName</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Media specific character name
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>roleNotes</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Notes regarding the VA's role for the character
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>dubGroup</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>staffRole</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The role of the staff member in the production of the media
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
<td colspan="2" valign="top"><strong>favouriteOrder</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The order the media should be displayed from the users favourites
</td>
</tr>
</tbody>
</table>