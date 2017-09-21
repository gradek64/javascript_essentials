(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Message4_atlas_", frames: [[0,508,1032,124],[0,0,659,506]]}
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
	this.spriteSheet = ss["Message4_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.UK_theUKDomainLogo_RGB = function() {
	this.spriteSheet = ss["Message4_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.Message4 = function(mode,startPosition,loop) {
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
	this.shape_28.graphics.f("#FFFFFF").s().p("AhoCMIAAkXIBoAAQAYAAATAGQATAGAOAMQAOALAHARQAIAQAAAVIAAABQAAALgCAKQgCAKgFAJQgJAPgPAMQgOAMgVAFQgTAGgWAAIhEAAIAABjgAhIANIBFAAQAQAAAOgFQAOgEALgHQAKgJAGgLQAFgLAAgOIAAgBQAAgPgFgLQgGgLgKgIQgJgIgOgEQgPgEgQAAIhGAAg");
	this.shape_28.setTransform(111.5,129.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AheCMIAAkXIAgAAIAAD6ICdAAIAAAdg");
	this.shape_29.setTransform(85.8,129.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhlCMIAAkXIDJAAIAAAdIipAAIAABfICXAAIAAAcIiXAAIAABjICrAAIAAAcg");
	this.shape_30.setTransform(59.9,129.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("ABRCMIAAh+IihAAIAAB+IgfAAIAAkXIAfAAIAAB8IChAAIAAh8IAgAAIAAEXg");
	this.shape_31.setTransform(30.7,129.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F4364C").s().p("ABBCMIh4iYIAACYIhMAAIAAkXIBIAAIByCTIAAiTIBNAAIAAEXg");
	this.shape_32.setTransform(92.1,81.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00A1E1").s().p("ABJCNIgUgzIhrAAIgUAzIhSAAIB4kZIBJAAIB4EZgAAfAeIgfhOIgfBOIA+AAg");
	this.shape_33.setTransform(60.5,81.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF9E19").s().p("AgSCPQgOgDgNgGQgNgEgMgIQgLgIgKgJQgKgKgHgMQgIgLgGgNQgFgNgDgPQgDgPAAgQIAAAAQAAgOADgPQADgOAFgNQAFgOAIgLQAIgMAKgJQAJgLAMgHQAMgIANgGQAOgFAOgDQAPgCAPgBQAVABASADQASAFAPAIQAOAHAMALQALAKAKANIg6AtQgNgPgOgIQgQgJgTAAQgNAAgNAFQgMAGgJAKQgJALgEANQgGAOAAAPIAAAAQAAAPAGAOQAEAOAJAKQAJAKAMAGQANAGANgBQALAAAJgCQAJgCAIgFQANgHAOgRIA6ApQgLAPgLAKQgMANgPAHQgPAKgSAEQgTAFgXgBQgOAAgOgCg");
	this.shape_34.setTransform(30.4,81.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhlCMIAAkXIDJAAIAAAdIipAAIAABfICXAAIAAAcIiXAAIAABjICrAAIAAAcg");
	this.shape_35.setTransform(73.9,33.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("ABNCOIhNjjIhMDjIgbAAIhkkaIAjAAIBQDoIBNjpIAZAAIBMDpIBRjoIAhAAIhkEag");
	this.shape_36.setTransform(37.6,33.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#002B49").s().p("AxQRQQnKnJABqHQgBqGHKnKQHKnJKGgBQKHABHJHJQHKHKAAKGQAAKHnKHJQnJHKqHAAQqGAAnKnKg");
	this.shape_37.setTransform(104.8,17.8,1.17,1.17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},31).to({state:[]},31).wait(32));

	// Layer 1
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgPBgIAAgdIAYAAIAAAdgAgJArIgFgsIACgBQAMAAAKgDQAKgDAHgEQAGgGAEgHQADgGAAgIIAAgBQAAgHgCgHQgDgGgFgFQgGgFgHgDQgHgCgJAAQgGAAgHABQgHACgGAEQgLAFgLANIgOgNIANgNQAGgFAIgEQAIgFAJgCQAJgCAKAAQANgBALAFQALADAIAIQAIAHAFAKQAEAJAAAMIAAABQAAAMgFAJQgEAKgIAHQgHAGgKADQgKAEgMACIgDAeg");
	this.shape_38.setTransform(129,99.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhEBeIAAi7ICIAAIAAATIhyAAIAABBIBlAAIAAASIhlAAIAABCIBzAAIAAATg");
	this.shape_39.setTransform(113.6,99.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AA/BeIh5iZIAACZIgVAAIAAi7IAUAAIB2CWIAAiWIAVAAIAAC7g");
	this.shape_40.setTransform(93.5,99.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgKBeIAAi7IAVAAIAAC7g");
	this.shape_41.setTransform(79.1,99.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Ag/BeIAAi7IAWAAIAACoIBpAAIAAATg");
	this.shape_42.setTransform(67.6,99.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AA/BeIh5iZIAACZIgVAAIAAi7IAUAAIB2CWIAAiWIAVAAIAAC7g");
	this.shape_43.setTransform(48,99.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgUBfQgKgCgJgDQgIgEgIgFQgHgGgHgHIgLgOQgFgIgDgJIgGgSIgBgTIAAAAQAAgJABgJIAGgSIAIgRIALgPIAPgMQAHgFAJgEQAJgEAKgCQAKgCAJAAQAKAAAKACQALACAIAEQAJAEAIAFQAHAFAHAHQAGAHAFAIIAIAQQADAJACAJQACAJAAAKIAAAAQAAAJgCAKQgCAJgDAJQgEAIgEAJQgGAHgFAHQgHAHgHAFQgJAGgIAEQgJADgKACQgKACgKABQgKgBgKgCgAgPhMIgOAFIgNAHIgKAKQgKAKgGAOQgFATAAALIAAAAQACAVADAJQAGAOAKAKIALAKIANAIIANAEQAIACAHAAQAIAAAIgCIAOgEQAIgFAPgMQAKgLAFgOQAEgJACgVIAAAAQAAgKgGgTQgFgOgKgLQgOgNgKgEIgOgFQgIgBgHAAQgIAAgHABg");
	this.shape_44.setTransform(26,99.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00B287").s().p("AgSBgQgMgCgLgFQgLgEgKgFQgLgGgIgIIAdgiQAJAGAUAKQAKAEAVACQAKAAAGgDQAGgEAAgGIAAAAQAAgGgHgFQgGgEgSgEIgcgHQgOgFgJgHQgKgFgFgJQgFgLAAgNIAAgBQAAgNAFgMQAFgKAJgJQAKgIANgEQAOgEAQgBQALABALABQALACAKADIASAIQAIAEAIAGIgaAlQgNgJgOgEQgNgFgMAAQgJAAgFADQgFADAAAGIAAAAQAAAHAHAEQAHADASAEQARAFAMAEQAOAFAIAHQAKAGAEAIQAFAKAAAOIAAAAQAAAOgFAMQgGALgKAIQgKAIgOAEQgOAEgRABQgMAAgMgCg");
	this.shape_45.setTransform(233.9,62.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A7A8AA").s().p("AgSBgQgMgCgLgFQgLgEgKgFQgLgGgIgIIAdgiQAJAGAUAKQAKAEAVACQAKAAAGgDQAGgEAAgGIAAAAQAAgGgHgFQgGgEgSgEIgcgHQgOgFgJgHQgKgFgFgJQgFgLAAgNIAAgBQAAgNAFgMQAFgKAJgJQAKgIANgEQAOgEAQgBQALABALABQALACAKADIASAIQAIAEAIAGIgaAlQgNgJgOgEQgNgFgMAAQgJAAgFADQgFADAAAGIAAAAQAAAHAHAEQAHADASAEQARAFAMAEQAOAFAIAHQAKAGAEAIQAFAKAAAOIAAAAQAAAOgFAMQgGALgKAIQgKAIgOAEQgOAEgRABQgMAAgMgCg");
	this.shape_46.setTransform(216.4,62.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0099FF").s().p("AhMBeIAAi7ICXAAIAAAsIhjAAIAAAdIBZAAIAAAoIhZAAIAAAeIBkAAIAAAsg");
	this.shape_47.setTransform(199.3,62.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF9E19").s().p("AArBeIhPhmIAABmIg0AAIAAi7IAxAAIBNBiIAAhiIAzAAIAAC7g");
	this.shape_48.setTransform(179.5,62.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F4364C").s().p("AgZBeIAAi7IAzAAIAAC7g");
	this.shape_49.setTransform(164.6,62.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00B287").s().p("AgSBgQgMgCgLgFQgLgEgKgFQgLgGgIgIIAdgiQAJAGAUAKQAKAEAVACQAKAAAGgDQAGgEAAgGIAAAAQAAgGgHgFQgGgEgSgEIgcgHQgOgFgJgHQgKgFgFgJQgFgLAAgNIAAgBQAAgNAFgMQAFgKAJgJQAKgIANgEQAOgEAQgBQALABALABQALACAKADIASAIQAIAEAIAGIgaAlQgNgJgOgEQgNgFgMAAQgJAAgFADQgFADAAAGIAAAAQAAAHAHAEQAHADASAEQARAFAMAEQAOAFAIAHQAKAGAEAIQAFAKAAAOIAAAAQAAAOgFAMQgGALgKAIQgKAIgOAEQgOAEgRABQgMAAgMgCg");
	this.shape_50.setTransform(151.1,62.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A7A8AA").s().p("AgkBbIgOgHQgIgDgFgGIgKgMQgFgHgDgIQgDgIgBgKQgBgJAAgLIAAhpIA0AAIAABoQAAAKADAIQACAHAEAFQAFAFAHADQAGACAHAAQAIAAAHgCQAGgDAEgFQAFgFADgGQACgIAAgKIAAhpIA1AAIAABoQgBALgBAJQgBAKgEAJQgDAIgEAHQgEAHgHAFQgFAGgHADIgPAHQgXAFgNAAQgZgBgLgEg");
	this.shape_51.setTransform(132.6,62.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00A1E1").s().p("AhTBeIAAi7IBgAAQARAAANAEQAMAEAJAJQAGAGADAHQADAIAAAJIAAABQAAAIgCAGQgCAHgEAFQgEAFgFAEIgMAHQAJADAGADQAIAEAEAFQAFAGADAHQACAHAAAKIAAAAQAAAMgEAKQgFAKgJAGQgKAHgNAEQgNADgRAAgAggA0IAnAAQAMAAAHgEQAGgFAAgIIAAgBQAAgHgGgFQgHgEgMAAIgnAAgAgggSIAgAAQAMAAAGgEQAHgEAAgIIAAgBQAAgIgGgEQgGgEgMAAIghAAg");
	this.shape_52.setTransform(113.3,62.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF9E19").s().p("AAbBeIglg5IgXAAIAAA5Ig1AAIAAi7IBZAAQAOAAAWAFQAIADAGAEQAGADAFAFQAIAIAEALQAFALAAAOIAAAAQAAALgDAJQgDAJgFAHQgFAHgHAFQgHAGgJAEIAtBBgAghgDIAhAAQANAAAIgGQAHgGAAgKIAAgBQAAgFgCgEQgCgFgDgDQgIgFgNAAIghAAg");
	this.shape_53.setTransform(86.8,62.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F4364C").s().p("AgkBbIgOgHQgIgDgFgGIgKgMQgFgHgDgIQgDgIgBgKQgBgJAAgLIAAhpIA0AAIAABoQAAAKADAIQACAHAEAFQAFAFAHADQAGACAHAAQAIAAAHgCQAGgDAEgFQAFgFADgGQACgIAAgKIAAhpIA1AAIAABoQgBALgBAJQgBAKgEAJQgDAIgEAHQgEAHgHAFQgFAGgHADIgPAHQgXAFgNAAQgZgBgLgEg");
	this.shape_54.setTransform(66.4,62.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00B287").s().p("AgVBgQgKgCgJgEQgJgEgIgFQgIgFgGgGIgNgPIgJgRQgEgJgBgJQgDgJAAgLIAAAAQAAgJADgKQACgKADgIQAEgJAFgIQAGgIAHgHIAOgLQAIgGAJgEQAKgDAKgCQALgCAJAAQALAAAKACQAKACAJADQAKAEAIAGQAIAEAHAHQAHAHAEAIQAGAHAEAKQAEAIACAKQACAKAAAJIAAAAQAAAKgCAJQgCAKgEAJQgEAJgGAHQgFAJgGAGIgQAMQgIAFgJAEQgJAEgKACQgLACgKAAQgKAAgLgCgAgTguQgIAEgHAHQgGAHgDAJQgFAJAAAKIAAAAQAAAKAFAJQADAJAHAIQAGAHAIADQAJAFAKAAQAKAAAKgFQAIgDAHgHQAGgHAEgKQADgIAAgLIAAAAQAAgJgDgJQgEgKgHgHQgGgHgIgEQgKgEgKAAQgKAAgJAEg");
	this.shape_55.setTransform(45.1,62.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00A1E1").s().p("AgZBeIAAhGIhIh1IA8AAIAlBFIAnhFIA7AAIhIB0IAABHg");
	this.shape_56.setTransform(24.2,62.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgKBfQgKgCgJgDQgJgEgHgFQgIgGgGgGQgGgHgFgHQgFgIgDgJQgDgIgCgKQgBgJgBgKIAAgBQABgJABgJIAFgSIAIgQQAFgIAHgIQAFgGAIgFQAHgGAJgDQAJgFAJgCQALgBAIAAQAMgBALACQAJACAJADQALAEATAPIgOAPQgMgKgMgFQgHgDgIgCQgIgBgKAAQgIAAgGABIgOAFQgNAGgJALQgKAKgGAOQgEAOgBAQIAAAAQACAWADAJQAFAPALAKIAKAJIANAHQAHADAIABQAGACAJAAQALAAATgFQAOgGAKgIIAAgvIg5AAIAAgSIBNAAIAABKQgTAPgNAGQgKAEgKACQgLADgMAAQgKgBgKgCg");
	this.shape_57.setTransform(208.8,25.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AA/BeIh5iZIAACZIgVAAIAAi7IAUAAIB2CWIAAiWIAVAAIAAC7g");
	this.shape_58.setTransform(187.8,25.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgKBeIAAi7IAVAAIAAC7g");
	this.shape_59.setTransform(173.4,25.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AA2BeIAAhVIhrAAIAABVIgWAAIAAi7IAWAAIAABUIBrAAIAAhUIAWAAIAAC7g");
	this.shape_60.setTransform(159.3,25.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgOBfQgKgCgKgEQgKgDgIgGQgKgGgHgHIAMgQIAPAMQAIAFAHADQAIAEAIABQAKACAIAAQAJAAAIgDQAIgCAGgEQAFgFADgFQADgGAAgHIAAgBQAAgHgCgFQgDgFgEgEQgGgEgKgEIgYgHQgPgDgMgFQgMgDgIgHQgIgGgDgJQgEgIAAgMIAAAAQAAgLAFgKQAEgJAIgHQAIgHAMgEQALgEANAAIATACIARAEQALAEATANIgNARQgNgLgNgFQgNgFgOAAQgJAAgIADQgGACgGAEQgGAEgCAGQgDAFAAAHIAAAAQAAAHACAFQADAGAFAEQAGAEAKAEQAJAEAPADQAQADAMAFQALAEAIAGQAHAHAEAIQAEAIgBALIAAABQAAAMgEAKQgFAJgJAHQgIAHgMAEQgMAEgOAAQgKAAgKgCg");
	this.shape_61.setTransform(140.4,25.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgKBeIAAi7IAVAAIAAC7g");
	this.shape_62.setTransform(128.1,25.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("Ag/BeIAAi7IAWAAIAACoIBpAAIAAATg");
	this.shape_63.setTransform(116.6,25.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AhLBeIAAi7IBPAAQAQAAANAEQAMAFAJAIQAGAGADAHQACAIAAAJIAAAAQABAJgDAHQgDAHgEAGQgDAFgGAEIgLAGIAQAFQAHAEAFAFQAGAGADAHQADAIAAAJIAAABQAAAMgEAKQgGAJgJAHQgIAGgNAEQgNADgPAAgAg2BLIA/AAQAKAAAJgCQAIgCAGgFQAGgEAEgGQADgHAAgHIAAgBQAAgIgDgGQgEgGgGgEQgHgEgIgCQgKgCgNAAIg6AAgAg2gJIA3AAQAJAAAJgCQAHgDAGgEQAGgEADgGQADgHAAgIIAAAAQAAgHgDgGQgCgGgFgEQgGgEgIgCQgHgCgLAAIg4AAg");
	this.shape_64.setTransform(98.4,25.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("ABJBfIgWgyIhmAAIgWAyIgWAAIBWi9IATAAIBWC9gAArAaIgrhfIgqBfIBVAAg");
	this.shape_65.setTransform(77.6,25.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgKBeIAAinIg/AAIAAgUICTAAIAAAUIg/AAIAACng");
	this.shape_66.setTransform(58.3,25.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgOBfQgKgCgKgEQgKgDgIgGQgKgGgHgHIAMgQIAPAMQAIAFAHADQAIAEAIABQAKACAIAAQAJAAAIgDQAIgCAGgEQAFgFADgFQADgGAAgHIAAgBQAAgHgCgFQgDgFgEgEQgGgEgKgEIgYgHQgPgDgMgFQgMgDgIgHQgIgGgDgJQgEgIAAgMIAAAAQAAgLAEgKQAFgJAIgHQAIgHAMgEQALgEANAAIATACIARAEQALAEATANIgNARQgNgLgNgFQgNgFgOAAQgJAAgIADQgGACgGAEQgGAEgCAGQgDAFAAAHIAAAAQAAAHACAFQADAGAFAEQAGAEAKAEQAJAEAPADQAQADAMAFQALAEAIAGQAHAHAEAIQAEAIgBALIAAABQAAAMgEAKQgFAJgJAHQgIAHgMAEQgMAEgOAAQgKAAgKgCg");
	this.shape_67.setTransform(41,25.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AhEBeIAAi7ICIAAIAAATIhyAAIAABBIBlAAIAAASIhlAAIAABCIBzAAIAAATg");
	this.shape_68.setTransform(24,25.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#002B49").s().p("AxQRQQnKnJABqHQgBqGHKnKQHKnJKGgBQKHABHJHJQHKHKAAKGQAAKHnKHJQnJHKqHAAQqGAAnKnKg");
	this.shape_69.setTransform(104.8,17.8,1.17,1.17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]}).to({state:[]},31).wait(63));

	// Layer 4
	this.instance = new lib.UK_theUKDomainLogo_RGB();
	this.instance.parent = this;
	this.instance.setTransform(216,185,0.116,0.116);

	this.instance_1 = new lib.UK_4xdomainsRGB();
	this.instance_1.parent = this;
	this.instance_1.setTransform(8,216,0.191,0.191);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(94));

	// Layer 5
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#002B49").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape_70.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_70).wait(94));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(72,-39.9,453.3,416);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Message4_atlas_.png", id:"Message4_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;