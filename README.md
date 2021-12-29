# Own My Letterboxd

Polls your Letterboxd RSS feed and posts new film reviews to your Micropub endpoint using `h-review`.

The interval is set at 10 minutes, although this can be changed in the `app.arc` file.

## Setup

Deploy to AWS using the [Architect framework](https://arc.codes).

```sh
npm i -g @architect/architect aws-sdk
arc deploy production
```

### Configure

Create a record in the `users` table with your site's details via the DynamoDB console with the following values. You will first need to generate a token from your Micropub endpoint with `create` access for the `micropub_token` property.

|property|value|example|
|--------|-----|-------|
|`url`|your website's URL|https://barryfrost.com/|
|`micropub_endpoint`|your Micropub endpoint's URL|https://api.barryfrost.com/micropub|
|`micropub_token`|a Micropub token with `create` access|SECRET_VALUE|
|`letterboxd_user`|your Letterboxd user profile|barryf|
|`last_guid`|GUID of the most recent Letterboxd in your RSS feed|(can be null)|
