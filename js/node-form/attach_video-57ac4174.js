$(function(){function processURL(url,success){function processYouTube(id){if(!id)throw new Error("Unsupported YouTube URL");var image="http://img.youtube.com/vi/"+id+"/mqdefault.jpg";$(".media-figure").empty().prepend("<img src="+image+' + id="preview-image" />'),$("#mediainvalid").addClass("element-hidden")}var id;if(url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/)){if(id=RegExp.$6,RegExp.$3.indexOf("youtu")>-1)return processYouTube(id);RegExp.$3.indexOf("vimeo")>-1&&$.ajax({url:"http://vimeo.com/api/v2/video/"+id+".json",jsonp:"callback",dataType:"jsonp",success:function(data){var image=data[0].thumbnail_large;$(".media-figure").empty().prepend("<img src="+image+" />"),$("#mediainvalid").addClass("element-hidden")},error:function(xhr,status,error){alert(error),$(".media-figure").empty()}})}else $(".media-figure").empty(),$("#mediainvalid").removeClass("element-hidden")}$("#selectmedia").focusout(function(){processURL(this.value),$(".preview-wrapper").css("background-color","#fff"),$("#remove-video").removeClass("element-invisible")}),$("#remove-video").on("click",function(e){return e.preventDefault(),$("#preview-image").attr("src","data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),$(".preview-wrapper").removeAttr("style"),$("#selectmedia").val(""),$("#mediainvalid").addClass("element-hidden"),$(this).addClass("element-invisible"),!1})});