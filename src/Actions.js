import events from './Events.js';

let auth = require('./actions/action-example.js');

module.exports = function() {
   events.on("example", auth);
};


