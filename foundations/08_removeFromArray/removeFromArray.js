const removeFromArray = function(arr, ...thingsToRemove) {
    let result = arr.filter(item => !thingsToRemove.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
