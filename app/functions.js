exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    let reply = fn.apply(null, arr);
    return reply;
  },

  speak: function(fn, obj) {
    let reply = fn.call(obj);
    return reply;
  },

  functionFunction: function(str) {
    return function (arg) {
      return str + ', ' + arg;
    }
  },

  makeClosures: function(arr, fn) {
    functionArr = [];
    for (let i in arr) {
      functionArr.push(function(input) {
        return fn(arr[i])
      })
    }
    return functionArr;
  },

  partial: function(fn, str1, str2) {
    return (function(x) {
      return fn(str1, str2, x)
    })
  },

  useArguments: function() {
    var args = Array.prototype.slice.call(arguments);
    var sum = args.reduce((a,b)=>a+b);
    return sum;
  },

  callIt: function(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift()
    fn.apply(null,args);
  },

  partialUsingArguments: function(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    return function() {
      var moreArgs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, moreArgs);
    };

  },

  curryIt: function(fn) {
    return fn()
  }
};
