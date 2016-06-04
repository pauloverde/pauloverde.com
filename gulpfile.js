var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var nunjucksRender = require('gulp-nunjucks-render');
var htmlmin = require('gulp-htmlmin');

gulp.task('css', function () {
	return gulp.src('src/style/*.css')
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('dist/style'));
});

gulp.task('html', function () {
	return gulp.src('src/*.njk')
		.pipe(nunjucksRender({
			path: 'src/',
			data: {
				googleAnalytics: true
			}
		}))
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('dist'));
});

gulp.task('copy', function () {
	return gulp.src([
			'src/*',
			'src/*/*',
			'!src/style/*.css',
			'!src/*.njk',
			'!src/layout.html'
		])
		.pipe(gulp.dest('dist'));
});

gulp.task('default', [
	'css',
	'html',
	'copy'
], function () { });
