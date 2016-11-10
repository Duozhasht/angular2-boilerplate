var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');
var path = require('path');
/*
var folders = {
	NPM: path.resolve(__dirname, './node_modules')
}
*/

var appEnv = process.env.NODE_ENV || 'development';

if (appEnv === 'production') {
	config.plugins.push(
		// Remove build related folders
		new CleanPlugin(['dist'])
	);
}


var config = {

	entry: {
		//polyfills: './src/polyfills.js',
		vendor: './src/vendor.js',
		app: './src/app/main.js'
	},
	output: {
		path: __dirname + '/dist',
		publicPath: 'http://localhost:3000/',
		filename: "[name].bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel",
				query: {
					cacheDirectory: true,
					plugins: ['transform-decorators-legacy'],
					presets: ['es2015']
				}
      		},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				loader: "raw"
			},
			      		{
        		test: /\.scss$/,
        		loader: 'raw-loader!sass-loader'
      		}


    ]
	},

	// inject js bundle to index.html
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body',
			minify: false
		})
	],

	// webpack dev server configuration
	devServer: {
		contentBase: "./src",
		inline: true,
		port: 3000,
		//noInfo: false,
		//hot: true,
		//historyApiFallback: true,
		stats: 'minimal'
	},
	debug: true,
	devtool: 'source-map-inline'
};

module.exports = config;
