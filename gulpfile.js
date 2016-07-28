var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('jade', function() {
    return gulp.src('./public/jade/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./public/views/'))
});


gulp.task('sass', function() {
    return gulp.src('./public/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css/'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function() {
    gulp.watch('./public/jade/lib/*.jade', ['jade']);
    gulp.watch('./public/jade/*.jade', ['jade']);
    gulp.watch('./public/sass/lib/*.scss', ['sass']);
});

gulp.task('default', ['jade', 'sass', 'watch']);