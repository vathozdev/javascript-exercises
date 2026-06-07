const sumAll = function(a, b) {
    let result = 0;
    let start = "";
    let end = "";
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

};

// Do not edit below this line
module.exports = sumAll;
