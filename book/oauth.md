# OAuth 2

### Do I need to use OAuth?

If you only need to read public AniList data you do not need to use OAuth at all. If you want to allow users of your application to log in with AniList and update their data, you will need to use either the Authorization Code or Implicit OAuth grant types.

### Which grant type should I use?

If your client is in an environment where your client credentials & secret cannot be kept securely stored \(Such as a website/javascript or a mobile application\) then you should use the Implicit grant. 

If your client is in an environment where these credentials can be securely stored \(Such as a server\) you should use the Authorization Code grant.

### Using OAuth
To use OAuth you must first create an AniList API v2 client.

Go to https://anilist.co/settings/developer and click the "View Api v2 clients" button in the top right. Then click "Create New Api v2 client" and enter your client name and redirect URI. After clicking Save you'll receive your client ID and secret.

Your client name will appear to the user when asking for approval, so ensure it corresponds to your client application name.

Follow the guides for your grant type to learn how to request access tokens and how to use them to make authenticated requests:
#### [Authorization Code Grant](/oauth/authorization-code-grant.md)

#### [Implicit Grant](/oauth/implicit-grant.md)

### Auth Pin
If you are absolutely unable to have a Http or application URI scheme redirection you can use the Auth Pin redirect URL. After the user has authorized your application they will be redirected to a page requesting them to manually copy & paste the code/token into your application.

To enable this, on your AniList v2 client page, set your Client Redirect Uri to `https://anilist.co/api/v2/oauth/pin`.

This can be used with any available grant type.
