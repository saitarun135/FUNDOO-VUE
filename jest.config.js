module.exports = {
    moduleNameMapper:{
    "~(.*)$": "<rootDir>/resources/js/$1",
    },
    setupFilesAfterEnv: ['<rootDir>resources/src/tests/setup.js'],
    resolver: require.resolve(`jest-pnp-resolver`),
    testEnvironment: `node`,
};
