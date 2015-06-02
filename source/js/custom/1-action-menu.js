$(function() {

  //check if there are at least two blocks and they are not hidden on mobile nor in a modal window
  var totalBlocks = 0;
  totalBlocks += parseInt($('.l-main-column > .block').not('.hidden-mobile').not('.white-popup').length);
  totalBlocks += parseInt($('.l-sidebar > .block').not('.hidden-mobile').not('.white-popup').length);

  console.log(totalBlocks);

  if (totalBlocks >= 2) {

    // create menu wrapper
    var action_menu_object = "<nav class='action-menu'><ul class='tabs'></ul></nav>";

    $(action_menu_object).insertBefore('header');

    // create menu items from sidebar
    $('.l-sidebar > .block').not('.hidden-mobile').not('.white-popup').each(function() {
      var blockId     = $(this).attr('id');
      var blockIcon   = $(this).children('i').clone().removeClass(function (index, css) {
        var class1 = css.match(/(^|\s)block-\S+/g);
        var class2 = css.match(/(^|\s)icon-bg\S+/g);
        return class1+ " "+class2
      });
      var blockIconClass = blockIcon.attr("class");

      var blockLabel  = $(this).children('.block-title').text();
      var menuItem = "<li><a href='#"+ blockId +"' class='tab'><i class='icon "+ blockIconClass +"'></i>"+ blockLabel +" </a></li>";
      $(menuItem).appendTo($('nav.action-menu .tabs'));
    })

    // create menu items from main-column
    $('.l-main-column > .block').not('.hidden-mobile').not('.white-popup').each(function() {
      var blockId = $(this).attr('id');
      var blockIcon   = $(this).children('i').clone().removeClass(function (index, css) {
        var class1 = css.match(/(^|\s)block-\S+/g);
        var class2 = css.match(/(^|\s)icon-bg\S+/g);
        return class1+ " "+class2
      });
      var blockIconClass = blockIcon.attr("class");
      var blockLabel = $(this).children('.block-title').text();
      var menuItem = "<li><a href='#"+ blockId +"' class='tab'><i class='icon "+ blockIconClass +"'></i>"+ blockLabel +" </a></li>";
      $(menuItem).prependTo($('nav.action-menu .tabs'));
    })

    $('nav.action-menu').children('li:first-child').addClass('current');

  }

  var resizeTimer;

  // This script creates a dropdown of the action menu, when there are more then 2 buttons.
  function overflowDropdown() {

    if ($(window).width() < 900) {

       // Add class so we know to push down the content some more
      $('body').once().addClass('with-action-menu');

      $('.action-menu .tabs, .action-menu .tabs li').removeAttr('style');

      var menuWrapper = $('.action-menu');

      var fullMenu = menuWrapper.children('.tabs');

      fullMenu.removeClass('flexthis').removeAttr('style');

      $('.tabs-overflow').remove();

      var overFlowMenu = "<ul class='tabs-overflow element-invisible'><li><a class='tab-overflow-trigger' href='#' data-dropdown='#am-dropdown'>more <i class='icon-down-mini'></i></a><div class='dropdown dropdown-tip dropdown-relative dropdown-anchor-right' id='am-dropdown'><ul class='dropdown-menu'></ul></div></li></ul>";
      $(overFlowMenu).appendTo('.action-menu');

      var fullHeight = menuWrapper.outerHeight();

      var triggerWidth = $('.action-menu .tab-overflow-trigger').outerWidth();
      console.log(triggerWidth);

      //var handle = menuWrapper.find('.tab-overflow-trigger').addClass('element-invisible');

      // The 'more' button is translatable and must always fit
      newfullMenu = fullMenu.css('padding-right', triggerWidth);

      // Remove the moved class on each resize
      fullMenu.find('.moved').removeClass('moved');

      // remove all of the actions out of the overflow menu
      //overFlowMenu.('li').remove();

      // find all of the .items that arent visible and add/clone them to the overflow menu
      fullMenu.children('li:visible').filter(function() {
        var elementOffset = $(this).position().top;
        return elementOffset+$(this).height() > fullHeight;

      }).addClass('moved').clone(true).prependTo('#am-dropdown .dropdown-menu').children('a');

      // Calculate the width of the items the user sees, so we determine the position of the more  button
      var totalWidth = 0;

      fullMenu.children('li:visible:not(.moved)').each(function() {
        totalWidth += $(this).outerWidth(true) + 4;
      });

      // Position the 'more' button
      $('.action-menu .tabs-overflow').css("left", totalWidth);

      if ($('#am-dropdown .dropdown-menu').children('li').length!==0) {
        $('.tabs-overflow').removeClass('element-invisible');
      } else {
        //If it is empty hide the dropdown menu,
        fullMenu.addClass('flexthis').css({'padding-right': '0'});
      }

    }

  };

  $('.action-menu li:first').addClass('current');

  // for prototype only
  if ($('body').hasClass('front')) {
    $('#content').removeClass('current');
    $('#upcoming-events').addClass('current');
  }

  if (window.location.hash) {
    var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
    if (hash != 'form-saved') {

      $('.action-menu li, .l-main-column .current, .sidebar .current').removeClass('current');
      $('#' + hash).addClass('current');
      $('.action-menu li a[href="#' + hash + '"]').parent().addClass('current');
    }

  }

  $('.action-menu .tab').click(function(e){

    $('.action-menu li, .l-main-column .current, .sidebar .current').removeClass('current');
    $(this).parent().addClass('current');
    var currentTab = $(this).attr('href');
    $(currentTab).addClass('current');

    e.preventDefault();

    var scrollTo = $('body').offset().top - 50;
    $(window).scrollTop(scrollTo);

    $('input[type=file]').nicefileinput();

    if ($('.block .map').length != 0) {
      map.invalidateSize(); //solve map is not loading correctly
    }

    $(this).closest('.dropdown').hide();

    $(window).trigger("resize");

  });

  // Click on another button to trigger a action menu item switch
  $('.show-block').click(function(e){
    $('.action-menu li, .l-main-column .current, .sidebar .current').removeClass('current');
    var currentTab = $(this).attr('href');

    $('.action-menu li a').each(function() {
      var link = $(this).attr('href');
      if (link == currentTab) {
        $(this).parent().addClass('current');
      }
    });

    $(currentTab).addClass('current');

    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 300);

  });


  function initiateResponsiveTabs() {
    $(window).trigger("resize");
  }

  // On resize, run the function and reset the timeout
  // 250 is the delay in milliseconds.
  $(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(overflowDropdown, 250);
  });

  overflowDropdown();

});

