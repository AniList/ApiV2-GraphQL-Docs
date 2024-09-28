---
title: Staff Reference
---

### Staff
Voice actors or production staff
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
The id of the staff member
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="/reference/object/staffname">StaffName</a></td>
<td>
The names of the staff member
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>language</strong> ⚠️</td>
<td valign="top"><a href="/reference/enum/stafflanguage">StaffLanguage</a></td>
<td>
The primary language the staff member dub's in
<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>
Replaced with languageV2
</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>languageV2</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The primary language of the staff member. Current values: Japanese, English, Korean, Italian, Spanish, Portuguese, French, German, Hebrew, Hungarian, Chinese, Arabic, Filipino, Catalan, Finnish, Turkish, Dutch, Swedish, Thai, Tagalog, Malaysian, Indonesian, Vietnamese, Nepali, Hindi, Urdu
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>image</strong></td>
<td valign="top"><a href="/reference/object/staffimage">StaffImage</a></td>
<td>
The staff images
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
A general description of the staff member
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
<td colspan="2" valign="top"><strong>primaryOccupations</strong></td>
<td valign="top">[<a href="/reference/scalar/string">String</a>]</td>
<td>
The person's primary occupations
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gender</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The staff's gender. Usually Male, Female, or Non-binary but can be any string.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>dateOfBirth</strong></td>
<td valign="top"><a href="/reference/object/fuzzydate">FuzzyDate</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>dateOfDeath</strong></td>
<td valign="top"><a href="/reference/object/fuzzydate">FuzzyDate</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>age</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The person's age in years
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>yearsActive</strong></td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
[startYear, endYear] (If the 2nd value is not present staff is still active)
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>homeTown</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The persons birthplace or hometown
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bloodType</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The persons blood type
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isFavourite</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a>!</td>
<td>
If the staff member is marked as favourite by the currently authenticated user
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isFavouriteBlocked</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a>!</td>
<td>
If the staff member is blocked from being added to favourites
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>siteUrl</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The url for the staff page on the AniList website
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>staffMedia</strong></td>
<td valign="top"><a href="/reference/object/mediaconnection">MediaConnection</a></td>
<td>
Media where the staff member has a production role
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
<td colspan="2" valign="top"><strong>characters</strong></td>
<td valign="top"><a href="/reference/object/characterconnection">CharacterConnection</a></td>
<td>
Characters voiced by the actor
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/charactersort">CharacterSort</a>]</td>
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
<td colspan="2" valign="top"><strong>characterMedia</strong></td>
<td valign="top"><a href="/reference/object/mediaconnection">MediaConnection</a></td>
<td>
Media the actor voiced characters in. (Same data as characters with media as node instead of characters)
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/mediasort">MediaSort</a>]</td>
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
<td colspan="2" valign="top"><strong>staff</strong></td>
<td valign="top"><a href="/reference/object/staff">Staff</a></td>
<td>
Staff member that the submission is referencing
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>submitter</strong></td>
<td valign="top"><a href="/reference/object/user">User</a></td>
<td>
Submitter for the submission
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>submissionStatus</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Status of the submission
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>submissionNotes</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Inner details of submission status
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>favourites</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The amount of user's who have favourited the staff member
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