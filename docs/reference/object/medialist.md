---
title: MediaList Reference
---

### MediaList
List of anime or manga
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
The id of the list entry
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userId</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The id of the user owner of the list entry
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mediaId</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td>
The id of the media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="/reference/enum/medialiststatus">MediaListStatus</a></td>
<td>
The watching/reading status
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>score</strong></td>
<td valign="top"><a href="/reference/scalar/float">Float</a></td>
<td>
The score of the entry
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="/reference/enum/scoreformat">ScoreFormat</a></td>
<td>
Force the score to be returned in the provided format type.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>progress</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The amount of episodes/chapters consumed by the user
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>progressVolumes</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The amount of volumes read by the user
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repeat</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The amount of times the user has rewatched/read the media
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>priority</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Priority of planning
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>private</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the entry should only be visible to authenticated user
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notes</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Text notes
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hiddenFromStatusLists</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the entry shown be hidden from non-custom lists
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customLists</strong></td>
<td valign="top"><a href="/reference/scalar/json">Json</a></td>
<td>
Map of booleans for which custom lists the entry are in
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">asArray</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
Change return structure to an array of objects
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>advancedScores</strong></td>
<td valign="top"><a href="/reference/scalar/json">Json</a></td>
<td>
Map of advanced scores with name keys
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startedAt</strong></td>
<td valign="top"><a href="/reference/object/fuzzydate">FuzzyDate</a></td>
<td>
When the entry was started by the user
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>completedAt</strong></td>
<td valign="top"><a href="/reference/object/fuzzydate">FuzzyDate</a></td>
<td>
When the entry was completed by the user
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updatedAt</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
When the entry data was last updated
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
When the entry data was created
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top"><a href="/reference/object/media">Media</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="/reference/object/user">User</a></td>
<td></td>
</tr>
</tbody>
</table>