$(function(){function ready(playerID){Froogaloop(playerID).addEvent("play",function(data){$(".flexslider").flexslider("pause")}),Froogaloop(playerID).addEvent("pause",function(data){$(".flexslider").flexslider("play")}),$(".flex-next, .flex-prev").click(function(){player.api("pause")})}function playVideoAndPauseOthers(frame){$(".container-vimeo iframe").each(function(i){var func=this===frame?"playVideo":"stopVideo";this.contentWindow.postMessage('{"event":"command","func":"'+func+'","args":""}',"*")})}if(0!=$(".flexslider").length){var slider,canSlide=!0;window.onYouTubeIframeAPIReady=function(){$(".flexslider .youtube").each(function(){var player=new YT.Player(this,{playerVars:{autoplay:0}});player.addEventListener("onStateChange",function(state){switch(state.data){case YT.PlayerState.PLAYING:slider.flexslider("stop"),canSlide=!1;break;case YT.PlayerState.ENDED:case YT.PlayerState.PAUSED:slider.flexslider("play"),canSlide=!0}}),$(this).data("player",player)})},$(".flexslider .vimeo").each(function(){var player=$(this).closest(".container-lazyload").find("iframe");$f(player).addEvent("ready",ready)}),slider=$(".flexslider").fitVids().flexslider({animation:"slide",useCSS:!0,animationLoop:!0,smoothHeight:!0,pauseOnHover:!0,slideshow:!1,allowOneSlide:!0,video:!0,start:function(slider){0!=$(".flexslider .map").length&&map.invalidateSize()},before:function(slider){0!==slider.slides.eq(slider.currentSlide).find("iframe").length?($f(slider.slides.eq(slider.currentSlide).find("iframe").attr("id")).api("pause"),playVideoAndPauseOthers($(".container-vimeo iframe")[0])):canSlide||slider.flexslider("stop")}}),slider.on("inview",function(event,isVisible){isVisible||$(".flexslider").flexslider("pause")}),$("iframe.youtube").iframeTracker({blurCallback:function(){console.log("clicked"),slider.flexslider("stop")}}),$("iframe.vimeo").iframeTracker({blurCallback:function(){player.api("pause")}}),0!=slider.find(".flex-viewport").length&&slider.addClass("active")}});