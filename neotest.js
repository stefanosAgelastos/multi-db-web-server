require('dotenv').config();
const neo = require('./connectors/db.neo');


async function test() {
    const personName = 'ArchanaTest3'

    try {
        const result = await neo.session.run(
            'CREATE (a:Person {name: $name}) RETURN a',
            { name: personName }
        )

        const singleRecord = result.records[0]
        const node = singleRecord.get(0)

        console.log(node.properties.name)
    } finally {
        await neo.session.close()
    }

    // on application exit:
    await neo.driver.close()
}
test();