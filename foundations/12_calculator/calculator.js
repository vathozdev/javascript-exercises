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
    totalSum =  totalSum * arr[i];
  }
return totalSum;
};

const power = function(x, n) {
	let totalSum = 1;
  for ( let i = 1; i <= n; i++) {
    totalSum = totalSum * x ;   
  } return totalSum;
};

const factorial = function(n) {
	let totalSum = 1;
  for ( let i = 1; i <= n; i++ ) {
    totalSum *= i;
  } return totalSum;
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
