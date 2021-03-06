/* CONFIGURATION */

var siteid = 3;
var selectedCategories = [];

var requests = ['//metrics.nt.vc/feeds/digests/electronics2017uk/?site_id=' + siteid + '&jsonp=mycallback'];
// var requests=['../src/dummy_feed.js'];


/* Document Ready */

if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', init, true);
} else if (document.all && !window.opera) { //Crude test for IE
    //Define a "blank" external JavaScript tag
    document.write('<script type="text/javascript" id="contentloadtag" defer="defer" src="javascript:void(0)"></script>');
    var contentloadtag = document.getElementById("contentloadtag");
    contentloadtag.onreadystatechange = function() {
        if (this.readyState == "complete") {
            init();
        }
    }
}

/* RPP Feed Loading */

var JSONResults = new Array();

var ErrorIsCalled = false;

var eBayData;
var eBayDataObjectArray = new Array();
var eBayDataObject = new Object();

var requestsLoaded = 0;
var dataObjects = new Array();
var feedsLoaded = 0;
var fallbackTimer;

window.onerror = function() {
    callOnError();
}
if (getUrlVars()['showFallback'] === "true") {
    callOnError();
}


function _id(id) {
    return document.getElementById(id);
}


function requestServerCall(url) {
    fallbackTimer = setTimeout(showFallback, 4000);
    var head = document.head;
    var script = document.createElement("script");

    script.setAttribute("src", url);
    script.setAttribute("charset", "UTF-8");
    head.appendChild(script);
}

function mycallback(data) {
    feedsLoaded++;
    eBayDataObjectArray = [];

    for (var i = data.length - 1; i >= 0; i--) {
        try {
            var tmp = {
                item: {
                    itemId: data[i].dealseventlisting.listingId,
                    categories: data[i].dealseventlisting.listingId,
                    viewItemURL: data[i].dealseventlistingproperties.view_item_url,
                    title: data[i].dealseventlisting.title.content,
                    sellingStatus: {
                        currentPrice: {
                            value: data[i].dealseventlisting.currentBidPrice.value
                        }
                    },
                    shippingInfo: {
                        freeShippingAvailable: false
                    }
                }
            }


            if (data[i].dealseventlisting.discountPrices && data[i].dealseventlisting.discountPrices.length > 0) {
                tmp.item.discountPriceInfo = {
                    priceLabel: data[i].dealseventlisting.discountPrices[0].discountProperties.price_label,
                    percentSavings: data[i].dealseventlisting.discountPrices[0].discountPercentage,
                    originalRetailPrice: {
                        value: data[i].dealseventlisting.discountPrices[0].discountProperties.original_retail_price
                    }
                }
            }
            eBayDataObjectArray.push(tmp)
        } catch (e) {
            console.log(e);
        }
    }

    for (var i = 0; i < eBayDataObjectArray.length; i++) {
        JSONResults.push(eBayDataObjectArray[i]); //push eBayDataObjectArray Objects into JSONResults Array  ?for item-split-function etc?
    }

    if (feedsLoaded == requests.length) {
        JSONResults = unique(JSONResults);
        callOnComplete();
    } else {
        showFallback();
    }
}


function init() {
    for (var i = 0; i < requests.length; i++) {
        requestServerCall(requests[i]);
    }


    if (eBayData == null) {
        //alert("NO AJAX SUPPORTED");
    }
}

/* Intro Animation */
function playIntroAnimation() {
    var tl = new TimelineLite();
    var dur = 0.5;
    tl.to("#mainwrapper", dur, { autoAlpha: 1 });
    tl.add(topBottom(["#titleHolder"]));
    tl.add(inOut(["#titleHolderOne", "#bg2", "#introLogo2"]));
    tl.to("#bg1", dur, { width: 280 }, "-=1");
    tl.to("#intro", dur, {
        xPercent: 100,
        ease: Power1.easeInOut,
        onComplete: nextAutoItem()
    }, 6);
    tl.to(".uiBtn", dur, {display: 'block', autoAlpha:1});
    tl.from(("#titleHolderTwo"), dur, {y: "-90", ease: Power1.easeInOut}, "-=1");
    tl.from(("#cta"), dur, {x: "728", ease: Power1.easeInOut}, "-=1");

    setTimeout(finishIntro, 1000);

    function inOut(el) {
        return TweenMax.from(el, dur, { x: "-728", ease: Power1.easeInOut, repeat: 1, yoyo: true, repeatDelay: 2 })
    }

    function topBottom(el) {
      return TweenMax.from(el, dur, { y: "-90", ease: Power1.easeInOut, repeat: 1, yoyo: true, repeatDelay: 2 })
    }
}

