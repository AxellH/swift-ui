// Require.js allows us to configure shortcut alias
// Their usage will become more apparent further along in the tutorial.
require.config({
    paths: {
        // Major libraries
        bootstrap: 'libs/bootstrap',
        jquery: 'libs/jquery',
        underscore: 'libs/underscore', // https://github.com/amdjs
        backbone: 'libs/backbone' // https://github.com/amdjs

        // Require.js plugins
        //text: 'libs/require/text',

        // Just a short cut so we can put our html outside the js dir
        // When you have HTML/CSS designers this aids in keeping them out of the js directory
        //templates: '../templates'
    },
    urlArgs: "bust=" + (new Date()).getTime()
});

// Let's kick off the application

require([
    'app', 'bootstrap'
], function (App) {
    App.initialize();
});