const snakeCase = function(str) {
    const valid = 'abcdefghijklmnopqrstuvwxyz ';
    let ans = str.toLowerCase().split("").filter(s => valid.includes(s)).join("").split(" ").join("_");

    return ans;
};

// Do not edit below this line
module.exports = snakeCase;
