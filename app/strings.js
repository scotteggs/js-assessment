exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
		var inputArr = str.split("");
		var counter = 0;
		var prevChar = ""
		var outputStr = "";
		for (let letter of inputArr) {
			if(prevChar != letter) {
				counter = 0;
			}
			if (counter < amount) {
				outputStr += letter
			}
			counter += 1;
			prevChar = letter;
		}
		return(outputStr)
  },

  wordWrap: function(str, cols) {
	  outputLine = "";
		tmpLine = "";
		strArr = str.split(" ");
		for (let i in strArr) {
			tmpLine += strArr[i];
			var nextLength = 0;
			if(i == strArr.length-1) {
				nextLength = 0;
			} else {
				nextLength = strArr[Number(i)+1].length;
			}
			if(tmpLine.length + nextLength >= cols) {
				outputLine += tmpLine + '\n';
				tmpLine = "";
			} else {
				tmpLine += " ";
			}
			
		}
		outputLine += tmpLine + '\n' 
		outputLine = outputLine.substr(0,outputLine.length-2)
		return outputLine;
	  },

	  reverseString: function(str) {
	  	return str.split('').reverse().join('');
	  }
};
