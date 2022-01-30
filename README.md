# Check URL Status Action
Github Action to validate and check URL response status and code

## Inputs

Name | Description | Required
--- | --- | ---
`url` | URL path to verify | `true`
`init-delay` | Initial delay before probing the `URL` (in milliseconds). Max allowed initial delay is `30s`. Deafault value is `0s` | `false`
`retry-count` | Number of retries permitted. Max allowed retry is `5`. Default value is `0` | `false`
`retry-delay` | Amount of time to wait before retrying the activity (in milliseconds). Max allowed delay is `30s`. Default value is `0s` | `false`
`codes-allowed` | List of `HTTP` response codes that are allowed. Separate them by `','` (commas). Default value is `200` status code | `false`

## Example Usage

```
jobs:
  check-url-status:
    runs-on: ubuntu-latest
    steps:
    - name: Check URL Status
        uses: gpuliyar/check-url-action@v1.0.0
        with:
          # URL path to verify (Mandatory)
          url: https://approval.example.org/berry

          # Initial delay before probing the URL (in milliseconds) (Optional)
          # default value 0 - no initial delay
          # Max allowed initial delay is 30s
          init-delay: 1000

          # Number of retries permitted. Max allowed retry is 5 (Optional)
          # default value 0 - no retries
          retry-count: 3

          # Amount of time to wait before retrying the activity (in milliseconds) (Optional)
          # default value 0 - no delay
          # Max allowed retry delay is 30s
          retry-delay: 1000

          # List of HTTP response codes that are acceptable/allowed. Separate them by ',' (commas) (Optional)
          # default value 200
          codes-allowed: 200,201,202
```

## Local Development

Refer [this](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action) document to learn more on how to create custom Github Actions (JS) 

> Checking in your node_modules directory can cause problems. As an alternative, you can use a tool called `@vercel/ncc` to compile your code and modules into one file used for distribution.

* Install `vercel/ncc` by running this command in your terminal. 
```
npm i -g @vercel/ncc
```
* Compile your `index.js` file. `ncc build index.js --license licenses.txt`
* You'll see a new `dist/index.js` file with your code and the compiled modules. You will also see an accompanying `dist/licenses.txt` file containing all the licenses of the `node_modules` you are using.
* Change the main keyword in your `action.yml` file to use the new `dist/index.js` file. `main: 'dist/index.js'`
* If you already checked in your `node_modules` directory, remove it. 
```
rm -rf node_modules/*
```
