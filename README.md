# B.E.N.M Boilerplate

This is a pretty hefty, because its complete from A-Z, boilerplate for a web app
created using the following tools/frameworks/librarys/languages/whatevs:

 * Backbone.js
  * Handlebars
  * Browserify
  * Jasmine
  * Karma
  * Basic UI app
 * Express / Node.js
  * Handlebars
  * Jasmine tests
 * MongoDB
  * Mongoose
 * Bower
  * package.json
 * Grunt:
  * Bower install
  * Browserify
  * Handlebars (precompiled)
  * jsHinting
  * LESS
  * Minification/Uglification
  * Karma test run/tdd
  * Watchers
  * Concatenation/Copy
  * Concurrent runs (server, karma, mongod, etc)

## Requirements

node 0.10+ (and npm), mongodb - visit nodejs.org and mongodb.com to download each.

    $ sudo npm install -g grunt-cli
    $ npm install
    $ grunt init:dev

Grunt init:dev only needs to run the first time to prepare the vendor.js files.

## Running the App:

Start the server in DEV mode, with nodemon watching the app for a relaunch,
watchers on scripts and less files for rebuild.

    $ grunt server

### Front-end Tests/TDD:

Requires PhantomJS to be installed globally:

    $ sudo npm install -g phantomjs

To run tests in TDD watch mode:

    $ grunt tdd

To run tests once:

    $ grunt test:client

### Server Tests:

Coming soon!
