$(function(){function readURL(input){if(input.files&&input.files[0]){var reader=new FileReader;reader.onload=function(e){$("#preview-image").attr("src",e.target.result),$(".preview-wrapper").css("background-color","#fff"),$("#remove-image").removeClass("element-hidden")},reader.readAsDataURL(input.files[0])}}function confirmExit(){return 1==formmodified?"You have made changes to this content which is not saved. Scroll down to save. Do you wish to leave the page?":void 0}$(".delete-clone").click(function(event){event.preventDefault();var tr=$(this).closest(".row");tr.find("input").each(function(){$(this).val("")}),tr.find("select").each(function(){$(this).val("").trigger("chosen:updated")})});var counter=0;$(".clone-trigger").click(function(e){$(".clone-item").clone(!0).insertAfter(".clone-item").removeClass("clone-item").addClass("item"+counter).find("input").val(""),counter++,e.preventDefault(),$(".field-event-roles-values").sortable({handle:".tabledrag-handle",items:":not(.disabled)"})}),$("#section-social .form-select").on("change",function(){var channel={fb:"http://www.facebook.com/username",tw:"http://www.twitter.com/username","in":"http://www.linkedin.com/username",pi:"http://www.pinterest.com/username",gp:"http://plus.google.com/username",vk:"http://www.vk.com/username"};$(this).closest(".row").find(".form-text").attr("placeholder",channel[$(this).val()])});var editableAddress=$("#edit-event-address, #edit-group-address");$(editableAddress).prop("disabled",!0),$(editableAddress).prop("placeholder","please select a country first..."),$("#country-select").on("change",function(){$(editableAddress).prop("disabled",!1),$(editableAddress).prop("placeholder","venue, street, city etc.")}),$("#section-localgroup, #section-skillsgroup").hide(),$('input:radio[name="field_group_type"]').change(function(){$(this).is(":checked")&&"4"==$(this).val()?($("#section-localgroup").show(),0!=$(".block .map").length&&map.invalidateSize()):$(this).is(":checked")&&"4"!=$(this).val()&&$("#section-localgroup").hide(),$(this).is(":checked")&&"5"==$(this).val()?$("#section-skillsgroup").show():$(this).is(":checked")&&"5"!=$(this).val()&&$("#section-skillsgroup").hide()}),$("#section-notifications .form-select").change(function(){"specify"==$(this).val()?$(this).closest(".form-wrapper").next(".collapsible-fieldset-wrapper").removeClass("element-hidden"):"specify"!=$(this).val()&&$(this).closest(".form-wrapper").next(".collapsible-fieldset-wrapper").addClass("element-hidden")}),$(".input-good").click(function(e){e.preventDefault(),e.stopPropagation();var target=$(this).data("target");(void 0!=target||null!=target)&&(window.location="./"+target)}),$(".input-false").one("click",function(e){e.preventDefault(),e.stopPropagation(),$(".help-block").removeClass("element-invisible"),$('<div class="absolute_message"><div class="form-sent form-error"> <p>You need to fill in the required fields.</p></div></div>').insertBefore(".l-main").hide().fadeIn("slow"),$(".has-error-hidden").removeClass("has-error-hidden").addClass("has-error"),$("html, body").animate({scrollTop:$(".absolute_message").offset().top-110},1e3),showErrorIcons()}),$(document).on("click",function(){$(".form-sent").fadeOut("slow")}),$(".launcher").on("click",function(e){e.preventDefault(),$("#uploadimage").click()}),$("#remove-image").on("click",function(e){return e.preventDefault(),$("#preview-image").attr("src","data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),$(".preview-wrapper").removeAttr("style"),$("#file-name").addClass("element-hidden").removeClass("filename").html(""),$(this).addClass("element-hidden"),!1}),$("#uploadimage").change(function(){readURL(this),$("#file-name").removeClass("element-hidden").addClass("filename").html(this.files[0].name)});var formmodified=0;$("form *").change(function(){formmodified=1}),window.onbeforeunload=confirmExit,$(".input-good").click(function(){formmodified=0})});