const palindromes = function (str) {
    const polished = str.replaceAll(/[.,! ]/g, "").toLowerCase();
    return polished === polished.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
