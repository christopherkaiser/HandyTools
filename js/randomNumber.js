var $output = $(".output");

$(".random-button").click(function(){
  var result = Math.floor((Math.random() * 100) + 1);
  
  $output.text(result);
  console.log(result);
  
});

$(".input-number-button").click(function(){
  var inputNumber = Number($(".input-number").val());
  var result = Math.floor((Math.random() * inputNumber) + 1);
  $output.text(result);
  console.log(inputNumber + " -> " + result);  
});