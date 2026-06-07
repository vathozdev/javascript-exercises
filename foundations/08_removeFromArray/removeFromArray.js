const removeFromArray = function(arr, ...thingsToRemove) {
    let result = arr.filter(item => !thingsToRemove.includes(item));
    return result; 
};

// Do not edit below this line
module.exports = removeFromArray;
