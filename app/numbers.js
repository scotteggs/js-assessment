exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	return 1 & (num >> (bit - 1));
  },

  base10: function(str) {
  	return parseInt(str,2);
  },

  convertToBinary: function(num) {
  	str = num.toString(2);
		zeros = new Array(9-str.length).join("0")
		return zeros + str;
  },

  multiply: function(a, b) {
  	x = function(b) {
			let bString = (b.toString())
			let bLength = bString.length
			let bPosition = bString.indexOf(".")
			if(bPosition === -1) return 0;
			len = (bString.substr(bPosition+1,bLength)).length
			return len
		};
		let aLen = x(a);
		let bLen = x(b);
		if(aLen > bLen) {
			var precision = aLen;
		} else {
			var precision = bLen;
		}
		let num = a*b;
		return Number(num.toFixed(precision))
  }
};
