$(function(){function truncateTeasers(){$(".node-teaser .node-title").truncate({lines:2,lineHeight:19}),$("body").hasClass("page-who-is-who")||($(".node-teaser .field-name-body").truncate({lines:2,lineHeight:21}),$(".node-teaser .node-title").each(function(){$(this).height()>21&&($(this).nextAll(".field-name-body").addClass("body-ellipsis"),$(this).siblings(".field-group-format").children(".field-type-location").hide())}))}var resizeTimer;0!=$(".block-profile").length&&$(window).width()>900&&($(".block-profile .content").truncate({lines:11,lineHeight:19,showMore:'<a href="#" id="toggleblock" style="display: block;margin-top: 7px;"><span class="button btn-s">read more</span></a>'}),$("#toggleblock").on("click",function(event){event.preventDefault(),$(".block-profile .content").truncate("expand")})),$(window).resize(function(){clearTimeout(resizeTimer),resizeTimer=setTimeout(truncateTeasers,250)}),truncateTeasers()});