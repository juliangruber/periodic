var EventEmitter = require('events').EventEmitter;

var inherits;
try {
  inherits = require('util').inherits;
} catch (err) {
  inherits = require('inherit');
}

module.exports = periodic;

function periodic (interval) {
  if (!(this instanceof periodic)) return new periodic(interval);
  EventEmitter.call(this);

  this.interval = interval;
  this.ended = false;
  this.timeout;

  var self = this;
  setTimeout(function () {
    self.repeat();
  });
}

inherits(periodic, EventEmitter);

periodic.prototype.repeat = function () {
  if (this.ended) return;

  var start = +new Date();
  var tick = 0;

  var dt = (start + this.interval * ++tick) - +new Date();
  if (dt < 0) dt = 0;

  var self = this;
  self.timeout = setTimeout(function () {
    self.repeat();
  }, dt);

  this.emit('tick');
}

periodic.prototype.end = function () {
  this.ended = true;
  if (this.timeout) clearTimeout(this.timeout);
}
