const neo4j = require('neo4j-driver');

const driver = neo4j.driver(process.env.NEO_HOST, neo4j.auth.basic(process.env.NEO_USER, process.env.NEO_SECRET));
const session = driver.session();

const neo = session;

module.exports = { driver, session }


// async function cypherQuery(statement, params = {}) {
//     try {
//         const result = await session.run(statement, params);
//         await session.close();
//         return result;
//     } catch (err) {
//         throw err;
//     }
// }
// module.exports = {cypherQuery }
