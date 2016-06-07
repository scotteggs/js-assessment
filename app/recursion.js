exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var fileArr = [];
    var dirArr = [];
    //call recursive function
    openDirectory(data);
    //function to open the directory
    function openDirectory(folder) {
      var files = folder.files;
      dirArr.push(folder.dir);

      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        if (typeof file === 'string') {
          if (dirArr.indexOf(dirName) > -1 || !dirName) {
            fileArr.push(files[i]);
          }
        } else {
          //recursive call to open directory within directory
          openDirectory(files[i]);
        }
      }
      dirArr.pop();
    }
    return fileArr;
  },

  permute: function(arr) {
    var results = [];

    function permute(tempArr, memo) {
      var current;
      var memo = memo || [];

      for (var i = 0; i < tempArr.length; i++) {
        current = tempArr.splice(i, 1);
        if (tempArr.length === 0) {
          results.push(memo.concat(current));
        }
        permute(tempArr.slice(), memo.concat(current));
        tempArr.splice(i, 0, current[0]);
      }

      return results;
    }
    return permute(arr);

  },

  fibonacci: function(n) {
    var fib = function(number) {
      return number < 2 ? number : fib(number - 1) + fib(number - 2);
    };
    return fib(n);
  },

  validParentheses: function(n) {

  }
};
