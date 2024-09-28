---
title: MediaExternalLink Reference
---

### MediaExternalLink
An external link to another site related to the media or staff member
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
The id of the external link
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The url of the external link or base url of link source
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>site</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a>!</td>
<td>
The links website site name
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>siteId</strong></td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The links website site id
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="/reference/enum/externallinktype">ExternalLinkType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>language</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Language the site content is in. See Staff language field for values.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>color</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>icon</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The icon image url of the site. Not available for all links. Transparent PNG 64x64
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notes</strong></td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isDisabled</strong></td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td></td>
</tr>
</tbody>
</table>