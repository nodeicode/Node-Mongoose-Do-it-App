const webpack  = require('webpack');
const path  = require('path');
const ExtractPlugin = require('mini-css-extract-plugin');

var javascript = {
    test:/\.js$/,
    enforce:"pre",
    exclude: /node-modules/,
     loader:'babel-loader',
    options:{presets:['env']}
};

var styles = {
    test:/\.sass$/,
    enforce:"pre",
    use: [ExtractPlugin.loader,
    'css-loader',
    'sass-loader'
    ]
};

const config = {
    entry:{App:'./public/styles/bulma.sass'},
    mode:'development',

        output:{
            path:path.resolve(__dirname,'public','dist'),
            filename:'[name].bundle.js',
            publicPath:"dist"
        },

        devServer:{
            contentBase: path.join(__dirname, 'dist'),
             compress: true,
             watchContentBase:true,
             port: 3000,
             inline:true,
            overlay:{warnings:true,errors:true}
        },

        devtool:"source-map",

        module: {
                rules:[styles]
        },

            plugins:[
                new ExtractPlugin({
                    filename:"[name].css",
                    chunkFilename:"[id].bundle.css"
                })
            ]

    };

module.exports = config;
