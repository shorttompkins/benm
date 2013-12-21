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

node 0.10+, npm, grunt

    $ sudo npm install -g grunt-cli
    $ npm install

init:dev will download and install the latest bower dependencies.

## Running the App:

Start the server in DEV mode, with nodemon watching the app for a relaunch,
watchers on scripts and less files for rebuild.

    $ grunt server

### Front-end Tests/TDD:

Requires PhantomJS to be installed globally:

    $ sudo npm install -g phantomjs

To run tests once:

    $ grunt test:client

To run tests in TDD watch mode:

    $ grunt tdd

### Server Tests:

Coming soon!
