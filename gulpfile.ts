let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'src'
        },
    });
});

gulp.task('scss2css', function () {
    gulp.src('./src/assets/css/admin/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/assets/css/admin/'))
        .pipe(browserSync.reload({
            stream: true
        }));
    gulp.src('./src/assets/css/frontend/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/assets/css/frontend/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', ['browserSync', 'scss2css'], function () {
    gulp.watch('./src/assets/css/admin/**/*.scss', ['scss2css']);
    gulp.watch('./src/assets/css/frontend/**/*.scss', ['scss2css']);
});

gulp.task('default', ['watch']);
