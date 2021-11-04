// jest configuration file docs: https://jestjs.io/docs/configuration

module.exports = async () => {
    return {
        verbose: true,
        globalSetup: "./tests/globalSetup.js",
        globalTeardown: "./tests/globalTeardown.js"
    };
};