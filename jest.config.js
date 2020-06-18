module.exports = {
    moduleFileExtensions: ['js', 'vue'],

    transform: {
        '^.+\\.jsx?$': 'babel-jest'
    },
    // 忽略掉api相关的
    testMatch: ['<rootDir>/tests/*.spec.js'],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/*.js',
    ]
};
