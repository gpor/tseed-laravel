const mix = require('laravel-mix');



mix
  .webpackConfig({
    devtool: "inline-source-map",
  })
  .js('resources/js/app.js', 'public/js')
  .sass('resources/sass/site.scss', 'public/css')
  .sourceMaps()
;
