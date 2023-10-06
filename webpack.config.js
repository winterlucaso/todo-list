const path = require('path');

module.exports = {
  entry: './src/index.js',
  // resolve: {
  //   extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
  //   modules: ['src', 'node_modules'] // Assuming that your files are inside the src dir
  // },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/i,
  //       use: ['style-loader', 'css-loader'],
  //     },
  //   ],
  // },
  mode: "development",
};