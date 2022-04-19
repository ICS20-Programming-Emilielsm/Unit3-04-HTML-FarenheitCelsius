"use strict"

/**
 * This function calculates area and perimeter of rectangle.
 */
function calcCelsius() {
  // get user input
  let farenheit = parseFloat(document.getElementById("farenheit").value)
  
  
  // calculate the volume
  //let celsius = float(5)/float(9) * (farenheit - 32)
  let celsius = 5 / 9 * (farenheit - 32)
  
  // display the results
  document.getElementById("celsius").innerHTML = " Celsius is " + celsius.toFixed(2)
}