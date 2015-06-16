var watchRunning = false;
var min = false; //display min or sec
var d;
var startTime;
var timeElapsed;

var intervalID = window.setInterval(function(){
  if(watchRunning){
    d = new Date()
    timeElapsed= d.getTime() - startTime;
    $(".clock").empty();
    if(min){
      $(".clock").append(Math.floor((timeElapsed/60000)));
      $(".clock").append(":");
      var seconds = ((timeElapsed/1000) % 60).toFixed(1);
      var strSeconds = seconds + "";
      while(strSeconds.length < 4)
        strSeconds = "0" + strSeconds;
      $(".clock").append(strSeconds);
      
//      
//      if(Math.floor((timeElapsed/1000) % 60) > 9){
//        $(".clock").append(((timeElapsed/1000) % 60).toFixed(1));
//      }
//      else{ // add 0 in front
//        $(".clock").append();
//      }
    }
    else{
      $(".clock").append((timeElapsed/1000).toFixed(1));
    }
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


$(".min-sec-toggle").click(function(){
  if(min){
    min = false;  
  }
  else{
    min = true;
  }
});
