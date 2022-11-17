const reverseString = function(str) {
    const splitStr = str.split("");

    const reverseArray = splitStr.reverse();

    const joinArray = reverseArray.join("");

    return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
