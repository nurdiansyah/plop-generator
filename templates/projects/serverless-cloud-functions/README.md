# {{name}} Cloud Functions

## Description
These are Google/Firebase Cloud Functions.

#### Prerequisites
1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Google Cloud Storage API][storage_api].
1.  [Set up authentication with a service account][auth] so you can access the API from your local workstation.
1. To learn how to get started with Cloud Functions for Firebase by having a look at our [Getting Started Guide](https://firebase.google.com/docs/functions/get-started), trying the [quickstart samples](/quickstarts) and looking at [the documentation](https://firebase.google.com/docs/functions)

#### Getting Started
* Install via `npm i`
* Run the app via `npm start`
* Run unit/integration tests via `npm run test`

#### CI/CD Pipeline(s)
This application is currently deployed through Google Cloud Build from the `/pipelines` directory.

###  Cloud Functions Links
* [cloud functions][service]
* [cloud functions monitoring and error reporting][monitoring]
* [cloud build][build-triggers]

[service]: https://console.firebase.google.com/u/1/project/{{projectId}}/functions/list
[monitoring]: https://console.firebase.google.com/u/1/project/{{projectId}}/functions/logs?search=&&severity=DEBUG
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[auth]: https://cloud.google.com/docs/authentication/getting-started
[build-triggers]: https://console.cloud.google.com/cloud-build/triggers?authuser=1&project={{projectId}}
