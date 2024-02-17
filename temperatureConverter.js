//Develop a function that converts temperatures between Celsius and Fahrenheit. Write a function that takes a temperature value and a unit (Celsius or Fahrenheit) as input and returns the converted temperature.
function converter(value,unit){
    if (unit === "c"){
        console.log("The temperature is : " + (((9/5)*value)+ 32) + " fahrenheit.")
    }else if (unit === "f") {
        console.log("The temperature is:"+((value - 32) * (5/9))+ " celcius.");
    }
    else{
        console.log("This unit for measurement cannot be processed.")
    }
}
const currentTemperature = converter(25,"c");
//Add a feature to accept input from user later.
//Add feature to convert between more units of measurement of temperature.