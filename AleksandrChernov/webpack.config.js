const path = require('path'),
HTMLplugin = require('htm-webpack-plugin');


module.export = {
    entry: {
        main: path.resolve(__dirname, 'src', 'index.jsx'),
    },
    output: {
        main: path.resolve(__dirname, 'dist'),
        filenamt: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules :[
            {
                test:/\.jsx?$/,
                exclude: /node_modules/,
                use: {
                loader: 'babel-loader',
                }
            }, 
            {
                test: /\.sass$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader",
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HTMLplugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
        filename: 'index.html'
        }),
    ],
}