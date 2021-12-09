// here we can initialize and seed the docker-compose database
// taken from here: https://gist.github.com/gbzarelli/c15b607d62fc98ae436564bf8129ea8e
db = db.getSiblingDB('sample_db');

db.createCollection('sample_collection');

db.sample_collection.insertMany([
    {
        org: 'helpdev',
        filter: 'EVENT_A',
        addrs: 'http://rest_client_1:8080/wh'
    },
    {
        org: 'helpdev',
        filter: 'EVENT_B',
        addrs: 'http://rest_client_2:8081/wh'
    },
    {
        org: 'github',
        filter: 'EVENT_C',
        addrs: 'http://rest_client_3:8082/wh'
    }
]);