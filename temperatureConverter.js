//Develop a function that converts temperatures between Celsius and Fahrenheit. Write a function that takes a temperature value and a unit (Celsius or Fahrenheit) as input and returns the converted temperature.
function converter(value,unit){
    if (unit==="c"||"C"){
        console.log(value*(9/5)+32)
    }if (unit === "f"||"F" ) {
        console.log((value - 32) * (5/9))
    }if (unit === "k"||"K") {
        console.log()
    }
    
    else{
        console.log("The temperature you provided does not have the right values")
    }
}
const currentTemperature = converter(29,"c");
//Add a feature to accept input from user later.
//Add feature to convert between more units of measurement of temperature.