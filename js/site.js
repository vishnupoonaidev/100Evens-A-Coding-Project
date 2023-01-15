
//get values from interface
//stars or controller function
function getValues(){
    // get values from the app page 
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    

    //validation of input for the integers
    //parse into integers
    startValue =parseInt(startValue);
    endValue = parseInt(endValue);
    

    if (Number.isInteger(startValue)  && Number.isInteger(endValue)) {
        
        //we call generateNumbers
      let numbers = generateNumbers(startValue,endValue);

    //we call displayNumbers
     displayNumbers(numbers);

    }else{
        alert("Please enter only numbers into the value boxes.")
    }


   
}

//generate numbers from start value to end value 
//logic function(s)
function generateNumbers(sValue,eValue){
    let numbers = [];
//get all numbers from start to end 
for (let index = sValue; index <= eValue; index++) {
   numbers.push(index);
    
}


return numbers;
}

//display the numbers and bold the even ones 
//display or view functions 
function displayNumbers(numbers){

    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {

    let className = "even";    
    let number = numbers[index];

    if(number % 2 == 0){
        className = "even";
    }else{
        className = "odd"
    }

    templateRows += `<tr><td class="${className}">${number}</td></tr>`;
}

document.getElementById("results").innerHTML = templateRows;

}