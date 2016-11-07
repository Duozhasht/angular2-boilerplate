var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var folders = {
	NPM: path.resolve(__dirname, './node_modules')
}

var CleanPlugin = require('clean-webpack-plugin');
var appEnv = process.env.NODE_ENV || 'development';

var config = {

	entry: {
		//route for app
		app: './src/app/main.js',
		//external imports (zone rxjs)
		vendor: './src/app/vendor.js'
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: "[name].bundle.js"
	},
	debug: true,
	devtool: 'source-map-inline',

	module: {
		loaders: [
      		// load and compile javascript
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
      		//compile index.html
			{
				test: /\.html$/,
				exclude: /node_modules/,
				loader: "raw"
			},

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
		noInfo: false,
		hot: false
	}
};



if (appEnv === 'production') {
	config.plugins.push(
		// Remove build related folders
		new CleanPlugin(['dist'])
	);
}

module.exports = config;
