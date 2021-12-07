# Login and Registration for Roll call application

![Diagram](.docs/report_system_schema.drawio.png)

Unit tests for exam project of the Testing subject.

## How to run the application

In the root directory of the project run:

```
npm install
docker-compose up
node server.js
```

Now you can just access the `localhost:{$PORT}/register`

You can use these credentials in order to register:

- email: Ole1234@kea.dk
- activation code: Ole1234

## How to run the tests

In the root directory of the project run:

```
npm install
docker-compose up
npm run test
```

### Prerequisites

You need npm, node, docker, docker-compose

You also need to copy the `.env-sample` to a `.env` file, and add values to the evnironment variables.
