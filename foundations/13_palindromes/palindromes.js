const palindromes = function (str) {
    const alphaNumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let newStr = str.toLowerCase().split('').filter(s => alphaNumerical.includes(s));
    return [...newStr].reverse().join('') == newStr.join('');
};

// Do not edit below this line
module.exports = palindromes;
