
var currentNumber = 0;
var storedNumber = 0;
var clearOnOp = false; //clears the display on next operation hit
$output = $(".output");
var currentOperation = "+";

function operation(opChar, num1, num2){
  switch(opChar) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
      
    default:
      return 0;
  }
}

function clear(){
  currentNumber = 0;
  storedNumber = 0;
  currentOperation = "+";
  $output.empty();
}

$(".number-button , .add-button , subtract-button, .multiply-button, .divide-button").click(function(){
  if(clearOnOp){ // clear the displat on next operation hit   
    $output.empty();
    clearOnOp = false;
  }
});
$(".add-button , .subtract-button, .multiply-button, .divide-button").click(function(){
  console.log("operation-button");
  clearOnOp = true;
  $output.empty();
  storedNumber = operation(currentOperation, Number(storedNumber), Number(currentNumber));
  $output.append(storedNumber);
  currentNumber = 0;
  currentOperation = $(this).attr("value"); 
});

$(".number-button").click(function(){
  console.log("number-button");
  var $value = $(this).attr("value");
  $output.append($value);  
  currentNumber = currentNumber + $value;
});


$(".equils-button").click(function(){  
  console.log("equils-button");
  $output.empty();
  
  var result = operation(currentOperation, Number(storedNumber), Number(currentNumber));
  $output.append(result);
  
  currentNumber = 0;
  storedNumber = 0;
  clearOnOp = true;
});

$(".clear-button").click(function(){  
  console.log("clear-button");
  clear();
});