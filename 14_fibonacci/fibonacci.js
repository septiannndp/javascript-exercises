const fibonacci = function(countArg) {
    let count = typeof countArg === "number" ? countArg : parseInt(countArg);
    if (count === 0) return 0;
    if (count < 0) return "OOPS";

    let secondPrev = 0;
    let firstPrev = 1;

    for (let i = 2; i <= count; i++) {
        let curr = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = curr;
    }
    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
