/*
 * jQuery dropdown: A simple dropdown plugin
 *
 * Inspired by Bootstrap: http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * Copyright 2013 Cory LaViska for A Beautiful Site, LLC. (http://abeautifulsite.net/)
 * Dual licensed under the MIT / GPL Version 2 licenses
 *
*/
if(jQuery) (function($) {

    $.extend($.fn, {
        dropdown: function(method, data) {

            switch( method ) {
                case 'hide':
                    hide();
                    return $(this);
                case 'attach':
                    console('test');
                    return $(this).attr('data-dropdown', data);
                case 'detach':
                    hide();
                    return $(this).removeAttr('data-dropdown');
                case 'disable':
                    return $(this).addClass('dropdown-disabled');
                case 'enable':
                    hide();
                    return $(this).removeClass('dropdown-disabled');
            }

        }
    });

    function show(event) {

        var trigger = $(this),
            dropdown = $(trigger.attr('data-dropdown')),
            isOpen = trigger.hasClass('dropdown-open');

        // In some cases we don't want to show it
        if( trigger !== event.target && $(event.target).hasClass('dropdown-ignore') ) return;

        event.preventDefault();
        event.stopPropagation();
        hide();

        if( isOpen || trigger.hasClass('dropdown-disabled') ) return;

        // Show it
        trigger.addClass('dropdown-open');
        dropdown
            .data('dropdown-trigger', trigger)
            .show();

        // Position it
        position();

        // Trigger the show callback
        dropdown
            .trigger('show', {
                dropdown: dropdown,
                trigger: trigger
            });

    }

    function hide(event) {

        // In some cases we don't hide them
        var targetGroup = event ? $(event.target).parents().addBack() : null;

        // Are we clicking anywhere in a dropdown?
        if( targetGroup && targetGroup.is('.dropdown') ) {
            // Is it a dropdown menu?
            if( targetGroup.is('.dropdown-list') ) {
                // Did we click on an option? If so close it.
                if( !targetGroup.is('a') ) return;
            } else {
                // Nope, it's a panel. Leave it open.
                return;
            }
        }

        // Hide any dropdown that may be showing
        $(document).find('.dropdown:visible').each( function() {
            var dropdown = $(this);
            dropdown
                .hide()
                .removeData('dropdown-trigger')
                .trigger('hide', { dropdown: dropdown });
        });

        // Remove all dropdown-open classes
        $(document).find('.dropdown-open').removeClass('dropdown-open');

    }

    function position() {

        var dropdown = $('.dropdown:visible').eq(0),
            trigger = dropdown.data('dropdown-trigger'),
            hOffset = trigger ? parseInt(trigger.attr('data-horizontal-offset') || 0, 10) : null,
            vOffset = trigger ? parseInt(trigger.attr('data-vertical-offset') || 0, 10) : null;

        if( dropdown.length === 0 || !trigger ) return;

        // Exclude off-canvas nav elements from this function
        if ( (dropdown.hasClass("relative") && ($(window).width() < 900)) ) {
            return;
        } else {

          // Position the dropdown relative-to-parent...
          if (dropdown.hasClass('dropdown-relative')) {
            dropdown.css({
              left: dropdown.hasClass('dropdown-anchor-right') ?
                trigger.position().left - (dropdown.outerWidth(true) - trigger.outerWidth(true)) - parseInt(trigger.css('margin-right'), 10) + hOffset :
                trigger.position().left + parseInt(trigger.css('margin-left'), 10) + hOffset,
              top: trigger.position().top + trigger.outerHeight(true) - parseInt(trigger.css('margin-top'), 10) + vOffset
            });
          } else {
            // ...or relative to document
            dropdown.css({
              left: dropdown.hasClass('dropdown-anchor-right') ?
                trigger.offset().left - (dropdown.outerWidth() - trigger.outerWidth()) + hOffset : trigger.offset().left + hOffset,
              top: trigger.offset().top + trigger.outerHeight() + vOffset
            });
          }
        }
    }

    var resizeTimer;

    // On resize, run the function and reset the timeout
    // 250 is the delay in milliseconds.
    $(window).resize(function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(position, 250);
    });


    $(document).on('click.dropdown', '[data-dropdown]', show);
    $(document).on('click.dropdown', hide);
    $(window).on('resize', position);

})(jQuery);
