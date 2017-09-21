(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Message2_atlas_", frames: [[0,508,1032,124],[0,0,659,506]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.UK_4xdomainsRGB = function() {
	this.spriteSheet = ss["Message2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.UK_theUKDomainLogo_RGB = function() {
	this.spriteSheet = ss["Message2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.Message2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/AzIBogzIhogyIAAgWIB/BAIAAARIh/BAg");
	this.shape.setTransform(143.6,139.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4364C").s().p("AhIBgIAAi/ICPAAIAAAmIhlAAIAAAnIBZAAIAAAkIhZAAIAAAoIBnAAIAAAmg");
	this.shape_1.setTransform(117.9,139.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4364C").s().p("AgJBhQgKgCgJgEQgJgEgIgFQgIgFgGgHQgHgHgFgIQgFgHgEgJQgDgJgCgKQgCgJAAgLIAAAAQAAgJACgKQABgKAEgJIAJgQQAFgIAGgHIAPgMIARgJQAJgEALgCQAJgCAKAAQANAAAMACQAKACAKAEQAMAFATARIgbAeQgMgKgLgFQgMgGgOAAQgLAAgKAFQgKAEgHAIQgIAIgEALQgEALAAAMIAAAAQAAAMAEALQAEALAIAIQAGAJALAEQAKAFALAAQALAAARgGQAKgFANgMIAaAbQgIAJgHAGQgIAGgKAEQgJAFgLACQgLADgOAAQgKAAgJgCg");
	this.shape_2.setTransform(98.6,139.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4364C").s().p("AgUBgIAAi/IApAAIAAC/g");
	this.shape_3.setTransform(83.9,139.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4364C").s().p("AgRBgIhOi/IAvAAIAxCFIAxiFIAuAAIhNC/g");
	this.shape_4.setTransform(69,139.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4364C").s().p("AhXBgIAAi/IBLAAQAKABAKACQAKACAJADQAKAEAIAEQAIAGAHAGQAHAGAEAIQAGAIAEAIQADAJACAJQACAJAAAKIAAAAQAAAKgCAJQgCAKgDAIQgEAJgGAIQgEAIgHAGQgHAHgIAFQgIAEgKAEQgJAEgKABQgKADgKAAgAgtA5IAhAAQAMAAAKgEQAKgDAIgIQAHgIAEgKQAFgLAAgNIAAAAQAAgLgFgLQgEgLgHgIQgIgHgKgFQgKgDgMAAIghAAg");
	this.shape_5.setTransform(48.7,139.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F4364C").s().p("AA5BgIgRgrIhQAAIgRArIgrAAIBSi/IAlAAIBSC/gAAZAQIgZg9IgZA9IAyAAg");
	this.shape_6.setTransform(26.8,139);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9E19").s().p("AhIBgIAAi/ICPAAIAAAmIhlAAIAAAnIBZAAIAAAkIhZAAIAAAoIBnAAIAAAmg");
	this.shape_7.setTransform(117.8,100.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9E19").s().p("AAxBgIhbh5IAAB5IgqAAIAAi/IAnAAIBYB1IAAh1IAqAAIAAC/g");
	this.shape_8.setTransform(97.4,100.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9E19").s().p("AgUBgIAAi/IApAAIAAC/g");
	this.shape_9.setTransform(82.2,100.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9E19").s().p("AhDBgIAAi/IApAAIAACYIBfAAIAAAng");
	this.shape_10.setTransform(69.9,100.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9E19").s().p("AAxBgIhbh5IAAB5IgqAAIAAi/IAnAAIBYB1IAAh1IAqAAIAAC/g");
	this.shape_11.setTransform(50,100.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9E19").s().p("AgVBhQgJgCgKgEQgJgEgIgFQgIgGgHgGQgHgHgFgIQgGgIgDgIQgEgJgBgKQgCgKgBgKIAAAAQABgJACgKQACgKADgJQADgIAGgIQAFgIAIgHQAGgHAIgFIARgJQAKgEAKgCQAKgCAKAAQALAAAKACQALACAJAEQAJADAIAGIAPAMIAMAOIAJARQAEAJACAJQABAKAAAKIAAAAQAAAKgBAKQgDAJgEAJQgDAJgGAIQgFAIgGAHQgHAGgJAGIgRAJQgJAEgKABQgLADgKAAQgKAAgLgCgAgXg2QgKAEgIAIQgHAIgEALQgFALAAAMIAAAAQAAAMAFALQAEALAHAIQAJAJAKAEQAKAFAMAAQANAAAKgFQALgEAHgJQAIgIAFgLQADgKAAgNIAAAAQAAgLgEgLQgEgLgIgIQgHgJgLgEQgLgFgMAAQgMAAgLAFg");
	this.shape_12.setTransform(27.7,100.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A1E1").s().p("AhXBfIAAi+IBLAAQAKAAAKACQAKADAJADQAKAEAIAEQAIAFAHAHQAHAGAEAIQAGAHAEAJQADAIACAKQACAKAAAJIAAAAQAAAKgCAKQgCAJgDAJQgEAIgGAIQgEAHgHAHQgHAGgIAGQgIAFgKADQgJAEgKABQgKACgKAAgAgtA5IAhAAQAMAAAKgDQAKgFAIgHQAHgIAEgLQAFgKAAgMIAAgBQAAgLgFgLQgEgKgHgJQgIgHgKgEQgKgEgMgBIghAAg");
	this.shape_13.setTransform(138.2,61.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A1E1").s().p("AhIBfIAAi+ICPAAIAAAmIhlAAIAAAnIBZAAIAAAkIhZAAIAAAoIBnAAIAAAlg");
	this.shape_14.setTransform(118.5,61.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A1E1").s().p("AgUBfIAAiWIg6AAIAAgoICdAAIAAAoIg6AAIAACWg");
	this.shape_15.setTransform(100.2,61.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A1E1").s().p("AgQBhQgKgDgLgDQgKgEgJgGQgLgFgHgJIAYgdQAOALANAGIAOAEQAIACAHAAQANAAAHgFQAIgEAAgJIAAAAQAAgJgIgFQgHgFgXgFIgagJQgMgEgIgGQgJgGgEgKQgEgJAAgOIAAgBQAAgNAFgKQAEgLAKgHQAIgIANgEQAMgEAPAAIATABQAJACAJADIARAHIAQALIgWAgQgNgKgMgEQgNgFgLAAQgLAAgHAFQgGAEgBAIIAAAAQAAAKAJAEQAHAEAZAHQAPAEALAFQALAFAIAFQAHAHAEAJQAEAJABAMIAAABQgBAOgFALQgFALgJAIQgKAHgMAEQgNAEgPAAIgWgBg");
	this.shape_16.setTransform(82.5,61.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A1E1").s().p("AgiBcQgIgDgGgEQgHgEgFgFQgGgFgEgHIgHgPIgEgRIgBgUIAAhsIAqAAIAABrQAAALACAJQADAJAGAHQAFAFAIADQAHADAJABQAKAAAHgDQAIgEAFgFQAFgGADgJQADgJAAgKIAAhtIAqAAIAABrIgBAUIgFASIgHAPIgKAMQgFAFgHAEQgGAEgIADQgWAFgMAAQgYgCgKgDg");
	this.shape_17.setTransform(63.6,61.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A1E1").s().p("AAhBfIgng8IgiAAIAAA8IgqAAIAAi+IBWAAQANAAAUAGQAOAEAJAKQAIAIAFALQADALAAANIAAABQAAALgCAKQgDAJgFAHQgGAHgIAGQgHAFgJAEIAvBDgAgogBIAqAAQAIgBAFgCQAHgCADgDQAFgEACgEQACgGAAgFIAAgBQAAgHgCgFQgDgFgEgEQgEgDgGgCQgGgCgIAAIgpAAg");
	this.shape_18.setTransform(44.2,61.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A1E1").s().p("AgUBfIAAiWIg6AAIAAgoICdAAIAAAoIg6AAIAACWg");
	this.shape_19.setTransform(24.9,61.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00B287").s().p("AhDBfIAAi+IApAAIAACYIBfAAIAAAmg");
	this.shape_20.setTransform(137.5,22.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00B287").s().p("AgiBcQgIgDgGgEQgHgEgFgFQgGgGgEgGIgHgPIgEgRIgBgUIAAhsIAqAAIAABrQAAALACAKQADAJAGAGQAFAGAIACQAHADAJABQAKAAAHgDQAIgEAFgFQAFgGADgIQADgJAAgLIAAhtIAqAAIAABrIgBAUIgFASIgHAOIgKANQgFAFgHAEQgGAEgIADQgWAFgMAAQgYgCgKgDg");
	this.shape_21.setTransform(118,22.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00B287").s().p("AhIBfIAAi+ICRAAIAAAnIhnAAIAAApIBaAAIAAAkIhaAAIAABKg");
	this.shape_22.setTransform(99.4,22.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00B287").s().p("AhKBfIAAi+IBMAAQARAAAOAGQANAEAKAJQAJAIAGANQAEAMAAAOIAAABQAAAIgBAHQgBAIgDAGQgHAMgKAIQgKAIgPAFQgOAEgOAAIghAAIAAA5gAghABIAhAAQAIAAAGgBQAGgDAEgDQAFgEABgFQADgGAAgGIAAAAQAAgIgDgFQgBgGgFgDQgFgEgGgBQgGgDgHAAIghAAg");
	this.shape_23.setTransform(81.5,22.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00B287").s().p("AhEBfIAAi+IArAAIAACYIBdAAIAAAmg");
	this.shape_24.setTransform(64,22.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00B287").s().p("AhIBfIAAi+ICPAAIAAAmIhlAAIAAAnIBZAAIAAAkIhZAAIAAAoIBnAAIAAAlg");
	this.shape_25.setTransform(46.2,22.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00B287").s().p("AAnBfIAAhMIhNAAIAABMIgqAAIAAi+IAqAAIAABMIBNAAIAAhMIAqAAIAAC+g");
	this.shape_26.setTransform(26.4,22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},63).wait(32));

	// Layer 4
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00B287").s().p("AhYBuIAAjbICvAAIAAA0IhzAAIAAAiIBoAAIAAAuIhoAAIAAAjIB1AAIAAA0g");
	this.shape_27.setTransform(133,146.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00A1E1").s().p("AAzBuIhdh4IAAB4Ig8AAIAAjbIA4AAIBZBzIAAhzIA8AAIAADbg");
	this.shape_28.setTransform(110,146.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF9E19").s().p("AgdBuIAAjbIA7AAIAADbg");
	this.shape_29.setTransform(92.7,146.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F4364C").s().p("AhSBuIAAjbIA8AAIAACmIBpAAIAAA1g");
	this.shape_30.setTransform(78.7,146.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00B287").s().p("AAzBuIhdh4IAAB4Ig8AAIAAjbIA4AAIBZBzIAAhzIA8AAIAADbg");
	this.shape_31.setTransform(56.2,146.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00A1E1").s().p("AgXBwQgMgCgLgFQgLgEgJgHQgJgFgJgIQgHgIgGgJQgHgJgEgKQgEgLgCgLQgDgLAAgLIAAgBQAAgLADgLQACgLAEgKQAEgKAHgKQAGgIAIgIQAIgIAJgGQAKgGAKgFQALgEAMgDQAMgCAMAAQAMAAAMACQAMACALAFQAKAFAJAGQAJAFAIAIQAJAIAGAJQAGAJAEALQAFAJABAMQADALAAALIAAAAQAAAMgDALQgBALgFAKQgEAKgGAKQgHAJgIAHQgIAJgJAFQgJAGgLAFQgLAFgMACQgMACgMAAQgLAAgMgCgAgWg2QgKAFgIAJQgHAHgEALQgEALAAALIAAAAQAAAMAEAKQAFAMAHAHQAHAJAKAFQALAEAMAAQAMAAAKgEQAKgFAHgJQAIgHADgLQAFgLAAgLIAAgBQAAgLgFgLQgDgLgIgHQgHgJgLgFQgKgEgMAAQgMAAgKAEg");
	this.shape_32.setTransform(31.2,146.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhkBtIAAjaIBVAAQANAAALACQAMADALAEQAKAEAJAGQAKAGAHAHQAIAHAGAJQAGAJAEAJQAEAKADALQACALAAALIAAAAQAAAMgCALQgDAKgEAKQgEAKgGAIQgGAKgIAHQgHAHgKAGQgJAGgKAEQgLAEgMACQgLACgNAAgAg0BCIAlAAQAPAAALgFQAMgFAJgIQAJgJAFgMQAEgMAAgPIAAAAQAAgNgEgNQgFgMgJgIQgJgKgMgEQgLgFgPAAIglAAg");
	this.shape_33.setTransform(200.7,109.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AA4BtIhpiKIAACKIgvAAIAAjaIAsAAIBmCGIAAiGIAvAAIAADag");
	this.shape_34.setTransform(175.8,109.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgnBpQgJgDgIgFQgHgEgGgGQgGgGgFgIQgFgIgDgJQgDgJgCgKIgBgXIAAh8IAwAAIAAB7QAAANADAKQADAKAGAHQAGAHAJADQAJAEAKAAQALAAAJgEQAIgDAHgGQAGgHADgKQADgKAAgNIAAh8IAwAAIAAB6IgBAYIgFAUQgEAJgFAIQgEAHgHAHQgGAGgHAEQgIAFgJADQgZAGgOAAQgcgCgLgEg");
	this.shape_35.setTransform(151.7,109.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgXBvQgMgDgLgEQgKgEgJgGQgKgGgHgIQgIgIgGgJQgGgJgFgKQgEgKgCgLQgCgLAAgMIAAAAQAAgLACgLQACgLAFgKQAEgKAGgJIAOgRQAIgIAJgGQAJgGALgFQALgEALgCQAMgCALAAQANAAAMACQALACALAEQALAFAJAGQAJAGAIAIQAIAHAGAJQAGAJAEAKQAEALACAKQACAMAAALIAAAAQAAALgCAMQgCALgEAKQgFAKgGAJQgGAJgIAIQgHAHgKAHQgJAGgKAEQgLAEgMADQgMACgMAAQgMAAgLgCgAgag/QgMAGgJAJQgIAJgFANQgFAMAAAOIAAAAQAAAOAFAMQAFANAJAJQAJAKAMAFQAMAGANAAQAPAAAMgGQAMgFAJgJQAJgKAEgMQAFgNAAgOIAAAAQAAgNgFgNQgFgMgIgKQgJgJgMgGQgNgFgOAAQgNAAgNAFg");
	this.shape_36.setTransform(126.6,109.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhSBtIAAjaIClAAIAAAsIh1AAIAAAvIBnAAIAAArIhnAAIAABUg");
	this.shape_37.setTransform(104,109.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgXBtIAAitIhDAAIAAgtIC1AAIAAAtIhDAAIAACtg");
	this.shape_38.setTransform(73.6,109.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhSBtIAAjaICkAAIAAAsIh1AAIAAAsIBnAAIAAAqIhnAAIAAAuIB2AAIAAAqg");
	this.shape_39.setTransform(53.6,109.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgNBvQgLgCgLgEQgKgFgJgGQgKgGgHgHQgIgHgGgJQgGgKgEgKQgEgKgCgLQgCgMAAgMIAAAAQAAgLACgLQACgLAEgKQAFgKAGgJQAGgJAHgIQAIgIAJgGQAJgGALgFQAKgEAMgCQALgCAMAAQAOAAAMACQAMABALAEQANAFAYASIgfAkQgNgLgMgFQgOgGgSAAQgMAAgMAFQgLAGgJAJQgIAKgFAMQgFAMAAAOIAAAAQAAAPAFANQAFAMAJAKQAJAJAMAFQAMAFANAAQAOAAALgDQAMgDAJgHIAAgfIgxAAIAAgpIBfAAIAABeQgYATgQAGQgMAFgNACQgOADgOAAQgMAAgMgCg");
	this.shape_40.setTransform(30.2,109.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgvAXIAAgtIBfAAIAAAtg");
	this.shape_41.setTransform(140.4,72.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgXBuIAAhXIhUiEIA4AAIAzBYIA2hYIA2AAIhUCDIAABYg");
	this.shape_42.setTransform(113.6,71.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("ABCBuIgUgxIhcAAIgUAxIgxAAIBejbIArAAIBeDbgAAdATIgdhGIgdBGIA6AAg");
	this.shape_43.setTransform(90.1,71.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAyBuIgyiNIgwCNIgqAAIhLjbIAzAAIAuCTIAxiTIAoAAIAyCTIAtiTIAyAAIhLDbg");
	this.shape_44.setTransform(60.4,71.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("ABCBuIgVgxIhbAAIgUAxIgxAAIBejbIArAAIBeDbgAAdATIgdhGIgdBGIA6AAg");
	this.shape_45.setTransform(30.5,71.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhSBuIAAjbICkAAIAAArIh1AAIAAAtIBnAAIAAAqIhnAAIAAAuIB2AAIAAArg");
	this.shape_46.setTransform(201.5,34.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AhkBuIAAjbIBVAAQANAAALACQAMADALAEQAKAEAJAGQAKAGAHAHQAIAHAGAJQAGAJAEAKQAEAKADAKQACALAAALIAAAAQAAAMgCALQgDAKgEAKQgEAKgGAIQgGAKgIAHQgHAIgKAFQgJAGgKAEQgLAEgMACQgLACgNABgAg0BCIAlAAQAPAAALgFQAMgFAJgIQAJgJAFgMQAEgMAAgPIAAAAQAAgOgEgMQgFgLgJgKQgJgJgMgEQgLgFgPAAIglAAg");
	this.shape_47.setTransform(178.8,34.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgXBuIAAjbIAvAAIAADbg");
	this.shape_48.setTransform(161,34.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAsBuIAAhYIhXAAIAABYIgxAAIAAjbIAxAAIAABYIBXAAIAAhYIAxAAIAADbg");
	this.shape_49.setTransform(144,34.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgXBuIAAiuIhDAAIAAgtIC1AAIAAAtIhDAAIAACug");
	this.shape_50.setTransform(112.7,34.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgeAeIAPgCQAFgDAEgEQAHgIgBgNIgSAAIAAgyIAxAAIAAArQAAAOgDALQgFALgHAIQgHAGgKADQgLAEgOAAg");
	this.shape_51.setTransform(97.9,28.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AA4BuIhpiLIAACLIgvAAIAAjbIAsAAIBmCGIAAiGIAvAAIAADbg");
	this.shape_52.setTransform(81.5,34.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgXBvQgMgDgLgEQgKgEgJgGQgKgGgHgIQgIgIgGgJQgGgJgFgKQgEgKgCgLQgCgLAAgMIAAAAQAAgLACgLQACgLAFgKQAEgKAGgJIAOgRQAIgIAJgGQAJgGALgFQALgEALgCQAMgCALAAQANAAAMACQALACALAEQALAFAJAGQAJAGAIAIQAIAHAGAJQAGAJAEAKQAEALACAKQACAMAAALIAAAAQAAALgCAMQgCALgEAKQgFAKgGAJQgGAJgIAIQgHAHgKAHQgJAGgKAEQgLAEgMADQgMACgMAAQgMAAgLgCgAgag/QgMAGgJAJQgIAJgFANQgFAMAAAOIAAAAQAAAOAFAMQAFANAJAJQAJAKAMAFQAMAGANAAQAPAAAMgGQAMgFAJgJQAJgKAEgMQAFgNAAgOIAAAAQAAgNgFgNQgFgMgIgKQgJgJgMgGQgNgFgOAAQgNAAgNAFg");
	this.shape_53.setTransform(55.9,34.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AhkBuIAAjbIBVAAQANAAALACQAMADALAEQAKAEAJAGQAKAGAHAHQAIAHAGAJQAGAJAEAKQAEAKADAKQACALAAALIAAAAQAAAMgCALQgDAKgEAKQgEAKgGAIQgGAKgIAHQgHAIgKAFQgJAGgKAEQgLAEgMACQgLACgNABgAg0BCIAlAAQAPAAALgFQAMgFAJgIQAJgJAFgMQAEgMAAgPIAAAAQAAgOgEgMQgFgLgJgKQgJgJgMgEQgLgFgPAAIglAAg");
	this.shape_54.setTransform(30.9,34.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},31).to({state:[]},32).wait(32));

	// Layer 1
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AhBBRIAAihICCAAIAAAmIhWAAIAAAZIBOAAIAAAiIhOAAIAAAaIBXAAIAAAmg");
	this.shape_55.setTransform(116.6,115);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgVBRIAAh6IgxAAIAAgnICNAAIAAAnIgxAAIAAB6g");
	this.shape_56.setTransform(101.1,115);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgWBRIAAihIAsAAIAAChg");
	this.shape_57.setTransform(89.8,115);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgPBSQgKgCgKgDQgKgEgIgFQgJgFgIgGIAZgeQAIAGASAIQAIAEASABQAJAAAFgDQAEgDAAgFIAAAAQAAgGgFgDQgGgDgPgEQgPgDgJgEQgMgEgHgFQgJgFgEgIQgFgJAAgMIAAAAQAAgLAEgKQAFgJAIgHQAIgHALgEQAMgEAOAAIATABQAJACAJADQAIACAHAEQAIAEAGAGIgWAfQgLgIgMgEQgMgEgKAAQgHAAgFADQgEADAAAFIAAAAQAAAGAGADQAGADAPAEIAaAHQALAEAHAGQAIAFAEAIQAFAIAAALIAAABQAAAMgFAKQgFAKgIAHQgJAGgMAEQgMAEgPAAQgKAAgKgCg");
	this.shape_58.setTransform(78.2,115);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AhHBRIAAihIBSAAQAPAAALAEQAKAEAIAGQAFAGACAGQADAHAAAIIAAAAQAAAHgCAGIgFAKIgIAIIgKAFIANAFQAHAEAEAFQAEAEACAGQACAHAAAIIAAABQAAAKgEAIQgEAIgIAGQgIAGgLADQgMADgOAAgAgcAtIAiAAQAKAAAGgEQAGgDAAgIIAAAAQAAgHgGgEQgGgEgLAAIghAAgAgcgPIAcAAQAKgBAFgDQAGgDAAgIIAAAAQAAgHgFgEQgFgDgKAAIgdAAg");
	this.shape_59.setTransform(63.2,115);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AhABRIAAihICAAAIAAAmIhUAAIAAAZIBNAAIAAAiIhNAAIAAAaIBWAAIAAAmg");
	this.shape_60.setTransform(47.1,115);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAgBSIgghcIggBcIgnAAIg2iiIAwAAIAcBdIAfheIAmAAIAfBeIAchdIAvAAIg3Cig");
	this.shape_61.setTransform(26.2,115);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AA/BSIgTgsIhXAAIgTAsIgTAAIBKiiIAQAAIBJCigAAlAWIglhRIgkBRIBJAAg");
	this.shape_62.setTransform(231.2,87.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("Ag6BRIAAihIB0AAIAAARIhiAAIAAA3IBXAAIAAAPIhXAAIAAA6IBjAAIAAAQg");
	this.shape_63.setTransform(208,87.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgHBSIhGiiIAVAAIA4CKIA6iKIAUAAIhGCig");
	this.shape_64.setTransform(191.1,87.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AA/BSIgTgsIhXAAIgTAsIgTAAIBKiiIAQAAIBJCigAAlAWIglhRIgkBRIBJAAg");
	this.shape_65.setTransform(173.3,87.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAuBRIAAhJIhcAAIAABJIgSAAIAAihIASAAIAABIIBcAAIAAhIIATAAIAAChg");
	this.shape_66.setTransform(155.5,87.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgRBSQgIgCgIgDQgHgDgHgFIgMgKIgJgNQgFgGgDgIQgDgHgBgIQgCgIAAgJIAAAAQAAgHACgJQABgIADgHQADgIAFgGQAEgHAFgGQAGgGAGgEIAPgIIAQgFQAIgCAIAAQAJAAAJACIAQAFIAOAIIAMAKIAKAMIAHAPQADAHABAIIACAQIAAAAQAAAIgCAIIgEAQQgDAHgFAHQgEAHgFAFQgGAGgGAFQgHAFgHADQgIADgJACQgIACgJAAQgIAAgJgCgAgNhBIgMAEIgKAGIgKAIQgIAKgFALQgFARAAAJIAAAAQACASADAIQAFAMAIAJIAKAIIALAGIAMAEQAGACAGAAQAHAAAHgCIAMgEQAHgDANgLQAIgJAFgMQADgIACgSIAAAAQAAgIgFgRQgFgMgIgJQgNgLgIgEIgMgEQgGgBgHAAQgGAAgHABg");
	this.shape_67.setTransform(129.9,87.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgIBRIAAiQIg2AAIAAgRIB+AAIAAARIg3AAIAACQg");
	this.shape_68.setTransform(112.7,87.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgMBRQgJgBgIgDIgQgIIgOgMIALgNIAMAKQAGAEAHADQAHADAHABQAIACAHAAQAIAAAHgCQAHgCAEgEQAFgEADgFQACgFAAgGIAAAAQAAgGgBgFQgCgEgFgEQgFgDgIgDIgVgGQgNgDgKgEQgLgDgGgGQgHgFgDgHQgEgIAAgKIAAAAQAAgKAFgIQADgIAIgGQAHgGAKgDQAKgDALAAIAPABIAPAEQAJADARALIgLAPQgLgJgLgFQgMgEgMAAQgHAAgHACQgGACgFAEQgEADgCAFQgDAFAAAFIAAABQAAAGACAEQACAFAEADQAGAEAIADQAJADAMADIAYAHQAKADAGAGQAHAFADAHQACAIAAAJIAAAAQAAALgDAIQgFAIgHAHQgIAGgKADQgJADgNAAQgIAAgJgCg");
	this.shape_69.setTransform(90.8,87.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAtBRIgvg/IguAAIAAA/IgSAAIAAihIBEAAQALAAAQAFQAMAEAHAHQAHAHACAIQAEAIAAAJIAAABQAAAKgEAIQgCAHgHAGQgFAGgIADQgIAEgKACIAyBCgAgwACIAxAAQAJgBAIgBQAHgCAGgEQAFgEADgHQADgGAAgHIAAgBQAAgHgDgHQgCgFgGgFQgFgEgHgCQgIgCgKAAIgxAAg");
	this.shape_70.setTransform(75.8,87.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgaBOIgMgGIgKgIIgIgKQgDgFgCgHIgEgOIgBgQIAAhdIASAAIAABcQAAANADAKQAEAKAGAHQAHAHAJAEQAJADAKAAQAMAAAJgDQAJgDAGgHQAGgHAEgKQADgKAAgNIAAhdIASAAIAABcIgBAQIgDAPIgGAMIgIAKIgKAIIgLAGQgSAEgKAAQgSgBgIgDg");
	this.shape_71.setTransform(58.1,87.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgRBSQgIgCgIgDQgHgDgHgFIgMgKQgFgGgEgHQgFgGgDgIQgDgHgBgIQgCgIAAgJIAAAAQAAgHACgJQABgIADgHQADgIAFgGQAEgHAFgGQAGgGAGgEIAPgIIAQgFQAIgCAIAAQAJAAAJACIAQAFIAOAIIAMAKIAKAMIAHAPQADAHABAIIACAQIAAAAQAAAIgCAIIgEAQQgDAHgFAHQgEAHgFAFQgGAGgGAFQgHAFgHADQgIADgJACQgIACgJAAQgIAAgJgCgAgNhBIgMAEIgKAGIgKAIQgIAKgFALQgFARAAAJIAAAAQACASADAIQAFAMAIAJIAKAIIALAGIAMAEQAGACAGAAQAHAAAHgCIAMgEQAHgDANgLQAIgJAFgMQADgIACgSIAAAAQAAgIgFgRQgFgMgIgJQgNgLgIgEIgMgEQgGgBgHAAQgGAAgHABg");
	this.shape_72.setTransform(39.5,87.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgIBRIAAhAIhEhhIAXAAIA1BQIA3hQIAWAAIhEBhIAABAg");
	this.shape_73.setTransform(21.5,87.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("Ag6BRIAAihIB0AAIAAARIhiAAIAAA3IBXAAIAAAQIhXAAIAAA4IBjAAIAAARg");
	this.shape_74.setTransform(216.3,59.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAuBRIg9hPIgjAjIAAAsIgSAAIAAihIASAAIAABgIBchgIAYAAIhEBHIBHBag");
	this.shape_75.setTransform(200.7,59.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgIBRIAAihIARAAIAAChg");
	this.shape_76.setTransform(188.2,59.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("Ag2BRIAAihIASAAIAACQIBaAAIAAARg");
	this.shape_77.setTransform(178.4,59.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgPBSQgKgCgKgDQgKgEgIgFQgJgFgIgGIAZgeQAIAGASAIQAIAEASABQAJAAAFgDQAEgDAAgFIAAAAQAAgGgFgDQgGgDgPgEQgPgDgJgEQgMgEgHgFQgJgFgEgIQgFgJAAgMIAAAAQAAgLAEgKQAFgJAIgHQAIgHALgEQAMgEAOAAIATABQAJACAJADQAIACAHAEQAIAEAGAGIgWAfQgLgIgMgEQgMgEgKAAQgHAAgFADQgEADAAAFIAAAAQAAAGAGADQAGADAPAEIAaAHQALAEAHAGQAIAFAEAIQAFAIAAALIAAABQAAAMgFAKQgFAKgIAHQgJAGgMAEQgMAEgPAAQgKAAgKgCg");
	this.shape_78.setTransform(155.9,59.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AhABRIAAihICAAAIAAAmIhUAAIAAAZIBMAAIAAAiIhMAAIAAAaIBVAAIAAAmg");
	this.shape_79.setTransform(141.3,59.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgPBSQgKgCgKgDQgKgEgIgFQgJgFgIgGIAZgeQAIAGASAIQAIAEASABQAJAAAFgDQAEgDAAgFIAAAAQAAgGgFgDQgGgDgPgEQgPgDgJgEQgMgEgHgFQgJgFgEgIQgFgJAAgMIAAAAQAAgLAEgKQAFgJAIgHQAIgHALgEQAMgEAOAAIATABQAJACAJADQAIACAHAEQAIAEAGAGIgWAfQgLgIgMgEQgMgEgKAAQgHAAgFADQgEADAAAFIAAAAQAAAGAGADQAGADAPAEIAaAHQALAEAHAGQAIAFAEAIQAFAIAAALIAAABQAAAMgFAKQgFAKgIAHQgJAGgMAEQgMAEgPAAQgKAAgKgCg");
	this.shape_80.setTransform(125.5,59.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgPBSQgKgCgKgDQgKgEgIgFQgJgFgIgGIAZgeQAIAGASAIQAIAEASABQAJAAAFgDQAEgDAAgFIAAAAQAAgGgFgDQgGgDgPgEQgPgDgJgEQgMgEgHgFQgJgFgEgIQgFgJAAgMIAAAAQAAgLAEgKQAFgJAIgHQAIgHALgEQAMgEAOAAIATABQAJACAJADQAIACAHAEQAIAEAGAGIgWAfQgLgIgMgEQgMgEgKAAQgHAAgFADQgEADAAAFIAAAAQAAAGAGADQAGADAPAEIAaAHQALAEAHAGQAIAFAEAIQAFAIAAALIAAABQAAAMgFAKQgFAKgIAHQgJAGgMAEQgMAEgPAAQgKAAgKgCg");
	this.shape_81.setTransform(110.4,59.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AhBBRIAAihICCAAIAAAmIhWAAIAAAZIBOAAIAAAiIhOAAIAAAaIBXAAIAAAmg");
	this.shape_82.setTransform(95.8,59.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAlBRIhEhYIAABYIgsAAIAAihIApAAIBCBVIAAhVIAsAAIAAChg");
	this.shape_83.setTransform(78.7,59.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgWBRIAAihIAsAAIAAChg");
	this.shape_84.setTransform(66,59.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgPBSQgKgCgKgDQgKgEgIgFQgJgFgIgGIAZgeQAIAGASAIQAIAEASABQAJAAAFgDQAEgDAAgFIAAAAQAAgGgFgDQgGgDgPgEQgPgDgJgEQgMgEgHgFQgJgFgEgIQgFgJAAgMIAAAAQAAgLAEgKQAFgJAIgHQAIgHALgEQAMgEAOAAIATABQAJACAJADQAIACAHAEQAIAEAGAGIgWAfQgLgIgMgEQgMgEgKAAQgHAAgFADQgEADAAAFIAAAAQAAAGAGADQAGADAPAEIAaAHQALAEAHAGQAIAFAEAIQAFAIAAALIAAABQAAAMgFAKQgFAKgIAHQgJAGgMAEQgMAEgPAAQgKAAgKgCg");
	this.shape_85.setTransform(54.4,59.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgfBOQgGgCgGgDIgLgIIgJgLIgGgNQgDgGgBgJQgBgIAAgJIAAhaIAtAAIAABZQAAAIACAHQACAGAEAEQAEAFAGACQAFACAGAAQAHAAAFgCQAGgCAEgEQAEgEACgHQACgGAAgIIAAhaIAtAAIAABZQAAAJgBAJQgBAIgDAHQgDAHgEAGIgIALIgLAIQgGADgHACQgUAEgLABQgVgCgKgDg");
	this.shape_86.setTransform(38.5,59.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AhHBRIAAihIBSAAQAPAAALAEQAKADAIAIQAFAFACAGQADAGAAAJIAAABQAAAGgCAGIgFAKIgIAIIgKAGIANAEQAHAEAEAEQAEAFACAGQACAHAAAIIAAAAQAAALgEAIQgEAIgIAGQgIAGgLADQgMADgOAAgAgcAtIAiAAQAKAAAGgEQAGgEAAgHIAAgBQAAgGgGgEQgGgEgLAAIghAAgAgcgQIAcAAQAKABAFgEQAGgEAAgGIAAgBQAAgGgFgFQgFgDgKAAIgdAAg");
	this.shape_87.setTransform(21.9,59.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgIBRIAAiQIg2AAIAAgRIB9AAIAAARIg2AAIAACQg");
	this.shape_88.setTransform(202.9,31.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgHBSQgJgCgHgDIgOgIIgMgKQgFgFgFgHIgHgOQgDgIgBgIQgCgIAAgJIAAAAQAAgIACgIQABgIADgIQADgHAEgHIAKgMIAMgLIAOgHIAQgFQAHgCAJAAQALAAAJACQAIACAJADQAJAFARAOIgNANQgOgMgHgEQgHgDgHgBQgHgCgIAAQgHAAgFABIgMAEQgMAFgIAJQgJAJgEAMQgFARAAAJIAAAAQACASADAIQAEAMAJAJQAIAJAMAFIAMAEIAMACQAIAAAHgCQAHgBAHgDQAIgFAPgNIAMAMQgRAQgKAFQgJAEgIACQgKACgKAAQgJAAgHgCg");
	this.shape_89.setTransform(187.3,31.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("Ag6BRIAAihIB0AAIAAARIhiAAIAAA3IBYAAIAAAQIhYAAIAAA5IBjAAIAAAQg");
	this.shape_90.setTransform(171.3,31.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("Ag7BRIAAihIA7AAQAOAAALADQALAEAIAHQAIAGAFAKQADAKABALIAAABQgBAGgBAGQgBAGgDAFQgEAIgJAIQgJAGgLAEQgMADgMAAIgnAAIAAA5gAgpAIIAnAAQAKgBAIgDQAIgCAGgEQAGgFADgGQADgHAAgHIAAgBQAAgJgDgGQgDgHgGgEQgFgEgJgCQgHgDgKAAIgoAAg");
	this.shape_91.setTransform(156,31.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AA0BRIg0hGIgzBGIgVAAIA+hRIg8hQIAWAAIAwBCIAyhCIAVAAIg8BQIA+BRg");
	this.shape_92.setTransform(139.3,31.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("Ag6BRIAAihIB0AAIAAARIhiAAIAAA3IBXAAIAAAQIhXAAIAAA5IBjAAIAAAQg");
	this.shape_93.setTransform(123.7,31.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#00B287").s().p("AhBBRIAAihICCAAIAAAmIhWAAIAAAZIBOAAIAAAiIhOAAIAAAaIBXAAIAAAmg");
	this.shape_94.setTransform(101.2,31.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#00A1E1").s().p("Ag8BRIAAihIAsAAIAAB5IBNAAIAAAog");
	this.shape_95.setTransform(86.5,31.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF9E19").s().p("AhDBRIAAihIBEAAQAPAAANAEQAMAEAJAHQAJAHAEALQAFAPAAAJQAAAIgBAGQgBAGgDAFQgCAFgEAEIgIAJQgKAHgMAEQgNAEgOAAIgXAAIAAAugAgXAAIAWAAQAFAAAFgBQAEgCAEgDQADgCACgEQACgEAAgFIAAAAQAAgGgCgDQgCgEgDgDQgEgCgFgCIgJgBIgWAAg");
	this.shape_96.setTransform(71.6,31.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F4364C").s().p("AgRBSQgJgBgIgEQgIgDgHgEQgHgFgFgFIgLgNQgFgHgDgHIgFgQIgBgRIAAAAIABgQIAFgQQAEgIAEgGIALgNIANgKQAHgFAHgDIARgFQAJgBAIAAQAJAAAJABQAJACAIADQAIADAHAFQAHAEAFAGQAGAGAFAGIAIAPQADAHABAIQACAJAAAIIAAAAQAAAIgCAJQgBAIgEAIQgDAHgEAHQgFAHgGAFQgGAGgHAFQgHAEgIADQgIAEgIABQgJACgJAAQgJAAgIgCgAgQgnQgIADgFAGQgGAGgCAIQgDAIAAAIIAAAAQAAAIADAJQADAHAFAGQAGAHAHADQAIADAIAAQAJAAAIgDQAHgDAGgGQAFgGADgIQADgIAAgJIAAAAQAAgIgDgIQgDgIgFgGQgGgGgHgDQgIgEgJAAQgIAAgIAEg");
	this.shape_97.setTransform(53.8,31.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#00B287").s().p("AhBBRIAAihICCAAIAAAmIhWAAIAAAZIBOAAIAAAiIhOAAIAAAaIBXAAIAAAmg");
	this.shape_98.setTransform(36.8,31.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00A1E1").s().p("AhDBRIAAihIBEAAQAPAAANAEQAMAEAJAHQAJAHAEALQAFAPAAAJQAAAIgBAGQgBAGgDAFQgCAFgEAEIgIAJQgKAHgMAEQgNAEgOAAIgXAAIAAAugAgXAAIAWAAQAFAAAFgBQAEgCAEgDQADgCACgEQACgEAAgFIAAAAQAAgGgCgDQgCgEgDgDQgEgCgFgCIgJgBIgWAAg");
	this.shape_99.setTransform(21.5,31.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55}]}).to({state:[]},31).wait(64));

	// Layer 5
	this.instance = new lib.UK_theUKDomainLogo_RGB();
	this.instance.parent = this;
	this.instance.setTransform(216,185,0.116,0.116);

	this.instance_1 = new lib.UK_4xdomainsRGB();
	this.instance_1.parent = this;
	this.instance_1.setTransform(8,216,0.191,0.191);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#002B49").s().p("AxQRQQnKnJABqHQgBqGHKnKQHKnJKGgBQKHABHJHJQHKHKAAKGQAAKHnKHJQnJHKqHAAQqGAAnKnKg");
	this.shape_100.setTransform(104.8,17.8,1.17,1.17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100},{t:this.instance_1},{t:this.instance}]}).wait(95));

	// Layer 6
	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#002B49").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape_101.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_101).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(72,-39.9,379,416);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Message2_atlas_.png", id:"Message2_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;