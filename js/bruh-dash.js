var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
    return arr.shift();
  },

  // returns the last element of an array
  last: function (arr) {
    return arr.pop();
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, element) {
    return arr.indexOf(element);
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, element) {
    return arr.lastIndexOf(element);
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    arr.pop();
    return arr;
  },
  
  // returns an array with all falsey values removed
  compact: function (arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        newArr.push(arr[i]);
      } 
    }
    return newArr;  
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, start, end) {
    return arr.slice(start, end);
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function (arr, n){
    if (typeof n === 'number') {
      if (n === 0) {
        return arr;
      } else {
        return arr.slice(n);
      }  
    } else if (!n) {
      arr.shift();
      return arr;
    }
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function (arr, n){
    if (typeof n === 'number') {
      if (n === 0) {
        return arr;
      } else {
        return arr.slice(0, arr.length - n);
      }  
    } else if (!n) {
      arr.pop();
      return arr;
    }
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, n){
    if (typeof n === 'number') {
      if (n === 0) {
        return arr.slice(arr.length);
      } else if (n > arr.length) {
        return arr;
      } else {  
        return arr.slice(0, n);
      }  
    } else if (!n) {
      return arr.slice(0, 1);
    }
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, n){
    if (typeof n === 'number') {
      if (n === 0) {
        return arr.slice(arr.length);
      } else if (n > arr.length) {
        return arr;
      } else {  
        return arr.slice(n - 1, arr.length);
      }  
    } else if (!n) {
      return arr.slice(arr.length - 1, arr.length);
    }
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function (arr, value, start, end) {
    if (!start && !end) {
      for (let i = 0; i < arr.length; i++) {
        arr[i] = value;
      }
    } else {
      for (i = start; i < end; i++) {
        arr[i] = value;
      }
    }
    return arr;
  },

  // removes all given values from an array
  pull: function (arr, ...values) {
    for (let i = 0; i < values.length; i++) {
      arr.splice(arr.indexOf(values[i]), 1);
    }
    return arr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function(arr, indices) {
    for (let i = 0; i < indices.length; i++) {
      indices[i] = arr[indices[i]];
    }
    for (let i = 0; i < indices.length; i++) {
      arr.splice(arr.indexOf(indices[i]), 1);
    }
    return indices;  
  },

  // creates an array excluding all the specified values
  without: function(arr, ...values) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (!values.includes(arr[i])) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },

  // returns an array with specified values excluded
  difference: function(arr1, arr2 ) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
      if (!arr2.includes(arr1[i])) {
        newArr.push(arr1[i]);
      }
    }
    return newArr;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function (...args) {
    let finalArr = [];
    for(let i = 0; i < args[0].length; i++) {
      let newArr = [];
      finalArr.push(newArr);
    }
    for (let i = 0; i < args.length; i++) {
      for (let x = 0; x < args[0].length; x++) {
        finalArr[x].push(args[i][x]);
      }
    }
    return finalArr;
  },

  unzip: function (args) {
    let finalArr = [];
    for (let i = 0; i < args[0].length; i++) {
      let newArr = [];
      finalArr.push(newArr);
    }
    for (let i = 0; i < args.length; i++) {
      for (let x = 0; x < args[0].length; x++) {
        finalArr[x].push(args[i][x]);
      }
    }
    return finalArr;
  },

  

  // creates an array of elements into groups of length of specified size
  chunk: function(arr, size) {
    let finalArr = [];
    if (arr.length === 0 || size === 0) {
      return [];
    } else if (size >= arr.length) {
      finalArr.push(arr);
      return finalArr;
    }
    if (arr.length % 2 === 0) {
      for (let i = 0; i < arr.length / size; i++) {
        let newArr = [];
        finalArr.push(newArr);
      }
      for (i = 0; i < size; i ++) {
        for (x = 0; x < arr.length / size; x++) {
          finalArr[i].push(arr[x]);
        }
      }
      return finalArr;
    } else {
      let augmentedArrLength = arr.length + 1;
      for (let i = 0; i < augmentedArrLength / size; i++) {
        let newArr = [];
        finalArr.push(newArr);
      }
      for (i = 0; i < augmentedArrLength / size; i++) {
        for (x = 0; x < size; x++) {
          if (typeof arr[x] === 'number') {
            finalArr[i].push(arr[x]); 
          } 
        }
        arr.splice(0, size);
      }
      return finalArr; 
    } 
  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function(arg, func) {
    if (Array.isArray(arg) === true) {
      for (let i = 0; i < arg.length; i++) {
        func(arg[i]);
      }
    } else {
      for (var key in arg) {
        func(arg[key]);
      }
    }
  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function(arg, func) {
    let newArr = [];
    if (Array.isArray(arg) === true) {
      for (let i = 0; i < arg.length; i++) {
        newArr.push(func(arg[i]));
      }
    } else {
      for (var key in arg) {
        newArr.push(func(arg[key]));
      }
    }
    return newArr;
  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function(arg, func) {
    let newArr = [];
    if (Array.isArray(arg) === true) {
      for (let i = 0; i < arg.length; i++) {
        if(func(arg[i]) === true)
        newArr.push(arg[i]);
      }
    } else {
      for (var key in arg) {
        if (func(arg[key]) === true)
        newArr.push(arg[key]);
      }
    }
    return newArr;
  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function(arg, func) {
    let sum = 0
    if (Array.isArray(arg) === true) {
      for (let i = 0; i < arg.length; i++) {
        sum += arg[i];
      }
      return sum;
    } else {
      for (var key in arg) {
        sum += arg[key];
      }
      return sum;
    }
  }
};
