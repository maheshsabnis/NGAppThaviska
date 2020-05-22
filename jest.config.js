// the jest-config file will perform following
// 1. look for all .spec.ts file under the src folder
// 2. read all the TypeScript config from tsconfig.json for
// all the required settings for Transpilation
// 3. In-Memory compilation
// 4. collect all the code coverage information of testing and
// write the status of code coverage in 'coverage/my-app'

const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
    preset: 'jest-preset-angular', //<---Load the Preset
    roots: ['<rootDir>/src/'], // <--- src folder
    testMatch: ['**/+(*.)+(spec).+(ts)'], //<--- spec.ts files
    setupFilesAfterEnv: ['<rootDir>/src/test.ts'], //<---Test env. setup
    collectCoverage: true, //<--- Code Coverage
    coverageReporters: ['html'], // <-- HTML Report of code coverage
    coverageDirectory: 'coverage/my-app', // <-- folder to store coverage
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
        prefix: '<rootDir>/'
    })
};