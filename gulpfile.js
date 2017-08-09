/*
 * @Author: hay 
 * @Date: 2017-03-30 14:56:56 
 * @Last Modified by: hay
 * @Last Modified time: 2017-07-19 16:35:27
 */
(function (require) {
	const gulp = require('gulp'),
		glob = require('glob'),
		inject = require('gulp-inject'),
		svgstore = require('gulp-svgstore'),
		svgmin = require('gulp-svgmin'),
        cheerio = require('gulp-cheerio'),
        rename = require('gulp-rename'),
        path = require('path'),
		fs = require('fs');

	gulp.task('svgstore', function () {
		var svgs = gulp
			.src('./src/assets/img/icons/**/*.svg')
			.pipe(cheerio({
				run: function ($) {
					let _$ = $('svg');
					if (!_$.attr('viewBox')) {
						_$.attr('viewBox', '0 0 16 16');
					}
				},
				parserOptions: { xmlMode: true }
			}))
			.pipe(rename(function (path) {
				path.basename = 'svg-icon-' + path.basename.toLowerCase().replace(/[\s,_]/g, '-');
			}))
			.pipe(svgmin(function (file) {
				var prefix = path.basename(file.relative, path.extname(file.relative));
				return {
					plugins: [{
						cleanupIDs: {
							prefix: prefix + '-',
							minify: true
						}
					}]
				}
			}))
			.pipe(svgstore({ inlineSvg: true }));

		function fileContents (filePath, file) {
			return file.contents.toString();
		}
		gulp.src('./src/assets/templates/svg-preview.html')
			.pipe(inject(svgs, { transform: fileContents }))
			.pipe(gulp.dest('./src/assets/templates/'));
		return gulp
			.src('./src/assets/templates/svg-store.html')
			.pipe(inject(svgs, { transform: fileContents }))
			.pipe(gulp.dest('./src/assets/templates/'));
	});
	
})(require); //eslint-disable-line