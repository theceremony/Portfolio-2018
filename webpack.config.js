

const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin =  require('webpack-livereload-plugin');


module.exports =  {
  entry: './src/js/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.pug$/,
        use: ['html-loader?attrs=false', 'pug-html-loader']
      },{
        use: [
          { loader: "style-loader"},
          { loader: "css-loader", options: { sourceMap: true }
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
        test: /\.(svg|gif|png|eot|woff|ttf)$/,
        loaders: [
          'url-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.pug',
    }),
    new LiveReloadPlugin({
      protocol:'http',
      appendScriptTag: true
    })
  ]
 }
