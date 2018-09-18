

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        use: ['style-loader', 'css-loader'],
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
   }
 }
