var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: __dirname,
	devtool: debug ? "inline-sourcemap" : null,
	entry: "./src/index.jsx",
	output: {
		path: __dirname + "/build",
		filename: "statusy-react.min.js",
	},
	node: {
		console: false,
		global: true,
		process: true,
		Buffer: true,
		__filename: "mock",
		__dirname: "mock",
		setImmediate: true
	},
	externals: {
		fs: '{}',
		tls: '{}',
		net: '{}',
		console: '{}',
	},
	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			mangle: false,
			sourcemap: false
		}),
	],
	module: {
		loaders: [{
			test: /\.json$/,
			loader: 'json'
		}, {
			test: /\.jsx$/,
			loader: "jsx-loader"
		}, {
			test: /\.jsx$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		}],
	}
};
