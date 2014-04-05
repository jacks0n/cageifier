/*!
 * jQuery cageify Plugin v1.0.0
 * https://github.com/jacks0n/cageifier
 *
 * Copyright 2014 Jackson Cooper
 * Released under the MIT license
 */
 (function($) {
    'use strict';

    $.fn.cageify = function(config) {
        // Setup our config, using defaults if not defined
        config = $.extend({
            position: 'top',
            margin: '30%',
            interval_min: 2000,
            interval_max: 3000,
            speed: 2000,
            display: 1,
            wait: 1000,
            rotate: 0
        }, config);


        /**
         * Generates a random number between two integers.
         */
        function random_num(min, max) {
            return Math.random() * (max - min) + min;
        }


        this.each(function() {
            var elem = $(this);


            // Hide our element outside of the parent container,
            // and initialise the state of the element.
            elem.css('position', 'absolute');
            elem.css('transform', 'rotate(' + config.rotate + 'deg)');
            elem.css('-webkit-transform', 'rotate(' + config.rotate + 'deg)');
            elem.css('-moz-transform', 'rotate(' + config.rotate + 'deg)');
            elem.css('-ms-transform', 'rotate(' + config.rotate + 'deg)');
            elem.css('-o-transform', 'rotate(' + config.rotate + 'deg)');
            elem.parent().css('overflow', 'hidden');
            elem.data('cageify-state', false);

            // Setup our margins. The margin is relative
            // to the top left of the viewport.
            if (config.position == 'left' || config.position == 'right')
                elem.css('margin-top', config.margin);
            else
                elem.css('margin-left', config.margin);

            // Depending on if the image moves vertically or horizontally,
            // it will move the full width or height of the element,
            // minus the percentage not to display.
            var img_size;
            if (config.position == 'left' || config.position == 'right')
                img_size = elem.width();
            else
                img_size = elem.height();

            // When executed, it runs the show or hide
            // animation, depending on the current state.
            function animate() {
                var properties = {};
                var state = elem.data('cageify-state');

                if (state === true)
                    properties[config.position] = -img_size;
                else
                    properties[config.position] = (config.display - 1) * img_size;

                elem.animate(properties, {
                    duration: config.speed,
                    done: function() {
                        elem.data('cageify-state', !state);
                        var interval = random_num(config.interval_min, config.interval_max);
                        setTimeout(animate, interval);
                    }
                });
            }

            // Initial placement of our image
            elem.css(config.position, -img_size);
            animate();
        });
    };
})(jQuery);