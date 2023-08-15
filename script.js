var celsius = document.querySelector("#celsius");
var fahrenheit = document.querySelector("#fahr");
var kelvin = document.querySelector("#kelvin");
function ctk(){
 let output = parseFloat(celsius.value ) + 273.15 ;//celsius to Kelvin
 let output2 = (parseFloat(celsius.value * 9/5) + 32);//celsius to fahrenheit
 kelvin.value = parseFloat(output.toFixed(2));//round up value to 2 decimal places
 fahrenheit.value = parseFloat(output2.toFixed(2));
        }
 function ftc(){
 let output=(parseFloat(fahrenheit.value - 32 ) * 5/9);//fahrenheit to celsius 
 let output2 = (parseFloat(fahrenheit.value - 32) * (5/9) + 273.15);//fahrenheit to Kelvin
 celsius.value = parseFloat(output.toFixed(2));
 kelvin.value = parseFloat(output2.toFixed(2));
        }
 function ktc(){
 let output=(parseFloat(kelvin.value) - 273.15);//Kelvin to celsius 
 let output2 = (parseFloat(kelvin.value - 273.15) * (9/5) + 32);// Kelvin to fahrenheit 
 celsius.value = parseFloat(output.toFixed(2));
 fahrenheit.value = parseFloat(output2.toFixed(2));
        }