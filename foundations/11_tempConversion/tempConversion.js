const convertToCelsius = function(fahreinheit) {
  let celcius = ( fahreinheit - 32 ) / 1.8;
  let roundedCelcius = Math.round( celcius * 10 ) / 10;
  return roundedCelcius;

};

const convertToFahrenheit = function(celcius) {
  let fahreinheit = ( celcius * 1.8 ) + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
