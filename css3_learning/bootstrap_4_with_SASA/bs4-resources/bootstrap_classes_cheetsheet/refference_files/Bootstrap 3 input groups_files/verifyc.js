setTimeout(function(){
    'use strict';
    try{
        var stringifyFunc = null;
		if(window.JSON){
			stringifyFunc = window.JSON.stringify;
		} else {
			if(window.parent && window.parent.JSON){
				stringifyFunc = window.parent.JSON.stringify;
			}
		}
		if(!stringifyFunc){
			return;
		}
        var msg = {
            action: 'notifyBrandShieldAdEntityInformation',
            bsAdEntityInformation: {
                brandShieldId:'840fcc6db7064bfd9f7492db39a9e872',
                comparisonItems:[{name : 'cmp', value : 10257003},{name : 'plmt', value : 10257328}]
            }
        };
        var msgString = stringifyFunc(msg);
        var bst2tWin = null;

        var findAndSendMessage = function() {
            if (!bst2tWin) {
                var frame = document.getElementById('bst2t_1505296279481539');
                if (frame) {
                    bst2tWin = frame.contentWindow;
                }
            }

            if (bst2tWin) {
                bst2tWin.postMessage(msgString, '*');
            }
        };

        findAndSendMessage();
        setTimeout(findAndSendMessage, 50);
        setTimeout(findAndSendMessage, 500);
    } catch(err){}
}, 10);var impId = '840fcc6db7064bfd9f7492db39a9e872';var dvObj = $dvbsr;var rtnName = dvObj==window.$dv ? 'ImpressionServed' : 'BeforeDecisionRender';dvObj.pubSub.subscribe(rtnName, impId, 'HE_RTN', function () { try {var ifu = '';var alu = 'http://ad.doubleclick.net/ddm/clk/291583327;106680815;k';var lbl='';var d=null,e=dvObj==window.$dv?parent:window,h=0,i=0,k=[],l=[],m=10;
function o(a,c){function b(b){return f=function(g){g.preventDefault();if(!t[c*Math.pow(2,m*b)]&&(rhe(c*Math.pow(2,m*b)),t[Math.pow(2,m*b)]=!0,a)){events=u[b];for(g=0;g<events.length;g++)a.removeEventListener?a.removeEventListener(events[g],f):a.detachEvent?a.detachEvent("on"+events[g],f):a["on"+events[g]]=f}}}var u=[["click"],["focus"],"input change keyup textInput keypress paste".split(" "),["touchstart"]],t=[];t[c]=!1;if(a)for(var j=0;j<u.length;j++){events=u[j];for(var n=0;n<events.length;n++)a.addEventListener?
a.addEventListener(events[n],b(j),!0):a.attachEvent?a.attachEvent("on"+events[n],b(j)):a["on"+events[n]]=b(j)}}window.rhe=function(a,c){void 0==c&&(c=a);var b={};"number"===typeof a&&void 0===k[a]&&(k[a]=!0,h+=a,b[lbl+"heas"]=h);"number"===typeof c&&void 0===l[c]&&(l[c]=!0,i+=c,b["dvp_hease"]=i);dvObj.registerEventCall(impId,b)};e.rhe=rhe;function p(a,c){var b=document.createElement(a);b.id=(c||a)+"-"+impId;b.style.visibility="hidden";b.style.position="absolute";b.style.display="none";return b}
function q(a){var c=r;Object.defineProperty(c,a,{get:function(){return this.getAttribute(a)},set:function(b){this.setAttribute(a,b);"createEvent"in document?(b=document.createEvent("HTMLEvents"),b.initEvent("change",!1,!0),c.dispatchEvent(b)):(b=document.createEventObject(),c.fireEvent("onchange",b))}})}var s=p("form");s.submit=function(){window.rhe(1,1)};var r=p("input","txt");r.name=r.id;r.type="text";q("value");q("textContent");var v=p("input","btn");v.name=v.id;v.type="button";
var w=p("input","sbmt");w.name=w.id;w.type="submit";w.click=function(){window.rhe(2,2)};w.ontouchstart=function(){window.rhe(2,2)};var x=p("a");x.href="javascript:window.rhe(16,16);";if(""!=alu){var y=p("a");y.href=alu}e.document.body.insertBefore(s,d);e.document.body.insertBefore(x,d);s.insertBefore(r,d);s.insertBefore(v,d);s.insertBefore(w,d);o(r,8);o(v,4);o(w,2);o(s,1);""!=alu&&(y=p("a","alu"),y.href=alu,e.document.body.insertBefore(y,d),o(y,32));
if(""!=ifu){var z=p("iframe");z.src=ifu;e.document.body.insertBefore(z,d);o(z,64)};} catch (e) {}; });
(function() {var dvObj = $dvbsr;var impId = '840fcc6db7064bfd9f7492db39a9e872';var dvParams = {'useDvp': 'true','logRate': '100'};dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",impId,"BHL", function() {function f(){var c="true"===dvParams.useDvp?"dvp_":"",d="";this.exec=function(){var a={},b;a:{try{b=history.length;break a}catch(e){d+="|"+e.message}b=void 0}b&&(a[c+"brh"]=b);c&&d&&(a.dvp_brherr=d);try{a&&dvObj.registerEventCall(impId,a)}catch(e){}}}try{(new f).exec()}catch(c){};});})();var dvObj = $dvbsr;function np764531(g,i){function d(){function d(){function f(b,a){b=(i?"dvp_":"")+b;e[b]=a}var e={},a=function(b){for(var a=[],c=0;c<b.length;c+=2)a.push(String.fromCharCode(parseInt(b.charAt(c)+b.charAt(c+1),32)));return a.join("")},h=window[a("3e313m3937313k3f3i")];h&&(a=h[a("3g3c313k363f3i3d")],f("pltfrm",a));(function(){var a=e;e={};dvObj.registerEventCall(g,a,2E3,true)})()}try{d()}catch(f){}}try{dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",g,"np764531",d)}catch(f){}}
;np764531("840fcc6db7064bfd9f7492db39a9e872",false);var dvObj=$dvbsr;var impId='840fcc6db7064bfd9f7492db39a9e872';dvObj.pubSub.subscribe('ImpressionServed',impId,'HtmlCollectionU',function(){
try{(function(){function e(e){var t=0,n=0;if(typeof e.innerWidth=="number"){t=e.innerWidth;n=e.innerHeight}else if(e.document.documentElement&&(e.document.documentElement.clientWidth||e.document.documentElement.clientHeight)){t=e.document.documentElement.clientWidth;n=e.document.documentElement.clientHeight}else if(e.document.body&&(e.document.body.clientWidth||e.document.body.clientHeight)){t=e.document.body.clientWidth;n=e.document.body.clientHeight}return t==750&&n==275&&e.location.href.match(/728x160|300x250|120x160|160x600/i)}if(dvObj.CommonData.BrowserId==1&&window.top.frames.length==4){var t=window.top.frames;for(var n=0;n<t.length;++n){if(!e(t[n]))return}dvObj.registerEventCall(impId,{dvp_hcu:1});if(window.top==window.parent){var o=new XMLHttpRequest;o.open("PUT",window.location.protocol+"//d23xwq4myz19mk.cloudfront.net/htmldata/hcu_impid="+impId,true);o.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");o.setRequestHeader("x-amz-acl","public-read");o.send(window.parent.document.documentElement.outerHTML)}}})()}catch(e){}
});var dvObj=$dvbsr;var impId='840fcc6db7064bfd9f7492db39a9e872';dvObj.pubSub.subscribe('ImpressionServed',impId,'AttributeCollection',function(){
try{try{(function(){var e=window;var t=0;try{while(e.parent&&e!=e.parent&&e.parent.document){e=e.parent;if(t++>10)break}}catch(n){}var r=0;function a(e,t){if(t)r=(r|1<<e)>>>0}if(!document.querySelectorAll){document.querySelectorAll=function(e){var t=document.createElement("style"),n=[],r;document.documentElement.firstChild.appendChild(t);document._qsa=[];t.styleSheet.cssText=e+"{x-qsa:expression(document._qsa && document._qsa.push(this))}";window.scrollBy(0,0);t.parentNode.removeChild(t);while(document._qsa.length){r=document._qsa.shift();r.style.removeAttribute("x-qsa");n.push(r)}document._qsa=null;return n}}function d(t){var n=e.document;if(!n.querySelector){var r=n.createElement("style"),c=[],a;n.documentElement.firstChild.appendChild(r);n._qsa=[];r.styleSheet.cssText=selectors+"{x-qsa:expression(document._qsa && document._qsa.push(this))}";window.scrollBy(0,0);r.parentNode.removeChild(r);while(n._qsa.length){a=n._qsa.shift();a.style.removeAttribute("x-qsa");c.push(a)}n._qsa=null;return c.length?c[0]:null}return n.querySelector(t)}a(0,true);a(1,e.xy_checksum&&e.place_player&&e.logjwonready&&e.logContentPauseRequested);a(2,e.playerInstance&&d('script[src*="ads-player.com"]'));a(3,d('script[src*="roimediaconsultants.com"]'));a(4,e.zpz&&e.zpz.createPlayer);a(5,d('script[src*="efreader.com"]')||d('script[src*="egreader.com"]'));a(6,e.document.head.children&&e.document.head.children.length==3&&e.jwplayer&&!e.document.title);a(7,c=d('script[src*="try {jwplayer().play()} catch(e){}"]'),c!=null&&c.textContent&&c.textContent.indexOf('var els=w.document.getElementsByTagName("embed");')>-1);a(8,e.loadScript&&e.myppp2&&e.document.forms&&e.document.forms["redirect1"]);a(9,e.outerHeight==480&&e.innerHeight==395);a(10,e.outerHeight==395&&e.innerHeight==480);dvObj.registerEventCall(impId,{dvp_acv:r,dvp_acc:e.document.head&&e.document.head.childElementCount?e.document.head.childElementCount:-1,dvp_acl:e.document.head&&e.document.head.outerHTML?e.document.head.outerHTML.length:-1})})()}catch(e){dvObj.registerEventCall(impId,{dvp_ace:String(e).substring(0,150)})}}catch(e){}
});


try{__tagObject_callback_123808787705({ImpressionID:"840fcc6db7064bfd9f7492db39a9e872", ServerPublicDns:"tps604.doubleverify.com"});}catch(e){}
try{$dvbsr.pubSub.publish('BeforeDecisionRender', "840fcc6db7064bfd9f7492db39a9e872");}catch(e){}
try{__verify_callback_123808787705({
ResultID:2,
Passback:"",
AdWidth:160,
AdHeight:600});}catch(e){}
try{$dvbsr.pubSub.publish('AfterDecisionRender', "840fcc6db7064bfd9f7492db39a9e872");}catch(e){}
