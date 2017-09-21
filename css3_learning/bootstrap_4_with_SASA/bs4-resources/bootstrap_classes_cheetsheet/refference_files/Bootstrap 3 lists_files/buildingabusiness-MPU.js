(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"buildingabusiness_MPU_atlas_", frames: [[0,508,1032,124],[0,0,659,506]]}
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
	this.spriteSheet = ss["buildingabusiness_MPU_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.UK_theUKDomainLogo_RGB = function() {
	this.spriteSheet = ss["buildingabusiness_MPU_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.buildingabusinessMPU = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://www.theukdomain.uk/", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(77));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},59).wait(31));

	// Layer 7
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgWB3QgPgCgOgFQgOgFgNgHQgNgIgLgJIAlgsQALAKAZALQANAFAaADQANAAAHgFQAHgEAAgHIAAgBQAAgIgIgFQgIgEgXgGQgVgFgOgFQgRgGgLgHQgMgIgHgLQgHgNAAgSIAAAAQAAgRAHgOQAGgNAMgLQAMgKAQgFQASgGAUAAQAOAAAOACQANACAMAEQAMAEALAGQALAGAJAHIggAvQgQgMgRgGQgRgGgPAAQgMAAgGAFQgGAEAAAHIAAAAQAAAIAIAFQAJAEAXAGQAWAFAPAFQARAGAKAJQAMAHAGAMQAGAMAAAQIAAABQAAASgHAOQgHAOgMAKQgNAKgRAGQgSAFgVAAQgPAAgPgDg");
	this.shape_27.setTransform(166.3,127.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AggB2IAAixIhGAAIAAg6IDNAAIAAA6IhHAAIAACxg");
	this.shape_28.setTransform(144.7,127.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAhB2IguhIIgdAAIAABIIhBAAIAAjrIBuAAQASAAAcAHQAJADAIAFQAIAEAGAHQAKAKAFANQAGAOAAARIAAABQAAANgEAMQgDALgHAIQgGAJgJAHQgJAHgLAFIA4BSgAgqgEIAqAAQARAAAJgHQAJgIAAgNIAAAAQAAgHgCgGQgDgFgEgEQgKgHgQAAIgqAAg");
	this.shape_29.setTransform(122.4,127.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhfB2IAAjrIC8AAIAAA3Ih7AAIAAAkIBwAAIAAAzIhwAAIAAAlIB9AAIAAA4g");
	this.shape_30.setTransform(98.7,127.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhiB2IAAjrIBkAAQAWAAASAGQASAFANALQANALAGAPQAHAWAAANIAAAAQAAALgCAJQgBAJgEAHQgEAIgFAHIgMAMQgOALgSAFQgSAFgVAAIghAAIAABEgAghAAIAfAAQAIAAAHgCQAHgCAEgEQAFgEADgGQACgGAAgHIAAAAQAAgIgCgGQgDgFgFgEQgEgEgIgCQgGgCgIAAIgfAAg");
	this.shape_31.setTransform(76.5,127.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAsB2IgshIIgtBIIhJAAIBQh3IhNh0IBLAAIAoBDIArhDIBJAAIhNBzIBQB4g");
	this.shape_32.setTransform(52.3,127.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AheB2IAAjrIC8AAIAAA3Ih8AAIAAAkIBwAAIAAAzIhwAAIAAAlIB+AAIAAA4g");
	this.shape_33.setTransform(29.2,127.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhBBWIAAirICCAAIAAAhIhcAAIAAAjIBQAAIAAAhIhQAAIAAAkIBdAAIAAAig");
	this.shape_34.setTransform(218.7,92.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAkBWIAAhFIhGAAIAABFIgmAAIAAirIAmAAIAABEIBGAAIAAhEIAlAAIAACrg");
	this.shape_35.setTransform(200.7,92.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgSBWIAAiIIg1AAIAAgjICOAAIAAAjIg0AAIAACIg");
	this.shape_36.setTransform(183.4,92.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAxBWIAAhvIgxBIIAAAAIgwhIIAABvIglAAIAAirIAoAAIAtBJIAthJIAqAAIAACrg");
	this.shape_37.setTransform(157.4,92.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgSBXQgKgBgIgEQgIgDgHgFQgIgFgGgGIgLgNQgFgHgDgIQgDgIgCgJQgCgIAAgKIAAAAQAAgIACgJQACgJADgIQADgIAFgHQAFgHAGgGIAOgLQAHgFAIgDQAJgEAJgCIASgBQAKAAAKABQAJACAIAEQAIADAIAFIANALQAGAGAFAHQAFAHADAIIAFAQIACASIAAAAQAAAJgCAJQgCAJgDAIQgDAIgFAHIgLANQgGAGgIAFQgHAFgIADQgJAEgJABQgJACgKAAQgJAAgJgCgAgUgxQgKAEgHAHQgGAIgEAKQgEAJAAALIAAAAQAAALAEAKQAEAKAHAHQAHAIAJAEQAKAEAKAAQAMAAAJgEQAKgEAHgIQAHgHADgKQAEgKAAgLIAAAAQAAgKgEgKQgEgKgGgHQgIgIgJgEQgKgEgLAAQgKAAgKAEg");
	this.shape_38.setTransform(136.2,92.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAeBWIgkg3IgeAAIAAA3IgmAAIAAirIBOAAQALAAATAEQAMAFAJAIQAHAHAEAKQAEAKAAANIAAAAQAAAKgDAJQgDAIgFAGQgFAHgGAFIgPAIIAqA9gAgkgCIAmAAQAHAAAFgBQAGgCADgDQAEgEACgEQACgFAAgFIAAAAQAAgGgCgFQgCgFgEgDQgEgDgFgCQgGgBgHAAIglAAg");
	this.shape_39.setTransform(117.4,92.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhBBWIAAirICDAAIAAAiIhdAAIAAAlIBRAAIAAAhIhRAAIAABDg");
	this.shape_40.setTransform(100.4,92.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhDBWIAAirIBGAAQAOAAANAEQAMAEAJAIQAJAIAEALQAEALAAANIAAABQAAAHgBAHIgEALQgGALgJAIQgJAIgNAEQgNADgOAAIgdAAIAAA0gAgeABIAeAAQAHAAAGgBQAFgCAEgEQAEgDACgFQACgFAAgGIAAAAQAAgGgDgFQgCgFgDgDQgFgEgFgBQgGgCgGAAIgeAAg");
	this.shape_41.setTransform(76.9,92.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Ag9BWIAAirIAmAAIAACJIBVAAIAAAig");
	this.shape_42.setTransform(61,92.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhBBWIAAirICCAAIAAAhIhcAAIAAAjIBQAAIAAAhIhQAAIAAAkIBdAAIAAAig");
	this.shape_43.setTransform(44.9,92.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAkBWIAAhFIhGAAIAABFIgmAAIAAirIAmAAIAABEIBGAAIAAhEIAlAAIAACrg");
	this.shape_44.setTransform(26.9,92.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAjBWIAAhFIhFAAIAABFIgmAAIAAirIAmAAIAABEIBFAAIAAhEIAmAAIAACrg");
	this.shape_45.setTransform(185.7,62.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgSBWIAAiIIg1AAIAAgjICPAAIAAAjIg1AAIAACIg");
	this.shape_46.setTransform(168.4,62.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgSBWIAAirIAlAAIAACrg");
	this.shape_47.setTransform(156.3,62.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAnBXIgnhwIgmBwIghAAIg7isIApAAIAkBzIAmh0IAgAAIAnB0IAjhzIAoAAIg7Csg");
	this.shape_48.setTransform(138.5,62.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AhBBWIAAirICCAAIAAAhIhcAAIAAAjIBQAAIAAAhIhQAAIAAAkIBdAAIAAAig");
	this.shape_49.setTransform(109.4,62.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAtBWIhThsIAABsIgmAAIAAirIAkAAIBPBpIAAhpIAmAAIAACrg");
	this.shape_50.setTransform(91,62.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgSBWIAAirIAlAAIAACrg");
	this.shape_51.setTransform(77.3,62.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("Ag9BWIAAirIAmAAIAACJIBVAAIAAAig");
	this.shape_52.setTransform(66.1,62.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAtBWIhThsIAABsIgmAAIAAirIAkAAIBPBpIAAhpIAmAAIAACrg");
	this.shape_53.setTransform(48.2,62.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgSBXQgKgBgIgEQgIgDgHgFQgIgFgGgGIgLgNQgFgHgDgIQgDgIgCgJQgCgIAAgKIAAAAQAAgIACgJQACgJADgIQADgIAFgHQAFgHAGgGIAOgLQAHgFAIgDQAJgEAJgCIASgBQAKAAAKABQAJACAIAEQAIADAIAFIANALQAGAGAFAHQAFAHADAIIAFAQIACASIAAAAQAAAJgCAJQgCAJgDAIQgDAIgFAHIgLANQgGAGgIAFQgHAFgIADQgJAEgJABQgJACgKAAQgJAAgJgCgAgUgxQgKAEgHAHQgGAIgEAKQgEAJAAALIAAAAQAAALAEAKQAEAKAHAHQAHAIAJAEQAKAEAKAAQAMAAAJgEQAKgEAHgIQAHgHADgKQAEgKAAgLIAAAAQAAgKgEgKQgEgKgGgHQgIgIgJgEQgKgEgLAAQgKAAgKAEg");
	this.shape_54.setTransform(28,62.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF9E19").s().p("AgbBmIAAiaIg9AAIAAgxICyAAIAAAxIg+AAIAACag");
	this.shape_55.setTransform(188,30.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00B287").s().p("AgnBiQgJgDgHgEQgHgEgHgGQgGgGgEgHQgFgIgDgIQgEgJgBgKQgCgLAAgLIAAhyIA5AAIAABwQAAALADAJQACAHAFAGQAFAFAHADQAHADAIgBQAIABAHgDQAHgDAFgFQAFgFADgHQADgJAAgKIAAhyIA5AAIAABwQAAANgCAKQgCAKgDAJQgDAKgFAHQgFAHgGAGQgHAGgHAEQgIAEgIADQgZAGgOAAQgbgCgMgEg");
	this.shape_56.setTransform(167.3,30.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00A1E1").s().p("AgWBoQgLgCgKgEQgKgEgJgGQgIgFgIgIQgHgHgGgIQgGgJgEgJQgEgKgCgKQgCgLAAgLIAAAAQAAgKACgKQACgLAFgJQAEgKAFgIQAGgJAIgHQAHgIAJgFQAJgGAJgEQALgEALgCQALgCAKAAQAMAAALACQALACAKAEQAKAEAJAGQAIAFAIAIQAHAHAGAJQAGAHAEAKQAEAKACAKQACAKAAALIAAAAQAAALgCALQgCAKgEAJQgEAKgGAJQgGAIgIAHQgHAHgJAGQgJAGgKADQgKAFgKACQgMACgLAAQgLAAgLgCgAgUgxQgKAEgHAHQgHAIgDAKQgEAKAAAKIAAAAQAAALAEAKQADAKAHAHQAIAIAJAFQAKAEAKAAQAMAAAJgEQAKgEAHgIQAHgIADgJQAEgKAAgMIAAAAQAAgKgEgKQgEgKgHgIQgHgHgJgEQgKgFgLAAQgLAAgJAFg");
	this.shape_57.setTransform(144.1,30.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A7A8AA").s().p("AhgBmIAAjLIBPAAQAOAAALACQAMABALAFQAKADAKAGQAIAEAIAHQAHAHAFAIQAGAIAEAJQAEAKACAKQACAKAAALIAAAAQAAALgCAJQgCALgEAJQgEAKgGAIQgFAIgHAHQgIAGgJAGQgJAGgLAEQgLADgMACQgLACgOAAgAgnA0IAWAAQAOAAAJgDQAKgEAIgHQAHgHAEgIQAEgKAAgNIAAAAQAAgMgEgJQgEgKgHgGQgIgHgKgDQgJgEgOAAIgWAAg");
	this.shape_58.setTransform(113.1,30.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF9E19").s().p("AAvBmIhWhvIAABvIg5AAIAAjLIA1AAIBTBrIAAhrIA5AAIAADLg");
	this.shape_59.setTransform(90.2,30.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F4364C").s().p("AA2BnIgQglIhOAAIgOAlIg7AAIBXjNIA1AAIBXDNgAAWAWIgWg5IgXA5IAtAAg");
	this.shape_60.setTransform(67.3,30.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00B287").s().p("AgbBmIAAiaIg9AAIAAgxICyAAIAAAxIg+AAIAACag");
	this.shape_61.setTransform(46.1,30.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00A1E1").s().p("AgTBoQgNgCgMgFQgNgFgLgFQgLgHgJgJIAfglQALAIAVAKQALAFAXACQALAAAGgEQAGgEAAgHIAAAAQAAgGgHgFQgHgEgTgFQgTgEgMgEQgPgFgJgHQgLgHgGgJQgGgLAAgPIAAgBQAAgOAGgMQAFgMALgJQAKgJAOgFQAPgEASgBQAMAAAMACQAMACAKADQALADAJAGQAJAFAIAGIgcApQgOgKgPgGQgOgEgNAAQgKgBgFAEQgFAEAAAFIAAABQAAAHAHAEQAHAEAUAFQATAEANAEQAOAGAKAHQAKAHAFAKQAFAKAAAOIAAABQAAAPgGANQgGAMgLAJQgLAJgPAEQgPAEgTABQgMAAgNgCg");
	this.shape_62.setTransform(26.7,30.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},30).to({state:[]},29).wait(31));

	// Layer 5
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F3374C").s().p("AgsCgIAAhIIBIAAIAABIgAgdA1IgKhIIACgCQAVgCAPgDQAOgDAKgFQAJgFAFgHQAEgIAAgJIAAgBQAAgPgLgIQgLgJgTAAQgSAAgRAIQgQAIgQAQIgqguQAKgMAMgIQAMgJANgGQAOgHAPgDQARgEARAAQAYAAAUAGQAUAHAPALQAOANAIARQAIARAAAXIAAABQAAAUgHARQgHAOgMAMQgMAJgQAHQgPAHgUADIgFAcg");
	this.shape_63.setTransform(253.1,66.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF9E1A").s().p("AgaCfQgSgDgRgGQgRgHgQgJQgQgKgOgMIApgxQAXASAVAKIAYAHQANADAMAAQAWAAAMgIQAMgIAAgOIAAgBQAAgNgMgIQgNgJgmgKQgbgHgQgGQgUgIgNgJQgOgLgHgPQgHgRAAgWIAAgBQAAgVAIgSQAIgSAPgMQAOgNAVgHQAUgGAYAAQAQAAAQACQAQADAPAFQAPAFANAHIAZASIgkA0QgVgPgUgIQgVgIgTAAQgTAAgLAIQgKAHAAAMIAAABQAAAQANAIQANAHApALQAZAGARAIQATAIANAKQANALAGAPQAHAPAAAUIAAABQAAAXgJATQgIASgQANQgPAMgVAHQgWAGgZAAQgRAAgSgDg");
	this.shape_64.setTransform(226.6,66.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00B287").s().p("AgaCfQgSgDgRgGQgRgHgQgJQgQgKgOgMIApgxQAXASAVAKIAYAHQANADAMAAQAWAAAMgIQAMgIAAgOIAAgBQAAgNgMgIQgNgJgmgKQgbgHgQgGQgUgIgNgJQgOgLgHgPQgHgRAAgWIAAgBQAAgVAIgSQAIgSAPgMQAOgNAVgHQAUgGAYAAQAQAAAQACQAQADAPAFQAPAFANAHIAZASIgkA0QgVgPgUgIQgVgIgTAAQgTAAgLAIQgKAHAAAMIAAABQAAAQANAIQANAHApALQAZAGARAIQATAIANAKQANALAGAPQAHAPAAAUIAAABQAAAXgJATQgIASgQANQgPAMgVAHQgWAGgZAAQgRAAgSgDg");
	this.shape_65.setTransform(197.8,66.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00A1E1").s().p("Ah3CeIAAk7IDtAAIAAA+IioAAIAABAICTAAIAAA9IiTAAIAABCICqAAIAAA+g");
	this.shape_66.setTransform(169.3,66.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#A7A8AA").s().p("ABRCeIiYjHIAADHIhEAAIAAk7IBAAAICTDBIAAjBIBEAAIAAE7g");
	this.shape_67.setTransform(135.8,66.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F3374C").s().p("AgiCeIAAk7IBFAAIAAE7g");
	this.shape_68.setTransform(110.4,66.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF9E1A").s().p("AgaCfQgSgDgRgGQgRgHgQgJQgQgKgOgMIApgxQAXASAVAKIAYAHQANADAMAAQAWAAAMgIQAMgIAAgOIAAgBQAAgNgMgIQgNgJgmgKQgbgHgQgGQgUgIgNgJQgOgLgHgPQgHgRAAgWIAAgBQAAgVAIgSQAIgSAPgMQAOgNAVgHQAUgGAYAAQAQAAAQACQAQADAPAFQAPAFANAHIAZASIgkA0QgVgPgUgIQgVgIgTAAQgTAAgLAIQgKAHAAAMIAAABQAAAQANAIQANAHApALQAZAGARAIQATAIANAKQANALAGAPQAHAPAAAUIAAABQAAAXgJATQgIASgQANQgPAMgVAHQgWAGgZAAQgRAAgSgDg");
	this.shape_69.setTransform(88.2,66.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00B287").s().p("Ag5CYQgMgFgLgGQgLgHgJgJQgJgIgHgLQgGgMgFgNQgFgNgCgPIgCghIAAi0IBFAAIAACyQAAAUAFAOQAEAPAJAKQAJAJANAFQAMAGAPAAQAQAAAMgGQANgEAJgJQAJgLAFgOQAEgOAAgTIAAi0IBFAAIAACyIgCAiQgDAPgEANQgFAOgHALQgHALgJAJQgJAJgLAHQgKAGgOAFQgkAJgUgBQgogDgRgFg");
	this.shape_70.setTransform(57.1,66.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00A1E1").s().p("AiFCeIAAk7ICRAAQAbAAAVAIQAVAGAOAOQALALAFAOQAFANAAAQIAAABQAAANgDALQgDAKgGAJQgKAOgTALQAOAGALAFQALAHAHAJQAIAJAEAMQAEANAAAPIAAABQAAAWgJARQgIAQgPALQgQAKgWAFQgVAGgbAAgAhCBhIBSAAQAXAAANgIQANgJAAgRIAAgBQAAgQgMgJQgHgFgJgCQgKgDgNAAIhQAAgAhCgdIBAAAQAXAAANgIQANgIAAgSIAAgBQAAgPgLgIQgMgJgWAAIhEAAg");
	this.shape_71.setTransform(24.8,66.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("ABVBuIgag6Ih2AAIgaA6IgZAAIBkjbIAWAAIBjDbgAAxAeIgxhuIgxBuIBiAAg");
	this.shape_72.setTransform(185.9,27.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgMBvQgLgDgKgEQgLgEgIgGQgJgGgIgIQgGgHgGgJQgFgJgEgLQgFgKgBgLQgCgLAAgLIAAgBQAAgKACgLIAGgVQAEgKAFgJQAGgJAHgIQAHgIAJgGQAIgGALgFQAKgEALgDQAMgCALAAQANAAAMACQAKACAKAEQAOAEAWARIgQATQgOgNgOgFQgIgEgKgBQgKgCgKAAQgKAAgHACIgQAFQgPAHgLAMQgLANgHAQQgFAQAAASIAAAAQACAZADALQAHARAKAMIANALIAPAIQAIADAJACQAIACAJAAQANAAAXgHQAQgFAMgKIAAg2IhCAAIAAgWIBaAAIAABXQgXARgPAGQgMAFgMACQgMADgOAAQgMAAgMgCg");
	this.shape_73.setTransform(151.9,27.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("ABJBtIiMiyIAACyIgYAAIAAjZIAXAAICICuIAAiuIAYAAIAADZg");
	this.shape_74.setTransform(127.5,27.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgMBtIAAjZIAZAAIAADZg");
	this.shape_75.setTransform(110.7,27.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AhfBtIAAjZIBMAAQANAAALACQALACALAEQALAEAIAGQAKAGAHAHQAIAHAHAJIAKASQAEAKACALQACALAAALIAAAAQAAALgCALQgCALgEAKIgKATQgHAIgIAIQgHAHgKAGQgIAGgLAEQgLAEgLACQgLACgNAAgAhHBWIA0AAQAOAAAWgGQAMgEAQgOQAMgMAHgQQAEgKADgXIAAgBQgBgLgGgWQgHgQgMgLQgQgPgMgEQgWgHgOAAIg0AAg");
	this.shape_76.setTransform(94.6,27.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AhJBtIAAjZIAZAAIAADCIB6AAIAAAXg");
	this.shape_77.setTransform(73.1,27.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgLBtIAAjZIAXAAIAADZg");
	this.shape_78.setTransform(58.1,27.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgkBpIgPgIQgIgEgGgHQgGgFgEgIIgJgQIgEgTIgCgWIAAh+IAYAAIAAB8QABASAEAOQAFANAIAKQAJAKAMAFQANAEAPAAQAPAAAMgEQAMgFAJgJQAJgJADgOQAGgOAAgRIAAh+IAYAAIAAB8IgCAXIgEATQgEAJgFAIQgEAHgGAGQgGAHgIAEQgGAFgJADQgYAGgNAAQgZgCgLgEg");
	this.shape_79.setTransform(41.9,27.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AhXBtIAAjZIBcAAQASAAAPAFQAOAFAKAJQAHAHADAJQAEAJAAAKIAAABQAAAKgDAIQgDAIgFAHQgFAGgGAEIgNAHQALADAHAEQAJAEAGAGQAHAHADAIQAEAJAAALIAAABQAAAOgGALQgFALgLAIQgKAHgPAEQgOAEgSAAgAg/BXIBIAAQANAAAKgDQAKgCAHgFQAHgFADgIQAEgHAAgJIAAAAQAAgJgEgIQgDgGgIgFQgHgFgLgDQgLgCgOAAIhEAAgAg/gLIBAAAQALAAAJgCQAJgDAHgFQAHgFADgHQAEgIAAgJIAAgBQAAgIgDgGQgDgHgHgEQgGgFgJgDQgJgCgLAAIhCAAg");
	this.shape_80.setTransform(19.5,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]}).to({state:[]},30).wait(60));

	// Layer 6
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#002B49").s().p("AxQRQQnKnJABqHQgBqGHKnKQHKnJKGgBQKHABHJHJQHKHKAAKGQAAKHnKHJQnJHKqHAAQqGAAnKnKg");
	this.shape_81.setTransform(104.8,17.8,1.17,1.17);

	this.timeline.addTween(cjs.Tween.get(this.shape_81).wait(90));

	// Layer 4
	this.instance = new lib.UK_theUKDomainLogo_RGB();
	this.instance.parent = this;
	this.instance.setTransform(216,185,0.116,0.116);

	this.instance_1 = new lib.UK_4xdomainsRGB();
	this.instance_1.parent = this;
	this.instance_1.setTransform(8,216,0.191,0.191);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(90));

	// Layer 8
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#002B49").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape_82.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_82).wait(90));

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
		{src:"images/buildingabusiness_MPU_atlas_.png", id:"buildingabusiness_MPU_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;