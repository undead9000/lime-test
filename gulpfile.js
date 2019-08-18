    var gulp = require('gulp');
    var sass = require('gulp-sass');
    var concat = require('gulp-concat');
    var uglify = require('gulp-uglify');
    gulp.task('sass', function () {
      return gulp.src('./sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
    });
    gulp.task('scripts', function() {
      return gulp.src('src/**/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
    });
    gulp.task('watch', ['sass', 'scripts'], function() {
      gulp.watch('css/**/*.sass', ['sass']);
      gulp.watch('src/**/*.js', ['scripts']);
    });