const gulp = require('gulp');
const del = require('del');
const webpack = require('webpack');
const path = require('path');
const watch = require('gulp-watch');

// Note: Had to revert from arrow functions. old version of node doesnt seem to understand.

gulp.task('webpack', ['clean'], function(cb){
    const config = require('./webpack.dist.config');
    webpack(config, function() {
        cb();
    });
});

gulp.task('clean', function(cb) {
    del(['./www/dist'])
        .then(function(){
            cb();
        });
});

gulp.task('watch', ['webpack'], function() {
    gulp.watch('./www/app/**/*.js', ['webpack']);
});