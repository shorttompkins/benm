var gulp = require('gulp'),
    gutil = require('gulp-util'),
    tasks = require("gulp-load-tasks")();

var appName = 'myapp';

// BOWER:
gulp.task('bower', function() {
    gulp.src('./**/**')
        .pipe(tasks.exec('bower install'));
});

// CLEAN:
gulp.task('clean:build', function() {
    // without /* will remove the folder as well
    gulp.src('build/*')
        .pipe(tasks.clean());
});
gulp.task('clean:dev', function() {
    gulp.src(['build/app.js', 'build/' + appName + '.css', 'build/' + appName + '.js'])
        .pipe(tasks.clean());
});
gulp.task('clean:prod', function() {
    gulp.src('dist')
        .pipe(tasks.clean());
});

// BROWSERIFY:
gulp.task('browserify:vendor', function() {
    gulp.src([
        './bower_components/jquery/jquery.js',
        './bower_components/underscore/underscore.js',
        './bower_components/backbone/backbone.js',
        './bower_components/backbone.marionette/lib/backbone.marionette.js'
        ])
        .pipe(tasks.browserify({
            insertGlobals: true,
            transform: ['browserify-shim']
        }))
        .pipe(tasks.concat('vendor.js'))
        .pipe(gulp.dest('./build'));
});

gulp.task('browserify:app', function() {
    gulp.src('./client/src/main.js')
        .pipe(tasks.browserify({
            insertGlobals: true,
            transform: ['browserify-handlebars'],
            external: ['jquery', 'underscore', 'backbone', 'backbone.marionette']
        }))
        .pipe(tasks.concat('app.js'))
        .pipe(gulp.dest('./build'));
});

// LESS:
gulp.task('less', function() {
    gulp.src('./client/styles/less/*.less')
        .pipe(tasks.less())
        .pipe(gulp.dest('./build/' + appName + '.css'));
});

// CONCAT:
gulp.task('concat', function() {
    gulp.src(['./build/vendor.js', './build/app.js'])
        .pipe(tasks.concat(appName + '.js'))
        .pipe(gulp.dest('./public/js/'));
});


// this replaces 'grunt server' with just 'gulp'
gulp.task('default', function(){
  // place code for your default task here
  gulp.run('clean:build', 'browserify:vendor', 'browserify:app');

});

