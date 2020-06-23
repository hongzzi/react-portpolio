const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname + "/build")
    },
    mode: "none",
    devServer: {
        contentBase: path.resolve("./build"),
        index: "index.html",
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules",
                use: ['babel-loader'],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true } // 코드 최적화
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'test-style.css'
        }),
        new CleanWebpackPlugin()
    ]
}