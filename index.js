 //for the first one
 
function convertFahrToCelsius(fahrenheit) {
    if (typeof fahrenheit === 'number') {
      var fTemp = fahrenheit;
      var farhToCel = (fTemp - 32) * 5 / 9;
      var valueInCelcius = farhToCel.toFixed(2)
      return (valueInCelcius)
      }
      else {
        return ((`${fahrenheit} is not a valid number but a/an ${typeof fahrenheit}.`))
      }
    }
    
  
 


  //This is for the second question
  function checkYuGiOh(num) {
    var arr = [];
    for (let i = 0; i < num ; i++){
        if (i % 30 == 0) {
            arr.push("yu-gi-oh")
            }
        else if (i % 15 == 0) {
            arr.push("gi-oh")
        }
        else if (i % 10 == 0) {
            arr.push("yu-oh")
        }
        else if (i % 6 == 0) {
            arr.push("yu-gi")
        }
        else if (i % 5 == 0) {
            arr.push("oh")
        }
        else if (i % 3 == 0) {
            arr.push("gi")
        }
        else if (i % 2 == 0) {
            arr.push("yu")
        }
        else arr.push(i);
    }
    return arr   
}


checkYuGiOh(50);