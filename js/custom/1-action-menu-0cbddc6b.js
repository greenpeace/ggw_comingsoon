$(function(){function overflowDropdown(){if($(window).width()<900){$(".action-menu .tabs, .action-menu .tabs li").removeAttr("style");var menuWrapper=$(".action-menu"),fullMenu=menuWrapper.children(".tabs");fullMenu.removeClass("flexthis").removeAttr("style"),$(".tabs-overflow").remove();var overFlowMenu="<ul class='tabs-overflow element-invisible'><li><a class='tab-overflow-trigger' href='#' data-dropdown='#am-dropdown'>more <i class='icon-down-mini'></i></a><div class='dropdown dropdown-tip dropdown-relative dropdown-anchor-right' id='am-dropdown'><ul class='dropdown-menu'></ul></div></li></ul>";$(overFlowMenu).appendTo(".action-menu");var fullHeight=menuWrapper.outerHeight(),triggerWidth=$(".action-menu .tab-overflow-trigger").outerWidth();newfullMenu=fullMenu.css("padding-right",triggerWidth),fullMenu.find(".moved").removeClass("moved"),fullMenu.children("li:visible").filter(function(){var elementOffset=$(this).position().top;return elementOffset+$(this).height()>fullHeight}).addClass("moved").clone(!0).prependTo("#am-dropdown .dropdown-menu").children("a");var totalWidth=0;fullMenu.children("li:visible:not(.moved)").each(function(){totalWidth+=$(this).outerWidth(!0)}),$(".action-menu .tabs-overflow").css("left",totalWidth),0!==$("#am-dropdown .dropdown-menu").children("li").length?$(".tabs-overflow").removeClass("element-invisible"):fullMenu.addClass("flexthis").css({"padding-right":"0"})}}var blocksMain=$(".l-main-column > .block").not(".hidden-mobile").not(".white-popup"),blocksSidebar=$(".l-sidebar > .block").not(".hidden-mobile").not(".white-popup"),blocks=blocksMain.add(blocksSidebar),no=$(blocks).length;if(no>=2){$("body").once().addClass("with-action-menu");var action_menu_object="<nav class='action-menu'><ul class='tabs'></ul></nav>";$(action_menu_object).insertBefore("header"),$(blocks).each(function(){var blockId=$(this).attr("id"),blockIcon=$(this).children("i").clone().removeClass(function(index,css){var class1=css.match(/(^|\s)block-\S+/g),class2=css.match(/(^|\s)icon-bg\S+/g);return class1+" "+class2}),blockIconClass=blockIcon.attr("class"),blockLabel=$(this).find(".block-title").attr("data-amtitle"),menuItem="<li><a href='#"+blockId+"' class='tab'><i class='icon "+blockIconClass+"'></i>"+blockLabel+" </a></li>";$(menuItem).appendTo($("nav.action-menu .tabs"))})}var resizeTimer;if($(".action-menu li:first").addClass("current"),$("body").hasClass("front")&&($("#content").removeClass("current"),$("#upcoming-events").addClass("current")),window.location.hash){var hash=window.location.hash.substring(1);hash.match("^block")&&(console.log(hash),$(".action-menu li, .l-main-column .current, .sidebar .current").removeClass("current"),$("#"+hash).addClass("current"),$('.action-menu li a[href="#'+hash+'"]').parent().addClass("current"))}$(".action-menu .tab").click(function(e){$(".action-menu li, .l-main-column .current, .sidebar .current").removeClass("current"),$(this).parent().addClass("current");var currentTab=$(this).attr("href");$(currentTab).addClass("current"),e.preventDefault();var scrollTo=$("body").offset().top-50;$(window).scrollTop(scrollTo),$("input[type=file]").nicefileinput(),0!=$(".block .map").length&&map.invalidateSize(),$(this).closest(".dropdown").hide(),$(window).trigger("resize")}),$(window).width()<900&&$(".show-block").click(function(e){$(".action-menu li, .l-main-column .current, .sidebar .current").removeClass("current");var currentTab=$(this).attr("href");$(".action-menu li a").each(function(){var link=$(this).attr("href");link==currentTab&&$(this).parent().addClass("current")}),$(currentTab).addClass("current"),e.preventDefault(),$("html, body").animate({scrollTop:0},300)}),$(window).resize(function(){clearTimeout(resizeTimer),resizeTimer=setTimeout(overflowDropdown,250)}),overflowDropdown()});