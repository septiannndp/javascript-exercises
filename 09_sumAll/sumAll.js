const sumAll = function(firstNum, lastNum) {
    if (typeof firstNum !== "number" || typeof lastNum !== "number" ||
        firstNum % 1 !== 0 || lastNum % 1 !== 0 || firstNum <= 0 ||
        lastNum <= 0) return "ERROR";
    let total = 0;
    if (firstNum < lastNum) {
        for (let i = firstNum; i <= lastNum; i++) {
            total += i;
        }
        return total;
    } else {
        for (let i = lastNum; i <= firstNum; i++) {
            total += i;
        }
        return total;
    }
};

// Do not edit below this line
module.exports = sumAll;
