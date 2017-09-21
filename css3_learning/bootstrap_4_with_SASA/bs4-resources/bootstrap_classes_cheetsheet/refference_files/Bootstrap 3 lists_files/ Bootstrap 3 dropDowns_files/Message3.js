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
	this.shape.graphics.f("#FFFFFF").s().p("Ag/A0IBog0IhogzIAAgUIB/A/IAAARIh/A/g");
	this.shape.setTransform(144.6,144.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4364C").s().p("AhIBfIAAi9ICPAAIAAAlIhlAAIAAAmIBZAAIAAAlIhZAAIAAAoIBnAAIAAAlg");
	this.shape_1.setTransform(118.9,144.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4364C").s().p("AgKBhQgJgCgJgEQgJgEgIgFQgIgFgGgHQgGgHgGgIQgFgHgEgJQgEgJgBgKQgCgJAAgLIAAAAQAAgJACgKQABgKAEgJIAJgQQAFgIAGgHIAPgMIARgJQAJgEAKgCQAKgCAKAAQANAAAMACQAKACAKAEQAMAFATARIgbAeQgMgKgLgFQgMgGgOAAQgLAAgKAFQgKAEgHAIQgIAIgEALQgEALAAAMIAAAAQAAAMAEALQAEALAIAIQAHAJAKAEQAKAFALAAQALAAARgGQAKgFANgMIAaAbQgIAJgHAGQgJAGgJAEQgJAFgLACQgLADgOAAQgKAAgKgCg");
	this.shape_2.setTransform(99.6,144.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4364C").s().p("AgUBfIAAi9IApAAIAAC9g");
	this.shape_3.setTransform(84.9,144.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4364C").s().p("AgRBgIhOi/IAvAAIAxCFIAxiFIAuAAIhNC/g");
	this.shape_4.setTransform(70,144.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4364C").s().p("AhXBfIAAi9IBLAAQAKgBAKACQAKACAJAEQAKAEAIAFQAIAEAHAHQAGAGAFAIQAGAIADAIQAEAJACAJQACAKAAAJIAAAAQAAAKgCAKQgCAJgEAJQgDAIgGAIQgFAIgGAGQgHAGgIAFQgIAGgKADQgJAEgKABQgKACgKAAgAgtA5IAhAAQAMAAAKgDQALgFAHgHQAHgIAFgLQAEgKAAgMIAAgBQAAgMgEgKQgFgKgHgJQgHgHgLgEQgKgFgMAAIghAAg");
	this.shape_5.setTransform(49.7,144.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F4364C").s().p("AA5BgIgRgrIhQAAIgRArIgrAAIBSi/IAlAAIBSC/gAAZAQIgZg9IgZA9IAyAAg");
	this.shape_6.setTransform(27.8,144);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9E19").s().p("AhIBfIAAi9ICPAAIAAAlIhlAAIAAAmIBZAAIAAAlIhZAAIAAAoIBnAAIAAAlg");
	this.shape_7.setTransform(118.8,105.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9E19").s().p("AAxBfIhbh4IAAB4IgqAAIAAi9IAnAAIBYB0IAAh0IAqAAIAAC9g");
	this.shape_8.setTransform(98.4,105.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9E19").s().p("AgUBfIAAi9IApAAIAAC9g");
	this.shape_9.setTransform(83.2,105.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9E19").s().p("AhDBfIAAi9IApAAIAACYIBfAAIAAAlg");
	this.shape_10.setTransform(70.9,105.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9E19").s().p("AAxBfIhbh4IAAB4IgqAAIAAi9IAnAAIBYB0IAAh0IAqAAIAAC9g");
	this.shape_11.setTransform(51,105.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9E19").s().p("AgVBhQgKgCgJgEQgJgEgIgFQgIgGgHgGQgHgHgFgIQgGgIgDgIQgEgJgBgKQgCgKAAgKIAAAAQAAgJACgKQACgKADgJQADgIAGgIQAFgIAIgHQAGgHAIgFIARgJQAKgEAKgCQALgCAJAAQALAAAKACQAKACAKAEQAJADAIAGIAPAMIAMAOIAJARQAEAJACAJQABAKAAAKIAAAAQAAAKgBAKQgCAJgFAJQgDAJgGAIQgFAIgGAHQgHAGgJAGIgRAJQgJAEgKABQgKADgLAAQgLAAgKgCgAgXg2QgKAEgIAIQgHAIgEALQgEALgBAMIAAAAQABAMAEALQAEALAHAIQAJAJAKAEQALAFALAAQANAAAKgFQALgEAHgJQAIgIAFgLQADgKAAgNIAAAAQABgLgFgLQgEgLgIgIQgHgJgLgEQgLgFgMAAQgMAAgLAFg");
	this.shape_12.setTransform(28.7,105.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A1E1").s().p("AhXBfIAAi9IBLAAQAKAAAKABQAKADAJADQAKADAIAGQAIAFAHAGQAGAGAFAIQAGAHADAJQAEAIACAKQACAKAAAJIAAAAQAAAKgCAKQgCAJgEAJQgDAIgGAIQgFAHgGAHQgHAHgIAEQgIAFgKAEQgJAEgKACQgKABgKAAgAgtA6IAhAAQAMAAAKgFQALgEAHgHQAHgIAFgLQAEgKAAgNIAAAAQAAgMgEgKQgFgKgHgIQgHgIgLgFQgKgEgMAAIghAAg");
	this.shape_13.setTransform(139.2,66.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A1E1").s().p("AhIBfIAAi9ICPAAIAAAlIhlAAIAAAmIBZAAIAAAlIhZAAIAAAoIBnAAIAAAlg");
	this.shape_14.setTransform(119.5,66.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A1E1").s().p("AgUBfIAAiXIg6AAIAAgmICdAAIAAAmIg6AAIAACXg");
	this.shape_15.setTransform(101.2,66.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A1E1").s().p("AgQBgQgKgBgLgFQgKgEgJgFQgLgGgHgHIAYgeQAOAMANAFIAOAEQAIACAHAAQANAAAHgEQAIgGgBgIIAAgBQABgHgIgFQgHgGgXgGIgagHQgMgGgIgFQgIgGgFgJQgEgKAAgOIAAAAQAAgNAFgLQAEgKAKgJQAIgHANgEQANgEAOAAIATACQAKABAIADIARAHIAPALIgVAgQgNgJgMgFQgNgFgLAAQgMAAgGAFQgHAFAAAGIAAABQAAAJAJAFQAIAEAYAHQAPAEALAFQALAFAIAFQAHAHAEAJQAFAJAAANIAAAAQgBAOgFAMQgFAKgJAIQgKAIgNAEQgMADgPAAIgWgCg");
	this.shape_16.setTransform(83.5,66.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A1E1").s().p("AgiBbQgIgCgGgEQgHgEgFgGQgGgFgEgGIgHgPIgEgRIgBgUIAAhsIAqAAIAABrQAAAMACAJQADAIAGAGQAFAGAIADQAHAEAJAAQAKgBAHgDQAIgCAFgHQAFgFADgIQADgKAAgLIAAhsIAqAAIAABrIgBAUIgFARIgHAPIgKAMQgFAGgHAEQgGAEgIACQgWAGgMAAQgYgCgKgEg");
	this.shape_17.setTransform(64.6,66.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A1E1").s().p("AAhBfIgng9IgiAAIAAA9IgpAAIAAi9IBVAAQANAAAUAEQAOAGAJAJQAIAIAFALQADALAAAOIAAAAQAAALgCAKQgDAJgGAHQgFAHgHAFQgIAGgJADIAvBEgAgogCIAqAAQAIAAAFgBQAGgCAFgEQAEgDACgGQACgEAAgHIAAAAQAAgHgCgFQgCgFgEgDQgFgEgGgCQgGgBgIgBIgpAAg");
	this.shape_18.setTransform(45.2,66.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A1E1").s().p("AgUBfIAAiXIg6AAIAAgmICdAAIAAAmIg6AAIAACXg");
	this.shape_19.setTransform(25.9,66.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00B287").s().p("AhDBgIAAi+IApAAIAACYIBeAAIAAAmg");
	this.shape_20.setTransform(138.5,27.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00B287").s().p("AgiBbQgIgCgGgEQgHgEgFgGQgGgFgEgGIgHgPIgEgRIgBgUIAAhsIAqAAIAABrQAAAMACAIQADAKAGAFQAFAGAIADQAHADAJAAQAKAAAHgDQAIgCAFgHQAFgFADgIQADgKAAgLIAAhsIAqAAIAABrIgBAUIgFARIgHAQIgKALQgFAGgHAEQgGAEgIACQgWAGgMAAQgYgCgKgEg");
	this.shape_21.setTransform(119,27.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00B287").s().p("AhIBgIAAi+ICRAAIAAAmIhnAAIAAAoIBaAAIAAAmIhaAAIAABKg");
	this.shape_22.setTransform(100.4,27.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00B287").s().p("AhKBgIAAi+IBMAAQARAAAOAEQANAFAKAJQAKAJAEAMQAFAMABAPIAAAAQAAAIgCAIQgBAHgDAFQgHAMgKAJQgLAIgOAFQgOAEgPAAIggAAIAAA6gAghABIAhAAQAIAAAGgCQAGgBAEgFQAEgDADgGQACgFAAgGIAAgBQAAgGgCgGQgDgGgEgDQgEgEgHgCQgGgBgHAAIghAAg");
	this.shape_23.setTransform(82.5,27.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00B287").s().p("AhEBgIAAi+IArAAIAACYIBdAAIAAAmg");
	this.shape_24.setTransform(65,27.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00B287").s().p("AhIBgIAAi+ICPAAIAAAlIhlAAIAAAmIBZAAIAAAlIhZAAIAAAoIBnAAIAAAmg");
	this.shape_25.setTransform(47.2,27.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00B287").s().p("AAnBgIAAhNIhNAAIAABNIgqAAIAAi+IAqAAIAABLIBNAAIAAhLIAqAAIAAC+g");
	this.shape_26.setTransform(27.4,27.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#002B49").s().p("AxQRQQnKnJABqHQgBqGHKnKQHKnJKGgBQKHABHJHJQHKHKAAKGQAAKHnKHJQnJHKqHAAQqGAAnKnKg");
	this.shape_27.setTransform(104.8,17.8,1.17,1.17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},62).wait(32));

	// Layer 2
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF9E19").s().p("AhQBqIAAjTICfAAIAAApIhwAAIAAArIBjAAIAAApIhjAAIAAAtIByAAIAAApg");
	this.shape_28.setTransform(215.5,112.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF9E19").s().p("AgLBsQgKgCgKgFQgKgEgJgGQgIgFgIgIQgHgHgGgJQgFgJgEgKQgEgKgDgKQgCgLAAgLIAAgBQAAgKACgLQACgLAEgKQAEgJAGgJQAGgJAHgIQAIgHAIgGQAJgGAKgEQALgEAKgDQALgCAMAAQAPAAAMADQAMACAKAEQAOAGAUASIgdAiQgNgMgNgFQgNgHgPAAQgNAAgLAFQgLAGgIAJQgJAJgEAMQgFAMAAANIAAAAQAAAOAFAMQAEAMAIAJQAIAJALAFQAMAGANAAQAMAAASgHQALgFAOgNIAeAeQgIAJgJAHQgJAHgKAFQgLAFgMACQgNADgPAAQgLAAgLgCg");
	this.shape_29.setTransform(194,112.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF9E19").s().p("AA2BqIhliGIAACGIguAAIAAjTIAqAAIBjCCIAAiCIAvAAIAADTg");
	this.shape_30.setTransform(170.6,112.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF9E19").s().p("AhQBqIAAjTICfAAIAAApIhwAAIAAArIBjAAIAAApIhjAAIAAAtIByAAIAAApg");
	this.shape_31.setTransform(149.1,112.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF9E19").s().p("AhhBqIAAjTIBTAAQAMAAALACQALACAKAEQALAEAJAGQAJAFAHAHQAIAHAGAJQAFAIAFAKQADAJACALQADAKAAALIAAAAQAAALgDALQgCAKgDAKQgFAJgFAJQgGAIgIAIQgHAHgJAFQgJAGgLAEQgKAEgLACQgLACgMAAgAgzBAIAlAAQAOAAALgFQALgEAJgIQAIgJAGgMQAEgLAAgOIAAgBQAAgNgEgMQgGgMgIgIQgJgJgLgEQgLgFgOAAIglAAg");
	this.shape_32.setTransform(127.1,112.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF9E19").s().p("AgXBqIAAjTIAvAAIAADTg");
	this.shape_33.setTransform(109.8,112.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF9E19").s().p("AhQBqIAAjTIChAAIAAAqIhyAAIAAAtIBkAAIAAAqIhkAAIAABSg");
	this.shape_34.setTransform(95.4,112.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF9E19").s().p("AA2BqIhmiGIAACGIgtAAIAAjTIArAAIBiCCIAAiCIAvAAIAADTg");
	this.shape_35.setTransform(72.8,112.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF9E19").s().p("AgXBsQgLgCgKgFQgLgEgIgGQgJgGgIgHQgHgHgHgJQgGgJgEgKQgDgKgDgKQgCgLAAgLIAAgBQAAgKACgLQADgLADgKQAEgJAGgJQAHgJAHgIQAIgHAJgGQAJgGAKgEQAKgEALgDQAMgCALAAQAMAAAMACQALACALAFQAKAEAJAGQAJAGAHAHQAIAIAFAIQAHAJADAKQAEAKADAKQACALAAALIAAAAQAAALgCALQgDALgEAKQgDAJgHAJQgFAJgIAIQgHAHgJAGQgKAGgKAEQgLAFgLACQgLACgMAAQgMAAgLgCgAgZg9QgMAGgIAJQgJAJgFAMQgEAMAAANIAAAAQAAAOAEAMQAFAMAJAJQAJAJAMAFQAMAGAMAAQAOAAAMgFQALgFAKgKQAIgJAEgMQAFgMAAgNIAAgBQAAgNgFgMQgFgMgIgJQgJgJgLgGQgMgFgOAAQgNAAgMAFg");
	this.shape_36.setTransform(47.9,112.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF9E19").s().p("AgKBsQgLgCgLgFQgJgEgJgGQgJgFgHgIQgHgHgGgJQgGgJgDgKQgEgKgDgKQgCgLAAgLIAAgBQAAgKACgLQACgLAEgKQAEgJAGgJQAFgJAIgIQAHgHAJgGQAJgGAKgEQALgEALgDQAKgCAMAAQAPAAAMADQAMACALAEQANAGAVASIgeAiQgNgMgNgFQgNgHgQAAQgMAAgLAFQgLAGgJAJQgIAJgEAMQgFAMAAANIAAAAQAAAOAFAMQAEAMAIAJQAJAJAKAFQAMAGAMAAQAMAAAUgHQAKgFAOgNIAeAeQgIAJgJAHQgJAHgKAFQgLAFgMACQgNADgPAAQgLAAgKgCg");
	this.shape_37.setTransform(24.2,112.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AA9BqIAAhfIh5AAIAABfIgYAAIAAjTIAYAAIAABeIB5AAIAAheIAYAAIAADTg");
	this.shape_38.setTransform(216.7,69.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgLBqIAAi9IhHAAIAAgWIClAAIAAAWIhHAAIAAC9g");
	this.shape_39.setTransform(195.5,69.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgLBqIAAjTIAXAAIAADTg");
	this.shape_40.setTransform(181.3,69.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AA6BrIg6irIg6CrIgUAAIhLjVIAaAAIA8CwIA7iwIASAAIA6CwIA9iwIAZAAIhLDVg");
	this.shape_41.setTransform(160.1,69.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AhNBqIAAjTICZAAIAAAWIiBAAIAABIIBzAAIAAAVIhzAAIAABKICDAAIAAAWg");
	this.shape_42.setTransform(124.7,69.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("ABHBqIiIitIAACtIgYAAIAAjTIAXAAICFCpIAAipIAXAAIAADTg");
	this.shape_43.setTransform(102,69.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgLBqIAAjTIAXAAIAADTg");
	this.shape_44.setTransform(85.6,69.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhHBqIAAjTIAYAAIAAC9IB3AAIAAAWg");
	this.shape_45.setTransform(72.7,69.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("ABHBqIiIitIAACtIgYAAIAAjTIAXAAICFCpIAAipIAXAAIAADTg");
	this.shape_46.setTransform(50.5,69.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgWBsQgMgDgJgEQgKgEgJgGQgJgGgGgIQgIgHgFgJQgGgJgEgKQgDgJgCgLQgCgKgBgLIAAgBQABgKACgLQACgKADgKQAEgKAGgIQAFgJAIgIIAQgOQAIgGAKgEQAKgEALgDQALgCALAAQAMAAALACQAMADAJAEQAKAEAJAGQAJAGAGAIQAIAHAFAJQAGAJAEAKQADAJACALQACALABAKIAAAAQgBALgCALQgCAKgDAKQgEAKgGAIQgFAJgIAIQgHAIgJAGQgIAGgKAEQgKAEgLADQgMACgLAAQgLAAgLgCgAgRhVIgQAFIgOAIIgMALQgLAMgGAPQgHAWAAAMIAAAAQADAYAEAKQAGAQALAMIAMALIAPAIIAQAFQAIACAIAAQAJAAAJgCIAPgFQALgFAQgOQALgMAGgPQAEgLADgXIAAgBQgBgLgGgWQgGgQgLgMQgRgOgKgFIgQgFQgIgCgJAAQgIAAgJACg");
	this.shape_47.setTransform(25.7,69.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgLBqIAAi9IhIAAIAAgWICnAAIAAAWIhIAAIAAC9g");
	this.shape_48.setTransform(136.3,26.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgLBqIAAjTIAXAAIAADTg");
	this.shape_49.setTransform(122.1,26.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AhcBqIAAjTIBJAAQANAAALACQALACAKAEQALAEAJAGQAJAFAHAHQAIAHAFAJQAGAIAEAKQAEAJACALQACAKAAALIAAAAQAAALgCALQgCAKgEAKQgEAJgGAJQgFAIgIAIQgHAHgJAFQgJAGgLAEQgKAEgLACQgLACgNAAgAhEBUIAxAAQAOAAAWgGQALgFARgNQALgLAGgQQAEgJADgXIAAgBQAAgLgHgVQgGgPgLgMQgRgNgLgFQgWgGgOAAIgxAAg");
	this.shape_50.setTransform(97.3,26.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AhHBqIAAjTIAYAAIAAC9IB3AAIAAAWg");
	this.shape_51.setTransform(76.4,26.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgLBqIAAjTIAXAAIAADTg");
	this.shape_52.setTransform(61.9,26.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgjBmIgPgHQgHgFgGgGQgFgGgFgHQgEgHgEgIQgDgJgCgKIgBgWIAAh6IAXAAIAAB5QAAARAFANQAFAOAIAJQAJAJAMAFQAMAEAOABQAOgBAMgEQAMgEAJgJQAIgJAEgNQAEgNABgSIAAh6IAXAAIAAB5IgBAVQgBALgDAIQgEAKgEAGQgFAIgFAGQgHAGgHAFQgHAEgHADQgYAGgNAAQgYgCgLgEg");
	this.shape_53.setTransform(46,26.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AhVBqIAAjTIBaAAQASAAAOAFQAOAFAJAJQAHAHADAIQAEAJAAAKIAAAAQAAAKgDAIQgDAIgFAGQgEAGgGAEIgNAHQAKADAIAEQAJAEAFAGQAHAGADAIQAEAJAAALIAAAAQAAAOgGALQgFAKgKAIQgKAHgPAEQgOAEgRAAgAg9BVIBGAAQAMAAAKgDQAKgCAGgFQAHgFAEgHQAEgHAAgJIAAgBQAAgJgEgGQgEgHgHgFQgHgEgLgDQgKgCgOAAIhCAAgAg9gLIA+AAQALAAAJgCQAJgCAGgFQAHgFADgHQAEgHAAgKIAAAAQAAgIgDgGQgDgHgHgEQgGgFgIgCQgJgDgLAAIhAAAg");
	this.shape_54.setTransform(24.3,26.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#002B49").s().p("AxQRQQnKnJABqHQgBqGHKnKQHKnJKGgBQKHABHJHJQHKHKAAKGQAAKHnKHJQnJHKqHAAQqGAAnKnKg");
	this.shape_55.setTransform(104.8,17.8,1.17,1.17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},31).to({state:[]},31).wait(32));

	// Layer 1
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00A1E1").s().p("AgjB/IAAg5IA6AAIAAA5gAgXAqIgIg6IACgBQAQgBANgCQALgDAHgEQAIgFADgFQAEgFAAgIIAAgBQAAgMgJgHQgJgGgPAAQgOgBgOAHQgNAGgMAMIgigkQAJgJAJgGQAJgIALgFQALgGAMgCQANgCAOgBQATABAQAEQAQAFAMAJQALALAGANQAHAOAAASIAAAAQAAARgGANQgFAMgKAJQgJAHgOAFQgLAGgQADIgEAWg");
	this.shape_56.setTransform(214,72.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#A7A8AA").s().p("AgUB/QgPgDgNgFQgOgEgNgIQgNgHgLgKIAhgoQASAPARAIIATAGQALACAJAAQARAAAKgHQAKgGAAgLIAAgBQAAgLgKgGQgKgHgegIQgWgFgNgGQgQgGgKgHQgLgJgGgMQgGgNAAgSIAAAAQAAgRAHgPQAGgNAMgLQAMgKAQgFQAQgGAUAAQAMABANACQANACALADQAMAFALAFIAUAOIgdArQgRgNgQgGQgRgGgOAAQgQAAgIAGQgJAGAAAJIAAABQAAANALAFQAKAHAhAIQAUAGAOAFQAPAHAKAHQAKAJAFAMQAGANAAAQIAAABQAAASgHAPQgHAOgMALQgNAJgQAGQgRAEgVAAQgNABgOgDg");
	this.shape_57.setTransform(192.8,72.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F4364C").s().p("AgUB/QgPgDgNgFQgOgEgNgIQgNgHgLgKIAhgoQASAPARAIIATAGQALACAJAAQARAAAKgHQAKgGAAgLIAAgBQAAgLgKgGQgKgHgegIQgWgFgNgGQgQgGgKgHQgLgJgGgMQgGgNAAgSIAAAAQAAgRAHgPQAGgNAMgLQAMgKAQgFQAQgGAUAAQAMABANACQANACALADQAMAFALAFIAUAOIgdArQgRgNgQgGQgRgGgOAAQgQAAgIAGQgJAGAAAJIAAABQAAANALAFQAKAHAhAIQAUAGAOAFQAPAHAKAHQAKAJAFAMQAGANAAAQIAAABQAAASgHAPQgHAOgMALQgNAJgQAGQgRAEgVAAQgNABgOgDg");
	this.shape_58.setTransform(169.9,72.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF9E19").s().p("AhfB+IAAj7IC9AAIAAAxIiGAAIAAAzIB2AAIAAAwIh2AAIAAA1ICIAAIAAAyg");
	this.shape_59.setTransform(147.1,72.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00B287").s().p("ABBB+Ih5ifIAACfIg3AAIAAj7IAzAAIB2CaIAAiaIA2AAIAAD7g");
	this.shape_60.setTransform(120.3,72.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00A1E1").s().p("AgbB+IAAj7IA3AAIAAD7g");
	this.shape_61.setTransform(100.1,72.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#A7A8AA").s().p("AgUB/QgPgDgNgFQgOgEgNgIQgNgHgLgKIAhgoQASAPARAIIATAGQALACAJAAQARAAAKgHQAKgGAAgLIAAgBQAAgLgKgGQgKgHgegIQgWgFgNgGQgQgGgKgHQgLgJgGgMQgGgNAAgSIAAAAQAAgRAHgPQAGgNAMgLQAMgKAQgFQAQgGAUAAQAMABANACQANACALADQAMAFALAFIAUAOIgdArQgRgNgQgGQgRgGgOAAQgQAAgIAGQgJAGAAAJIAAABQAAANALAFQAKAHAhAIQAUAGAOAFQAPAHAKAHQAKAJAFAMQAGANAAAQIAAABQAAASgHAPQgHAOgMALQgNAJgQAGQgRAEgVAAQgNABgOgDg");
	this.shape_62.setTransform(82.4,72.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F4364C").s().p("AgtB5QgLgEgIgFQgJgFgHgIQgHgGgFgJQgGgJgEgKQgDgLgCgMIgCgaIAAiPIA3AAIAACOQAAAPAEAMQAEALAHAIQAHAIAKAEQAKAEAMAAQANAAAKgEQAKgEAHgHQAHgIADgLQAEgMAAgOIAAiQIA4AAIAACNIgCAbQgCAMgEALQgEALgGAIQgFAKgHAGQgHAIgJAFQgJAFgKAEQgdAHgQAAQgggDgNgEg");
	this.shape_63.setTransform(57.6,72.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF9E19").s().p("AhqB+IAAj7IB0AAQAVAAARAFQARAHALAKQAJAJAEAKQAEAMAAAMIAAABQAAAKgCAJQgDAIgFAHQgIALgPAJQALAEAJAFQAJAFAGAIQAGAHADAKQADAJAAANIAAABQAAARgHANQgGANgNAJQgMAJgRADQgSAFgVAAgAg0BNIBBAAQATABAKgHQAKgHAAgOIAAgBQAAgNgKgHQgFgDgIgCQgHgCgLAAIg/AAgAg0gXIAzAAQASAAAKgHQALgGAAgOIAAgBQAAgMgJgHQgKgHgRAAIg2AAg");
	this.shape_64.setTransform(31.8,72.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("ABEBYIgVguIheAAIgUAuIgVAAIBQivIARAAIBQCvgAAoAYIgohYIgnBYIBPAAg");
	this.shape_65.setTransform(160.4,30);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgJBYQgJgBgJgEQgIgDgHgFQgHgFgFgGQgGgGgFgHQgEgHgDgIQgDgIgCgJQgBgJAAgKIAAAAIABgRQACgIADgIIAIgQIAKgNIANgLQAGgFAIgEIARgFQAKgCAIAAQALAAAJABQAJACAIADQALAEARANIgNAPQgLgKgLgEQgGgDgIgCQgIgBgJAAQgHAAgGABIgMAFQgMAFgJAKQgJAKgFANQgFANAAAOQACAUADAJQAFANAJAKIAKAJIAMAGIANAEQAGACAIAAQAKAAASgGQANgEAJgIIAAgrIg1AAIAAgRIBIAAIAABFQgSAOgMAEQgJAEgKACQgKACgLAAQgJAAgJgCg");
	this.shape_66.setTransform(133.2,30.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AA6BXIhviOIAACOIgUAAIAAitIATAAIBtCLIAAiLIATAAIAACtg");
	this.shape_67.setTransform(113.7,30.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgJBXIAAitIATAAIAACtg");
	this.shape_68.setTransform(100.3,30.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AhMBXIAAitIA9AAQAKAAAJABIASAFIAPAIQAIAFAGAGQAGAGAFAGQAFAHADAIQADAIACAJQACAIAAAJQAAAJgCAJQgCAIgDAIQgDAIgFAHQgFAHgGAGQgGAGgIAFIgPAIIgSAFQgJABgKAAgAg4BFIApAAQALAAASgFQAJgEAOgLQAJgJAFgMQAEgJABgTIAAAAQAAgJgFgRQgFgNgJgJQgOgLgJgEQgSgFgLAAIgpAAg");
	this.shape_69.setTransform(87.4,30.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("Ag6BXIAAitIAUAAIAACbIBhAAIAAASg");
	this.shape_70.setTransform(70.3,30.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgJBXIAAitIATAAIAACtg");
	this.shape_71.setTransform(58.4,30.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgdBUIgMgHQgGgDgEgFQgGgFgDgGIgGgNQgDgHgCgIIgBgRIAAhlIAUAAIAABkQAAAOAEALQAEAKAGAIQAIAIAJADQAKAEALAAQANAAAJgDQAKgEAHgHQAHgHAEgLQADgLAAgOIAAhlIATAAIAABjIgBASIgDAQQgDAHgEAGQgEAGgFAFQgEAFgGADQgGAEgGADQgTAFgLAAQgUgCgJgDg");
	this.shape_72.setTransform(45.4,30.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AhFBXIAAitIBJAAQAPAAAMAEQALAEAHAHQAGAGADAHQADAHAAAIIAAABQAAAIgDAHQgCAGgEAFQgEAFgFADIgKAGIAPAFQAGAEAFAEQAGAGACAGQADAHAAAJIAAABQABALgFAJQgEAJgJAGQgIAGgMADQgLADgPAAgAgyBGIA5AAQALAAAHgDQAJgCAFgEQAGgEADgGQACgFAAgIIAAAAQAAgHgCgGQgEgFgFgEQgGgEgJgCQgJgCgLAAIg2AAgAgygIIAzAAQAIAAAIgCQAIgDAFgDQAFgEADgGQADgGAAgIIAAAAQAAgHgDgFQgCgFgFgEQgFgDgHgDQgHgBgKAAIg0AAg");
	this.shape_73.setTransform(27.6,30.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#002B49").s().p("AxQRQQnKnJABqHQgBqGHKnKQHKnJKGgBQKHABHJHJQHKHKAAKGQAAKHnKHJQnJHKqHAAQqGAAnKnKg");
	this.shape_74.setTransform(104.8,17.8,1.17,1.17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]}).to({state:[]},31).wait(63));

	// Layer 4
	this.instance = new lib.UK_theUKDomainLogo_RGB();
	this.instance.parent = this;
	this.instance.setTransform(216,185,0.116,0.116);

	this.instance_1 = new lib.UK_4xdomainsRGB();
	this.instance_1.parent = this;
	this.instance_1.setTransform(8,216,0.191,0.191);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(94));

	// Layer 5
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#002B49").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape_75.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_75).wait(94));

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