const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.ts'
    },
    devtool: 'inline-source-map',
    devServer: {
        host: '0.0.0.0',
        port: 8072,
        static: {
            directory: path.join(__dirname, 'src'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            template: './src/index.html'
        })
    ],
    resolve: {
        // Add ".ts" and ".tsx" as resolvable extensions.
        extensions: ['.ts', '.js'],
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
        filename: '[name].js',
        path: path.resolve(__dirname, 'dev')
    }
};
