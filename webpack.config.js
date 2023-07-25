// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
		}),
	],
	devServer: {
		static: path.join(__dirname, "dist"),
		compress: true,
		port: 3000,
		hot: true,
	},
	resolve: {
		extensions: [".js", ".mjs"],
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
	devtool: "inline-source-map",
	target: "web",
};