function finishIntro() {
    if (ErrorIsCalled != true) {
        if (FeedReady == true) {
            clearTimeout(fallbackTimer);
            hideIntro();
        } else {
            introReady = true;
        }
    } else {

    }
}

function hideIntro() {
    nextItem();
    //TODO
    setTimeout(hideIntroComplete, 1050);
    // setTimeout(hideIntroComplete,0);
}

function hideIntroComplete() {
    // see html file for size specifics
    // slideTimer = setTimeout(nextAutoItem, 4000);
    autoTimer = setTimeout(stopAutoAnimation, 14000);
    mainwrapper = _id('mainwrapper');
    mainwrapper.onmouseover = function() {
        autoSlider = false;
    }
}

function callOnError(e) {
    if (ErrorIsCalled == false) {
        ErrorIsCalled = true;
    }

}

/**
 * eBay 3D Slider @ add2 - 2015
 */

var currentPosition = 0;

var sURL;

var imgHolder = _id("productImage");
var numImageLoaded = 0;
var numPreloadImages = 5;
var imagePos1 = Math.ceil(numPreloadImages / 2) - 1;
var imagePos2 = 0;
var loadedImages = new Array;
var currentCheck;

var FeedReady = false;
var introReady = false;

var mainwrapper;
var autoSlider = true;
var autoTimer;
var slideTimer;

function callOnComplete() {
    setTimeout(playIntroAnimation, 200);
    loadFirstImages();
    addInterface();
    swipedetect(document.getElementById("mainwrapper"), handleSwipe);
}


function loadFirstImages() {
    if (JSONResults.length > 5) {
        for (var i = Math.ceil(numPreloadImages / 2) - 1; i > -Math.ceil(numPreloadImages / 2); i--) {
            //console.log("loadeImages",i);
            var ident = i;
            if (ident < 0) {
                ident = JSONResults.length + i;
            }

            loadImage(ident, false);
        }
        loadImage(0);
        showItem(0);
        imagePos2 = JSONResults.length - Math.ceil(numPreloadImages / 2) + 1;
    } else {
        showFallback();
    }
}



function checkLoadedImages(tmc) {
    tmc.isLoaded = true;
}



function loadImage(ident, isShown) {

    var imgHolder = document.getElementById("imgCont");
    imgHolder.setAttribute('style', 'display:none; background-color:none;');

    var iW = imgHolder.getAttribute("data-width")
    var iH = imgHolder.getAttribute("data-height")

    var imgURL = "https://ssli.ebayimg.com/images/i/" + JSONResults[ident].item.itemId + "-0-1/s-b" + iW + "x" + iH + ".png";

    var prodLink = document.getElementById("prodLink");

    var baseURL = getUrlVars()['mpck'];
    var vendorURL = getUrlVars()['mpvc'];
    if (baseURL != undefined && baseURL != '') {
        if (vendorURL != undefined && vendorURL != '') {
            baseURL = decodeURIComponent(vendorURL) + "https://" + decodeURIComponent(baseURL) + "&mpre=" + encodeURIComponent(JSONResults[ident].item.viewItemURL);
        } else {
            baseURL = "https://" + decodeURIComponent(baseURL) + "&mpre=" + encodeURIComponent(JSONResults[ident].item.viewItemURL);
        }
    } else {
        baseURL = JSONResults[ident].item.viewItemURL;
    }

    prodLink.setAttribute('href', baseURL);

    var preloadContainer = new Image();
    loadedImages[ident] = preloadContainer;
    loadedImages[ident].src = imgURL;
    loadedImages[ident].onload = function() {

        numImageLoaded++;
        //console.log( numImageLoaded);
        if (numImageLoaded == numPreloadImages) {
            if (introReady == true) {
                hideIntro();
            }
            FeedReady = true;
            showImage(iW, iH, imgURL);
        } else {
            if (FeedReady === true && isShown != false) {
                showImage(iW, iH, imgURL);
            }
        }
    };

    imgHolder.innerHTML = "";
}

