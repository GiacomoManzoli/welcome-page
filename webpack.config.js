const path = require("path")

module.exports = {
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    devtool: "source-map",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "index.umd.js",
        path: path.resolve(__dirname, "dist"),
        // library: "StartPage",
        // libraryTarget: "umd",
        // umdNamedDefine: true,
    },
}
