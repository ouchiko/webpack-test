var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/js/app.js"
    },
    output: {
        path: __dirname+"/build",
        filename: "[name]@bundle.js"
    },
    module: {
        loaders: [
            {
                test: /.css$/,
                loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})
            }
        ]
    },
    plugins: [
    	new ExtractTextPlugin("build/[name]@bundle.css")
	]
};