function nextAutoItem() {
    if (autoSlider == true) {
        nextItem();
        slideTimer = setTimeout(nextAutoItem, 4000);
    }
}

function stopAutoAnimation() {
    autoSlider = false;
}



function showImage(iW, iH, imgURL) {
    var imgHolder = document.getElementById("imgCont");
    imgHolder.setAttribute('style', 'display:block; background-color:#FFF; background-image:url("' + imgURL + '");');
    imgHolder.innerHTML = "";
}


function addInterface() {
    var nextBTN = document.getElementById("next")
    nextBTN.addEventListener("click", throttle(nextItem, 700));
    var prevBTN = document.getElementById("prev")
    prevBTN.addEventListener("click", throttle(prevItem, 700));
}

function htmlEscape(str) {
    return String(str)
        .replace('&', '&amp;')
        .replace('"', '&quot;')
        .replace("'", '&#39;')
        .replace('<', '&lt;')
        .replace('>', '&gt;');
}


function showItem(ident) {

    loadImage(ident);

    var title = document.getElementById("title");
    var price = document.getElementById("price");

    var legal = document.getElementById("legal");
    var discountPrice = document.getElementById("discountPrice");
    var discountPercentages = document.getElementById("discountPercentages");
    var discountHolder = document.getElementById("discountHolder");
    var eek = document.getElementById("eek");

    var flagShown = false;

    var titleStrg = htmlEscape(JSONResults[ident].item.title).toLowerCase(); //decodeURIComponent(JSONResults[ident].item.title);

    if (titleStrg.length > titleMaxLength) {
        titleStrg = titleStrg.substring(0, titleMaxLength) + "...";
    }

    title.innerHTML = titleStrg;

    price.innerHTML = convertPrice(JSONResults[ident].item.sellingStatus.currentPrice.value);


    if (JSONResults[ident].item.eekInfo != null && JSONResults[ident].item.eekInfo != 0) {
        eek.innerHTML = "EEK " + JSONResults[ident].item.eekInfo.status;
    } else {
        eek.innerHTML = "";
    }

    discountPercentages.innerHTML = currentOffer;
    discountHolder.setAttribute('style', 'display:inline-block;');

    if (JSONResults[ident].item.shippingInfo.freeShippingAvailable == true) {
        discountPercentages.innerHTML = freeShipWording;
        discountHolder.setAttribute('style', 'display:inline-block;');
        legal.innerHTML = "";
        discountPrice.innerHTML = discountNull;
        flagShown = true;
    }

    if (JSONResults[ident].item.discountPriceInfo != null && JSONResults[ident].item.discountPriceInfo != 0) {

        // var legalPre;
        var asterixes;
        var discountPriceValue;

        // if(JSONResults[ident].item.discountPriceInfo.priceLabel.toUpperCase().indexOf("RRP")>-1){
        //     legal.innerHTML = "RRP";
        //     legalPre= "";
        //     asterixes="";
        // }else{
        // legal.innerHTML = "";
        // legalPre= "";
        asterixes = "";
        // }

        discountPercentages.innerHTML = prePercentages + JSONResults[ident].item.discountPriceInfo.percentSavings + afterPercentages + asterixes;
        discountPriceValue = convertPrice(JSONResults[ident].item.discountPriceInfo.originalRetailPrice.value).replace('££', '£').replace('$$', '$');
        discountPrice.innerHTML = "<strike class='strike'>" + discountPriceValue + "</strike>";
        discountHolder.setAttribute('style', 'display:inline-block;');

        flagShown = true;

    }

    if (flagShown == false) {
        // legal.innerHTML="";
        discountPrice.innerHTML = discountNull;
        discountHolder.setAttribute('style', 'display:none;');
    }

}

//// FeedAnimation
var feedBoxLeft = document.getElementById("imageHolder");
var feedBoxRight = document.getElementById("infoHolder");

function nextItem() {
    cta.className = "";

    feedBoxLeft.className = "animatePosOut slideLeft";
    feedBoxRight.className = "animatePosOut slideLeft";

    setTimeout(state01_next, 500);
}


