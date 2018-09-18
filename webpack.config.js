

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
   loaders: [
     {
       test: /\.css$/,
       loaders: [
         'style-loader',
         'css-loader'
       ]
     }
   ]
 }
}
