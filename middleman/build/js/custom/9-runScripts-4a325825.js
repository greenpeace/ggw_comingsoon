function runAgain(){"use strict";$("#togglEnrollForm").click(function(){"none"==$("#event-signup-node-form").css("display")?($(this).text("Hide form"),$("#event-signup-node-form").slideDown("400")):($(this).text("Click here to change"),$("#event-signup-node-form").slideUp("400"))}),$(".form-item select").wrap('<div class="selector"></div>'),Modernizr.inputtypes.date||$('input[type="date"]').pickadate()}$(document).ready(function(){"use strict";var e=!1;navigator.userAgent.match(/iPhone/i)&&($("#viewport").attr("content","width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0"),$(window).bind("gesturestart",function(){clearTimeout(e),$("#viewport").attr("content","width=device-width,minimum-scale=1.0,maximum-scale=10.0")}).bind("touchend",function(){clearTimeout(e),e=setTimeout(function(){$("#viewport").attr("content","width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0")},1e3)})),FastClick.attach(document.body),$("[data-replace]").ajaxInclude()}),$(window).load(function(){function e(){NiceCommentForm(),offCanvasNav(),showMap(),mobileNav()}var t;clearTimeout(t),t=setTimeout(e,200),$(".form-comment-message textarea, #shoutbox-comment").autogrow({animate:!1}),$("#togglEnrollForm").click(function(){"none"==$("#event-signup-node-form").css("display")?($(this).text("Hide form"),$("#event-signup-node-form").slideDown("400")):($(this).text("Click here to change"),$("#event-signup-node-form").slideUp("400"))}),$(".form-item select").wrap('<div class="selector"></div>'),Modernizr.inputtypes.date||$('input[type="date"]').pickadate(),$(".flexslider").flexslider({animation:"slide",animationSpeed:Modernizr.touch?400:1e3,pauseOnHover:!0}),$(".modal").magnificPopup({type:"ajax",callbacks:{ajaxContentAdded:function(){runAgain()}}})});