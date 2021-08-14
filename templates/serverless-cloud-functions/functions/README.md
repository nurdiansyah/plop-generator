# Oregon Employment Department PUA Cloud Functions

## Description
These are cloud functions used for background procssing of PUA applications as well as claimant extract ingestion services.

#### Prerequisites
1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Google Cloud Storage API][storage_api]. (Add Bucket names: `oregon-pua-to-oed, oregon-pua-pin-uploads, oregon-pua-nightly-pin-uploads, oregon-pua-pdf-uploads`)
1.  [Enable the Google Cloud Run API][cloudrun-api].
1.  [Set up authentication with a service account][auth] so you can access the API from your local workstation.
1. To learn how to get started with Cloud Functions for Firebase by having a look at our [Getting Started Guide](https://firebase.google.com/docs/functions/get-started), trying the [quickstart samples](/quickstarts) and looking at [the documentation](https://firebase.google.com/docs/functions)

#### Getting Started
* Install via `npm i`
* Run the app via `npm start`
* Run unit/integration tests via `npm run test`

#### CI/CD Pipeline(s)
This application is currently deployed through Google Cloud Build from the `/pipelines` directory.

#### CSV Extract
There is a Google Cloud Function Storage Trigger on the pua-pin storage bucket that will doing the following:
* Download the CSV to the container's tmp directory
* Parsed the CSV to JSON
* Create/Update user in Firebase Auth
* Create/Update user with claimant extract in Firestore
* Create a report in Firestore
* Remove temp CSV file from container to clean up disk space

[client-docs]: https://googleapis.dev/nodejs/storage/latest
[product-docs]: https://cloud.google.com/storage
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[storage_api]: https://console.cloud.google.com/flows/enableapi?apiid=storage-api.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
[pubsub-api]: https://console.cloud.google.com/flows/enableapi?apiid=pubsub.googleapis.com
[cloudrun-api]: http://console.cloud.google.com/apis/library/run.googleapis.com
