const convertToCelsius = function(temp) {
  const result = (5 / 9 * (temp - 32)) % 1 === 0 ? (5 / 9 * (temp - 32)) :
  parseFloat((5 / 9 * (temp - 32)).toFixed(1));
  return result;
};

const convertToFahrenheit = function(temp) {
  const result = ((9 / 5 * temp) + 32) % 1 === 0 ?  ((9 / 5 * temp) + 32) :
  parseFloat(((9 / 5 * temp) + 32).toFixed(1));
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
