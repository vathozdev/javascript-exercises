const palindromes = function (str) {
    let loweredCase = str.toLowerCase();
    let cleanedStr = loweredCase.replace(/[^a-zA-Z0-9\s]/g, "");
    if( cleanedStr === cleanedStr.split("").reverse().join("")) {
        return true;
    } else {    
        return false; 
    }
};

// Do not edit below this line
module.exports = palindromes;
