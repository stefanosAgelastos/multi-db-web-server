// here we can initialize and seed the docker-compose database
// taken from here: https://gist.github.com/gbzarelli/c15b607d62fc98ae436564bf8129ea8e
db = db.getSiblingDB('test');

db.createCollection('students');

db.students.insertMany([
    {
        "name": "test",
        "user_name": "sample1",
        "password": "12345678",
        "semester": "1",
        "subjects": [
            {
                "subjects_name": "test"
            },
            {
                "subjects_name": "test"
            },
            {
                "subjects_name": "test"
            },
            {
                "subjects_name": "test"
            }
        ]
    },
    {
        "name": "test",
        "user_name": "sample2",
        "password": "12345678",
        "semester": "1",
        "subjects": [
            {
                "subjects_name": "test"
            },
            {
                "subjects_name": "test"
            },
            {
                "subjects_name": "test"
            },
            {
                "subjects_name": "test"
            }
        ]
    }, {
        "name": "test",
        "user_name": "sample3",
        "password": "12345678",
        "semester": "1",
        "subjects": [
            {
                "subjects_name": "test"
            },
            {
                "subjects_name": "test"
            },
            {
                "subjects_name": "test"
            },
            {
                "subjects_name": "test"
            }
        ]
    }
]);