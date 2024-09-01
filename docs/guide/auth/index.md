---
title: Authentication
description: Authenticating with the AniList API.
---

# Getting Started

AniList uses OAuth2 for authentication. We support both the [Authorization Code Grant](authorization-code) and the [Implicit Grant](implicit) flows.

Important things to note about AniList's OAuth2 implementation:

* Scopes are not supported. Access tokens provide (almost) full access to a user's data.
* AniList access tokens are long-lived. They will remain valid for 1 year from the time they are issued.
* Refresh tokens are not currently supported. Once a token expires, you will need to re-authenticate your users.

## Do I need authentication?

Before getting started with authentication, consider if you actually need it. If you are just using the AniList API to get publicly available data, you do not need to deal with authentication.
However, if you are building an application that requires access to private data or requires mutating data, you will need to authenticate.

Things you can do without authentication:

* Get anime and manga data
* Search characters
* View data of public and unlisted users

Things that require authentication:

* Modify user lists
* View data of private users (only for the currently authenticated user)
* Fetch user-specific data from fields on other objects. For example, the `mediaListEntry` field on `Media`.

## Creating an application

To create an application, navigate to the [AniList developer settings](https://anilist.co/settings/developer) and click "Create New Application".

Creating an application requires two pieces of information:

* The name of your application
* A redirect URL

	This can be any valid URI, including custom URI schemes. If you're building a desktop or mobile application, you should look into how to register a custom URI scheme for your platform.

Once you've created your application, you will be given a client ID and client secret.

::: info
Applications cannot be deleted once created. Don't worry about unused applications.
:::

## Which grant type should I use?

### Implicit Grant

If your client is in an environment where your client credentials and secret cannot be securely stored, you should use the [Implicit Grant](implicit).

These types of applications are typically websites or mobile apps.

### Authorization Code Grant

If your client is in an environment where these credentials can be securely stored, you should use the [Authorization Code Grant](authorization-code).

These are typically server-based applications.

### Auth Pin

If you are absolutely unable to use an HTTP or custom URI scheme redirect, you can use the auth pin redirect URL.
After a user has authenticated with AniList, they will be redirected to a page with an access token that they can manually copy and paste into your application.

To enable this flow, you must navigate to the [AniList developer settings](https://anilist.co/settings/developer), open your client's settings, and set the "Redirect URL" to `https://anilist.co/api/v2/oauth/pin`.

This flow can be used for both the Authorization Code Grant and the Implicit Grant.