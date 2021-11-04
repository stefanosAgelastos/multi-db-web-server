module.exports = async function () {
    // we do not need to close the DB
    // await global.__DB__.close();
    // But we can use this function whenever we run some cleanup after finishing the tests
};