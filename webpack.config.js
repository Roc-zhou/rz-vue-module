const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const NODE_ENV = process.env.NODE_ENV
const PORT = process.env.PORT && Number(process.env.PORT)

module.exports = {
  mode: NODE_ENV,  // production Or development 环境
  entry: NODE_ENV === 'production' ? "./src/index.js" : "./src/main.js", // 入口文件
  output: {
    path: path.resolve(__dirname, "dist"), // 必须是绝对路径
    filename: "rz-vue-module.js", // 「入口分块(entry chunk)」的文件名模板（出口分块？）rz-vue-page.js
    library: 'rz-vue-module',
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true, // 压缩
    port: 8080,
    hot: true, // 热加载
    open: false, //自定打开默认浏览器
  },
  plugins: [ // 插件
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      minify: true, //压缩
      hash: false, //添加hash清除缓存
    }),
    new VueLoaderPlugin(),
    new webpack.SourceMapDevToolPlugin()
  ],
  module: {
    rules: [
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: path.resolve(__dirname, 'node_modules') // 排除文件
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
}