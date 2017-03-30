$(document).ready(function(){
  $("#videoDiv").mouseover(function(){
    console.log("hola")
    $("#mute").css("visibility", "visible");
    $("#full").css("visibility", "visible");
    $("#bgvid").css("filter", "blur(0px)");

  })

  $("#videoDiv").mouseout(function(){
    $("#mute").css("visibility", "hidden");
    $("#full").css("visibility", "hidden");
    $("#bgvid").css("filter", "blur(5px)");
  })

  // Mutear, desmutear
  $("#mute").click(function(){
    if( $("#bgvid").prop('muted') ) {
      $("#bgvid").prop('muted', false);
      $("#mute").empty()
      $("#mute").append("volume_off")
    } else {
      $("#bgvid").prop('muted', true);
      $("#mute").empty()
      $("#mute").append("volume_mute")
    }
  });
  //Full Screen
  $("#full").click(function(){
    var elem = document.getElementById("bgvid");
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
  })

});