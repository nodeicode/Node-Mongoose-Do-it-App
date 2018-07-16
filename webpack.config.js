const webpack  = require('webpack');
const path  = require('path');
const ExtractPlugin = require('extract-text-webpack-plugin');

var javascript = {
    test:/\.js$/,
    enforce:"pre",
    exclude: /node-modules/,
     loader:'babel-loader',
    options:{presets:['env']}
};

var styles = {
    test:/\.scss$/,
    enforce:"pre",
    exclude: /node-modules/,
    use:    ExtractPlugin.extract( ['css-loader?sourceMap','sass-loader?sourceMap'])
};

const config = {
    entry:{App:'./  /.js'},

        output:{
            path:path.resolve(__dirname,'public','dist'),
            filename:'[name].bundle.js',
            publicPath:"dist"
        },

        devServer:{
            contentBase: path.join(__dirname, 'dist'),
             compress: true,
             port: 3000,
             inline:true,
             watchContentBase:true
        },

        devtool:"source-map",

        module: {
                rules:[javascript,styles]
        },

            plugins:[
                new ExtractPlugin('styles.css')
            ]

    };

module.exports = config;
