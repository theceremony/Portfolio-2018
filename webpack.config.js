

const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin =  require('webpack-livereload-plugin');
const json = require('./src/projects.json');
const NgrockWebpackPlugin = require('ngrock-webpack-plugin')
module.exports =  {
   mode: 'development',
  entry: './src/js/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
      
    },
  module: {
    rules: [
      {
        test: /\.ejs$/,
        loader: "underscore-template-loader"
      },
      {
        test: /\.pug$/,
        use: [
          { loader: 'html-loader?attrs=false'},
          { loader:'pug-html-loader' }
          ]
      },{
        use: [
          { loader: "style-loader"},
          { loader: "css-loader", options: { sourceMap: true }}
        ],
        test: /\.css$/
      },{
      	test: /\.scss$/,
        use: [
          { loader: "style-loader"},
          { loader: "css-loader", options: { sourceMap: true }},
          { loader: "sass-loader", options: { sourceMap: true }}
        ]
      },{
        test: /\.(jpg|svg|gif|png)$/,
        use:[
          {
            loader:'file-loader',
            options: { name: 'images/[hash]-[name].[ext]'}
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/template.index.ejs',
      data: json,
    }),
    new LiveReloadPlugin({
      protocol:'http',
      appendScriptTag: true
    }),
    new NgrockWebpackPlugin()
  ]
 }
