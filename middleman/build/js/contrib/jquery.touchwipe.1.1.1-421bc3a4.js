!function(e){e.fn.touchwipe=function(t){var n={min_move_x:20,min_move_y:20,wipeLeft:function(){},wipeRight:function(){},wipeUp:function(){},wipeDown:function(){},preventDefaultEvents:!1};return t&&e.extend(n,t),this.each(function(){function e(){this.removeEventListener("touchmove",t),o=null,c=!1}function t(t){if(n.preventDefaultEvents&&t.preventDefault(),c){var i=t.touches[0].pageX,h=t.touches[0].pageY,a=o-i,s=u-h;Math.abs(a)>=n.min_move_x?(e(),a>0?n.wipeLeft(t):n.wipeRight(t)):Math.abs(s)>=n.min_move_y&&(e(),s>0?n.wipeDown(t):n.wipeUp(t))}}function i(e){1==e.touches.length&&(o=e.touches[0].pageX,u=e.touches[0].pageY,c=!0,this.addEventListener("touchmove",t,!1))}var o,u,c=!1;"ontouchstart"in document.documentElement&&this.addEventListener("touchstart",i,!1)}),this}}(jQuery);