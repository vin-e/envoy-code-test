var gulp = require('gulp');

/*
    gulp plugins
*/
// css plugins
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var bourbon = require('node-bourbon').includePaths;
var neat = require('node-neat').includePaths;
// process plugins
var browserSync = require('browser-sync').create();
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var del = require('del');
var runSequence = require('run-sequence');
var print = require('gulp-print');

const babel = require('gulp-babel');

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
});

gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass({
            includePaths: ['styles'].concat(bourbon).concat(neat)
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('js', function() {
    var b = browserify({
        entries: './src/js/app.js',
        debug: true
      })
    .transform(babelify.configure({
        presets: ["env"]
      }));

    return b.bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(babel({ presets: ['env'] }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
        .pipe(browserSync.reload({
            stream: true
        }));
})

gulp.task('useref', function() {
    return gulp.src('src/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('images', function() {
    return gulp.src('src/images/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', function() {
    return gulp.src('src/css/fonts/**/*.+(eot|otf|svg|ttf|woff)')
        .pipe(gulp.dest('dist/css/fonts'));
});

gulp.task('clean:dist', function() {
    return del.sync('dist');
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/*.html', ['useref']);
    gulp.watch('src/js/**/*.js', ['js']);
});

gulp.task('build', function (callback) {
  runSequence('clean:dist',
    ['js', 'sass', 'useref', 'images', 'fonts'],
    callback
  )
});

gulp.task('default', function (callback) {
    runSequence(['js', 'sass', 'useref', 'images', 'fonts', 'browser-sync', 'watch'],
        callback
    )
});