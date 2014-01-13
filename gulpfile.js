var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('browserify'),
    bower = require('bower'),
    source = require('vinyl-source-stream'),
    tasks = require("gulp-load-tasks")();

// this should really be reading the package.json file
var appName = 'myapp';

// BOWER:
gulp.task('bower', function() {
    // use bower manually to do all the things
    var bowerJSON = require('./bower.json');

});

// BROWSERIFY:
gulp.task('browserify', function() {
    // gulpify version:
    return gulp.src('./client/src/main.js')
        .pipe(tasks.browserify({
            transform: ['hbsfy', 'browserify-shim']
        }))
        .pipe(tasks.concat(appName + '.js'))
        .pipe(gulp.dest('./public/js/'));

    // vinyl-source-stream version:
    // var bundleStream = browserify('./client/src/main.js', { transform: ['hbsfy', 'browserify-shim'] }).bundle();
    // bundleStream
    //     .pipe(source('myapp.js'))
    //     .pipe(gulp.dest('./public/js/myapp.js'));

    // TO DO (maybe?):
    // 1. break the above into 2 steps, vendor and app
    // 2. get externals working with the app browserify
    // 3. include concat step in the app build (only do vendor once during gulp init)
    // 4. browserify tests files
});
gulp.task('browserify:tests', function() {
    // gulpify version:
    return gulp.src('./client/spec/**/*.js')
        .pipe(tasks.browserify({
            transform: ['hbsfy', 'browserify-shim']
        }))
        .pipe(tasks.concat('tests.js'))
        .pipe(gulp.dest('./build/'));
});

// LESS:
gulp.task('less', function() {
    return gulp.src([
        'client/styles/reset.css',
        'client/requires/*/css/*',
        'client/styles/less/main.less'
    ])
        .pipe(tasks.less())
        .pipe(tasks.concat(appName + '.css'))
        .pipe(gulp.dest('./public/css/'));
});



// KARMA:
// gulp.task('test:client', function() {
//     gulp.run('browserify:tests');
//     tasks.spawn('karma',  ['start', 'karma.config.js'], { stdio : 'inherit' });
//     // this doesnt work currently - known issue with jasmine plugin
//     // return gulp.src(['build/tests.js'])
//     //     .pipe(tasks.karma({
//     //         configFile: 'karma.conf.js',
//     //         action: 'run'
//     //     }));
// });



gulp.task('server', function() {
    gulp.src('./server.js')
        .pipe(tasks.exec('mongod', {
            async: true
        }));

    gulp.src('./server.js')
        .pipe(tasks.nodemon({
            watchedFolders: ['controllers', 'app'],
            env: {
                PORT: '3300'
            }
        }));

    // WATCHERS:
    gulp.watch('client/src/**/*.js', function(event) {
        gulp.run('browserify');
    });
    gulp.watch('client/styles/**/*.*', function(event) {
        gulp.run('less');
    });
});

// this replaces 'grunt init:dev'
gulp.task('init', function() {
    gulp.run('bower', 'browserify:vendor');
});

// this replaces 'grunt server' with just 'gulp'
gulp.task('default', function() {
    gulp.run('less', 'browserify', 'server');
});
