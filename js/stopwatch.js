var watchRunning = false;
var d;
var startTime;
var timeElapsed;

var intervalID = window.setInterval(function(){
  if(watchRunning){
    d = new Date()
    timeElapsed= d.getTime() - startTime;
    $(".clock").empty();
    $(".clock").append((timeElapsed/1000).toFixed(1));
  }
}, 10);


$(".start-button").click(function(){
  console.log("start-button");
  d = new Date();
  startTime = d.getTime();
  watchRunning = true;
});

$(".stop-button").click(function(){
  watchRunning = false;
});

$(".lap-button").click(function(){
  $(".laps").append((timeElapsed/1000).toFixed(1));
  $(".laps").append("<br>");
});