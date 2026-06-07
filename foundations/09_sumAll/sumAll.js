const sumAll = function(a, b) {
    let result = 0;
    let start = "";
    let end = "";
    if( typeof a !== "number" || typeof b !== "number" || !Number.isInteger(a) || !Number.isInteger(b) || (a) < 0 || (b) < 0 )  {
        return "ERROR"
    }
    if( a < b ) {
        start = a;
        end = b;
    }   else {
        start = b;
        end = a;
    }
    for( let i = start; i <= end; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
