var webpack = require('webpack');
var path = require('path');
var jqueryPath = path.resolve(__dirname, 'node_modules/jquery/dist/jquery.min.js');
var swiperPath = path.resolve(__dirname, 'bower_components/Swiper/dist/js/swiper.jquery.min.js');
var lazyloadPath = path.resolve(__dirname, 'node_modules/jquery-lazyload/jquery.lazyload.js');
var inobouncePath = path.resolve(__dirname, 'bower_components/inobounce/inobounce.min.js');

module.exports = {
    entry: {
        app: [
            /*'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8080',*/
            './main'
        ],
        vendors: ['jquery', 'swiper', 'inobounce', 'lazyload']
    },
    output: {
        path: path.join(__dirname, '/public/js/'),
        filename: 'bundle.js',
        publicPath: "/public/"
    },
    resolve: {
        alias: {
            'jquery': jqueryPath,
            'swiper': swiperPath,
            'lazyload': lazyloadPath,
            'inobounce': inobouncePath
        }
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000'
        }, {
            test: jqueryPath,
            loader: "expose?jQuery"
        }],
        noParse: [jqueryPath, swiperPath, lazyloadPath, inobouncePath]
    },

    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Swiper: 'swiper'
        })
    ]
}