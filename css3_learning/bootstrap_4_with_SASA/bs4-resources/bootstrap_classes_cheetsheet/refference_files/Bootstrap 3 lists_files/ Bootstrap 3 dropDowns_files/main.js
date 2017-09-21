(function () {
    'use strict';

    window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback, element) { window.setTimeout(callback, 1000 / 60); };
    })();

    var ticks = 0, rollingTime = 0,
    timeline = {}, timelineID = 0, timelineStopped = false,

	enablerInitHandler = function () {
        Enabler.setProfileId(10008209);
        var devDynamicContent = {};
        devDynamicContent.HeathrowRetail_Summer17_CarParking17Q3p2= [{}];
        devDynamicContent.HeathrowRetail_Summer17_CarParking17Q3p2[0]._id = 0;
        devDynamicContent.HeathrowRetail_Summer17_CarParking17Q3p2[0].Unique_ID = 1;
        devDynamicContent.HeathrowRetail_Summer17_CarParking17Q3p2[0].Reporting_Label = "visitor";
        devDynamicContent.HeathrowRetail_Summer17_CarParking17Q3p2[0].Exit_URL = {};
        devDynamicContent.HeathrowRetail_Summer17_CarParking17Q3p2[0].Exit_URL.Url = "https://example.com";
        Enabler.setDevDynamicContent(devDynamicContent);

        function addExit() {
            Enabler.exit("visitor");
        }

        function clickHandler(evt) {
            Enabler.exitOverride(dynamicContent.HeathrowRetail_Summer17_CarParking17Q3p2[0].Reporting_Label, dynamicContent.HeathrowRetail_Summer17_CarParking17Q3p2[0].Exit_URL.Url);
        }

        var exitClick = get("mainContent");
        exitClick.addEventListener("click", clickHandler, false);

        // Only run when the page is completely loaded.
        if (Enabler.isPageLoaded()) {
            politeInit();
        } else {
            Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, politeInit);
        }
    };

    /* Page ready. Play banner */
    function politeInit() {
        document.body.className += " politeReady";
        startTimeline();
    }

    function doAnimation(id){
        get(id).className += " imageIn";
    }

    function updateLogo(){
        get('logo').className = "endframe";
    }

    function buildTimeline() {
        addToTimeline({ id: bg, time: rollingTime += .05, duration: .5, props: { alpha: 1, ease: easeInSine } });
        addToTimeline({ id: logo, time: rollingTime += .1 , duration: .75, props: { alpha: 1, ease: easeInSine } });
        addToTimeline({ id: logo, time: rollingTime += 2 , duration: .5, props: { alpha: 0, ease: easeInSine, onComplete:updateLogo } });
        addToTimeline({ id: bg1, time: rollingTime += .75, duration: .75, props: { alpha: 1, ease: easeInSine, onStart:doAnimation, onStartParams:['bg1'] } });
        addToTimeline({ id: fr1, time: rollingTime += .5, duration: .75, props: { alpha: 1, ease: easeInSine } });
        addToTimeline({ id: tnc, time: rollingTime += .25, duration: .75, props: { alpha: 1, ease: easeInSine } });

        addToTimeline({ id: fr1, time: rollingTime += 4.5, duration: .5, props: { alpha: 0, ease: easeInSine } });
        addToTimeline({ id: [fr2, bg2], time: rollingTime += .5, duration: .75, props: { alpha: 1, ease: easeInSine, onStart:doAnimation, onStartParams:['bg2'] } });

        addToTimeline({ id: fr2, time: rollingTime += 4, duration: .5, props: { alpha: 0, ease: easeInSine } });
        addToTimeline({ id: [fr3, bg3], time: rollingTime += .5, duration: .75, props: { alpha: 1, ease: easeInSine, onStart:doAnimation, onStartParams:['bg3'] } });

        addToTimeline({ id: fr3, time: rollingTime += 4, duration: .5, props: { alpha: 0, ease: easeInSine } });
        addToTimeline({ id: [fr4, bg4], time: rollingTime += .5, duration: .75, props: { alpha: 1, ease: easeInSine, onStart:doAnimation, onStartParams:['bg4'] } });

        addToTimeline({ id: fr4, time: rollingTime += 3.5, duration: .5, props: { alpha: 0, ease: easeInSine } });
        addToTimeline({ id: [fr5, bg5], time: rollingTime += .5, duration: .75, props: { alpha: 1, ease: easeInSine, onStart:doAnimation, onStartParams:['bg5'] } });

        addToTimeline({ id: bg, time: rollingTime += 3.5 , duration: .5, props: { alpha: 0, ease: easeInSine } });
        addToTimeline({ id: fr5, time: rollingTime += .25, duration: .5, props: { alpha: 0, ease: easeInSine } });
        addToTimeline({ id: logo, time: rollingTime += .75 , duration: .75, props: { alpha: 1, ease: easeInSine } });
        addToTimeline({ id: cta, time: rollingTime += .25 , duration:.75, props: { alpha: 1, ease: easeInSine } });
    }

    function runTimeline() {
        var key, i, obj, elements, tempElement, el;
        for (key in timeline) {
            obj = timeline[key];
            if (obj.inQ && ticks >= obj.time && !timelineStopped) {
                elements = [].concat(obj.id);
                for (i = 0; i < elements.length; i++) {
                    tempElement = elements[i],
					el = typeof tempElement === 'string' ? get(tempElement) : tempElement;
                    if (!obj.abstract && !obj.hiddenEvt) showElement(el);
                    obj.from ? TweenLite.from(el, obj.duration, obj.props) : TweenLite.to(el, obj.duration, obj.props);
                    obj.inQ = false;
                }
            }
        }
        ticks += 1 / 60;
    }

    function addToTimeline(obj) {
        obj.inQ = true;
        obj.timelineID = timelineID++;
        timeline[obj.timelineID] = obj;
    }

    function hideElement(el) {
        var t = [].concat(el);
        for (var l = 0; l < t.length; l++) { t[l].style.display = "none"; }
    }

    function showElement(el) {
        var t = [].concat(el);
        for (var l = 0; l < t.length; l++) { t[l].style.display = "block"; }
    }

    function animate() {
        runTimeline();
        requestAnimFrame(animate);
    }

    function startTimeline() {
        buildTimeline();
        animate();
    }

    window.onload = function () {
        if (Enabler.isInitialized()) {
            enablerInitHandler();
        } else {
            Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
        }
    };

    function get(id) { return document.getElementById(id); }

    var PI = Math.PI, halfPI = Math.PI / 2,
	easeInSine = function (t, b, c, d) {
	    return c * (1 - Math.cos(t / d * (halfPI))) + b;
	},
	easeOutSine = function (t, b, c, d) {
	    return c * Math.sin(t / d * (halfPI)) + b;
	},
	easeInOutSine = function (t, b, c, d) {
	    return c / 2 * (1 - Math.cos(PI * t / d)) + b;
	},
	easeLinear = function (t, b, c, d) {
	    return c * t / d + b;
	},
	easeInQuad = function (t, b, c, d) {
	    return c * (t /= d) * t + b;
	},
	easeOutQuad = function (t, b, c, d) {
	    return -c * (t /= d) * (t - 2) + b;
	};
}());