---
title: UserStatistics Reference
---

### UserStatistics
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
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>meanScore</strong></td>
<td valign="top"><a href="/reference/scalar/float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>standardDeviation</strong></td>
<td valign="top"><a href="/reference/scalar/float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minutesWatched</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>episodesWatched</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>chaptersRead</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>volumesRead</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>formats</strong></td>
<td valign="top">[<a href="/reference/object/userformatstatistic">UserFormatStatistic</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/userstatisticssort">UserStatisticsSort</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>statuses</strong></td>
<td valign="top">[<a href="/reference/object/userstatusstatistic">UserStatusStatistic</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/userstatisticssort">UserStatisticsSort</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>scores</strong></td>
<td valign="top">[<a href="/reference/object/userscorestatistic">UserScoreStatistic</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/userstatisticssort">UserStatisticsSort</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lengths</strong></td>
<td valign="top">[<a href="/reference/object/userlengthstatistic">UserLengthStatistic</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/userstatisticssort">UserStatisticsSort</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>releaseYears</strong></td>
<td valign="top">[<a href="/reference/object/userreleaseyearstatistic">UserReleaseYearStatistic</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/userstatisticssort">UserStatisticsSort</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startYears</strong></td>
<td valign="top">[<a href="/reference/object/userstartyearstatistic">UserStartYearStatistic</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/userstatisticssort">UserStatisticsSort</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>genres</strong></td>
<td valign="top">[<a href="/reference/object/usergenrestatistic">UserGenreStatistic</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/userstatisticssort">UserStatisticsSort</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="/reference/object/usertagstatistic">UserTagStatistic</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/userstatisticssort">UserStatisticsSort</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>countries</strong></td>
<td valign="top">[<a href="/reference/object/usercountrystatistic">UserCountryStatistic</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/userstatisticssort">UserStatisticsSort</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>voiceActors</strong></td>
<td valign="top">[<a href="/reference/object/uservoiceactorstatistic">UserVoiceActorStatistic</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/userstatisticssort">UserStatisticsSort</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>staff</strong></td>
<td valign="top">[<a href="/reference/object/userstaffstatistic">UserStaffStatistic</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/userstatisticssort">UserStatisticsSort</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>studios</strong></td>
<td valign="top">[<a href="/reference/object/userstudiostatistic">UserStudioStatistic</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="/reference/enum/userstatisticssort">UserStatisticsSort</a>]</td>
<td></td>
</tr>
</tbody>
</table>