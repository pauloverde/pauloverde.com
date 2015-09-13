var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('css', function() {
	return gulp.src('html/style/*.css')
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('html/style'));
});

gulp.task('default', ['css'], function() { });
