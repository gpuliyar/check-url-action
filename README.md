# Check URL Status Action
Github Action to validate and check URL response status and code. The Action is useful if a developer wants to check an URL or API before they want to trigger a integration testing job.

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
        uses: gpuliyar/check-url-action@v1.0.1
        with:
          # URL path to verify (Mandatory)
          url: https://approval.example.org/berry

          # Initial delay before probing the URL (in milliseconds) (Optional)
          # default value 0 - no initial delay
          # Max allowed initial delay is 30s
          init-delay: 1000

          # Number of retries permitted. 
          # Max allowed retry is 5 (Optional)
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
