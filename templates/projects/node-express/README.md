# {{dashCase name}}-api
##### APIs (REST/HTTP)

#### Prerequisites
// INSERT

#### Getting Started:
* Install dependencies: `npm install`
* Start the server: `npm start` OR `make up`

#### Generate JSON Schema
* Run local script: `npm run schema`
> This will generate a schema.json file from the interfaces directory

#### Load Test via Artillery
* Run local script: `npm run test:load`

#### CI/CD Pipeline(s)
This application is currently deployed from the `/pipelines` directory.

## Environment variables

Environment variables controls how the app behave. This are the env vars used/required by the application:

| Variable                        | Description                                                                         |
| ------------------------------- | ----------------------------------------------------------------------------------- |
| `PORT`                          | Port where app will run. |
| `LOG_LEVEL`                     | Controls amount of info to log. Ex: `trace` `debug` `info` `warn` `error` `fatal`   |
| `GOOGLE_APPLICATION_CREDENTIALS`| Provide authentication credentials to your application code. For more info check [Set up authentication with a service account][auth]|
| `CLIENT_URL`                    | Client Domain HOST Origin - CORS Whitelist                                          |

[auth]: https://cloud.google.com/docs/authentication/getting-started
