!function(a){a.flexslider=function(b,c){var d=a(b);d.vars=a.extend({},a.flexslider.defaults,c);var j,e=d.vars.namespace,f=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,g=("ontouchstart"in window||f||window.DocumentTouch&&document instanceof DocumentTouch)&&d.vars.touch,h="click touchend MSPointerUp",i="",k="vertical"===d.vars.direction,l=d.vars.reverse,m=d.vars.itemWidth>0,n="fade"===d.vars.animation,o=""!==d.vars.asNavFor,p={},q=!0;a.data(b,"flexslider",d),p={init:function(){d.animating=!1,d.currentSlide=parseInt(d.vars.startAt?d.vars.startAt:0,10),isNaN(d.currentSlide)&&(d.currentSlide=0),d.animatingTo=d.currentSlide,d.atEnd=0===d.currentSlide||d.currentSlide===d.last,d.containerSelector=d.vars.selector.substr(0,d.vars.selector.search(" ")),d.slides=a(d.vars.selector,d),d.container=a(d.containerSelector,d),d.count=d.slides.length,d.syncExists=a(d.vars.sync).length>0,"slide"===d.vars.animation&&(d.vars.animation="swing"),d.prop=k?"top":"marginLeft",d.args={},d.manualPause=!1,d.stopped=!1,d.started=!1,d.startTimeout=null,d.transitions=!d.vars.video&&!n&&d.vars.useCSS&&function(){var a=document.createElement("div"),b=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var c in b)if(void 0!==a.style[b[c]])return d.pfx=b[c].replace("Perspective","").toLowerCase(),d.prop="-"+d.pfx+"-transform",!0;return!1}(),d.ensureAnimationEnd="",""!==d.vars.controlsContainer&&(d.controlsContainer=a(d.vars.controlsContainer).length>0&&a(d.vars.controlsContainer)),""!==d.vars.manualControls&&(d.manualControls=a(d.vars.manualControls).length>0&&a(d.vars.manualControls)),d.vars.randomize&&(d.slides.sort(function(){return Math.round(Math.random())-.5}),d.container.empty().append(d.slides)),d.doMath(),d.setup("init"),d.vars.controlNav&&p.controlNav.setup(),d.vars.directionNav&&p.directionNav.setup(),d.vars.keyboard&&(1===a(d.containerSelector).length||d.vars.multipleKeyboard)&&a(document).bind("keyup",function(a){var b=a.keyCode;if(!d.animating&&(39===b||37===b)){var c=39===b?d.getTarget("next"):37===b?d.getTarget("prev"):!1;d.flexAnimate(c,d.vars.pauseOnAction)}}),d.vars.mousewheel&&d.bind("mousewheel",function(a,b){a.preventDefault();var f=d.getTarget(0>b?"next":"prev");d.flexAnimate(f,d.vars.pauseOnAction)}),d.vars.pausePlay&&p.pausePlay.setup(),d.vars.slideshow&&d.vars.pauseInvisible&&p.pauseInvisible.init(),d.vars.slideshow&&(d.vars.pauseOnHover&&d.hover(function(){d.manualPlay||d.manualPause||d.pause()},function(){d.manualPause||d.manualPlay||d.stopped||d.play()}),d.vars.pauseInvisible&&p.pauseInvisible.isHidden()||(d.vars.initDelay>0?d.startTimeout=setTimeout(d.play,d.vars.initDelay):d.play())),o&&p.asNav.setup(),g&&d.vars.touch&&p.touch(),(!n||n&&d.vars.smoothHeight)&&a(window).bind("resize orientationchange focus",p.resize),d.find("img").attr("draggable","false"),setTimeout(function(){d.vars.start(d)},200)},asNav:{setup:function(){d.asNav=!0,d.animatingTo=Math.floor(d.currentSlide/d.move),d.currentItem=d.currentSlide,d.slides.removeClass(e+"active-slide").eq(d.currentItem).addClass(e+"active-slide"),f?(b._slider=d,d.slides.each(function(){var b=this;b._gesture=new MSGesture,b._gesture.target=b,b.addEventListener("MSPointerDown",function(a){a.preventDefault(),a.currentTarget._gesture&&a.currentTarget._gesture.addPointer(a.pointerId)},!1),b.addEventListener("MSGestureTap",function(b){b.preventDefault();var c=a(this),e=c.index();a(d.vars.asNavFor).data("flexslider").animating||c.hasClass("active")||(d.direction=d.currentItem<e?"next":"prev",d.flexAnimate(e,d.vars.pauseOnAction,!1,!0,!0))})})):d.slides.on(h,function(b){b.preventDefault();var c=a(this),f=c.index(),g=c.offset().left-a(d).scrollLeft();0>=g&&c.hasClass(e+"active-slide")?d.flexAnimate(d.getTarget("prev"),!0):a(d.vars.asNavFor).data("flexslider").animating||c.hasClass(e+"active-slide")||(d.direction=d.currentItem<f?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){d.manualControls?p.controlNav.setupManual():p.controlNav.setupPaging()},setupPaging:function(){var f,g,b="thumbnails"===d.vars.controlNav?"control-thumbs":"control-paging",c=1;if(d.controlNavScaffold=a('<ol class="'+e+"control-nav "+e+b+'"></ol>'),d.pagingCount>1)for(var j=0;j<d.pagingCount;j++){if(g=d.slides.eq(j),f="thumbnails"===d.vars.controlNav?'<img src="'+g.attr("data-thumb")+'"/>':"<a>"+c+"</a>","thumbnails"===d.vars.controlNav&&!0===d.vars.thumbCaptions){var k=g.attr("data-thumbcaption");""!=k&&void 0!=k&&(f+='<span class="'+e+'caption">'+k+"</span>")}d.controlNavScaffold.append("<li>"+f+"</li>"),c++}d.controlsContainer?a(d.controlsContainer).append(d.controlNavScaffold):d.append(d.controlNavScaffold),p.controlNav.set(),p.controlNav.active(),d.controlNavScaffold.delegate("a, img",h,function(b){if(b.preventDefault(),""===i||i===b.type){var c=a(this),f=d.controlNav.index(c);c.hasClass(e+"active")||(d.direction=f>d.currentSlide?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction))}""===i&&(i=b.type),p.setToClearWatchedEvent()})},setupManual:function(){d.controlNav=d.manualControls,p.controlNav.active(),d.controlNav.bind(h,function(b){if(b.preventDefault(),""===i||i===b.type){var c=a(this),f=d.controlNav.index(c);c.hasClass(e+"active")||(d.direction=f>d.currentSlide?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction))}""===i&&(i=b.type),p.setToClearWatchedEvent()})},set:function(){var b="thumbnails"===d.vars.controlNav?"img":"a";d.controlNav=a("."+e+"control-nav li "+b,d.controlsContainer?d.controlsContainer:d)},active:function(){d.controlNav.removeClass(e+"active").eq(d.animatingTo).addClass(e+"active")},update:function(b,c){d.pagingCount>1&&"add"===b?d.controlNavScaffold.append(a("<li><a>"+d.count+"</a></li>")):1===d.pagingCount?d.controlNavScaffold.find("li").remove():d.controlNav.eq(c).closest("li").remove(),p.controlNav.set(),d.pagingCount>1&&d.pagingCount!==d.controlNav.length?d.update(c,b):p.controlNav.active()}},directionNav:{setup:function(){var b=a('<ul class="'+e+'direction-nav"><li><a class="'+e+'prev" href="#">'+d.vars.prevText+'</a></li><li><a class="'+e+'next" href="#">'+d.vars.nextText+"</a></li></ul>");d.controlsContainer?(a(d.controlsContainer).append(b),d.directionNav=a("."+e+"direction-nav li a",d.controlsContainer)):(d.append(b),d.directionNav=a("."+e+"direction-nav li a",d)),p.directionNav.update(),d.directionNav.bind(h,function(b){b.preventDefault();var c;(""===i||i===b.type)&&(c=d.getTarget(a(this).hasClass(e+"next")?"next":"prev"),d.flexAnimate(c,d.vars.pauseOnAction)),""===i&&(i=b.type),p.setToClearWatchedEvent()})},update:function(){var a=e+"disabled";1===d.pagingCount?d.directionNav.addClass(a).attr("tabindex","-1"):d.vars.animationLoop?d.directionNav.removeClass(a).removeAttr("tabindex"):0===d.animatingTo?d.directionNav.removeClass(a).filter("."+e+"prev").addClass(a).attr("tabindex","-1"):d.animatingTo===d.last?d.directionNav.removeClass(a).filter("."+e+"next").addClass(a).attr("tabindex","-1"):d.directionNav.removeClass(a).removeAttr("tabindex")}},pausePlay:{setup:function(){var b=a('<div class="'+e+'pauseplay"><a></a></div>');d.controlsContainer?(d.controlsContainer.append(b),d.pausePlay=a("."+e+"pauseplay a",d.controlsContainer)):(d.append(b),d.pausePlay=a("."+e+"pauseplay a",d)),p.pausePlay.update(d.vars.slideshow?e+"pause":e+"play"),d.pausePlay.bind(h,function(b){b.preventDefault(),(""===i||i===b.type)&&(a(this).hasClass(e+"pause")?(d.manualPause=!0,d.manualPlay=!1,d.pause()):(d.manualPause=!1,d.manualPlay=!0,d.play())),""===i&&(i=b.type),p.setToClearWatchedEvent()})},update:function(a){"play"===a?d.pausePlay.removeClass(e+"pause").addClass(e+"play").html(d.vars.playText):d.pausePlay.removeClass(e+"play").addClass(e+"pause").html(d.vars.pauseText)}},touch:function(){function r(f){d.animating?f.preventDefault():(window.navigator.msPointerEnabled||1===f.touches.length)&&(d.pause(),g=k?d.h:d.w,i=Number(new Date),o=f.touches[0].pageX,p=f.touches[0].pageY,e=m&&l&&d.animatingTo===d.last?0:m&&l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:m&&d.currentSlide===d.last?d.limit:m?(d.itemW+d.vars.itemMargin)*d.move*d.currentSlide:l?(d.last-d.currentSlide+d.cloneOffset)*g:(d.currentSlide+d.cloneOffset)*g,a=k?p:o,c=k?o:p,b.addEventListener("touchmove",s,!1),b.addEventListener("touchend",t,!1))}function s(b){o=b.touches[0].pageX,p=b.touches[0].pageY,h=k?a-p:a-o,j=k?Math.abs(h)<Math.abs(o-c):Math.abs(h)<Math.abs(p-c);var f=500;(!j||Number(new Date)-i>f)&&(b.preventDefault(),!n&&d.transitions&&(d.vars.animationLoop||(h/=0===d.currentSlide&&0>h||d.currentSlide===d.last&&h>0?Math.abs(h)/g+2:1),d.setProps(e+h,"setTouch")))}function t(){if(b.removeEventListener("touchmove",s,!1),d.animatingTo===d.currentSlide&&!j&&null!==h){var k=l?-h:h,m=d.getTarget(k>0?"next":"prev");d.canAdvance(m)&&(Number(new Date)-i<550&&Math.abs(k)>50||Math.abs(k)>g/2)?d.flexAnimate(m,d.vars.pauseOnAction):n||d.flexAnimate(d.currentSlide,d.vars.pauseOnAction,!0)}b.removeEventListener("touchend",t,!1),a=null,c=null,h=null,e=null}function u(a){a.stopPropagation(),d.animating?a.preventDefault():(d.pause(),b._gesture.addPointer(a.pointerId),q=0,g=k?d.h:d.w,i=Number(new Date),e=m&&l&&d.animatingTo===d.last?0:m&&l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:m&&d.currentSlide===d.last?d.limit:m?(d.itemW+d.vars.itemMargin)*d.move*d.currentSlide:l?(d.last-d.currentSlide+d.cloneOffset)*g:(d.currentSlide+d.cloneOffset)*g)}function v(a){a.stopPropagation();var c=a.target._slider;if(c){var d=-a.translationX,f=-a.translationY;return q+=k?f:d,h=q,j=k?Math.abs(q)<Math.abs(-d):Math.abs(q)<Math.abs(-f),a.detail===a.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){b._gesture.stop()}):void((!j||Number(new Date)-i>500)&&(a.preventDefault(),!n&&c.transitions&&(c.vars.animationLoop||(h=q/(0===c.currentSlide&&0>q||c.currentSlide===c.last&&q>0?Math.abs(q)/g+2:1)),c.setProps(e+h,"setTouch"))))}}function w(b){b.stopPropagation();var d=b.target._slider;if(d){if(d.animatingTo===d.currentSlide&&!j&&null!==h){var f=l?-h:h,k=d.getTarget(f>0?"next":"prev");d.canAdvance(k)&&(Number(new Date)-i<550&&Math.abs(f)>50||Math.abs(f)>g/2)?d.flexAnimate(k,d.vars.pauseOnAction):n||d.flexAnimate(d.currentSlide,d.vars.pauseOnAction,!0)}a=null,c=null,h=null,e=null,q=0}}var a,c,e,g,h,i,j=!1,o=0,p=0,q=0;f?(b.style.msTouchAction="none",b._gesture=new MSGesture,b._gesture.target=b,b.addEventListener("MSPointerDown",u,!1),b._slider=d,b.addEventListener("MSGestureChange",v,!1),b.addEventListener("MSGestureEnd",w,!1)):b.addEventListener("touchstart",r,!1)},resize:function(){!d.animating&&d.is(":visible")&&(m||d.doMath(),n?p.smoothHeight():m?(d.slides.width(d.computedW),d.update(d.pagingCount),d.setProps()):k?(d.viewport.height(d.h),d.setProps(d.h,"setTotal")):(d.vars.smoothHeight&&p.smoothHeight(),d.newSlides.width(d.computedW),d.setProps(d.computedW,"setTotal")))},smoothHeight:function(a){if(!k||n){var b=n?d:d.viewport;a?b.animate({height:d.slides.eq(d.animatingTo).height()},a):b.height(d.slides.eq(d.animatingTo).height())}},sync:function(b){var c=a(d.vars.sync).data("flexslider"),e=d.animatingTo;switch(b){case"animate":c.flexAnimate(e,d.vars.pauseOnAction,!1,!0);break;case"play":c.playing||c.asNav||c.play();break;case"pause":c.pause()}},uniqueID:function(b){return b.find("[id]").each(function(){var b=a(this);b.attr("id",b.attr("id")+"_clone")}),b},pauseInvisible:{visProp:null,init:function(){var a=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var b=0;b<a.length;b++)a[b]+"Hidden"in document&&(p.pauseInvisible.visProp=a[b]+"Hidden");if(p.pauseInvisible.visProp){var c=p.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(c,function(){p.pauseInvisible.isHidden()?d.startTimeout?clearTimeout(d.startTimeout):d.pause():d.started?d.play():d.vars.initDelay>0?setTimeout(d.play,d.vars.initDelay):d.play()})}},isHidden:function(){return document[p.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(j),j=setTimeout(function(){i=""},3e3)}},d.flexAnimate=function(b,c,f,h,i){if(d.vars.animationLoop||b===d.currentSlide||(d.direction=b>d.currentSlide?"next":"prev"),o&&1===d.pagingCount&&(d.direction=d.currentItem<b?"next":"prev"),!d.animating&&(d.canAdvance(b,i)||f)&&d.is(":visible")){if(o&&h){var j=a(d.vars.asNavFor).data("flexslider");if(d.atEnd=0===b||b===d.count-1,j.flexAnimate(b,!0,!1,!0,i),d.direction=d.currentItem<b?"next":"prev",j.direction=d.direction,Math.ceil((b+1)/d.visible)-1===d.currentSlide||0===b)return d.currentItem=b,d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;d.currentItem=b,d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),b=Math.floor(b/d.visible)}if(d.animating=!0,d.animatingTo=b,c&&d.pause(),d.vars.before(d),d.syncExists&&!i&&p.sync("animate"),d.vars.controlNav&&p.controlNav.active(),m||d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),d.atEnd=0===b||b===d.last,d.vars.directionNav&&p.directionNav.update(),b===d.last&&(d.vars.end(d),d.vars.animationLoop||d.pause()),n)g?(d.slides.eq(d.currentSlide).css({opacity:0,zIndex:1}),d.slides.eq(b).css({opacity:1,zIndex:2}),d.wrapup(q)):(d.slides.eq(d.currentSlide).css({zIndex:1}).animate({opacity:0},d.vars.animationSpeed,d.vars.easing),d.slides.eq(b).css({zIndex:2}).animate({opacity:1},d.vars.animationSpeed,d.vars.easing,d.wrapup));else{var r,s,t,q=k?d.slides.filter(":first").height():d.computedW;m?(r=d.vars.itemMargin,t=(d.itemW+r)*d.move*d.animatingTo,s=t>d.limit&&1!==d.visible?d.limit:t):s=0===d.currentSlide&&b===d.count-1&&d.vars.animationLoop&&"next"!==d.direction?l?(d.count+d.cloneOffset)*q:0:d.currentSlide===d.last&&0===b&&d.vars.animationLoop&&"prev"!==d.direction?l?0:(d.count+1)*q:l?(d.count-1-b+d.cloneOffset)*q:(b+d.cloneOffset)*q,d.setProps(s,"",d.vars.animationSpeed),d.transitions?(d.vars.animationLoop&&d.atEnd||(d.animating=!1,d.currentSlide=d.animatingTo),d.container.unbind("webkitTransitionEnd transitionend"),d.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(d.ensureAnimationEnd),d.wrapup(q)}),clearTimeout(d.ensureAnimationEnd),d.ensureAnimationEnd=setTimeout(function(){d.wrapup(q)},d.vars.animationSpeed+100)):d.container.animate(d.args,d.vars.animationSpeed,d.vars.easing,function(){d.wrapup(q)})}d.vars.smoothHeight&&p.smoothHeight(d.vars.animationSpeed)}},d.wrapup=function(a){n||m||(0===d.currentSlide&&d.animatingTo===d.last&&d.vars.animationLoop?d.setProps(a,"jumpEnd"):d.currentSlide===d.last&&0===d.animatingTo&&d.vars.animationLoop&&d.setProps(a,"jumpStart")),d.animating=!1,d.currentSlide=d.animatingTo,d.vars.after(d)},d.animateSlides=function(){!d.animating&&q&&d.flexAnimate(d.getTarget("next"))},d.pause=function(){clearInterval(d.animatedSlides),d.animatedSlides=null,d.playing=!1,d.vars.pausePlay&&p.pausePlay.update("play"),d.syncExists&&p.sync("pause")},d.play=function(){d.playing&&clearInterval(d.animatedSlides),d.animatedSlides=d.animatedSlides||setInterval(d.animateSlides,d.vars.slideshowSpeed),d.started=d.playing=!0,d.vars.pausePlay&&p.pausePlay.update("pause"),d.syncExists&&p.sync("play")},d.stop=function(){d.pause(),d.stopped=!0},d.canAdvance=function(a,b){var c=o?d.pagingCount-1:d.last;return b?!0:o&&d.currentItem===d.count-1&&0===a&&"prev"===d.direction?!0:o&&0===d.currentItem&&a===d.pagingCount-1&&"next"!==d.direction?!1:a!==d.currentSlide||o?d.vars.animationLoop?!0:d.atEnd&&0===d.currentSlide&&a===c&&"next"!==d.direction?!1:d.atEnd&&d.currentSlide===c&&0===a&&"next"===d.direction?!1:!0:!1},d.getTarget=function(a){return d.direction=a,"next"===a?d.currentSlide===d.last?0:d.currentSlide+1:0===d.currentSlide?d.last:d.currentSlide-1},d.setProps=function(a,b,c){var e=function(){var c=a?a:(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo,e=function(){if(m)return"setTouch"===b?a:l&&d.animatingTo===d.last?0:l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:d.animatingTo===d.last?d.limit:c;switch(b){case"setTotal":return l?(d.count-1-d.currentSlide+d.cloneOffset)*a:(d.currentSlide+d.cloneOffset)*a;case"setTouch":return l?a:a;case"jumpEnd":return l?a:d.count*a;case"jumpStart":return l?d.count*a:a;default:return a}}();return-1*e+"px"}();d.transitions&&(e=k?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",c=void 0!==c?c/1e3+"s":"0s",d.container.css("-"+d.pfx+"-transition-duration",c),d.container.css("transition-duration",c)),d.args[d.prop]=e,(d.transitions||void 0===c)&&d.container.css(d.args),d.container.css("transform",e)},d.setup=function(b){if(n)d.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(g?d.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+d.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(d.currentSlide).css({opacity:1,zIndex:2}):d.slides.css({opacity:0,display:"block",zIndex:1}).eq(d.currentSlide).css({zIndex:2}).animate({opacity:1},d.vars.animationSpeed,d.vars.easing)),d.vars.smoothHeight&&p.smoothHeight();else{var c,f;"init"===b&&(d.viewport=a('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(d).append(d.container),d.cloneCount=0,d.cloneOffset=0,l&&(f=a.makeArray(d.slides).reverse(),d.slides=a(f),d.container.empty().append(d.slides))),d.vars.animationLoop&&!m&&(d.cloneCount=2,d.cloneOffset=1,"init"!==b&&d.container.find(".clone").remove(),p.uniqueID(d.slides.first().clone().addClass("clone").attr("aria-hidden","true")).appendTo(d.container),p.uniqueID(d.slides.last().clone().addClass("clone").attr("aria-hidden","true")).prependTo(d.container)),d.newSlides=a(d.vars.selector,d),c=l?d.count-1-d.currentSlide+d.cloneOffset:d.currentSlide+d.cloneOffset,k&&!m?(d.container.height(200*(d.count+d.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){d.newSlides.css({display:"block"}),d.doMath(),d.viewport.height(d.h),d.setProps(c*d.h,"init")},"init"===b?100:0)):(d.container.width(200*(d.count+d.cloneCount)+"%"),d.setProps(c*d.computedW,"init"),setTimeout(function(){d.doMath(),d.newSlides.css({width:d.computedW,"float":"left",display:"block"}),d.vars.smoothHeight&&p.smoothHeight()},"init"===b?100:0))}m||d.slides.removeClass(e+"active-slide").eq(d.currentSlide).addClass(e+"active-slide"),d.vars.init(d)},d.doMath=function(){var a=d.slides.first(),b=d.vars.itemMargin,c=d.vars.minItems,e=d.vars.maxItems;d.w=void 0===d.viewport?d.width():d.viewport.width(),d.h=a.height(),d.boxPadding=a.outerWidth()-a.width(),m?(d.itemT=d.vars.itemWidth+b,d.minW=c?c*d.itemT:d.w,d.maxW=e?e*d.itemT-b:d.w,d.itemW=d.minW>d.w?(d.w-b*(c-1))/c:d.maxW<d.w?(d.w-b*(e-1))/e:d.vars.itemWidth>d.w?d.w:d.vars.itemWidth,d.visible=Math.floor(d.w/d.itemW),d.move=d.vars.move>0&&d.vars.move<d.visible?d.vars.move:d.visible,d.pagingCount=Math.ceil((d.count-d.visible)/d.move+1),d.last=d.pagingCount-1,d.limit=1===d.pagingCount?0:d.vars.itemWidth>d.w?d.itemW*(d.count-1)+b*(d.count-1):(d.itemW+b)*d.count-d.w-b):(d.itemW=d.w,d.pagingCount=d.count,d.last=d.count-1),d.computedW=d.itemW-d.boxPadding},d.update=function(a,b){d.doMath(),m||(a<d.currentSlide?d.currentSlide+=1:a<=d.currentSlide&&0!==a&&(d.currentSlide-=1),d.animatingTo=d.currentSlide),d.vars.controlNav&&!d.manualControls&&("add"===b&&!m||d.pagingCount>d.controlNav.length?p.controlNav.update("add"):("remove"===b&&!m||d.pagingCount<d.controlNav.length)&&(m&&d.currentSlide>d.last&&(d.currentSlide-=1,d.animatingTo-=1),p.controlNav.update("remove",d.last))),d.vars.directionNav&&p.directionNav.update()},d.addSlide=function(b,c){var e=a(b);d.count+=1,d.last=d.count-1,k&&l?void 0!==c?d.slides.eq(d.count-c).after(e):d.container.prepend(e):void 0!==c?d.slides.eq(c).before(e):d.container.append(e),d.update(c,"add"),d.slides=a(d.vars.selector+":not(.clone)",d),d.setup(),d.vars.added(d)},d.removeSlide=function(b){var c=isNaN(b)?d.slides.index(a(b)):b;d.count-=1,d.last=d.count-1,isNaN(b)?a(b,d.slides).remove():k&&l?d.slides.eq(d.last).remove():d.slides.eq(b).remove(),d.doMath(),d.update(c,"remove"),d.slides=a(d.vars.selector+":not(.clone)",d),d.setup(),d.vars.removed(d)},p.init()},a(window).blur(function(){focused=!1}).focus(function(){focused=!0}),a.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},a.fn.flexslider=function(b){if(void 0===b&&(b={}),"object"==typeof b)return this.each(function(){var c=a(this),d=b.selector?b.selector:".slides > li",e=c.find(d);1===e.length&&b.allowOneSlide===!0||0===e.length?(e.fadeIn(400),b.start&&b.start(c)):void 0===c.data("flexslider")&&new a.flexslider(this,b)});var c=a(this).data("flexslider");switch(b){case"play":c.play();break;case"pause":c.pause();break;case"stop":c.stop();break;case"next":c.flexAnimate(c.getTarget("next"),!0);break;case"prev":case"previous":c.flexAnimate(c.getTarget("prev"),!0);break;default:"number"==typeof b&&c.flexAnimate(b,!0)}}}(jQuery),function($){"use strict";$.fn.fitVids=function(options){var settings={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var head=document.head||document.getElementsByTagName("head")[0],css=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",div=document.createElement("div");div.innerHTML='<p>x</p><style id="fit-vids-style">'+css+"</style>",head.appendChild(div.childNodes[1])}return options&&$.extend(settings,options),this.each(function(){var selectors=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];settings.customSelector&&selectors.push(settings.customSelector);var ignoreList=".fitvidsignore";settings.ignore&&(ignoreList=ignoreList+", "+settings.ignore);var $allVideos=$(this).find(selectors.join(","));$allVideos=$allVideos.not("object object"),$allVideos=$allVideos.not(ignoreList),$allVideos.each(function(){var $this=$(this);if(!($this.parents(ignoreList).length>0||"embed"===this.tagName.toLowerCase()&&$this.parent("object").length||$this.parent(".fluid-width-video-wrapper").length)){$this.css("height")||$this.css("width")||!isNaN($this.attr("height"))&&!isNaN($this.attr("width"))||($this.attr("height",9),$this.attr("width",16));var height="object"===this.tagName.toLowerCase()||$this.attr("height")&&!isNaN(parseInt($this.attr("height"),10))?parseInt($this.attr("height"),10):$this.height(),width=isNaN(parseInt($this.attr("width"),10))?$this.width():parseInt($this.attr("width"),10),aspectRatio=height/width;if(!$this.attr("id")){var videoID="fitvid"+Math.floor(999999*Math.random());$this.attr("id",videoID)}$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*aspectRatio+"%"),$this.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto),function($){$.fn.iframeTracker=function(handler){$.iframeTracker.handlersList.push(handler),$(this).bind("mouseover",{handler:handler},function(e){e.data.handler.over=!0;try{e.data.handler.overCallback(this)}catch(ex){}}).bind("mouseout",{handler:handler},function(e){e.data.handler.over=!1,$.iframeTracker.focusRetriever.focus();try{e.data.handler.outCallback(this)}catch(ex){}})},$.iframeTracker={focusRetriever:null,focusRetrieved:!1,handlersList:[],isIE8AndOlder:!1,init:function(){try{1==$.browser.msie&&$.browser.version<9&&(this.isIE8AndOlder=!0)}catch(ex){try{var matches=navigator.userAgent.match(/(msie) ([\w.]+)/i);matches[2]<9&&(this.isIE8AndOlder=!0)}catch(ex2){}}if($(window).focus(),$(window).blur(function(e){$.iframeTracker.windowLoseFocus(e)}),$("body").append('<div style="position:fixed; top:0; left:0; overflow:hidden;"><input style="position:absolute; left:-300px;" type="text" value="" id="focus_retriever" readonly="true" /></div>'),this.focusRetriever=$("#focus_retriever"),this.focusRetrieved=!1,$(document).mousemove(function(){document.activeElement&&"IFRAME"==document.activeElement.tagName&&($.iframeTracker.focusRetriever.focus(),$.iframeTracker.focusRetrieved=!0)}),this.isIE8AndOlder&&this.focusRetriever.blur(function(e){e.stopPropagation(),e.preventDefault(),$.iframeTracker.windowLoseFocus(e)}),this.isIE8AndOlder){$("body").click(function(){$(window).focus()}),$("form").click(function(e){e.stopPropagation()});try{$("body").on("click","form",function(e){e.stopPropagation()})}catch(ex){console.log("[iframeTracker] Please update jQuery to 1.7 or newer. (exception: "+ex.message+")")}}},windowLoseFocus:function(){for(var i in this.handlersList)if(1==this.handlersList[i].over)try{this.handlersList[i].blurCallback()}catch(ex){}}},$(document).ready(function(){$.iframeTracker.init()})}(jQuery);var Froogaloop=function(){function e(a){return new e.fn.init(a)}function h(a,c,b){if(!b.contentWindow.postMessage)return!1;var f=b.getAttribute("src").split("?")[0],a=JSON.stringify({method:a,value:c});"//"===f.substr(0,2)&&(f=window.location.protocol+f),b.contentWindow.postMessage(a,f)}function j(a){var c,b;try{c=JSON.parse(a.data),b=c.event||c.method}catch(f){}if("ready"==b&&!i&&(i=!0),a.origin!=k)return!1;var a=c.value,e=c.data,g=""===g?null:c.player_id;return c=g?d[g][b]:d[b],b=[],c?(void 0!==a&&b.push(a),e&&b.push(e),g&&b.push(g),0<b.length?c.apply(null,b):c.call()):!1}function l(a,c,b){b?(d[b]||(d[b]={}),d[b][a]=c):d[a]=c}var d={},i=!1,k="";return e.fn=e.prototype={element:null,init:function(a){"string"==typeof a&&(a=document.getElementById(a)),this.element=a,a=this.element.getAttribute("src"),"//"===a.substr(0,2)&&(a=window.location.protocol+a);for(var a=a.split("/"),c="",b=0,f=a.length;f>b&&3>b;b++)c+=a[b],2>b&&(c+="/");return k=c,this},api:function(a,c){if(!this.element||!a)return!1;var b=this.element,f=""!==b.id?b.id:null,d=c&&c.constructor&&c.call&&c.apply?null:c,e=c&&c.constructor&&c.call&&c.apply?c:null;return e&&l(a,e,f),h(a,d,b),this},addEvent:function(a,c){if(!this.element)return!1;var b=this.element,d=""!==b.id?b.id:null;return l(a,c,d),"ready"!=a?h("addEventListener",a,b):"ready"==a&&i&&c.call(null,d),this},removeEvent:function(a){if(!this.element)return!1;var b,c=this.element;a:{if((b=""!==c.id?c.id:null)&&d[b]){if(!d[b][a]){b=!1;break a}d[b][a]=null}else{if(!d[a]){b=!1;break a}d[a]=null}b=!0}"ready"!=a&&b&&h("removeEventListener",a,c)}},e.fn.init.prototype=e.fn,window.addEventListener?window.addEventListener("message",j,!1):window.attachEvent("onmessage",j),window.Froogaloop=window.$f=e}();!function($){function getViewportSize(){var mode,domObject,size={height:w.innerHeight,width:w.innerWidth};return size.height||(mode=d.compatMode,(mode||!$.support.boxModel)&&(domObject="CSS1Compat"===mode?documentElement:d.body,size={height:domObject.clientHeight,width:domObject.clientWidth})),size}function getViewportOffset(){return{top:w.pageYOffset||documentElement.scrollTop||d.body.scrollTop,left:w.pageXOffset||documentElement.scrollLeft||d.body.scrollLeft}}function checkInView(){var elementsLength,$elements=$(),i=0;if($.each(inviewObjects,function(i,inviewObject){var selector=inviewObject.data.selector,$element=inviewObject.$element;$elements=$elements.add(selector?$element.find(selector):$element)}),elementsLength=$elements.length)for(viewportSize=viewportSize||getViewportSize(),viewportOffset=viewportOffset||getViewportOffset();elementsLength>i;i++)if($.contains(documentElement,$elements[i])){var visiblePartX,visiblePartY,visiblePartsMerged,$element=$($elements[i]),elementSize={height:$element.height(),width:$element.width()},elementOffset=$element.offset(),inView=$element.data("inview");if(!viewportOffset||!viewportSize)return;elementOffset.top+elementSize.height>viewportOffset.top&&elementOffset.top<viewportOffset.top+viewportSize.height&&elementOffset.left+elementSize.width>viewportOffset.left&&elementOffset.left<viewportOffset.left+viewportSize.width?(visiblePartX=viewportOffset.left>elementOffset.left?"right":viewportOffset.left+viewportSize.width<elementOffset.left+elementSize.width?"left":"both",visiblePartY=viewportOffset.top>elementOffset.top?"bottom":viewportOffset.top+viewportSize.height<elementOffset.top+elementSize.height?"top":"both",visiblePartsMerged=visiblePartX+"-"+visiblePartY,inView&&inView===visiblePartsMerged||$element.data("inview",visiblePartsMerged).trigger("inview",[!0,visiblePartX,visiblePartY])):inView&&$element.data("inview",!1).trigger("inview",[!1])}}var viewportSize,viewportOffset,timer,inviewObjects={},d=document,w=window,documentElement=d.documentElement,expando=$.expando;$.event.special.inview={add:function(data){inviewObjects[data.guid+"-"+this[expando]]={data:data,$element:$(this)},timer||$.isEmptyObject(inviewObjects)||(timer=setInterval(checkInView,250))},remove:function(data){try{delete inviewObjects[data.guid+"-"+this[expando]]}catch(e){}$.isEmptyObject(inviewObjects)&&(clearInterval(timer),timer=null)}},$(w).bind("scroll resize scrollstop",function(){viewportSize=viewportOffset=null}),!documentElement.addEventListener&&documentElement.attachEvent&&documentElement.attachEvent("onfocusin",function(){viewportOffset=null})}(jQuery),$(function(){if(0!=$(".flexslider").length){var slider,canSlide=!0;window.onYouTubeIframeAPIReady=function(){$(".flexslider .youtube").each(function(){var player=new YT.Player(this,{playerVars:{autoplay:0}});player.addEventListener("onStateChange",function(state){switch(state.data){case YT.PlayerState.PLAYING:slider.flexslider("stop"),canSlide=!1;break;case YT.PlayerState.ENDED:case YT.PlayerState.PAUSED:slider.flexslider("play"),canSlide=!0}}),$(this).data("player",player)})},$(".flexslider .vimeo").each(function(){}),slider=$(".flexslider").fitVids().flexslider({animation:"slide",useCSS:!0,animationLoop:!0,smoothHeight:!0,pauseOnHover:!0,slideshow:!1,allowOneSlide:!0,video:!0,start:function(){0!=$(".flexslider .map").length&&map.invalidateSize()},before:function(slider){0!==slider.slides.eq(slider.currentSlide).find(".vimeo").length?$f(slider.slides.eq(slider.currentSlide).find(".vimeo").attr("id")).api("pause"):canSlide||slider.flexslider("stop")}}),slider.on("inview",function(event,isVisible){isVisible||$(".flexslider").flexslider("pause")}),$("iframe.youtube").iframeTracker({blurCallback:function(){slider.flexslider("stop")}}),0!=slider.find(".flex-viewport").length&&slider.addClass("active")}}),$(function(lazyload_youtube){var classPreviewYoutube="preview-youtube",videoratio=.5625,thumbnailurl="";lazyload_youtube.init=function(options){setOptionsYoutube(options),$(document).ready(doload_lly()).ajaxStop(function(){doload_lly()}),"function"==typeof responsiveVideos.init&&$_o.responsive===!0&&responsiveVideos.init()};var $_o,setOptionsYoutube=function(options){$_o=$.extend({theme:"dark",colour:"red",controls:!0,loadpolicy:!0,showinfo:!0,relations:!1,buttonstyle:"",preroll:"",postroll:"",videoseo:!0,responsive:!0,thumbnailquality:"0"},options)},doload_lly=function(){$("a.lazy-load-youtube").each(function(index){var that=this,load_embedparms=function(){var embedparms=$(that).attr("href").split("/embed/")[1];return embedparms||(embedparms=$(that).attr("href").split("://youtu.be/")[1]),embedparms||(embedparms=$(that).attr("href").split("v=")[1].replace(/\&/,"?")),embedparms},embedparms=load_embedparms(),loadYouId=function(){return embedparms.split("?")[0].split("#")[0]},youid=loadYouId(),loadYouIdPreroll=function(){var preroll="";return $_o.preroll!==preroll&&void 0!==$_o.preroll?$_o.preroll:embedparms},preroll=loadYouIdPreroll(),start=embedparms.match(/[#&]t=(\d+)s/);start?start=start[1]:(start=embedparms.match(/[#&]t=(\d+)m(\d+)s/),start?start=60*parseInt(start[1])+parseInt(start[2]):(start=embedparms.match(/[?&]start=(\d+)/),start&&(start=start[1])));var emu="//www.youtube.com/embed/"+loadYouIdPreroll(),videoTitle=function(){return void 0!==$(that).attr("video-title")?$(that).attr("video-title"):""!==$(this).html()&&void 0!==$(this).html()?$(this).html():""},youtubeUrl=function(id){return"//www.youtube.com/watch?v="+id},getWidth=function(element){var calc=parseInt(element.css("width"))-4;return calc},getHeight=function(element){var calc=0;if($_o.responsive===!1)calc=parseInt(element.css("height"))-4;
else{var width=getWidth(element);calc=Math.round(width*videoratio)}return calc};embedparms=embedparms.split("#")[0],start&&-1===embedparms.indexOf("start=")&&(embedparms+=(-1===embedparms.indexOf("?")?"?":"&")+"start="+start);var itemprop_name="";$_o.videoseo===!0&&(itemprop_name=' itemprop="name"'),$(this).html(-1!==embedparms.indexOf("showinfo=0")?"":'<p><span class="youtube"'+itemprop_name+">"+videoTitle()+"</span></p>"),$(this).prepend('<div style="height:'+getHeight($(this))+"px;width:"+getWidth($(this))+'px;" class="lazy-load-youtube-div"></div>').addClass($_o.buttonstyle);var setThumbnailUrl=function(youid){var $url="//i2.ytimg.com/vi/"+youid+"/"+$_o.thumbnailquality+".jpg";thumbnailurl=$url};setThumbnailUrl(youid);var getThumbnailUrl=function(){return thumbnailurl};$(this).css("background","#000 url("+getThumbnailUrl()+") center center no-repeat"),$_o.videoseo===!0&&($(that).append('<meta itemprop="contentLocation" content="'+youtubeUrl(youid)+'" />'),$(that).append('<meta itemprop="embedUrl" content="'+emu+'" />'),$(this).append('<meta itemprop="thumbnail" content="'+getThumbnailUrl()+'" />'),$.getJSON("http://gdata.youtube.com/feeds/api/videos/"+youid+"?v=2&alt=jsonc&callback=?",function(data){$(that).append('<meta itemprop="datePublished" content="'+data.data.uploaded+'" />'),$(that).append('<meta itemprop="duration" content="'+data.data.duration+'" />'),$(that).append('<meta itemprop="aggregateRating" content="'+data.data.rating+'" />')})),$(this).attr("id",youid+index),$(this).attr("href",youtubeUrl(youid)+(start?"#t="+start+"s":""));var theme="";$_o.theme!==theme&&void 0!==$_o.theme&&"dark"!==$_o.theme&&(theme="&theme="+$_o.theme);var colour="";$_o.colour!==colour&&void 0!==$_o.colour&&"red"!==$_o.colour&&(colour="&color="+$_o.colour);var showinfo="";$_o.showinfo||(showinfo="&showinfo=0");var relations="";$_o.relations||(relations="&rel=0");var controls="";$_o.controls||(controls="&controls=0");var loadpolicy="";$_o.loadpolicy||(loadpolicy="&iv_load_policy=3"),preroll=preroll!==youid?youid+",":"";var postroll="";$_o.postroll!==postroll&&void 0!==$_o.postroll&&(postroll=$_o.postroll);var jsapi="&enablejsapi=1",apiv="&version=3",videoid=$(that).parent().attr("id"),playerapiid="&playerapiid="+videoid;emu+=(-1===emu.indexOf("?")?"?":"&")+"autoplay=1"+theme+colour+controls+loadpolicy+showinfo+relations+jsapi+apiv+playerapiid;var videoFrame='<iframe width="'+parseInt($(this).css("width"))+'" height="'+parseInt($(this).css("height"))+'" class="youtube" style="vertical-align:top;" src="'+emu+'?" frameborder="0" allowfullscreen></iframe>';$(this).on("click",function(){var tag=document.createElement("script");tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName("script")[0];return firstScriptTag.parentNode.insertBefore(tag,firstScriptTag),removePlayerControls(this),$(".flexslider").on("click",".flex-prev, .flex-next",function(){$(".flexslider .youtube").each(function(){$(this).data("player").pauseVideo()})}),$("#"+youid+index).replaceWith(videoFrame),"function"==typeof responsiveVideos.resize&&$_o.responsive===!0&&responsiveVideos.resize(),!1});var removePlayerControls=function(element){$(element).removeClass(classPreviewYoutube)}})};$.fn.bindFirst=function(which,handler){var $el=$(this);$el.unbind(which,handler),$el.bind(which,handler);var events=$._data($el[0]).events,registered=events[which];registered.unshift(registered.pop()),events[which]=registered};var responsiveVideos={config:{container:$(".container-lazyload"),selector:"object, embed, iframe, .preview-lazyload, .lazy-load-youtube-div, .lazy-load-vimeo-div"},init:function(){responsiveVideos.config.container.length>0&&($(window).on("resize",responsiveVideos.resize),$(window).bindFirst("load",function(){responsiveVideos.resize()}),$(window).on("load",function(){responsiveVideos.resize()}))},resize:function(){$(responsiveVideos.config.selector,responsiveVideos.config.container).each(function(){var $this=$(this),width=$this.parent().width(),height=Math.round(width*videoratio);$this.attr("height",height),$this.attr("width",width),$this.css({height:height,width:width})})}}}(window.lazyload_youtube=window.lazyload_youtube||{},jQuery)),$(function(){lazyload_youtube.init({theme:"dark",colour:"white",controls:!0,responsive:!0,thumbnailquality:"0"})});