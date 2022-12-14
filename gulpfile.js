const {src, dest} = require('gulp');

const inlineCss = require('gulp-inline-css');

const html = () => {
  return src('./source/favorites.html')
    .pipe(inlineCss({
      applyTableAttributes: true,
      preserveMediaQueries: true,
      removeHtmlSelectors: true
    }))
    .pipe(dest('./'));
};

exports.html = html;
