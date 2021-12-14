// here we can initialize and seed the docker-compose database
// taken from here: https://gist.github.com/gbzarelli/c15b607d62fc98ae436564bf8129ea8e
db = db.getSiblingDB('test');

db.createCollection('students');

db.students.insertMany([
    {
        "name": "TariqZ",
        "user_name": "Tariq@kea.dk",
        "password": "12345678",
        "semester": "1",
        "subjects": [
            {
                "subjects_name": "Database"
            },
            {
                "subjects_name": "DLS"
            },
            {
                "subjects_name": "Testing"
            }
        ]
    },
    {
        "name": "StefA",
        "user_name": "StefA@kea.dk",
        "password": "12345678",
        "semester": "1",
        "subjects": [
            {
                "subjects_name": "Database"
            },
            {
                "subjects_name": "DLS"
            },
            {
                "subjects_name": "Testing"
            }
        ]
    }, {
        "name": "AnneM",
        "user_name": "AnneM@kea.dk",
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
            },
            {
                "subjects_name": "Java"
            }
        ]
    }
]);