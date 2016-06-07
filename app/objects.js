'use strict';
exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
  	return fn.apply(obj);
  },

  alterObjects: function(constructor, greeting) {
  	constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
  	var output = []
  	for (let key of Object.keys(obj)) {
  		output.push(key + ': ' + obj[key])
  	}
  	return output;
  }
};
