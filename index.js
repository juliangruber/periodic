var EventEmitter = require('events').EventEmitter;

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

function inherits (a, b){
  var fn = function(){};
  fn.prototype = b.prototype;
  a.prototype = new fn;
  a.prototype.constructor = a;
};
