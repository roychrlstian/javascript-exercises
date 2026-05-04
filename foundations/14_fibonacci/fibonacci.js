const fibonacci = function(num) {
    if(num < 0) return "OOPS"
    let ans = [0, 1];
    for(let i = 2; i <= num; i++){
        ans.push(ans[i-1]+ans[i-2]);
    }
    return ans[num];
};

// Do not edit below this line
module.exports = fibonacci;
