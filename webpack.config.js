const path = require('path');

module.exports = {
  entry: './src/index.tsx', // Update the entry point to .tsx 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-plugin-template.js',
  },
  module: {
    rules: [
      {
        test: /\.module\.css$/,  // Target CSS Modules
        use: [
          'style-loader', // Inject styles into the DOM
          {
            loader: 'css-loader',
            options: {
              esModule: false,
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]', // Class name format
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,  // Target regular CSS files
        exclude: /\.module\.css$/, // Exclude module CSS
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
      },
      {
        test: /\.tsx?$/, // Use ts-loader for .ts and .tsx files 
        exclude: /node_modules/, 
        use: 'ts-loader', 
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'], // Resolve these extensions 
  },
};
