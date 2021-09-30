# Roll call application, school project with a backend and mutliple database architecture

## Spin up a mysql server

```
docker-compose up
```

## Create Database and Tables

```
cat ddl.sql | mysql -h 127.0.0.1 -P 3306 -u root -pdatabases
```

## Seed database with data

```
cat test-data.sql | mysql -h 127.0.0.1 -P 3306 -u root -pdatabases
```
