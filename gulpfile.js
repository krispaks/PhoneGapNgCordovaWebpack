const gulp = require('gulp');
const del = require('del');
const webpack = require('webpack');
const path = require('path');
const watch = require('gulp-watch');

gulp.task('webpack', ['clean'], (cb) => {
    const config = require('./webpack.dist.config');
    config.entry.app = ['babel-polyfill', './www/app/app.js'];
    webpack(config, () => {
        cb();
    });
});

gulp.task('clean', (cb) => {
    del(['./www/dist'])
        .then(()=>{
            cb();
        });
});

gulp.task('watch', ['webpack'], () => {
    gulp.watch('./www/app/**/*.js', ['webpack']);
});