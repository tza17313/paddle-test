const path = require('path');
module.exports = {
    mode: 'production',
    entry: {
        index: [path.resolve(__dirname, './m/index')]
    },
    resolve: {
        // Add ".ts" and ".tsx" as resolvable extensions.
        extensions: ['.js'],
        fallback: {
            fs: false,
            crypto: false,
            path: false
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.txt$/,
                loader: 'raw-loader',
                exclude: /node_modules/
            }
        ]
    },
    output: {
        filename: 'ocr.min.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: ['paddlejs', 'ocr'],
        globalObject: 'this',
        publicPath: '/'
    }
};
