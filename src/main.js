"use strict";

var React = require('react'),
    Router = require('react-router'),
    routes = require('./routes'),
    InitialiseActions = require('./actions/initialiseActions');

InitialiseActions.initApp();

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});