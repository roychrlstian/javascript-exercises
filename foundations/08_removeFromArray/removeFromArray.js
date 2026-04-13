const removeFromArray = function(arr, ...item) {
    for(let i = 0; i < item.length; i++){
        while(arr.includes(item[i])){
            arr.splice(arr.indexOf(item[i]),1);
        }      
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
