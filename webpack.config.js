const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'smiile-publish.min.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "var",
        library: 'SmiilePublish',
    },
};
