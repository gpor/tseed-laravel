const mix = require('laravel-mix');
const path = require('path')


mix
  .webpackConfig({
    devtool: "inline-source-map",
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        '~': path.join(__dirname, './resources/'),
      },
    },
  })
  .vue()
  .js('resources/js/app.js', 'public/js')
  .sass('resources/sass/site.scss', 'public/css')
  .sourceMaps()
;
