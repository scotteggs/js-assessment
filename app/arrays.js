exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    //implementation using native js functions
    //return arr.indexOf(item);
    //
    //implementation using a for loop
    var value = -1;
    for (let i in arr) {
      if (arr[i] === item) value = Number(i);
    }
    return value;
  },

  sum: function(arr) {
    return arr.reduce((a,b)=>a+b);
  },

  remove: function(arr, item) {
    for (let i=arr.length; i>-1; i--) {
      if (arr[i]===item){
        arr.splice(i,1);
      }
    }
    return arr
  },

  removeWithoutCopy: function(arr, item) {
    for (let i=arr.length; i>-1; i--) {
      if (arr[i]===item){
        arr.splice(i,1);
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return(arr);
  },

  curtail: function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert: function(arr, item, index) {
    arr.splice(index,0,item)
    return arr;
  },

  count: function(arr, item) {
    return arr.reduce((count,match) => count + (match === item)) - 1;
  },

  duplicates: function(arr) {
    var obj = {};
    var duplicateArr = [];
    //look through array and create object of properties and count occurances
    for (let item of arr) {
      if (!(item in obj)) {
        obj[item] = 1;
      } else {
        obj[item] +=1;
      }
    }
    //loop through object created and create new array of values with duplicates
    for (let key in obj) {
      if (obj[key] > 1) duplicateArr.push(Number(key));
    }
    //return array of duplicates
    return duplicateArr;
  },

  square: function(arr) {
    return arr.map(x=>x*x)
  },

  findAllOccurrences: function(arr, target) {
    var arr2 = []
    for (let i in arr) {
      if (arr[i] === target) arr2.push(i);
    }
    return arr2;
  } 
};
