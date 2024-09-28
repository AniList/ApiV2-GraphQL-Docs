---
title: MediaSubmission Reference
---

### MediaSubmission
Media submission
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
The id of the submission
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>submitter</strong></td>
<td valign="top"><a href="/reference/object/user">User</a></td>
<td>
User submitter of the submission
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>assignee</strong></td>
<td valign="top"><a href="/reference/object/user">User</a></td>
<td>
Data Mod assigned to handle the submission
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="/reference/enum/submissionstatus">SubmissionStatus</a></td>
<td>
Status of the submission
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>submitterStats</strong></td>
<td valign="top"><a href="/reference/scalar/json">Json</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notes</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>source</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>changes</strong></td>
<td valign="top">[<a href="/reference/scalar/string">String</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>locked</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
Whether the submission is locked
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top"><a href="/reference/object/media">Media</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>submission</strong></td>
<td valign="top"><a href="/reference/object/media">Media</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>characters</strong></td>
<td valign="top">[<a href="/reference/object/mediasubmissioncomparison">MediaSubmissionComparison</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>staff</strong></td>
<td valign="top">[<a href="/reference/object/mediasubmissioncomparison">MediaSubmissionComparison</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>studios</strong></td>
<td valign="top">[<a href="/reference/object/mediasubmissioncomparison">MediaSubmissionComparison</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relations</strong></td>
<td valign="top">[<a href="/reference/object/mediaedge">MediaEdge</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>externalLinks</strong></td>
<td valign="top">[<a href="/reference/object/mediasubmissioncomparison">MediaSubmissionComparison</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>