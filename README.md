# New User Experience

Present new users with an improved first list creation experience.  The node
server acts as a middle tier between the front-end (sites) and the api that
talks to postgres.  The front-end client is a Backbone single page application
that speaks exclusively to this node server.

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

To be determined.
