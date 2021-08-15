# plop-generator
Project Generator - Micro-generator framework that makes it easy for an entire team to create web project files with a level of uniformity.


### Prerequisites
* NodeJS LTS

### Getting Started
**Install plop-generator**

```
npm i -g @deboxsoft/plop-generator
```

Create a sym link so you can use the cli command:

`npm link @deboxsoft/plop-generator`

## Usage with custom cli command

`plop-gen` - For example:

```
➜  plop-generator git:(master) ✗ plop-gen
? workspace: (Use arrow keys)
  component-lib
❯ create-react-app
  cypress-e2e
  gatsby
  gatsby-contentful
  next
  node-backend-service
(Move up and down to reveal more choices)
```

## Usage without custom cli command

```
// package.json
{
  "scripts": {
    "plop": "./node_modules/@deboxsoft/plop-generator/bin/cli.js"
  },
  ...
}
```

NPM Example: `npm run plop`

This command will scaffold/bootstrap the selected project using the template files in the plop generator repo.

## Generators project

| NAME                            | Description                                                                              | Status            |
| ------------------------------- | -----------------------------------------------------------------------------------------| -------------------
| `SVELTE-APP`                     | Svelte Scafolding, CI/CD Build Pipelines                                                | NOT STARTED       |
| `COMPONENT-LIB`                 | Svelte Component with Storybook and CI/CD Build Pipelines                                | IN PROGRESS       |
| `CYPRESS E2E`                   | Cypress Headless Browser Functional/Integration/E2E Test Suite                           | READY             |
| `GATSBY`                        | Svelte-based open source framework for creating websites and apps. CI/CD Build Pipelines | IN REVIEW         |
| `GATSBY-CONTENTFUL`             | Gatsby/Contentful CMS Project Template with CI/CD Build Pipelines                        | READY             |
| `NEXT`                          | React framework with Storybook, CI/CD Build Pipelines and some flavor                    | NOT STARTED       |
| `NODE-BACKEND-SERVICE`          | Non-REST Internal NodeJS/Typescript Service with CI/CD Pipelines                         | READY             |
| `NODE-EXPRESS`                  | NodesJS/Express HTTP REST Server with middleware, utils, and CI/CD pipelines             | READY             |
| `NODE-FASTIFY`                  | NodesJS/Fastify HTTP REST API Server with middleware, utils, and CI/CD pipelines         | IN PROGRESS       |
| `NODE-GQL`                      | NodesJS Apollo GraphQL Server with middleware, utils, and CI/CD pipelines                | READY             |
| `SERVERLESS-CLOUD-FUNCTIONS`    | Google/Firebase Cloud Functions with CI/CD pipelines                                     | READY             |
| `SERVERLESS-AZURE-FUNCTIONS`    | Azure SAM Functions with CI/CD pipelines                                                 | NOT STARTED       |
| `SERVERLESS-LAMBDA-FUNCTIONS`   | AWS SAM Lambda Functions with CI/CD pipelines                                            | NOT STARTED       |
| `SHARED-LIB`                    | Shared/Common Util Workspace                                                             | IN PROGRESS       |

## Generators Module
| NAME                            | Description                                                                               |                   |
|---------------------------------|-------------------------------------------------------------------------------------------|-------------------|
| `API`                           | Module API                                                                                | PROGRESS          |

## Full Example

```
> plop

? workspace: (Use arrow keys)
❯ create-react-app
  gatsby
  next
  node-backend-service
  node-express
  node-fastify
  node-gql
(Move up and down to reveal more choices)
? organization name test-org
? workspace name test-app
⠋ Install Dependencies
✔  ++ /test-app/.env
✔  ++ /test-app/Dockerfile
✔  ++ /test-app/codegen.yml
✔  ++ /test-app/docker-compose.yaml
✔  ++ /test-app/package.json
✔  ++ /test-app/src/app.ts
-  --SKIPPED /test-app/src/middleware/limiter.middleware.ts
✔  ++ /test-app/src/middleware/token.middleware.ts
✔  ++ /test-app/src/server.ts
...
... npm install
...
```

## Development

> TODO: Add docs on how to add/extend generators

## Contributions

Read the contribution [documentation](./docs/CONTRIBUTING.md).
