---
title: Character Reference
---

### Character
A character that features in an anime or manga
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
The id of the character
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="/reference/object/charactername">CharacterName</a></td>
<td>
The names of the character
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>image</strong></td>
<td valign="top"><a href="/reference/object/characterimage">CharacterImage</a></td>
<td>
Character images
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
A general description of the character
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
<td colspan="2" valign="top"><strong>gender</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The character's gender. Usually Male, Female, or Non-binary but can be any string.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>dateOfBirth</strong></td>
<td valign="top"><a href="/reference/object/fuzzydate">FuzzyDate</a></td>
<td>
The character's birth date
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>age</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The character's age. Note this is a string, not an int, it may contain further text and additional ages.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bloodType</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The characters blood type
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isFavourite</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a>!</td>
<td>
If the character is marked as favourite by the currently authenticated user
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isFavouriteBlocked</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a>!</td>
<td>
If the character is blocked from being added to favourites
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>siteUrl</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The url for the character page on the AniList website
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top"><a href="/reference/object/mediaconnection">MediaConnection</a></td>
<td>
Media that includes the character
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/mediasort">MediaSort</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="/reference/enum/mediatype">MediaType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">onList</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">page</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The page
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">perPage</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The amount of entries per page, max 25
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updatedAt</strong> ⚠️</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>
No data available
</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>favourites</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The amount of user's who have favourited the character
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>modNotes</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Notes for site moderators
</td>
</tr>
</tbody>
</table>