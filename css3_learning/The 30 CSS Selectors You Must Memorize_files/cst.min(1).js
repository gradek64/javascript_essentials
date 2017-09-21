/*2.70.20170814*/var compassSmartTag=compassSmartTag||void 0;!function compassProcessSmartTag(){function oldBrowsersSupport(){try{Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){var t=this.length>>>0,r=Number(arguments[1])||0;for(r=0>r?Math.ceil(r):Math.floor(r),0>r&&(r+=t);t>r;r++)if(r in this&&this[r]===e)return r;return-1})}catch(e){return!1}}function detectIE(){try{var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);var r=e.indexOf("Trident/");if(r>0){var a=e.indexOf("rv:");return parseInt(e.substring(a+3,e.indexOf(".",a)),10)}var n=e.indexOf("Edge/");return n>0?parseInt(e.substring(n+5,e.indexOf(".",n)),10):null}catch(i){return null}}function deserializeSmartTag(e){var t={hostId:e.h,tagId:e.t,domainId:e.d,domain:getDomainById(e.d,"serving"),cdnDomain:void 0===e.cd?getDomainById(e.d,"cdn"):e.cd,referral:e.referral,pu:e.pu,sub_id:e.su,clickTrackingUrl:e.click_track,postbackUrl:e.postbackUrl,blockVideo:e.bv,fif:void 0!==e.fif?e.fif:!0,endPoint:e.ep||"compass"},r=20;t.genericParams={};for(var a=1;r>=a;a++){var n="param"+a;if(""!==emptyIfUndefined(e[n])&&null!==e[n]){var i="p"+a;t.genericParams[i]=emptyIfUndefined(e[n])}}return"y_b"in e&&(t.type="b",t.typeData_b={type:e.y_b.y,size:e.y_b.s}),"y_p"in e&&(t.type="p",t.typeData_p={type:e.y_p.y,size:e.y_p.s,freqCap:e.y_p.fc,duration:e.y_p.du,popTitle:e.y_p.t},t.fif=!1),"hb"in e&&(t.headerBidding={aucId:e.hb.raid||"",impId:e.hb.rimid||"",bidId:e.hb.rbid||""}),"app"in e?t.app={isMobileApp:1==e.app.ima,id:e.app.id,name:e.app.name,bundle:e.app.bundle,version:e.app.version,storeUrl:e.app.store_url,userId:e.app.user_id,doNotTrack:e.app.do_not_track,privacyPolicy:e.app.privacy,keywords:e.app.keywords,paid:e.app.paid}:t.app={isMobileApp:!1},t}function getUrlProtocol(){try{var e;if(void 0!==window.location.protocol)e=window.location.protocol;else{var t=window.location.href.split("//");e=t[0]}return"https:"==e?"https:":"http:"}catch(r){return"https:"}}function getDomainById(e,t){var r={2:{serving:"YWRzLmRlbGl2ZXJpbXAuY29t",cdn:"Y2RuLm1hcnBoZXppcy5jb20="},3:{serving:"YWRzLnRvcHNydmltcC5jb20=",cdn:"Y2RuLnRvcHNydmltcC5jb20="},8:{serving:"YWRzLmFsbW9uZ2tpbmdzdG9yeS5jb20=",cdn:"Y2RuLmFsbW9uZ2tpbmdzdG9yeS5jb20="},9:{serving:"YWRzLmlzc2lncGVuLmNvbQ==",cdn:"Y2RuLmlzc2lncGVuLmNvbQ=="},10:{serving:"YWRzcnYudmV0bWVkbGluZS5jb20=",cdn:"Y2RuLnZldG1lZGxpbmUuY29t"},11:{serving:"YWRzLmVscGFzb21kLmNvbQ==",cdn:"Y2RuLmVscGFzb21kLmNvbQ=="},12:{serving:"YWRzLnBsYW5ldGFkZWx1ei5jb20=",cdn:"Y2RuLnBsYW5ldGFkZWx1ei5jb20="},13:{serving:"YWRzLm1kaXRhdGlvbnMuY29t",cdn:"Y2RuLm1kaXRhdGlvbnMuY29t"},14:{serving:"YWRzLnJpc2RyZWJlbHMuY29t",cdn:"Y2RuLnJpc2RyZWJlbHMuY29t"},100:{serving:"YWRzLm9uZXRhZ3N0YWdlc3J2LmNvbQ==",cdn:"Y2RuLm5hbm9vb2suY29t"},101:{serving:"YWRzLm9uZXRhZ3N0YWdlc3J2LmNvbQ==",cdn:"Y2RuLm5hbm9vb2suY29t"},300:{serving:"YWRzLmltcGFjdHNydi5jb20=",cdn:"Y2RuLmRlc2NpZGVyLmNvbQ=="}};return e in r?t in r[e]?base64Decode(r[e][t]):null:e}function base64Decode(e){var t,r,a,n,i,o,c,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",p="",s=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");s<e.length;)n=d.indexOf(e.charAt(s++)),i=d.indexOf(e.charAt(s++)),o=d.indexOf(e.charAt(s++)),c=d.indexOf(e.charAt(s++)),t=n<<2|i>>4,r=(15&i)<<4|o>>2,a=(3&o)<<6|c,p+=String.fromCharCode(t),64!=o&&(p+=String.fromCharCode(r)),64!=c&&(p+=String.fromCharCode(a));return p}function getLoopData(){var e={inLoop:!1,firstRun:!1,iteration:0,loopIid:""};try{"object"==typeof _cltData&&(e.inLoop=1==_cltData.lt,e.iteration=_cltData.lit,e.firstRun=0==e.iteration,e.loopIid=_cltData.lsiid,e.loopHostId=_cltData.lsho)}catch(t){}return e}function generateCachebuster(){return Math.floor(2147483647*Math.random())}function processTag(e){return validateSmartTag(e)?void generateTag(e):!1}function validateSmartTag(e){try{if(void 0===e||null==e)return console.error("Smart tag was'nt found"),!1;for(var t=0;t<smartTagMandatoryFields.length;t++)if(!validateSmartTagParam(e[smartTagMandatoryFields[t]],smartTagMandatoryFields[t]))return!1;
if(typeDataFieldName=getTypeDataName(e.type),!validateSmartTagParam(e[typeDataFieldName],typeDataFieldName))return!1;for(t=0;t<smartTagMandatoryTypeFields[typeDataFieldName].length;t++)if(!validateSmartTagParam(e[typeDataFieldName][smartTagMandatoryTypeFields[typeDataFieldName][t]],typeDataFieldName+"."+smartTagMandatoryTypeFields[typeDataFieldName][t]))return!1;return!0}catch(r){return sendErrorToKibana("validateSmartTag",r),!0}}function validateSmartTagParam(e,t){return void 0===e||null==e?(sendParamValidationError(t),!1):!0}function validateUrlProtocol(e){try{if(0==e.indexOf("//")){var t="https:"==window.location.protocol?"https:":"http:";return t+e}return e}catch(r){return e}}function sendParamValidationError(e){console.error("Error in smart tag - "+e+" not found!")}function getTypeDataName(e){return"typeData_"+e}function replaceArrays(e,t,r){if(void 0===t||void 0===r)return!1;if(t.length<=0)return e;if(t.length>r.length)return!1;for(var a=e,n=0;n<t.length;n++)a=a.replace(t[n],r[n]);return a}function replaceMulti(e,t){if(void 0===t||!Array.isArray(t))return e;2!=t.length||Array.isArray(t[0])||Array.isArray(t[1])||(t=[[t[0],t[1]]]);for(var r=e,a=0;a<t.length;a++){var n=t[a];Array.isArray(n)&&2==n.length&&(r=r.replace(n[0],n[1]))}return r}function emptyIfUndefined(e){return void 0===e?"":e}function generateTag(e){var t="<URL_PROTOCOL>//<DOMAIN>/<END_POINT>?<IMPRESSION_ID>ho=<HOST_ID>&ty=<TYPE>&si=<SIZE>&ta=<TAG_ID><CDN_DOMAIN><EXTRAS><CLIENT_INFO>&v=<FILE_VERSION>&cb=<CACHE_BUSTER><REF>",r="<script type=\"text/javascript\"> var compassPopAdParams = {tagId: '<TAG_ID>', frequencyCapacity: '<FREQ_CAP>', duration: '<DURATION>', period: 'hour', popupTitle: '<POP_TITLE>', tagReferrer: '<REFERRER>', tagContent: decodeURIComponent(\"<TAG_CONTENT>\"), popupSettings: \"<POP_TYPE>\"}; </script> <script type=\"text/javascript\" src=\""+POPUPAD_SCRIPT_PATH+'"></script>',a={};a[getTypeDataName("b")]={j:'<script type="text/javascript" src="<TAG_CONTENT>"></script>',i:'<iframe src="<TAG_CONTENT>" width="<WIDTH>" height="<HEIGHT>" marginheight="0" marginwidth="0" scrolling="NO" frameborder="0"></iframe>'},a[getTypeDataName("p")]={popup:r.replace("<POP_TYPE>",'width=" + screen.availWidth + ", height=" + screen.availHeight + ", top=0, left=0'),tab:r.replace("<POP_TYPE>","tab")};var n=generateCachebuster(),i=e[typeDataFieldName].size,o=a[typeDataFieldName][e[typeDataFieldName].type],c="";""!=emptyIfUndefined(e.referral)&&"INSERT_REFERRER_HERE"!=e.referral&&(c="&re="+encodeURIComponent(e.referral));var d="";null!=e.cdnDomain&&(d="&cd="+e.cdnDomain);var p,s=getExtras(e);p="p"==e.type?"p":e[typeDataFieldName].type;var l="";e.fif&&(e.impressionId=generateImpressionId(e.tagId,i),l="iid="+e.impressionId+"&");var m=replaceMulti(t,[["<URL_PROTOCOL>",URL_PROTOCOL],["<DOMAIN>",e.domain],["<END_POINT>",e.endPoint],["<IMPRESSION_ID>",l],["<HOST_ID>",e.hostId],["<TYPE>",p],["<SIZE>",i],["<TAG_ID>",e.tagId],["<CDN_DOMAIN>",d],["<EXTRAS>",s],["<CLIENT_INFO>",getClientInfo(i)],["<FILE_VERSION>",fileVersion],["<CACHE_BUSTER>",n],["<REF>",c]]);m=removeTabs(m);var u=replaceMulti(o,[["<TAG_CONTENT>","p"==e.type?encodeURIComponent(m):m],["<WIDTH>",i.split("x")[0]],["<HEIGHT>",i.split("x")[1]],["<TAG_ID>",e.tagId],["<FREQ_CAP>",e[typeDataFieldName].freqCap],["<DURATION>",e[typeDataFieldName].duration],["<POP_TITLE>",emptyIfUndefined(e[typeDataFieldName].popTitle)],["<REFERRER>",c]]);u+=getAntiFraudPixel(e.tagId,i,e.referral,""!=emptyIfUndefined(e.pu)?encodeURIComponent(e.pu):encodeURIComponent(highestAnalyzedLocation),e.sub_id),e.fif?writeTagFriendlyIframe(u,i,e):writeTagSync(u)}function removeTabs(e){var t="	",r=encodeURIComponent(t),a=encodeURIComponent(" ");return e.replace(new RegExp(t,"ig"),a).replace(new RegExp(r,"ig"),a)}function getClientInfo(e){function t(e){var t=0,r=0;try{for(;e;)t+=e.offsetLeft-e.scrollLeft+e.clientLeft,r+=e.offsetTop-e.scrollTop+e.clientTop,e=e.offsetParent}catch(a){}return{left:t,top:r}}try{var r=[],a=new Date;r.push(["ts",a.getTime()]),r.push(["scw",screen.width]),r.push(["sch",screen.height]),r.push(["iif",self==top?"false":"true"]);
try{var n="compassPosLocator";document.write("<div id='"+n+"' style='height: 1px; width: 1px; display: none;'></div>");var i=document.getElementById(n);i.style.display="";var o=t(i);try{i.remove()}catch(c){i.parentElement.removeChild(i)}r.push(["alp",o.left]),r.push(["atp",o.top])}catch(c){}if(e=e.split("x"),2==e.length){var d=parseInt(o.top),p=parseInt(e[1]),s=parseInt(document.documentElement.clientHeight),l="";l=s>d+p?"1":s>d?"6":"2",l="1",r.push(["av",l])}for(var m="",u="&",f=0;f<r.length;f++){var g=r[f];m=m+u+g[0]+"="+g[1]}return m}catch(c){return""}}function getExtras(e){var t="";try{try{""!=emptyIfUndefined(e.pu)&&(t+="&pu="+encodeURIComponent(e.pu))}catch(r){}null!==highestAnalyzedLocation&&""!==highestAnalyzedLocation&&(t+="&du="+encodeURIComponent(highestAnalyzedLocation)),null!==analyzedLocation.highestDomain&&""!==analyzedLocation.highestDomain&&(t+="&dd="+encodeURIComponent(analyzedLocation.highestDomain));try{""!=emptyIfUndefined(e.sub_id)&&(t+="&su="+encodeURIComponent(e.sub_id))}catch(r){}try{if(""!=emptyIfUndefined(e.postbackUrl)){Array.isArray(e.postbackUrl)||(e.postbackUrl=[e.postbackUrl]);for(var a=0;a<e.postbackUrl.length;a++)t+="&pbu="+encodeURIComponent(validateUrlProtocol(replaceCachebusterMacro(e.postbackUrl[a])))}}catch(r){}try{"headerBidding"in e&&(t+="&raid="+e.headerBidding.aucId,t+="&rimid="+e.headerBidding.impId,t+="&rbid="+e.headerBidding.bidId)}catch(r){}try{loopData.inLoop&&(t+="&lit="+loopData.iteration,""!=loopData.loopIid&&(t+="&lsiid="+loopData.loopIid),""!=loopData.loopHostId&&(t+="&lsho="+loopData.loopHostId))}catch(r){}try{var n=navigator.connection||navigator.mozConnection||navigator.webkitConnection;void 0!==n&&(t+="&ct="+n.type)}catch(r){}try{var i=["&ima=",e.app.isMobileApp?"1":"0"];""!==emptyIfUndefined(e.app.id)&&i.push("&aid=",encodeURIComponent(e.app.id)),""!==emptyIfUndefined(e.app.name)&&i.push("&anm=",encodeURIComponent(e.app.name)),""!==emptyIfUndefined(e.app.bundle)&&i.push("&abn=",encodeURIComponent(e.app.bundle)),""!==emptyIfUndefined(e.app.version)&&i.push("&aver=",encodeURIComponent(e.app.version)),""!==emptyIfUndefined(e.app.storeUrl)&&i.push("&asu=",encodeURIComponent(e.app.storeUrl)),""!==emptyIfUndefined(e.app.userId)&&i.push("&auid=",encodeURIComponent(e.app.userId)),""!==emptyIfUndefined(e.app.doNotTrack)&&i.push("&adnt=",encodeURIComponent(e.app.doNotTrack)),""!==emptyIfUndefined(e.app.privacyPolicy)&&i.push("&apr=",encodeURIComponent(e.app.privacyPolicy)),""!==emptyIfUndefined(e.app.keywords)&&i.push("&akw=",encodeURIComponent(e.app.keywords)),""!==emptyIfUndefined(e.app.paid)&&i.push("&apd=",encodeURIComponent(e.app.paid)),t+=i.join("")}catch(r){}try{var o=[];for(var c in e.genericParams)o.push(c+"="+encodeURIComponent(e.genericParams[c]));o.length>0&&(t+="&"+o.join("&"))}catch(r){}return t}catch(r){sendErrorToKibana("getExtras",r);try{return t}catch(r){return""}}}function analyzeLocation(){function e(e){try{if(!e.location.ancestorOrigins)return[];for(var t=[],r=Object.keys(e.location.ancestorOrigins),a=0;a<r.length;a++){var n=r[a];"length"!==n&&t.push(e.location.ancestorOrigins[n])}return t}catch(i){return sendErrorToKibana("getAncestorsAsArray",i),[]}}function t(e,a){try{var n=a.shift()||null;if(e!=window.top){var i=t(e.parent,a);return i.push(r(e,n)),i}return[r(e,n)]}catch(o){return sendErrorToKibana("getLocationsStack",o),[]}}function r(e,t){try{return{referrer:e.document.referrer,href:e.location.href,isTop:e==window.top,ancestor:t}}catch(r){try{return{referrer:null,href:null,isTop:e==window.top,ancestor:t}}catch(r){return{referrer:null,href:null,isTop:null,ancestor:t}}}}function a(e){try{if(0==e.length)return"";var t=null,r=e[0].referrer;e[0].referrer=null;for(var a=0;a<e.length;a++){var i=e[a];if(t=n(i.referrer)||n(i.ancestor)||n(i.href),null!=t)break}return e[0].referrer=r,t}catch(o){return sendErrorToKibana("extractHighestLocationFromStack",o),""}}function n(e){try{return"string"!=typeof e?null:0==e.indexOf("javascript")?null:0!=e.indexOf("http")?null:e}catch(t){return null}}function i(e){try{return"string"!=typeof e?"":(e=e.split("//"),e=e.length>1?e[1]:e[0],
e.split("/")[0])}catch(t){return sendErrorToKibana("extractDomain",t),e||""}}try{var o=e(window),c=t(window,o),d=a(c);return{highest:d,highestDomain:i(d),stack:c}}catch(p){return sendErrorToKibana("analyzeLocation",p),{highest:"",highestDomain:"",stack:[]}}}function writeTagSync(e){return document.write(e),!0}function writeTagFriendlyIframe(e,t,r){try{var a,n=t.split("x"),i=n[0],o=n[1],c="javascript:'<html><body></body></html>'",d='<iframe id="<ID>" src="<SRC>" width="<WIDTH>" height="<HEIGHT>"  marginheight="0" marginwidth="0" scrolling="NO" frameborder="0"></iframe>',p=replaceMulti(d,[["<ID>",r.impressionId],["<SRC>",c],["<WIDTH>",i],["<HEIGHT>",o]]),s={iid:r.impressionId,domain:r.domain,cdnDomain:r.cdnDomain,size:t,h:r.hostId,sourceObj:curCompassSmartTagSerialized};a="object"==typeof JSON?JSON.stringify(s):'{"iid": "'+r.impressionId+'","domain": "'+r.domain+'","cdnDomain":"'+r.cdnDomain+'","size":"'+t+'","h":"'+r.hostId+'"}';var l="<script>var __compassImpData = "+a+";</script>",m="<script>var inDapIF=true;</script>";document.write(p);var u=document.getElementById(r.impressionId);if(null!==u){var f=u.contentWindow.document;f.open(),f.write("<html><head></head><body>"),f.write(m),f.write(l),f.write(e),f.write("</body></html>"),(null===ieVersion||ieVersion>9)&&f.close(),setClickTrackingFunction(r.clickTrackingUrl,f),1==r.blockVideo&&blockVideo(u.contentWindow,r.typeData_b.size,r.cdnDomain)}else sendErrorToKibana("writeTagFriendlyIframe_fifNotFound",g),writeTagSync(e)}catch(g){sendErrorToKibana("writeTagFriendlyIframe",g)}}function setClickTrackingFunction(pixelTrackingUrls,iframeDocument,attempt){try{if(void 0===pixelTrackingUrls||""==pixelTrackingUrls||0==pixelTrackingUrls.length)return!1;attempt=attempt||1;var bodyElm=iframeDocument.getElementsByTagName("body");if(0==bodyElm.length)return 3>attempt&&(attempt++,setTimeout(function(){setClickTrackingFunction(pixelTrackingUrls,iframeDocument,attempt)},500)),!1;bodyElm=bodyElm[0],Array.isArray(pixelTrackingUrls)||(pixelTrackingUrls=[pixelTrackingUrls]);for(var clickTrackingCodeArr=[],i=0;i<pixelTrackingUrls.length;i++)clickTrackingCodeArr.push('document.createElement("img").src = "'+pixelTrackingUrls[i]+'";');return bodyElm.onclick=function(event){try{eval(clickTrackingCodeArr.join(""))}catch(e){sendErrorToKibana("clickTracking_customFunction",e)}},!0}catch(e){return sendErrorToKibana("setClickTrackingFunction",e),!1}}function generateImpressionId(e,t){try{var r=[];r.push(e);var a=t.split("x");r.push(a[0]),r.push(a[1]);var n=[],i=new Date;n.push(i.getTime());var o=i.getTimezoneOffset();o=o>=0?o:Math.abs(o)+1,n.push(o),n.push(Math.floor(1e17*Math.random()));for(var c=0;c<n.length;c++)n[c]=n[c].toString(36);return r.push(n.join("")),r.join("-")}catch(d){try{return"cst-fallback-id-"+Math.floor(1e10*Math.random())}catch(d){return""}}}function getAntiFraudPixel(e,t,r,a,n){function i(e,t,r,a,n){try{var i=URL_PROTOCOL+"//c.fqtag.com/tag/implement-r.js?org=GaZEyASarA8adetechuB&p=<TAG_ID>&a=<SIZE>&cmp=<SUB_ID>&fmt=banner&rd=<DOMAIN>&rt=display&sl=1&fq=1&c1=<REF>&c2=<PU>&cb=<CACHE_BUSTER>",o=analyzedLocation.highestDomain,c=generateCachebuster(),d=["<scr",'ipt src="',replaceMulti(i,[["<TAG_ID>",e],["<SIZE>",t],["<DOMAIN>",o],["<REF>",r],["<PU>",a],["<SUB_ID>",n],["<CACHE_BUSTER>",c]]),'"></scr',"ipt>"];return d.join("")}catch(p){return""}}try{if(loopData.inLoop)return"";var o=20,c=Math.floor(Math.random()*o)+1==1;if(!c)return"";n=void 0===n?"":encodeURIComponent(n);var d="";return d+=i(e,t,r,a,n)}catch(p){return""}}function getKibanaPixel(e,t,r){try{var a=[11224,16487];if(-1==a.indexOf(parseInt(e)))return"";r=r||"",""!=r&&(r="_"+r);var n=URL_PROTOCOL+"//trk.dfxangel.com/ym.html?e=unknown&pub_name=compass_<TAG_ID>_<SIZE><SUFFIX>&cb=<CACHE_BUSTER>",i=generateCachebuster(),o=['<script src="',replaceMulti(n,[["<TAG_ID>",e],["<SIZE>",t],["<SUFFIX>",r],["<CACHE_BUSTER>",i]]),'"></scr',"ipt>"];return o.join("")}catch(c){return""}}function fireKibanaPixel(e,t,r){try{var a=URL_PROTOCOL+"//trk.diamondminebubble.com/p.gif?e=<EVENT>&<PARAMS>&cb=<CACHE_BUSTER>",n=generateCachebuster(),i=replaceMulti(a,[["<EVENT>",e],["<PARAMS>",t],["<CACHE_BUSTER>",n]]),o=document.createElement("img");
return o.src=i,!0}catch(c){return!1}}function sendErrorToKibana(e,t){try{var r="",a="";try{r=encodeURIComponent(t.message)}catch(t){}try{a=encodeURIComponent(t.stack)}catch(t){}var n;n="object"==typeof JSON?JSON.stringify(t):t,fireKibanaPixel("st_error_"+e,"ta="+curCompassSmartTag.tagId+"&v="+fileVersion+"&err="+n+"&err_msg="+r+"&err_stack="+a)}catch(t){}}function fireKibanaVideoPixel(e,t,r){try{r=r||"",""!=r&&(r="_"+r);var a=URL_PROTOCOL+"//trk.dfxangel.com/ym.html?e=unknown&pub_name=compass_<TAG_ID>_<SIZE><SUFFIX>&cb=<CACHE_BUSTER>",n=generateCachebuster(),i=replaceMulti(a,[["<TAG_ID>",e],["<SIZE>",t],["<SUFFIX>",r],["<CACHE_BUSTER>",n]]),o=document.createElement("img");return o.src=i,!0}catch(c){return!1}}function replaceCachebusterMacro(e){return e.replace(/##CACHE_BUSTER##/gi,generateCachebuster())}function detectAndRemoveElements(e,t,r,a){try{if(void 0===e||void 0===t)return!1;t=Array.isArray(t)?t:[t];for(var n="__filler_img",i=0;i<t.length;i++){var o=t[i],c=e.document.querySelectorAll(o);if(c.length>0)for(var d=0;d<c.length;d++){var p=c[d];try{var s=p.parentElement;if(s.removeChild(p),void 0!==r){for(var l=s.querySelectorAll("."+n),m=!1,u=0;u<l.length;u++){var f=l[u];if(f.parentElement==s){m=!0;break}}if(!m){var g=e.document.createElement("img");g.src="//"+a+"/banners/brightcom_"+r+".png",g.className+=" "+n,s.appendChild(g)}}}catch(h){}}}var y=e.document.querySelectorAll("iframe");if(y.length>0)for(var v=0;v<y.length;v++){var T=y[v];try{addDetectAndRemoveElementsEventListener(T.contentWindow,t)}catch(h){}}}catch(h){sendErrorToKibana("detectAndRemoveElements",h)}}function addDetectAndRemoveElementsEventListener(e,t,r,a){try{var n=null,i=100,o="__cdarf";if(1===e[o])return!1;var c=e.setInterval(function(){detectAndRemoveElements(e,t,r,a)},i);null!==n&&e.setTimeout(function(){e.clearInterval(c)},n),e[o]=1}catch(d){sendErrorToKibana("addDetectAndRemoveElementsEventListener",d)}}function blockVideo(e,t,r){var a=["video"];addDetectAndRemoveElementsEventListener(e,a,t,r)}if(void 0===compassSmartTag||null==compassSmartTag)return console.error("Smart tag not found"),!1;var fileVersion="2.70";oldBrowsersSupport();var ieVersion=detectIE(),curCompassSmartTagSerialized=compassSmartTag,curCompassSmartTag=deserializeSmartTag(curCompassSmartTagSerialized);compassSmartTag=void 0;var URL_PROTOCOL=getUrlProtocol(),CDN_URL=URL_PROTOCOL+"//"+curCompassSmartTag.cdnDomain+"/cmpp/",POPUPAD_SCRIPT_PATH=CDN_URL+"popupad.min.js?v=20150519",loopData=getLoopData(),analyzedLocation=analyzeLocation(),highestAnalyzedLocation=analyzedLocation.highest,smartTagMandatoryFields=["hostId","tagId","type","domain"],smartTagMandatoryTypeFields={};smartTagMandatoryTypeFields[getTypeDataName("b")]=["type","size"],smartTagMandatoryTypeFields[getTypeDataName("p")]=["type","size","freqCap","duration"];var typeDataFieldName;processTag(curCompassSmartTag)}();