function state01_next() {

    currentPosition++;

    if (currentPosition > JSONResults.length - 1) {
        currentPosition = 0;
    }

    showItem(currentPosition);
    feedBoxLeft.className = "slideRight";
    feedBoxRight.className = "slideRight";
    setTimeout(state02_next, 20);
}

function state02_next() {

    feedBoxLeft.className = "slideRightStart animatePosIn";
    feedBoxRight.className = "slideRightStart animatePosIn";

}

function prevItem() {
    cta.className = "";

    feedBoxLeft.className = "animatePosOut slideRight";
    feedBoxRight.className = "animatePosOut slideRight";

    setTimeout(state01_prev, 500);
}


function state01_prev() {
    currentPosition--;

    if (currentPosition < 0) {
        currentPosition = JSONResults.length - 1;
    }

    showItem(currentPosition);
    feedBoxLeft.className = "slideLeft";
    feedBoxRight.className = "slideLeft";

    setTimeout(state02_prev, 20);
}

function state02_prev() {

    feedBoxLeft.className = "slideRightStart animatePosIn";
    feedBoxRight.className = "slideRightStart animatePosIn";

}

function convertPrice(_pstrg) {

    var pstrg = String(_pstrg);

    if (pstrg.indexOf(".") > 0) {
        pstrg = pstrg.substr(0, pstrg.indexOf(".") + 3);
    }

    if (pstrg.substr(pstrg.length - 2, 1) == ".") {
        pstrg = pstrg + "0";
    }

    if (pstrg.indexOf(".") <= 0) {
        pstrg = pstrg + ".00";
    }



    switch (siteid) { //US and AU
        case 0:
            pstrg = "$" + pstrg;
            break;
            //UK
        case 3:
            //pstrg = "Ã‚Â£" + pstrg;
            pstrg = unescape("%A3") + pstrg;
            break;
        default:
            pstrg = "EUR " + pstrg.split(".");
            pstrg = pstrg.replace(".", ",");
            break;
    }
    return pstrg;
}


function handleSwipe(swipeDir) {
    if (swipeDir == 'left') {
        prevItem();
        autoSlider = false;
    }
    if (swipeDir == 'right') {
        nextItem();
        autoSlider = false;
    }
}


/* Utility Functions */

function swipedetect(el, mycallback) {

    var touchsurface = el,
        swipedir,
        startX,
        startY,
        distX,
        distY,
        threshold = 50, //required min distance traveled to be considered swipe
        restraint = 100, // maximum distance allowed at the same time in perpendicular direction
        allowedTime = 300, // maximum time allowed to travel that distance
        elapsedTime,
        startTime,
        handleswipe = mycallback || function(swipedir) {}

    touchsurface.addEventListener('touchstart', function(e) {
        var touchobj = e.changedTouches[0]
        swipedir = 'none'
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
            // e.preventDefault()
    }, false)

    touchsurface.addEventListener('touchmove', function(e) {
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)

    touchsurface.addEventListener('touchend', function(e) {
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime) { // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) { // 2nd condition for horizontal swipe met
                swipedir = (distX < 0) ? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            } else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) { // 2nd condition for vertical swipe met
                swipedir = (distY < 0) ? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
            }
        }
        handleswipe(swipedir)
        if (elapsedTime > 300) {
            e.preventDefault()
        }
    }, false)
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function(m, key, value) {
            vars[key] = value;
        });
    return vars;
}

function unique(obj) {
    var uniques = [];
    var ids = [];
    for (var i = 0; i < JSONResults.length; i++) {
        if (ids.indexOf(JSONResults[i].item.itemId) < 0) {
            ids.push(JSONResults[i].item.itemId);
            var itemMatch = false;
            if (selectedCategories.length == 0) {
                itemMatch = true;
            } else {
                for (var p = 0; p < selectedCategories.length; p++) {
                    if (JSON.stringify(JSONResults[i].item.categories).indexOf(selectedCategories[p]) >= 0) {
                        itemMatch = true;
                    }
                }
            }
            if (itemMatch === true) {
                uniques.push(JSONResults[i]);
            }
        }
    }
    return uniques;
}

function throttle(fn, wait) {
    var timer;
    var block = false;
    return function() {
        if (!block) {
            fn();
            block = true;
            setTimeout(function() {
                block = false;
            }, wait);
        }
    }
}
