/**
 * Created by sergey.derevyanko on 15.02.19.
 */
var App = require('./components/App.js');
var React = require('react');
var ReactDOM = require('react-dom');
var AppAPI = require('./utils/appAPI');

ReactDOM.render(
    <App />, document.getElementById('app')
);