const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
            // {
            //     test: /\.(jpg|png)$/,
            //     use: 'file-loader'
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/blush.html',
            filename: 'blush.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/bronzer.html',
            filename: 'bronzer.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/eyebrow.html',
            filename: 'eyebrow.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/eyeliner.html',
            filename: 'eyeliner.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/eyeshadow.html',
            filename: 'eyeshadow.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/foundation.html',
            filename: 'foundation.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/lipliner.html',
            filename: 'lipliner.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/lipstick.html',
            filename: 'lipstick.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/mascara.html',
            filename: 'mascara.html'
        })
    ]
}