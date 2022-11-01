

const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV

module.exports = {

    entry: './src/index.js',

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'

    },

    mode: NODE_ENV,

    devServer: {
        static: {
            directory: path.join(__dirname, './build'),
            publicPath: '/'
        }
    },
    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },

    plugins : [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ]


}