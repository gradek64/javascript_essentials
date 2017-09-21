(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Message3_atlas_", frames: [[0,508,1032,124],[0,0,659,506]]}
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
	this.spriteSheet = ss["Message3_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.UK_theUKDomainLogo_RGB = function() {
	this.spriteSheet = ss["Message3_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.Message3 = function(mode,startPosition,loop) {
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
	this.shape_27.graphics.f("#00B287").s().p("AhABQIAAifICAAAIAAAlIhUAAIAAAZIBMAAIAAAiIhMAAIAAAZIBVAAIAAAmg");
	this.shape_27.setTransform(195.9,113.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00A1E1").s().p("AAlBQIhEhXIAABXIgsAAIAAifIAqAAIBBBUIAAhUIAsAAIAACfg");
	this.shape_28.setTransform(179,113.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF9E19").s().p("AgVBQIAAifIArAAIAACfg");
	this.shape_29.setTransform(166.4,113.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F4364C").s().p("Ag8BQIAAifIAsAAIAAB4IBNAAIAAAng");
	this.shape_30.setTransform(156.1,113.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00B287").s().p("AAlBQIhEhXIAABXIgsAAIAAifIAqAAIBBBUIAAhUIAsAAIAACfg");
	this.shape_31.setTransform(139.6,113.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00A1E1").s().p("AgRBSQgJgCgHgDIgPgIIgNgKQgGgFgEgHQgFgHgDgHQgDgIgCgIQgBgIAAgJIABgQIAFgPQADgIAFgHIAKgMQAGgGAHgEQAHgFAIgDIAQgFIARgBIASABQAJACAIADQAHADAHAFQAHAEAGAGQAGAFAEAHQAFAHADAHQADAIACAIIABAQIAAAAQAAAJgBAIQgCAIgDAHQgDAIgFAHQgEAGgGAGQgGAGgHAEQgHAFgIADQgIADgIACQgJABgJAAIgRgBgAgQgnQgHADgGAGQgFAGgDAIQgDAIAAAIIAAAAQAAAJADAIQADAHAGAGQAFAGAIAEQAHADAIAAQAJAAAIgDQAHgDAGgGQAFgGADgIQADgIAAgJQAAgIgDgIQgDgHgFgGQgGgGgHgEQgIgDgJAAQgIAAgIADg");
	this.shape_32.setTransform(121.1,113.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgRBQIAAh/IgwAAIAAggICDAAIAAAgIgwAAIAAB/g");
	this.shape_33.setTransform(97.4,113.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ag8BQIAAifIB4AAIAAAfIhVAAIAAAhIBLAAIAAAeIhLAAIAAAiIBWAAIAAAfg");
	this.shape_34.setTransform(82.7,113.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgJBRQgJgCgIgDQgHgDgGgEQgIgEgFgGQgFgFgFgHIgHgOQgDgIgCgHQgBgJAAgJQAAgHABgJQACgIADgIQADgHAEgGIALgNQAFgGAHgEQAGgFAIgDQAIgDAIgBIAQgCQAMAAAIACQAJABAIACQAKAEAQANIgVAbQgKgJgJgDQgLgFgNAAQgIAAgJAFQgHADgHAHQgGAHgEAJQgDAJgBAKIAAAAQABALADAJQAEAKAGAGQAHAHAIAEQAKAEAJgBQAKAAAIgCQAJgCAGgFIAAgXIgjAAIAAgeIBGAAIAABFQgSAOgMAEIgSAGQgKACgLAAQgJAAgIgCg");
	this.shape_35.setTransform(65.6,113.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgRBRQgIgCgIgDIgPgIQgHgEgFgGIgKgLQgFgHgDgIQgDgHgBgIQgCgJAAgIQAAgHACgJQABgIADgIQADgHAFgGIAKgNQAGgGAHgEQAGgFAIgDQAIgDAJgBQAIgCAIAAQAKAAAIACQAJABAIADQAHADAHAFIAMAKQAGAGAEAGIAIAOQADAHACAJIABAQIAAAAQAAAJgBAIQgCAHgDAIQgDAHgFAHIgKAMIgMAKQgHAFgIADQgIADgIACQgJACgJAAQgIAAgJgCgAgTgtQgIADgHAHQgGAHgEAJQgDAJAAAKIAAAAQAAAKADAJQAEAJAGAIQAHAGAJAEQAJAEAJAAQALAAAJgDQAJgEAGgHQAHgHADgJQAEgKAAgKQAAgKgEgIQgEgKgGgGQgHgIgJgDQgJgFgKAAQgKAAgJAFg");
	this.shape_36.setTransform(40.1,113.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgRBQIAAh/IgwAAIAAggICDAAIAAAgIgwAAIAAB/g");
	this.shape_37.setTransform(23,113.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgNBRQgJgCgIgDIgRgIQgIgFgHgGIAUgZQAMAJALAFIAMAEIAMABQALAAAGgEQAGgEAAgHIAAAAQAAgHgGgEQgGgFgTgFIgWgGQgKgEgHgFQgHgFgDgIQgEgIAAgMIAAAAQAAgLAEgJQAEgJAIgGQAHgHAKgDQALgDAMAAIAQABIAQAEIAOAGIANAJIgTAbQgLgIgKgEQgLgEgIAAQgKAAgGAEQgFAEAAAGIAAAAQAAAIAHAEQAGAEAVAFIAVAHQAKAFAGAEQAHAGADAHQADAIAAAKIAAABQAAAMgEAJQgEAJgIAHQgIAGgLADQgKADgNAAQgJAAgJgBg");
	this.shape_38.setTransform(205.5,85.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ag/BQIAAifIBBAAQAOAAAMAEQALAEAIAHQAIAIAEAKQAFAKAAAMIAAABQAAAHgCAGIgEAKQgEALgKAHQgIAHgMAEQgMADgMAAIgbAAIAAAwgAgbABIAbAAQAGAAAGgBQAFgCADgDQAEgDACgFQACgEAAgGIAAAAQAAgGgCgEQgCgFgEgDQgEgDgFgCQgFgBgGAAIgbAAg");
	this.shape_39.setTransform(191.3,85.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgRBQIAAifIAiAAIAACfg");
	this.shape_40.setTransform(179.3,85.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgRBQIAAh/IgwAAIAAggICDAAIAAAgIgwAAIAAB/g");
	this.shape_41.setTransform(168.1,85.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Ag5BQIAAifIAkAAIAAB/IBPAAIAAAgg");
	this.shape_42.setTransform(147.3,85.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAwBRIgPgkIhCAAIgPAkIgkAAIBFihIAfAAIBFChgAAVAOIgVgzIgVAzIAqAAg");
	this.shape_43.setTransform(130.6,85.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgHBRQgJgBgIgDIgNgIQgHgFgGgFIgKgNIgHgNQgCgIgCgIQgCgIAAgJQAAgIACgIQABgIADgHIAHgPIAKgMIANgKQAGgEAIgDQAHgEAJgCQAHgBAKAAQALAAAJABIARAGQAKAEAQAOIgWAaQgKgKgKgEQgKgFgMABQgJAAgIADQgIAEgHAHQgGAHgEAJQgDAJAAAKIAAAAQAAAKADAJQAEAJAGAHQAGAIAJADQAIAEAJAAQAKAAAOgFQAIgEALgJIAWAWIgMAMQgIAFgIAEQgHAEgKACQgKACgKAAQgJAAgHgCg");
	this.shape_44.setTransform(113.4,85.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgRBQIAAifIAiAAIAACfg");
	this.shape_45.setTransform(101,85.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgRBQIAAh/IgwAAIAAggICDAAIAAAgIgwAAIAAB/g");
	this.shape_46.setTransform(89.8,85.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgHBRQgJgBgIgDIgNgIQgHgFgGgFIgKgNIgHgNQgDgIgBgIQgCgIAAgJQAAgIACgIQABgIADgHIAHgPIAKgMIANgKQAGgEAIgDQAHgEAJgCQAIgBAJAAQALAAAJABIARAGQAKAEAQAOIgXAaQgJgKgKgEQgKgFgLABQgKAAgIADQgIAEgHAHQgGAHgEAJQgDAJAAAKIAAAAQAAAKADAJQAEAJAGAHQAGAIAJADQAIAEAKAAQAJAAAOgFQAIgEALgJIAWAWIgMAMQgHAFgIAEQgJAEgJACQgKACgKAAQgJAAgHgCg");
	this.shape_47.setTransform(74.1,85.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAwBRIgPgkIhDAAIgOAkIgkAAIBFihIAfAAIBFChgAAVAOIgVgzIgVAzIAqAAg");
	this.shape_48.setTransform(56.5,85.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAcBQIgigzIgbAAIAAAzIgkAAIAAifIBJAAQALAAAQAEQAMAEAIAIQAHAHADAJQAEAKgBALIAAAAQAAAKgCAIQgDAIgEAFQgFAGgGAFQgGAEgIADIAoA5gAghgBIAjAAQAGAAAFgCQAGgBADgDQADgEACgEQACgEAAgFIAAAAQAAgGgCgEQgCgFgDgDQgEgCgFgCQgGgBgGAAIgiAAg");
	this.shape_49.setTransform(39.8,85.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("Ag/BQIAAifIBBAAQAOAAAMAEQALAEAIAHQAIAIAEAKQAFAKAAAMIAAABQAAAHgCAGIgEAKQgEALgKAHQgIAHgMAEQgMADgMAAIgbAAIAAAwgAgbABIAbAAQAGAAAGgBQAFgCADgDQAEgDACgFQACgEAAgGIAAAAQAAgGgCgEQgCgFgEgDQgEgDgFgCQgFgBgGAAIgbAAg");
	this.shape_50.setTransform(23.9,85.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AhJBQIAAifIA/AAIARABQAIACAIADQAIADAHAEQAHAEAGAGIAJALQAFAHADAHQADAHABAIQACAIAAAIIAAAAQAAAIgCAIQgBAIgDAIQgDAHgFAGIgJAMQgGAGgHAEQgHAEgIADQgIADgIACIgRABgAgmAwIAcAAQAKAAAIgDQAJgDAHgHQAGgGADgJQAEgJAAgLQAAgKgEgIQgDgJgGgHQgHgGgJgEQgIgDgKAAIgcAAg");
	this.shape_51.setTransform(181.3,58.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAqBQIhNhlIAABlIgkAAIAAifIAiAAIBJBiIAAhiIAjAAIAACfg");
	this.shape_52.setTransform(163,58.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAwBRIgOgkIhEAAIgOAkIgkAAIBFihIAgAAIBEChgAAVAOIgVgzIgVAzIAqAAg");
	this.shape_53.setTransform(144.9,58.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgRBQIAAh/IgwAAIAAggICDAAIAAAgIgwAAIAAB/g");
	this.shape_54.setTransform(121.6,58.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAcBQIghgzIgcAAIAAAzIgjAAIAAifIBIAAQALAAAQAEQAMAEAIAIQAGAHAEAJQADAKAAALIAAAAQAAAKgCAIQgDAIgEAFQgEAGgHAFQgGAEgIADIAoA5gAghgBIAjAAQAGAAAFgCQAFgBAEgDQADgEACgEQACgEAAgFIAAAAQAAgGgCgEQgCgFgDgDQgEgCgFgCQgGgBgGAAIgiAAg");
	this.shape_55.setTransform(106.5,58.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgRBRQgIgCgIgDIgPgIQgHgEgFgGIgKgLQgFgHgDgIQgDgHgBgIQgCgJAAgIQAAgIACgIQABgIADgIQADgHAFgHIAKgMQAGgFAHgFQAGgFAIgDQAIgDAJgBQAIgCAIAAQAKAAAIACQAJABAIADQAHADAHAFIAMAKQAGAFAEAHIAIAOQADAHACAJQABAIAAAIIAAAAQAAAJgBAHQgCAIgDAIQgDAHgFAHIgKAMIgMAKQgHAFgIADQgIAEgIABQgJACgJAAQgIAAgJgCgAgTguQgIAEgHAHQgGAHgEAJQgDAJAAAKIAAAAQAAAKADAJQAEAJAGAIQAHAGAJAEQAJAEAJAAQALAAAJgDQAJgFAGgGQAHgIADgIQAEgKAAgKQAAgKgEgJQgEgJgGgGQgHgIgJgEQgJgEgKAAQgKAAgJAEg");
	this.shape_56.setTransform(87.9,58.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("Ag/BQIAAifIBBAAQAOAAAMAEQALAEAIAHQAIAIAEAKQAFAKAAAMIAAABQAAAHgCAGIgEAKQgEALgKAHQgIAHgMAEQgMADgMAAIgbAAIAAAwgAgbABIAbAAQAGAAAGgBQAFgCADgDQAEgDACgFQACgEAAgGIAAAAQAAgGgCgEQgCgFgEgDQgEgDgFgCQgFgBgGAAIgbAAg");
	this.shape_57.setTransform(71.1,58.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("Ag/BQIAAifIBBAAQAOAAAMAEQALAEAIAHQAIAIAEAKQAFAKAAAMIAAABQAAAHgCAGIgEAKQgEALgKAHQgIAHgMAEQgMADgMAAIgbAAIAAAwgAgbABIAbAAQAGAAAGgBQAFgCADgDQAEgDACgFQACgEAAgGIAAAAQAAgGgCgEQgCgFgEgDQgEgDgFgCQgFgBgGAAIgbAAg");
	this.shape_58.setTransform(55.8,58.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgdBNIgMgFIgKgIIgHgKIgGgNQgDgGgBgIIgBgQIAAhbIAjAAIAABaQAAAJADAIQACAHAEAFQAFAFAGADQAHACAHAAQAIAAAGgCQAHgDAEgFQAFgEACgIQACgHAAgJIAAhbIAkAAIAABZIgBARIgEAPIgGANIgIAKIgKAIIgMAFQgTAEgKABQgUgCgJgDg");
	this.shape_59.setTransform(38.9,58.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgNBRQgJgCgIgDIgRgIQgIgFgHgGIAUgZQAMAJALAFIAMAEIAMABQALAAAGgEQAGgEAAgHIAAAAQAAgHgGgEQgGgFgTgFIgWgGQgKgEgHgFQgHgFgDgIQgEgIAAgMIAAAAQAAgLAEgJQAEgJAIgGQAHgHAKgDQALgDAMAAIAQABIAQAEIAOAGIANAJIgTAbQgLgIgKgEQgLgEgIAAQgKAAgGAEQgFAEAAAGIAAAAQAAAIAHAEQAGAEAVAFIAVAHQAKAFAGAEQAHAGADAHQADAIAAAKIAAABQAAAMgEAJQgEAJgIAHQgIAGgLADQgKADgNAAQgJAAgJgBg");
	this.shape_60.setTransform(22.8,58.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgWAWIALgCIAHgFQAFgFgBgKIgOAAIAAgkIAlAAIAAAfQAAAKgDAIQgDAIgFAGQgGAFgHACQgHADgLAAg");
	this.shape_61.setTransform(180.3,38.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("Ag8BQIAAifIB4AAIAAAfIhVAAIAAAhIBLAAIAAAeIhLAAIAAAiIBWAAIAAAfg");
	this.shape_62.setTransform(170.2,30.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgIBRQgIgCgIgCIgNgIQgHgEgGgGIgKgNIgGgNQgEgIgBgIQgCgIAAgJQAAgIACgIQABgIADgIIAHgNIAKgNIANgKQAGgEAIgDQAHgEAJgCQAHgBAKAAQALAAAJABIARAGQALAEAPAOIgWAZQgKgIgJgFQgLgFgMAAQgJABgIAEQgJADgGAHQgGAHgEAJQgDAJAAAKIAAAAQAAAKADAJQAEAJAGAIQAGAGAJAEQAIAEAJAAQAKAAAOgFQAIgEALgJIAWAWIgMAMQgIAFgIAEQgHAEgKACQgJACgLAAQgJAAgIgCg");
	this.shape_63.setTransform(154,30.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgRBQIAAifIAiAAIAACfg");
	this.shape_64.setTransform(141.6,30.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgPBRIhBihIAnAAIApBwIArhwIAmAAIhBChg");
	this.shape_65.setTransform(129.1,30.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AhJBQIAAifIA/AAIARABQAJACAIADQAHADAHAEIANAKIAKALQAEAHADAHQADAHACAIQABAIAAAIIAAAAIgBAQQgCAIgDAIQgDAHgEAGIgKAMIgNAKQgHAEgHADQgIADgJACIgRABgAglAwIAbAAQAKAAAJgDQAJgDAGgHQAGgGAEgJQADgJAAgLQAAgKgDgIQgEgJgGgHQgGgGgJgEQgJgDgKAAIgbAAg");
	this.shape_66.setTransform(112,30.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAwBRIgOgkIhEAAIgOAkIgkAAIBFihIAgAAIBEChgAAVAOIgVgzIgVAzIAqAAg");
	this.shape_67.setTransform(93.7,30.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("Ag8BQIAAifIB4AAIAAAfIhVAAIAAAhIBLAAIAAAeIhLAAIAAAiIBWAAIAAAfg");
	this.shape_68.setTransform(70.5,30.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("Ag8BQIAAifIB4AAIAAAfIhVAAIAAAhIBLAAIAAAeIhLAAIAAAiIBWAAIAAAfg");
	this.shape_69.setTransform(55.2,30.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAcBQIghgzIgcAAIAAAzIgjAAIAAifIBIAAQAKAAARAEQAMAEAIAIQAGAHAEAJQAEAKAAALIAAAAQAAAKgDAIQgDAIgEAFQgFAGgGAFQgGAEgIADIAnA5gAghgBIAjAAQAGAAAFgCQAGgBADgDQADgEACgEQACgEAAgFIAAAAQAAgGgCgEQgCgFgDgDQgEgCgFgCQgGgBgGAAIgiAAg");
	this.shape_70.setTransform(39.5,30.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("Ag8BQIAAifIB5AAIAAAgIhWAAIAAAiIBMAAIAAAfIhMAAIAAA+g");
	this.shape_71.setTransform(23.6,30.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},31).to({state:[]},32).wait(32));

	// Layer 1
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F4364C").s().p("AgiBrIAAgzIA7AAIAAAzgAgVAmIgIgxIADgDIAWgDQAIgCAFgDQAGgDADgEQADgEAAgFIAAgBQAAgHgHgFQgGgEgJAAQgLAAgLAFQgMAFgLAKIgegoQAHgHAIgFQAJgHAJgEQAKgEALgCQALgCAMAAQARAAAOAEQAOAEAJAIQALAJAFALQAGAMAAAPIAAABQAAANgFALQgEAKgIAIQgHAGgMAFQgKAFgNADIgEATg");
	this.shape_72.setTransform(143.8,146.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00B287").s().p("AhVBqIAAjTICqAAIAAAyIhwAAIAAAgIBkAAIAAAtIhkAAIAAAiIBxAAIAAAyg");
	this.shape_73.setTransform(126.2,146.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#00A1E1").s().p("AAxBqIhahzIAABzIg6AAIAAjTIA3AAIBWBvIAAhvIA6AAIAADTg");
	this.shape_74.setTransform(103.9,146.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF9E19").s().p("AgcBqIAAjTIA5AAIAADTg");
	this.shape_75.setTransform(87.3,146.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F4364C").s().p("AhQBqIAAjTIA7AAIAACfIBmAAIAAA0g");
	this.shape_76.setTransform(73.6,146.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#00B287").s().p("AAxBqIhahzIAABzIg6AAIAAjTIA3AAIBWBvIAAhvIA6AAIAADTg");
	this.shape_77.setTransform(51.9,146.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#00A1E1").s().p("AgXBsQgLgDgLgEQgKgEgJgGQgJgGgIgHQgHgHgGgJQgGgJgEgKQgFgKgCgKQgCgLAAgMIAAAAQAAgLACgKQACgLAFgKQAEgKAGgJQAGgJAIgHQAHgIAJgFQAKgHAKgDQAKgFAMgCQALgCALAAQAMAAAMACQALACAKAFQALADAJAHQAJAFAHAHQAIAIAGAJQAGAIAEAKQAEAKADALQACALAAALIAAAAQAAALgCALQgDALgEAKQgEAKgGAJQgGAIgIAIQgHAHgKAGQgJAGgKAEQgKAEgMADQgLACgMAAQgLAAgMgCgAgVg0QgKAEgHAJQgIAHgDALQgEAKAAALIAAAAQAAALAEAKQAEALAHAHQAHAJAKAFQAKAEALAAQAMAAAKgEQAKgFAHgIQAHgIAEgKQAEgLAAgLIAAAAQAAgLgEgKQgEgLgHgHQgIgJgJgEQgLgFgLABQgLgBgKAFg");
	this.shape_78.setTransform(27.6,146.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgiBlIgQgHQgHgEgFgGQgHgGgEgHQgEgHgDgJIgGgTIgBgUIAAh7IAYAAIAAB5QAAARAFAOQAEANAIAIQAJAKAMAFQAMAEAOAAQAOABAMgFQAMgEAIgKQAIgIAFgNQAEgNABgRIAAh7IAXAAIAAB4IgCAXQgBAJgDAKIgIAQIgKAMQgGAHgHAEQgHAEgIADQgXAHgNAAQgYgCgKgFg");
	this.shape_79.setTransform(158.5,110.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgWBrQgLgCgLgEQgJgFgJgGQgIgGgIgHQgGgIgGgIQgGgJgDgKQgEgKgCgKQgCgKAAgLIAAgBQAAgKACgKQACgLAEgKQAEgJAFgJQAGgJAHgIQAHgHAIgGQAKgGAJgEQAKgFALgCQAMgCAKAAQAMAAAMACQAKACAKAEQAKAFAIAGQAJAGAHAHQAHAIAFAIQAGAJAEAKQAEAKACAKQACALAAAKIAAAAQAAALgCALIgGAUQgEAJgGAJQgFAJgHAIQgIAHgIAGQgIAGgLAEQgKAFgKACQgLACgMAAQgMAAgKgCgAgRhVIgQAFIgOAIIgMALQgLAMgGAQQgGAVAAAMIAAAAQACAXAEALQAGAQAMAMIAMAKIAOAIIAPAGIARABQAJAAAIgBIARgFQAKgFAQgOQALgMAGgPQAEgLACgXIAAgBQAAgLgGgWQgGgQgLgMQgRgOgKgEIgQgGQgIgBgJAAQgJAAgIABg");
	this.shape_80.setTransform(134.3,110);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgLBqIAAhUIhYh/IAdAAIBHBpIBIhpIAbAAIhYB/IAABUg");
	this.shape_81.setTransform(110.7,110);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AhcBqIAAjTIBJAAQANAAALACQALACAKAEQAKAEAJAGQAJAFAIAHQAHAIAGAIQAGAIAEAKQAEAJACALQACAKAAALIAAAAQAAALgCALQgCAKgEAKQgEAJgGAJQgGAIgHAHQgIAHgJAGQgJAGgKAEQgKAEgLACQgLACgNAAgAhEBUIAxAAQAOAAAWgHQALgEAQgNQAMgLAGgQQAEgKACgWIAAgBQAAgLgGgVQgGgPgMgLQgQgOgLgEQgWgHgOAAIgxAAg");
	this.shape_82.setTransform(79.6,110);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("ABGBqIiHitIAACtIgXAAIAAjTIAWAAICECpIAAipIAXAAIAADTg");
	this.shape_83.setTransform(55.4,110);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgLBqIAAjTIAXAAIAADTg");
	this.shape_84.setTransform(39.2,110);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AhLBqIAAjTICXAAIAAAWIh/AAIAABMIByAAIAAAVIhyAAIAABcg");
	this.shape_85.setTransform(25.6,110);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgQBrQgLgCgLgFQgLgEgKgGQgKgHgJgIIAPgSIAQANQAJAGAIAEQAJAEAJABQAKACAKAAQAKAAAJgCQAJgDAGgFQAHgFADgGQADgHAAgIIAAAAQAAgIgCgGQgDgGgGgEQgGgFgLgEQgKgEgRgDQgSgFgMgFQgOgEgJgHQgIgHgEgKQgFgJAAgNIAAgBQAAgMAFgLQAGgLAJgHQAJgIANgEQANgFAPAAIAUACIATAFQAMAEAWAPIgOATQgOgMgQgGQgOgFgQAAQgKAAgIACQgJADgGAFQgGAEgDAGQgDAHAAAHIAAAAQAAAIACAGQADAGAGAFQAHAFALAEQALAEARADQARAEANAGQANAEAJAHQAIAHAEAKQAEAJAAAMIAAABQAAANgFAMQgFALgKAHQgKAIgNAFQgNAEgQAAQgLAAgMgCg");
	this.shape_86.setTransform(202.1,73.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AA6BqIg8hSIg9AAIAABSIgXAAIAAjTIBaAAQAMAAAWAGQAQAFAJAKQAIAIAFALQADALAAAMIAAABQAAANgDAKQgFALgIAHQgHAHgLAFQgKAFgMACIBBBXgAg/ACIBAAAQAMAAAKgCQAKgDAIgFQAGgGAEgIQAEgIAAgKIAAgBQAAgKgDgHQgEgIgGgGQgIgFgKgDQgKgDgNAAIhAAAg");
	this.shape_87.setTransform(182.5,73.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AhMBqIAAjTICXAAIAAAWIh/AAIAABIIByAAIAAAVIhyAAIAABKICBAAIAAAWg");
	this.shape_88.setTransform(161.3,73.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("ABNBqIAAiqIhNBwIAAAAIhNhwIAACqIgXAAIAAjTIAYAAIBMBzIBNhzIAYAAIAADTg");
	this.shape_89.setTransform(137.5,73.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgWBrQgMgCgJgEQgKgFgIgGQgJgGgHgHQgIgIgFgIQgGgJgDgKQgEgKgCgKQgCgKAAgLIAAgBQAAgKACgKQACgLAEgKQAEgJAFgJQAGgJAHgIQAHgHAJgGQAIgGAKgEQAKgFALgCQALgCALAAQAMAAALACQALACAKAEQAKAFAIAGQAJAGAHAHQAHAIAGAIQAFAJAEAKQAEAKABAKQADALAAAKIAAAAQAAALgDALIgFAUQgEAJgFAJQgGAJgHAIQgHAHgJAGQgJAGgKAEQgJAFgMACQgLACgLAAQgLAAgLgCgAgRhVIgQAFIgOAIIgMALQgLAMgGAQQgGAVAAAMIAAAAQACAXAEALQAGAQAMAMIALAKIAPAIIAQAGIAQABQAJAAAIgBIAQgFQALgFAPgOQAMgMAGgPQAEgLACgXIAAgBQAAgLgGgWQgGgQgMgMQgQgOgKgEIgQgGQgJgBgIAAQgIAAgJABg");
	this.shape_90.setTransform(111.6,73.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgLBqIAAi9IhHAAIAAgWIClAAIAAAWIhHAAIAAC9g");
	this.shape_91.setTransform(89,73.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgQBrQgLgCgLgFQgLgEgKgGQgKgHgJgIIAPgSIAQANQAJAGAIAEQAJAEAJABQAKACAKAAQAKAAAJgCQAJgDAGgFQAHgFADgGQADgHAAgIIAAAAQAAgIgCgGQgDgGgGgEQgGgFgLgEQgKgEgRgDQgSgFgMgFQgOgEgJgHQgIgHgEgKQgFgJAAgNIAAgBQAAgMAFgLQAGgLAJgHQAJgIANgEQANgFAPAAIAUACIATAFQAMAEAWAPIgOATQgOgMgQgGQgOgFgQAAQgKAAgIACQgJADgGAFQgGAEgDAGQgDAHAAAHIAAAAQAAAIACAGQADAGAGAFQAHAFALAEQALAEARADQARAEANAGQANAEAJAHQAIAHAEAKQAEAJAAAMIAAABQAAANgFAMQgFALgKAHQgKAIgNAFQgNAEgQAAQgLAAgMgCg");
	this.shape_92.setTransform(69.5,73.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgiBlIgQgHQgHgFgGgFQgGgGgEgHQgFgIgDgIIgEgTIgCgUIAAh7IAYAAIAAB5QAAARAFANQAEANAIAKQAIAJANAEQALAFAPABQAPAAALgFQAMgFAIgIQAIgJAFgNQAFgOAAgQIAAh7IAXAAIAAB5IgCAVQgBALgDAIIgIAQIgKANQgGAHgHAEQgHAEgIADQgXAHgNgBQgYgBgKgFg");
	this.shape_93.setTransform(48.6,74);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgKBrQgLgCgKgEIgSgKIgPgNQgHgIgGgIQgFgJgEgKQgEgKgCgKQgCgLAAgLIAAgBQAAgKACgLQACgKAEgKQAEgKAFgJQAGgJAHgHIAPgOIATgKQAKgEAKgCQAKgCAMAAQAOAAAMACQALACAKAFQAOAGAVASIgQASQgTgQgKgFQgJgEgJgCQgJgCgLAAIgQABIgPAFQgPAHgLAMQgLAMgGAPQgGAWAAAMIAAAAQACAYAEAKQAGAQALAMQALAMAPAHIAQAFQAHABAIAAQALAAAJgCQAJgCAJgEQALgFAUgRIAPAPQgWAVgOAGQgKAFgMADQgMACgOAAQgLAAgKgCg");
	this.shape_94.setTransform(26.6,73.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("ABGBqIiHitIAACtIgXAAIAAjTIAWAAICECpIAAipIAXAAIAADTg");
	this.shape_95.setTransform(72.9,37.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("ABRBqIgYg4IhyAAIgZA4IgZAAIBhjTIAVAAIBgDTgAAvAdIgvhqIgwBqIBfAAg");
	this.shape_96.setTransform(49.1,37.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgKBrQgLgCgKgEIgSgKIgPgNQgHgIgGgIQgFgJgEgKQgEgKgCgKQgCgLAAgLIAAgBQAAgKACgLQACgKAEgKQAEgKAFgJQAGgJAHgHIAPgOIATgKQAKgEAKgCQAKgCAMAAQAOAAAMACQALACAKAFQAOAGAVASIgQASQgTgQgKgFQgJgEgJgCQgJgCgLAAIgQABIgPAFQgPAHgLAMQgLAMgGAPQgGAWAAAMIAAAAQACAYAEAKQAGAQALAMQALAMAPAHIAQAFQAHABAIAAQALAAAJgCQAJgCAJgEQALgFAUgRIAPAPQgWAVgOAGQgKAFgMADQgMACgOAAQgLAAgKgCg");
	this.shape_97.setTransform(26.6,37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]}).to({state:[]},31).wait(64));

	// Layer 5
	this.instance = new lib.UK_theUKDomainLogo_RGB();
	this.instance.parent = this;
	this.instance.setTransform(216,185,0.116,0.116);

	this.instance_1 = new lib.UK_4xdomainsRGB();
	this.instance_1.parent = this;
	this.instance_1.setTransform(8,216,0.191,0.191);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#002B49").s().p("AxQRQQnKnJABqHQgBqGHKnKQHKnJKGgBQKHABHJHJQHKHKAAKGQAAKHnKHJQnJHKqHAAQqGAAnKnKg");
	this.shape_98.setTransform(104.8,17.8,1.17,1.17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98},{t:this.instance_1},{t:this.instance}]}).wait(95));

	// Layer 6
	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#002B49").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape_99.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_99).wait(95));

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
		{src:"images/Message3_atlas_.png", id:"Message3_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;