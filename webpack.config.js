const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const getComponentEntries = require('./build/util')

const NODE_ENV = process.env.NODE_ENV

const demoPage = false

module.exports = {
  mode: NODE_ENV === 'production' ? 'production' : 'development',  // production Or development 环境
  entry: NODE_ENV !== 'production' ? {
    index: "./src/main.js"
  } : {
      ...getComponentEntries('src/components'),
      index: "./src/index.js", // 入口文件
    },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true, // 压缩
    port: 8080,
    hot: true, // 热加载
    open: false, //自定打开默认浏览器
  },
  output: {
    path: path.resolve(__dirname, "docs"), // 必须是绝对路径
    filename: "js/[name].[hash].js" // 「入口分块(entry chunk)」的文件名模板（出口分块？）rz-vue-page.js
  },
  plugins: [ // 插件
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
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
  devtool: '', //NODE_ENV === 'production' ? '#source-map' : '#eval-source-map'
  performance: {
    hints: false
  }
}

if (NODE_ENV === 'production') { // 打包上传包
  module.exports.output = {
    path: path.resolve(__dirname, "lib"), // 必须是绝对路径
    filename: "[name].js", // 「入口分块(entry chunk)」的文件名模板（出口分块？）rz-vue-page.js
    library: 'rz-vue-module',
    libraryTarget: "umd",
    umdNamedDefine: true
  }
}

if (NODE_ENV !== 'production') {
  module.exports.plugins.push(new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './index.html',
    minify: true, //压缩
    hash: false, //添加hash清除缓存
  }))
}