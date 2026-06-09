const convertToCelsius = function(fahreinheit) {
  let celcius = ( fahreinheit - 32 ) / 1.8;
  let roundedCelcius = Math.round( celcius * 10 ) / 10;

};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
