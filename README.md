# Roll call application, KEA study project with a nodejs backend and mutliple database architecture

## About the Use Cases

1. Teacher Logins and Generates self expiring code for the subject
2. Student Logs In and Uses the code to update their attendance status for the Subject
3. Teacher can see the present Students in a subject for:
   - today
   - this week
   - this month
   - this year
4. Student can see Attendnance for each of their Subjects:
   - today
   - this week
   - this month
   - this year

## How to start the databases for local development

Look for more documentation at the `docker-compose.yml`.

```
docker-compose up
```

## How to start up MySQL Server + application (to-be-updated)

#### Prerequisites: 
- Run 'npm uninstall bcrypt' (only if running windows and already built this on your pc. Bcrypt dependencies can not work with other OS than the one they are built in)

#### The Build:
- Run 'docker-compose up' (this will the MySQL server as well as the App)

### mysql

The first time you run this command it will spin up an empty mysql DB and then it will run all the scripts in `./sql`

Shut down with ctrl+C . Any changes you make are persisted in the `sqldb` volume and will be available next time you run `docker-compose up`.

## mongo

## graph

## How to restart from an empty database

```
docker-compose down -v
```

## mysql

This will remove the containers and the `sqldb` volume, so all DB data are removed.
This is useful when you make changes to the schema and you want to rerun the DDL scripts on your local machine.

## How to connect to container db and run a sript

```
cat ./path-to-your-script-here.sql | mysql -h 127.0.0.1 -P 3306 -u root -pdatabases
```

## How to generate sequelize models from the dabase tables

[sequelize-auto documentation](https://www.npmjs.com/package/sequelize-auto)

We can use this library to auto-generate our javascript models.

We can run this command `sequelize-auto -h localhost -d rollcall_db -u root -x databases -p 3306 --dialect mysql -o ./models/ -v true`

We have made a shortcut for this command at out `package.json`, so one can just run `npm run generate-models`

Remember that the databse must be up and running when you run this command.
