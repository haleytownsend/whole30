module.exports = {
//   PORT: process.env.PORT || 3000,
//   // other stuff
//   API_BASE_URL: process.env.REACT_APP_API_BASE_URL ||
//     "http://localhost:5000/Recipe"
// };

  entry: [
    './src/App.js'
  ],
  output: {
    path:__dirname,
    filename: 'app.js'
  },
  module: {
    loader: [{
      test: /\.jsx?$/,
      loader: 'babel'
    }]
  },
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL ||"http://localhost:5000/Recipe"
};
