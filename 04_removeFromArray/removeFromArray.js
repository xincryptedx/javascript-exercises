const removeFromArray = function(targetArray, ...args) {
    for (const arg of args){
        if (targetArray.includes(arg)){
            let index = targetArray.indexOf(arg);
            targetArray.splice(index, 1);
        }
    }

    return targetArray;
};

// Do not edit below this line
module.exports = removeFromArray;
