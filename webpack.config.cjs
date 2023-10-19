const path = require('path');

module.exports = {
    entry: {
        index: './src/app.js',
        variables: './src/modules/variables.js',
        functions: './src/modules/functions.js',
        animations: './src/modules/animations.js',
        card: './src/component/card.js',
    },
    output: {
        path: path.resolve(__dirname, dist),
        filename: '[name].bundle.js',
        clean: true,
    },
    module: { rules: [] },
    plugins: [],
    devServer: {}
}