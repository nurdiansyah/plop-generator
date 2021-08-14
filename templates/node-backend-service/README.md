# {{name}} Service

## Description
A NodeJS Internal Service

#### Getting Started
* Install via `make build` OR `npm i`
* Run the app via `make up` OR `npm start`

#### CI/CD Pipelines
This application is currently deployed from the `/pipelines` directory.

## Environment variables

Environment variables controls how the app behave. This are the env vars used/required by the application:

| Variable                        | Description                                                                         |
| ------------------------------- | ----------------------------------------------------------------------------------- |
| `PORT`                          | Port where app will run. |
| `LOG_LEVEL`                     | Controls amount of info to log. Ex: `trace` `debug` `info` `warn` `error` `fatal`   |
| `GOOGLE_APPLICATION_CREDENTIALS`| Provide authentication credentials to your application code.                        |
