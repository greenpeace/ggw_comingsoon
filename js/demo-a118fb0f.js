$(function(){function notificationTrigger(){$(window).width()<=899?($("#notifications-trigger").attr("href","#notifications-panel"),$("#messages-trigger").attr("href","./my-messages.html"),$(".attention-trigger").removeAttr("data-dropdown"),$("#notifications-trigger").addClass("modal-inline"),$(".attention-panel").removeClass("dropdown dropdown-tip dropdown-anchor-right").addClass("mfp-hide").removeAttr("style"),$(".attention-panel .tabable-block").css({"max-height":vh-70,overflow:"auto"})):$(window).width()>900&&($(".attention-trigger").removeClass("modal-inline"),$("#notifications-trigger").attr("data-dropdown","#notifications-panel").attr("href","#"),messages>0&&$("#messages-trigger").attr("data-dropdown","#messages-panel").attr("href","#"),$(".attention-panel").addClass("dropdown dropdown-tip dropdown-anchor-right"),$("#notifications-panel").removeClass("mfp-hide"))}var resizeTimer;if(0!==$(".logged-in").length){var date=new Date,minutes=1;date.setTime(date.getTime()+60*minutes*1e3);var notiValue=$.cookie("notifications");if(void 0==notiValue){$.cookie("notifications","6",{expires:date});var notifications="6"}else var notifications=notiValue;$("#notifications-number").text(notifications),"0"==notiValue&&$("#notifications-number").hide(),$("#notifications-trigger").click(function(){$("#notifications-number").text("2"),"6"==notiValue&&$.cookie("notifications","2",{expires:date}),$(".tab:last-child").click(function(){$("#notifications-number").hide(),"2"==notiValue&&$.cookie("notifications","0",{expires:date})})});var messagesValue=$.cookie("messages");if(void 0==messagesValue){$.cookie("messages",2,{expires:date});var messages=2}else var messages=messagesValue;if($("#messages-number").text(messages),0==messages&&($("#messages-trigger").attr("href","./my-messages.html").removeAttr("data-dropdown"),$("#messages-number").hide()),messages>0&&$("#messages-panel .media").click(function(){messages--,$("#messages-number").text(messages),$.cookie("messages",messages,{expires:date}),0==messages&&($("#messages-number").hide(),$("#messages-trigger").attr("href","./my-messages.html").removeAttr("data-dropdown"))}),$("#showallnotifications").click(function(e){var extraalerts=$("#hidden-notifications").html();$("#notialerts .notifications-section").append(extraalerts),$("#notialerts .notifications-section").animate({scrollTop:518}),$(this).addClass("disabled"),e.preventDefault()}),$.isNumeric(combinedNotifications)){var combinedNotifications=parseInt($("#notifications-number").text())+parseInt($("#messages-number").text());$("#combined-number").text(combinedNotifications),0==combinedNotifications&&$("#combined-number").hide()}var vh=$(window).height();$(window).resize(function(){clearTimeout(resizeTimer),resizeTimer=setTimeout(notificationTrigger,250)}),notificationTrigger()}}),$(function(){if(window.location.hash){var hash=window.location.hash.substring(1);"form-saved"==hash&&$('<div class="form-sent form-success"><i class="icon icon-check"></i> <p>Your changes have been saved.</p></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow"),"album-created"==hash&&$('<div class="form-sent form-success"><i class="icon icon-check"></i> <p>The album "Photos of induction training" has been published.</p></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow"),"enrolled-for-event"==hash&&$('<div class="form-sent form-success"><i class="icon icon-login"></i> <p>You have succesfully enrolled for "Induction training".</p></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow"),"friend-request-sent"==hash&&$('<div class="form-sent form-success"><i class="icon icon-mail"></i> <p>An invitation has been sent to your friend(s).</p></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow"),"event-created"==hash&&$('<div class="form-sent form-success"><i class="icon icon-check"></i> <p>Your event has been created and published.</p></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow"),"confirmed-join-group"==hash&&$('<div class="form-sent form-success"><i class="icon icon-check"></i> <p>You are now a member of Emlyn Gardens local group.</p></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow"),"confirmed-leave-group"==hash&&$('<div class="form-sent form-success"><i class="icon icon-cancel"></i> <p>You are not longer a member of Emlyn Gardens local group.</p></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow")}$("#send-private-message .form-comment-submit").click(function(){$.magnificPopup.close(),$('<div class="form-sent form-success"><i class="icon icon-mail"></i> <p>A private message has been sent.</p></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow")}),$("#send-message .form-comment-submit").click(function(){$.magnificPopup.close(),$('<div class="form-sent form-success"><i class="icon icon-comment"></i> <p>A message is sent to the selected attendees.</p></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow")}),$("#send-email .form-comment-submit").click(function(){$.magnificPopup.close(),$('<div class="form-sent form-success"><i class="icon icon-mail"></i> <p>An email is sent to all selected attendees.</p></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow")}),$("#confirm-friend-request").click(function(){$.magnificPopup.close(),$("#button-friend-request").addClass("disabled").text("Friend request has been sent."),$('<div class="form-sent form-success"><i class="icon icon-mail"></i> <p>Your friend request has been sent.</p></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow")})}),$(function(){$("#subscribe-toggle").on("click",function(){$(this).text(function(i,text){return"Follow"===text?"Unfollow":"Follow"}),$(this).toggleClass("active")})}),$(function(){$(".approve-friend").click(function(){$(this).closest(".field-friend-status").html('<div class="btn-group"><a class="button btn-s" href="#"><i class="icon-trash"></i>Unfriend</a></div>'),$('<div class="form-sent form-success"><i class="icon icon-check"></i> <p>Friend request approved.</p></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow")}),$(".decline-friend").click(function(){$(this).closest(".node-teaser-user").remove(),$('<div class="form-sent form-success"><i class="icon icon-cancel"></i> <p>Friend request declined.</p></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow")}),$(".unfriend").click(function(){$(this).parent(".btn-group").html('<a class="button btn-s" href="#"><i class="icon-user-add"></i>Add as friend</a></div>'),$('<div class="form-sent form-success"><i class="icon icon-cancel"></i> <p>You are no longer friends with this person.</p></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow")})});