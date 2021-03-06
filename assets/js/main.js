(function() {
	// ScrollMagic
	var controller = new ScrollMagic.Controller();
	// Define the tween
	var team_tween = TweenMax.to("#team1 svg", 5, {
		opacity: 0,
		scale: .8,
		ease: Expo.easeInOut
	});
	// This should just target the team page (about):
	var team_scene = new ScrollMagic.Scene({
			duration: '100%',
			triggerElement: "#team1",
			triggerHook: 0,
		})
		.setTween(team_tween)
		.setPin("#team1 svg")
		.addTo(controller);
	// Define the tween
	var team_tween_2 = TweenMax.to("#team2 svg", 5, {
		opacity: 0,
		scale: .8,
		ease: Expo.easeInOut
	});
	// This should just target the team page (about):
	var team_scene = new ScrollMagic.Scene({
			duration: '100%',
			triggerElement: "#team2",
			triggerHook: 0,
		})
		.setTween(team_tween_2)
		.setPin("#team2 svg")
		.addTo(controller);

	//////////////////////////////////////////////////////////////////////
	// Adding the menu overlay
	//////////////////////////////////////////////////////////////////////
	var triggerBttn = document.getElementById( 'trigger-overlay' ),
		overlay = document.querySelector( 'div.overlay' ),
		closeBttn = overlay.querySelector( 'button.overlay-close' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function toggleOverlay() {
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
		}
	}

	triggerBttn.addEventListener( 'click', toggleOverlay );
	closeBttn.addEventListener( 'click', toggleOverlay );
})();
