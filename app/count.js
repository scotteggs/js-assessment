exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
  	var timeout;
    	function count () {
      	console.log(start++); // eslint-disable-line no-console

      	if (start <= end) {
        	timeout = setTimeout(count, 100);
      	}
    	}
    	count();

    	return {
      	cancel: function () {
        	timeout && clearTimeout(timeout);
    	}
  	};
  }
};
