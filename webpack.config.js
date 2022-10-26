const path = require('path');

module.exports = {
    mode: 'production',
    target: 'web',
    entry: './src/local-storage.js',
    output: {
        library: 'ls',
        filename: 'local-storage.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },
};