var path = require("path")

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    libraryTarget: "commonjs2",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["es2015", "stage-2", "react"]
        }
      }
    ]
  },
  resolve: {
    extensions: [".js"],
    modules: ["node_modules"]
  },
  devtool: "source-map",
  context: __dirname,
  externals: Object.keys(require("./package.json").dependencies),
  target: "electron-main"
}
