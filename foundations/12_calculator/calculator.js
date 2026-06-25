const add = function(a, b) {
	let totalSum = a + b ;
  return totalSum;
};

const subtract = function(a, b) {
	let totalSum = a - b; 
  return totalSum;
};

const sum = function(arr) {
	let totalSum = 0;
  for ( let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }
  return totalSum;
};

const multiply = function(arr) {
  let totalSum = 1;
  for ( let i = 0; i < arr.length; i++ ) {
    totalSum += arr[i];
  }

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
