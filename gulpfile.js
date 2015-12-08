var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var argv = require('yargs').argv;
var browserify = require('gulp-browserify');
var util = require("gulp-util");
var sourcemaps = require("gulp-sourcemaps");
var bs = require("browser-sync");

var dir = 'dist';

gulp.task('lint', function() {
    return gulp.src('src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


gulp.task('sass', function() {
    return gulp.src('sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(dir+"/"));
});

gulp.task("sass-watch",['sass'], bs.reload);

gulp.task('scripts', function() {
    return gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('ng-ui-animate.js'))
        .pipe(gulp.dest(dir))
        .pipe(uglify())
        .pipe(rename('ng-ui-animate.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dir));
});

gulp.task('serve', function(){
    bs.init({
        server: {
            baseDir: './'
        }
    });
});
gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['lint', 'scripts-watch']);
    gulp.watch('sass/**/*.scss', ['sass-watch']);

});

gulp.task("scripts-watch", ["scripts"], bs.reload);

gulp.task('default', ['serve', 'lint','sass', 'scripts', 'watch']);
