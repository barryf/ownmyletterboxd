# Own My Letterboxd

This is a service that polls your Letterboxd RSS feed and posts new film reviews to your Micropub endpoint using `h-review`.

It uses AWS via the [Architect framework](https://arc.codes). RSS feed fetches are scheduled via EventBridge and Lambda. Data is stored using DynamoDB.

The fetch interval is set at **60 minutes**, although this can be changed in the `app.arc` manifest.

## Setup

```sh
npm i -g @architect/architect aws-sdk
arc deploy production
```

### Configure

Create a record in the `users` table with your site's details via the DynamoDB console. You will first need to generate a token from your Micropub endpoint with `create` access for the `micropub_token` property.

|property|value|example|
|--------|-----|-------|
|`url`|your website's URL|https://barryfrost.com/|
|`micropub_endpoint`|your Micropub endpoint's URL|https://api.barryfrost.com/micropub|
|`micropub_token`|a Micropub token with `create` access|SECRET_VALUE|
|`letterboxd_user`|your Letterboxd user profile|barryf|
|`last_guid`|GUID of the most recent Letterboxd in your RSS feed|(can be null)|
