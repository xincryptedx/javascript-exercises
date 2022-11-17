const sumAll = function(intA,intB) {
    if (!Number.isInteger(intA) || !Number.isInteger(intB)){
        return "ERROR";
    }

    if (intA < 0 || intB < 0){
        return "ERROR";
    }

    let sum = 0;

    let lower = intA < intB ? intA : intB;
    let upper = intA < intB ? intB : intA;

    for (i = lower; i <= upper; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
