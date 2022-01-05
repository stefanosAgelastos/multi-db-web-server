// here we can initialize and seed the docker-compose database
// taken from here: https://gist.github.com/gbzarelli/c15b607d62fc98ae436564bf8129ea8e
db = db.getSiblingDB('test');

db.createCollection('teachers');

db.teachers.insertMany([
    {
        "name": "Tomas P",
        "user_name": "TOMP@kea.dk",
        "password": "12345678",
        "semester": "1",
        "subjects": [
            {
                "subjects_name": "Database"
            },
            {
                "subjects_name": "Fullstack"
            }
        ]
    },
    {
        "name": "Andrea C",
        "user_name": "ANDC@kea.dk",
        "password": "12345678",
        "semester": "1",
        "subjects": [
            {
                "subjects_name": "DLS"
            },
            {
                "subjects_name": "Design Patterns"
            }
        ]
    }, {
        "name": "Jarl Tuxen",
        "user_name": "JART@kea.dk",
        "password": "12345678",
        "semester": "2",
        "subjects": [
            {
                "subjects_name": "Python"
            },
            {
                "subjects_name": "Design Pattern"
            },
            {
                "subjects_name": "System Intregation"
            }
        ]
    }
]);