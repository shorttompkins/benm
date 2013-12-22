# B.E.N.M Boilerplate

A fairly complete boilerplate web app created using primarily:

Backbone.js, ExpressJS & node.js, MongoDB

The app features a complete backend using node.js with ExpressJS, a data layer using MongoDB with Mongoose, and a complete front-end application built using Backbone.js (with Marionette and Browserify).  The front-end application is a simply Contacts manager.  All of the code is fairly basic yet functional.

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

node 0.10+ (and npm), mongodb - visit nodejs.org and mongodb.com to download
each.

    $ sudo npm install -g grunt-cli
    $ npm install
    $ grunt init:dev

Grunt init:dev only needs to be run the first time to prepare the vendor.js
files.

## Running the App:

Start the server in DEV mode, with nodemon watching the app for a relaunch,
watchers on scripts and less files for rebuild.

    $ grunt server

Note: Windows users, for some reason the grunt shell task will not launch
mongod during runtime (so the node server will crash).  Be sure to launch
mongod in another window before starting grunt server.

### Front-end Tests/TDD:

Requires PhantomJS to be installed globally:

    $ sudo npm install -g phantomjs

To run tests in TDD watch mode:

    $ grunt tdd

To run tests once:

    $ grunt test:client

### Server Tests:

Coming soon!
