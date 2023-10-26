const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');

// compile scss into css
function style(){
    return gulp.src('asset/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('asset/css'))
    .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server:{
            baseDir: './',
        }
    });
    gulp.watch('./asset/sass/*.scss', style);
    gulp.watch('./asset/sass/components/*.scss', style);
    gulp.watch('./asset/sass/import/*.scss', style);
    gulp.watch('./asset/sass/pages/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./car-database/*.html').on('change', browserSync.reload);
    gulp.watch('./sg-management/*.html').on('change', browserSync.reload);
    gulp.watch('./repair/*.html').on('change', browserSync.reload);
    gulp.watch('./brand-modellist/*.html').on('change', browserSync.reload);
    gulp.watch('./customer-listing/*.html').on('change', browserSync.reload);
    gulp.watch('./car-body-type/*.html').on('change', browserSync.reload);
    gulp.watch('./asset/css/*.css').on('change', browserSync.reload);
    gulp.watch('./asset/js/*.js').on('change', browserSync.reload);
}



exports.style = style;
exports.watch = watch;
