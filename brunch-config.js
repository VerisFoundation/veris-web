exports.files = {
  javascripts: { joinTo: 'app.js' },
  stylesheets: { joinTo: 'app.css' }
}

exports.modules = {
  autoRequire: {
    'app.js': ['main']
  }
}

exports.plugins = {
  postcss: { processors: [require('autoprefixer')('last 8 versions')] },
  babel: {
    presets: [
      [
        'env',
        {
          targets: {
            browsers: ['last 2 versions', 'safari >= 7']
          }
        }
      ]
    ]
  }
}
