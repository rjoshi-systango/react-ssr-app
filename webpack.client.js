module.exports = {
    entry: "./src/index.js",
    devtool: "source-map",
    output: {
        path: __dirname + '/build/',
        filename: "browser.js"
    },
    module: {
        rules: [
            {
                test: /\.(jsx|es6|js)$/,
                exclude: /node_modules|examples/,
                use: "babel-loader"
            },
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader']
            // },
            {
                test: /\.css$/i,
                use: ["ignore-styles"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: ['file-loader'],
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.es6', '.json']
    }
};
