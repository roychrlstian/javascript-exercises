const reverseString = function(str) {
    let result = '';
    let sliced = str.slice();
    for(let i = str.length-1; i >= 0; i--){
        result += sliced[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
