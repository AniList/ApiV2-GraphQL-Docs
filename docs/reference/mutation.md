---
title: Mutation Reference
---

# Root Mutation

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
<td colspan="2" valign="top"><strong>UpdateUser</strong></td>
<td valign="top"><a href="/reference/object/user">User</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">about</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
User's about/bio text
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">titleLanguage</td>
<td valign="top"><a href="/reference/enum/usertitlelanguage">UserTitleLanguage</a></td>
<td>
User's title language
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">displayAdultContent</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the user should see media marked as adult-only
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">airingNotifications</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the user should get notifications when a show they are watching aires
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">scoreFormat</td>
<td valign="top"><a href="/reference/enum/scoreformat">ScoreFormat</a></td>
<td>
The user's list scoring system
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">rowOrder</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The user's default list order
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profileColor</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Profile highlight color
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">donatorBadge</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Profile highlight color
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">notificationOptions</td>
<td valign="top">[<a href="/reference/input_object/notificationoptioninput">NotificationOptionInput</a>]</td>
<td>
Notification options
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timezone</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Timezone offset format: -?HH:MM
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">activityMergeTime</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">animeListOptions</td>
<td valign="top"><a href="/reference/input_object/medialistoptionsinput">MediaListOptionsInput</a></td>
<td>
The user's anime list options
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mangaListOptions</td>
<td valign="top"><a href="/reference/input_object/medialistoptionsinput">MediaListOptionsInput</a></td>
<td>
The user's anime list options
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">staffNameLanguage</td>
<td valign="top"><a href="/reference/enum/userstaffnamelanguage">UserStaffNameLanguage</a></td>
<td>
The language the user wants to see staff and character names in
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">restrictMessagesToFollowing</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
Only allow messages from other users the user follows
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">disabledListActivity</td>
<td valign="top">[<a href="/reference/input_object/listactivityoptioninput">ListActivityOptionInput</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>SaveMediaListEntry</strong></td>
<td valign="top"><a href="/reference/object/medialist">MediaList</a></td>
<td>
Create or update a media list entry
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The list entry id, required for updating
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the media the entry is of
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status</td>
<td valign="top"><a href="/reference/enum/medialiststatus">MediaListStatus</a></td>
<td>
The watching/reading status
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">score</td>
<td valign="top"><a href="/reference/scalar/float">Float</a></td>
<td>
The score of the media in the user's chosen scoring method
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">scoreRaw</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The score of the media in 100 point
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">progress</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The amount of episodes/chapters consumed by the user
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">progressVolumes</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The amount of volumes read by the user
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">repeat</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The amount of times the user has rewatched/read the media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">priority</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Priority of planning
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">private</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the entry should only be visible to authenticated user
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">notes</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Text notes
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">hiddenFromStatusLists</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the entry shown be hidden from non-custom lists
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">customLists</td>
<td valign="top">[<a href="/reference/scalar/string">String</a>]</td>
<td>
Array of custom list names which should be enabled for this entry
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">advancedScores</td>
<td valign="top">[<a href="/reference/scalar/float">Float</a>]</td>
<td>
Array of advanced scores
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">startedAt</td>
<td valign="top"><a href="/reference/input_object/fuzzydateinput">FuzzyDateInput</a></td>
<td>
When the entry was started by the user
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">completedAt</td>
<td valign="top"><a href="/reference/input_object/fuzzydateinput">FuzzyDateInput</a></td>
<td>
When the entry was completed by the user
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>UpdateMediaListEntries</strong></td>
<td valign="top">[<a href="/reference/object/medialist">MediaList</a>]</td>
<td>
Update multiple media list entries to the same values
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status</td>
<td valign="top"><a href="/reference/enum/medialiststatus">MediaListStatus</a></td>
<td>
The watching/reading status
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">score</td>
<td valign="top"><a href="/reference/scalar/float">Float</a></td>
<td>
The score of the media in the user's chosen scoring method
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">scoreRaw</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The score of the media in 100 point
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">progress</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The amount of episodes/chapters consumed by the user
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">progressVolumes</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The amount of volumes read by the user
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">repeat</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The amount of times the user has rewatched/read the media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">priority</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Priority of planning
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">private</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the entry should only be visible to authenticated user
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">notes</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
Text notes
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">hiddenFromStatusLists</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the entry shown be hidden from non-custom lists
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">advancedScores</td>
<td valign="top">[<a href="/reference/scalar/float">Float</a>]</td>
<td>
Array of advanced scores
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">startedAt</td>
<td valign="top"><a href="/reference/input_object/fuzzydateinput">FuzzyDateInput</a></td>
<td>
When the entry was started by the user
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">completedAt</td>
<td valign="top"><a href="/reference/input_object/fuzzydateinput">FuzzyDateInput</a></td>
<td>
When the entry was completed by the user
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
The list entries ids to update
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>DeleteMediaListEntry</strong></td>
<td valign="top"><a href="/reference/object/deleted">Deleted</a></td>
<td>
Delete a media list entry
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the media list entry to delete
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>DeleteCustomList</strong></td>
<td valign="top"><a href="/reference/object/deleted">Deleted</a></td>
<td>
Delete a custom list and remove the list entries from it
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">customList</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The name of the custom list to delete
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="/reference/enum/mediatype">MediaType</a></td>
<td>
The media list type of the custom list
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>SaveTextActivity</strong></td>
<td valign="top"><a href="/reference/object/textactivity">TextActivity</a></td>
<td>
Create or update text activity for the currently authenticated user
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The activity's id, required for updating
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">text</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The activity text
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locked</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the activity should be locked. (Mod Only)
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>SaveMessageActivity</strong></td>
<td valign="top"><a href="/reference/object/messageactivity">MessageActivity</a></td>
<td>
Create or update message activity for the currently authenticated user
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The activity id, required for updating
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">message</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The activity message text
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">recipientId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the user the message is being sent to
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">private</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the activity should be private
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locked</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the activity should be locked. (Mod Only)
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">asMod</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the message should be sent from the Moderator account (Mod Only)
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>SaveListActivity</strong></td>
<td valign="top"><a href="/reference/object/listactivity">ListActivity</a></td>
<td>
Update list activity (Mod Only)
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The activity's id, required for updating
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locked</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the activity should be locked. (Mod Only)
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>DeleteActivity</strong></td>
<td valign="top"><a href="/reference/object/deleted">Deleted</a></td>
<td>
Delete an activity item of the authenticated users
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the activity to delete
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ToggleActivityPin</strong></td>
<td valign="top"><a href="/reference/union/activityunion">ActivityUnion</a></td>
<td>
Toggle activity to be pinned to the top of the user's activity feed
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
Toggle activity id to be pinned
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">pinned</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the activity should be pinned or unpinned
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ToggleActivitySubscription</strong></td>
<td valign="top"><a href="/reference/union/activityunion">ActivityUnion</a></td>
<td>
Toggle the subscription of an activity item
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">activityId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the activity to un/subscribe
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">subscribe</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
Whether to subscribe or unsubscribe from the activity
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>SaveActivityReply</strong></td>
<td valign="top"><a href="/reference/object/activityreply">ActivityReply</a></td>
<td>
Create or update an activity reply
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The activity reply id, required for updating
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">activityId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the parent activity being replied to
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">text</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The reply text
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">asMod</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the reply should be sent from the Moderator account (Mod Only)
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>DeleteActivityReply</strong></td>
<td valign="top"><a href="/reference/object/deleted">Deleted</a></td>
<td>
Delete an activity reply of the authenticated users
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the reply to delete
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ToggleLike</strong></td>
<td valign="top">[<a href="/reference/object/user">User</a>]</td>
<td>
Add or remove a like from a likeable type.
                          Returns all the users who liked the same model
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the likeable type
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="/reference/enum/likeabletype">LikeableType</a></td>
<td>
The type of model to be un/liked
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ToggleLikeV2</strong></td>
<td valign="top"><a href="/reference/union/likeableunion">LikeableUnion</a></td>
<td>
Add or remove a like from a likeable type.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the likeable type
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="/reference/enum/likeabletype">LikeableType</a></td>
<td>
The type of model to be un/liked
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ToggleFollow</strong></td>
<td valign="top"><a href="/reference/object/user">User</a></td>
<td>
Toggle the un/following of a user
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the user to un/follow
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ToggleFavourite</strong></td>
<td valign="top"><a href="/reference/object/favourites">Favourites</a></td>
<td>
Favourite or unfavourite an anime, manga, character, staff member, or studio
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">animeId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the anime to un/favourite
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mangaId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the manga to un/favourite
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">characterId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the character to un/favourite
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">staffId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the staff to un/favourite
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">studioId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the studio to un/favourite
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>UpdateFavouriteOrder</strong></td>
<td valign="top"><a href="/reference/object/favourites">Favourites</a></td>
<td>
Update the order favourites are displayed in
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">animeIds</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
The id of the anime to un/favourite
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mangaIds</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
The id of the manga to un/favourite
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">characterIds</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
The id of the character to un/favourite
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">staffIds</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
The id of the staff to un/favourite
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">studioIds</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
The id of the studio to un/favourite
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">animeOrder</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
List of integers which the anime should be ordered by (Asc)
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mangaOrder</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
List of integers which the manga should be ordered by (Asc)
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">characterOrder</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
List of integers which the character should be ordered by (Asc)
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">staffOrder</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
List of integers which the staff should be ordered by (Asc)
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">studioOrder</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
List of integers which the studio should be ordered by (Asc)
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>SaveReview</strong></td>
<td valign="top"><a href="/reference/object/review">Review</a></td>
<td>
Create or update a review
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The review id, required for updating
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the media the review is of
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">body</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The main review text. Min:2200 characters
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">summary</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
A short summary/preview of the review. Min:20, Max:120 characters
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">score</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
A short summary/preview of the review. Min:20, Max:120 characters
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">private</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the review should only be visible to its creator
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>DeleteReview</strong></td>
<td valign="top"><a href="/reference/object/deleted">Deleted</a></td>
<td>
Delete a review
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the review to delete
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>RateReview</strong></td>
<td valign="top"><a href="/reference/object/review">Review</a></td>
<td>
Rate a review
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">reviewId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the review to rate
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">rating</td>
<td valign="top"><a href="/reference/enum/reviewrating">ReviewRating</a></td>
<td>
The rating to apply to the review
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>SaveRecommendation</strong></td>
<td valign="top"><a href="/reference/object/recommendation">Recommendation</a></td>
<td>
Recommendation a media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the base media
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaRecommendationId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the media to recommend
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">rating</td>
<td valign="top"><a href="/reference/enum/recommendationrating">RecommendationRating</a></td>
<td>
The rating to give the recommendation
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>SaveThread</strong></td>
<td valign="top"><a href="/reference/object/thread">Thread</a></td>
<td>
Create or update a forum thread
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The thread id, required for updating
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">title</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The title of the thread
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">body</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The main text body of the thread
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">categories</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Forum categories the thread should be within
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaCategories</td>
<td valign="top">[<a href="/reference/scalar/int">Int</a>]</td>
<td>
Media related to the contents of the thread
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sticky</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the thread should be stickied. (Mod Only)
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locked</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the thread should be locked. (Mod Only)
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>DeleteThread</strong></td>
<td valign="top"><a href="/reference/object/deleted">Deleted</a></td>
<td>
Delete a thread
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the thread to delete
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ToggleThreadSubscription</strong></td>
<td valign="top"><a href="/reference/object/thread">Thread</a></td>
<td>
Toggle the subscription of a forum thread
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">threadId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the forum thread to un/subscribe
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">subscribe</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
Whether to subscribe or unsubscribe from the forum thread
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>SaveThreadComment</strong></td>
<td valign="top"><a href="/reference/object/threadcomment">ThreadComment</a></td>
<td>
Create or update a thread comment
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The comment id, required for updating
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">threadId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of thread the comment belongs to
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">parentCommentId</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of thread comment to reply to
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">comment</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td>
The comment markdown text
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locked</td>
<td valign="top"><a href="/reference/scalar/boolean">Boolean</a></td>
<td>
If the comment tree should be locked. (Mod Only)
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>DeleteThreadComment</strong></td>
<td valign="top"><a href="/reference/object/deleted">Deleted</a></td>
<td>
Delete a thread comment
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="/reference/scalar/int">Int</a></td>
<td>
The id of the thread comment to delete
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>UpdateAniChartSettings</strong></td>
<td valign="top"><a href="/reference/scalar/json">Json</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">titleLanguage</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">outgoingLinkProvider</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">theme</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top"><a href="/reference/scalar/string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>UpdateAniChartHighlights</strong></td>
<td valign="top"><a href="/reference/scalar/json">Json</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">highlights</td>
<td valign="top">[<a href="/reference/input_object/anicharthighlightinput">AniChartHighlightInput</a>]</td>
<td></td>
</tr>
</tbody>
</table>