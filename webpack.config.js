const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Uglify = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/js/app.js"
    },
    output: {
        path: __dirname+"/build",
        filename: "[name]@bundle.js"
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },

            {
                test: /.js$/,
                loader: 'babel-loader?presets[]=es2015'
            }
        ]
    },
    plugins: [
    	new ExtractTextPlugin("build/[name]@bundle.css")
        //new Uglify()
	]
};
