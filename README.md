# Cageifier

Ever felt like you're not incorperating Nicolas Cage into your life enough? Or, you've looking to make your website a thousand times more awesome? Look no further.

This was my first attempt at a jQuery plugin. So naturally, I went with more of a practical approach.

Basically you can set any element to slide back and forth from the side of the screen. So, *in theory*, you could use images of anything. But not showing Nicolas Cage would be treachery!


## Usage

The plugin has default options, so this is optional.


### Standard call with default settings:

	$('.elements').cageifier();
	
This will position the element off-screen, and start the animation. It has the option to set the timing on every slide to be random.

### Options

	$('.elements').cageifier({
		position: 'top',
		margin: '30%',
		interval_min: 2000,
		interval_max: 3000,
		speed: 2000,
		display: 1,
		wait: 1000,
		rotate: 0
	});

+ `position` _Where to place the element, must be one of 'top', 'bottom', 'left' and 'right'._
+ `margin` _Spacing from the top left corner. If the element has the position 'left' or 'right', the margins will use the element's width. Otherwise, the margins will use the element's height. This is simply a CSS attribute, so you can use CSS's syntax._
+ `interval_min` and `interval_max` _The slide interval changes on every iteration. You set a minimum iteration time, and a maximum. The interval used will be a random number between these two values. The values are in the form of milliseconds._
+ `speed` _How quick the slide animation should happen, in milliseconds_`
+ `display` _Percentage of element to be exposed to the viewport, between 0.0 and 1.0. eg. 0.54 would show 54% of the image, and hide 46% of the glory of Nicolas Cage._
+ `wait` _Wait time after a slide, in milliseconds._
+ `rotate` _Number of degrees to rotate the element._