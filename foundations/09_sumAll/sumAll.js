const sumAll = function(num1, num2) {
    if(typeof num1 !== "number" || typeof num2 !== "number") return 'ERROR';
    if(num1 < 0 || num2 < 0) return 'ERROR';
    if(num1 % 1 !== 0 || num2 % 1 !== 0) return 'ERROR';
    
    let min = num1;
    let max = num2;
    let result = 0;
    if(num1 > num2) max = num1, min = num2;
    for(let i = min; i <= max; i++){
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
