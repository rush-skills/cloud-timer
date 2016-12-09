var uri      = "ws://" + window.document.location.host + "/";
var ws       = new WebSocket(uri);
var lastTime = 10;

ws.onmessage = function(message) {
  var data = JSON.parse(message.data);
  $("#chat-text").append("<div class='panel panel-default'><div class='panel-heading'>" + data.handle + "</div><div class='panel-body'>" + data.text + "</div></div>");
  $("#chat-text").stop().animate({
    scrollTop: $('#chat-text')[0].scrollHeight
  }, 800);
};

$("#input-form").on("submit", function(event) {
  event.preventDefault();
  var handle = $("#input-handle")[0].value;
  var text   = $("#input-text")[0].value;
  ws.send(JSON.stringify({ handle: handle, text: text }));
  $("#input-text")[0].value = "";
});

$(document).on('click', "#custom", function(){
  $("#addform").toggleClass('hide');
});

$(document).on('click', "#start", function(){
  CountDown.Start(getTime());
});
$(document).on('click', "#pause", function(){
  CountDown.Pause();
});
$(document).on('click', "#reset", function(){
  CountDown.Reset();
});
$(document).on('click', "#undo", function(){
  CountDown.Start(lastTime);
  CountDown.Pause();
});

$(document).on('click', ".add-min", function(){
  CountDown.Pause();
  mins = $(this).data("min");
  time = getTime() + (mins*60);
  lastTime = getTime();
  CountDown.Start(time);
  CountDown.Pause();
});

$(document).on('click', "#set", function(){
  CountDown.Pause();
  mins = parseInt($("input#min").val());
  secs = parseInt($("input#sec").val());
  time = (mins*60)+secs;
  CountDown.Start(time);
  CountDown.Pause();
});

function getTime() {
  return CountDown.Val();
}

function changeCountdownState() {
  $(".default").toggleClass('hide');
  $(".finished").toggleClass('hide');
}

var Run = true;

var CountDown = (function ($) {
    // Length
    var TimeOut = 10000;
    // Interval ms
    var TimeGap = 1000;

    var T = null;
  
    var GuiTimer = $('.countdown');
    var Running = true;
    
    var UpdateTimer = function() {
        // Run till timeout
        if( TimeOut > 1 ) {
            T = setTimeout( UpdateTimer, TimeGap );
        }
        // Countdown if running
        if( Running ) {
            TimeOut -= 1;
            if( TimeOut <= 0 ) {
                TimeOut = 0;
                changeCountdownState();
                Run = false;
            }
        }
        // Update Gui
        var Minutes = Math.floor(TimeOut/60);
        var Seconds = TimeOut%60;
        
        GuiTimer.html( 
            (Minutes < 10 ? '0' : '') + Minutes 
            + ':' 
            + (Seconds < 10 ? '0' : '') + Seconds );
    };
    
    var Pause = function() {
        Running = false;
    };
    
    var Resume = function() {
        Running = true;
    };
    
    var Start = function( Timeout ) {
        TimeOut = Timeout;
        clearTimeout(T);
        UpdateTimer();
        if(!Run){
          changeCountdownState();
        }
        Run = true;
        Running = true;
    };

    var Val = function() {
      return TimeOut;
    }

    var Reset = function() {
      TimeOut = 0;
      UpdateTimer();
    }

    return {
        Pause: Pause,
        Resume: Resume,
        Start: Start,
        Val: Val,
        Reset: Reset
    };
})(jQuery);

CountDown.Start(10);