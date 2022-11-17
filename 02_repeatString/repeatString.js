const repeatString = function(str, num) {
    let resultStr = "";

    if (!str){
        str = "";
    }

    if (num < 0){
        return "ERROR"
    }

    for (let i = 0; i < num; i++){
        resultStr += str;
    }

    return resultStr;
};

// Do not edit below this line
module.exports = repeatString;
