$(function(){if(window.location.hash){var hash=window.location.hash.substring(1);"form-saved"==hash&&$('<div class="absolute_message"><div class="form-sent form-success"><p>Your changes have been saved.</p></div></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow"),"album-created"==hash&&$('<div class="absolute_message"><div class="form-sent form-success"> <p>The album "Photos of induction training" has been published.</p></div></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow"),"enrolled-for-event"==hash&&$('<div class="absolute_message"><div class="form-sent form-success"> <p>You have succesfully enrolled for "Induction training".</p></div></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow"),"friend-request-sent"==hash&&$('<div class="absolute_message"><div class="form-sent form-success"> <p>An invitation has been sent to your friend(s).</p></div></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow"),"event-created"==hash&&$('<div class="absolute_message"><div class="form-sent form-success"><p>Your event has been created and published.</p></div></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow"),"confirmed-join-group"==hash&&$('<div class="absolute_message"><div class="form-sent form-success"> <p>You are now a member of Emlyn Gardens local group.</p></div></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow"),"confirmed-leave-group"==hash&&$('<div class="absolute_message"><div class="form-sent form-success"></i> <p>You are not longer a member of Emlyn Gardens local group.</p></div></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow"),"first-login"==hash&&($('<div class="absolute_message"><div class="form-sent form-success"><p>You have been added to the group <a href="./group-home-country-enrolled.html">Greenpeace Greenwire UK</a>.</p><p>You have now logged in with the temporary password which was automatically generated for you.</p> <p>Please change your password before continuing your use of Greenwire.</div></div>').insertBefore(".l-main").hide().fadeIn("slow"),$(".has-attention-hidden").removeClass("has-attention-hidden").addClass("has-attention"),showAttentionIcons()),$(document).on("click",function(){$(".form-sent").fadeOut("slow")})}$("#send-private-message .form-comment-submit").click(function(e){$.magnificPopup.close(),$('<div class="absolute_message"><div class="form-sent form-success"><p>A private message has been sent.</p></div></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow")}),$("#send-message .form-comment-submit").click(function(e){$.magnificPopup.close(),$('<div class="absolute_message"><div class="form-sent form-success"><p>A message is sent to the selected attendees.</p></div></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow")}),$("#send-email .form-comment-submit").click(function(e){$.magnificPopup.close(),$('<div class="absolute_message"><div class="form-sent form-success"><p>An email is sent to all selected attendees.</p></div></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow")}),$("#confirm-friend-request").click(function(e){$.magnificPopup.close(),$("#button-friend-request").addClass("disabled").text("Friend request has been sent."),$('<div class="absolute_message"><div class="form-sent form-success"><p>Your friend request has been sent.</p></div></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow")})});