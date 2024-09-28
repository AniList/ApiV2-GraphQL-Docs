---
title: StaffSubmission Reference
---

### StaffSubmission
A submission for a staff that features in an anime or manga
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
<td colspan="2" valign="top"><strong>staff</strong></td>
<td valign="top"><a href="/reference/object/staff">Staff</a></td>
<td>
Staff that the submission is referencing
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>submission</strong></td>
<td valign="top"><a href="/reference/object/staff">Staff</a></td>
<td>
The staff submission changes
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
<td colspan="2" valign="top"><strong>notes</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Inner details of submission status
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>source</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
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
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>