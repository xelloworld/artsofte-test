const {src, dest, parallel, series, watch} = require('gulp');
const del           = require('del');
const sass          = require('gulp-sass')(require('sass'));
const autoprefixer  = require('gulp-autoprefixer');
const groupCssMedia = require('gulp-group-css-media-queries');
const uglify        = require('gulp-uglify-es').default;
const rename        = require('gulp-rename');
const fileInclude   = require('gulp-file-include');
const imageMin      = require('gulp-imagemin');
const imageMinWebp  = require('imagemin-webp');
const newer         = require('gulp-newer');
const plumber       = require('gulp-plumber');
const browserSync   = require('browser-sync').create();

const clean = () => {
  return del('app/*');
};

const scss2css = () => {
  return src('src/scss/*.scss')
  .pipe(
    sass({
      outputStyle: 'expanded'
    })
  )
  .pipe(
    autoprefixer({
      overrideBrowserslist: ["last 5 versions"],
      grid: true
    })
  )
  .pipe(
    groupCssMedia()
  )
  .pipe(
    dest('app/css/')
  )
  .pipe(
    sass({
      outputStyle: 'compressed'
    })
  )
  .pipe(
    rename({
      suffix: '.min'
    })
  )
  .pipe(
    dest('app/css/')
  )
  .pipe(
    browserSync.stream()
  );
};

const js = () => {
  return src('src/js/*.js')
  .pipe(plumber())
  .pipe(
    fileInclude({
      prefix: '@',
    })
  )
  .pipe(
    dest('app/js/')
  )
  .pipe(uglify(/* options */))
  .pipe(
    rename({
      suffix: ".min"
    })
  )
  .pipe(
    dest('app/js/')
  )
  .pipe(
    browserSync.stream()
  );
};

const htmlInclude = () => {
  return src('src/html/*.html')
  .pipe(plumber())
  .pipe(
    fileInclude({
      prefix: '@',
    })
  )
  .pipe(
    dest('app/')
  )
  .pipe(
    browserSync.stream()
  );
};

const fonts = () => {
  return src (
    'src/assets/fonts/*'
  )
  .pipe(
    newer('app/fonts/')
  )
  .pipe(
    dest('app/fonts/')
  )
  .pipe(
    browserSync.stream()
  );
}

const favicon = () => {
  return src ([
    'src/assets/favicon/*', '!src/assets/favicon/*.{md,html}'
  ])
  .pipe(
    dest('app/')
  )
  .pipe(
    browserSync.stream()
  );
}

const optimizeImage = () => {
  return src(
    'src/assets/images/**/*.{jpg,png,gif,ico,webp}'
  )
  .pipe(
    imageMin([
      imageMinWebp({
        quality: 75
      })
    ])
  )
  .pipe(
    rename({
      extname: ".webp"
    })
  )
  .pipe(
    dest('app/img/')
  )
  .pipe(src(
    'src/assets/images/**/*.{jpg,png,svg,gif,ico,webp}'
  ))
  .pipe(
    newer('app/img/')
  )
  .pipe(
    imageMin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      interlaced: true,
      optimizationLevel: 3 // 0 to 7
    })
  )
  .pipe(
    dest('app/img/')
  )
  .pipe(
    browserSync.stream()
  );
};

const liveServer = () => {
  browserSync.init({
    server: {
      baseDir: 'app/'
    },
    ghostMode: {
      clicks: false,
      forms: false,
      scroll: false
    },
    notify: false,
    open: false,
    online: true
  });
  watch('src/scss/**/*.scss', scss2css).on('change', browserSync.reload);
  watch('src/js/**/*.js', js);
  watch('src/html/**/*.html', htmlInclude);
  watch('src/assets/fonts/*', fonts);
  watch('src/assets/faicon/*', favicon);
  watch('src/assets/images/**/*.{jpg,png,svg,gif,ico,webp}', optimizeImage);
};

exports.server   = liveServer;
exports.imagemin = optimizeImage;

exports.default = series(clean, parallel(scss2css, js, htmlInclude, fonts, favicon, optimizeImage), liveServer);
