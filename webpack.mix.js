const mix = require('laravel-mix')

require('laravel-mix-twig');

mix
  .setPublicPath('public')
  .sass('src/assets/scss/main.scss', 'css')
  .twig({
    root: 'src/templates/pages', 
    output: '.',
  })
  .copy('src/assets/img', 'public/img')
  .browserSync({
    server: './public',
    files: './src',
  })
