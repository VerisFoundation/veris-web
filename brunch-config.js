exports.files = {
  javascripts: { joinTo: 'app.js' },
  stylesheets: { joinTo: 'app.css' }
}

exports.plugins = {
  postcss: { processors: [require('autoprefixer')] }
}
