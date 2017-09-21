(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.laptop_screen = function() {
	this.initialize(img.laptop_screen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,270,156);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.upArrow_bounce = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZBZIAAhLIguAAIBHhnIBJBnIguAAIAABLg");
	this.shape.setTransform(0,-7.7,0.911,0.978);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZBjQgKAAAAgKIAAhCIgfAAQgGAAgDgFQgDgFADgFIBEhmQADgEAEAAQAGAAADAEIBDBmQADAEgCAGQgDAFgGAAIgfAAIAABCQAAAKgKAAgAgwADIAXAAQAKAAAAAKIAABCIAgAAIAAhCQAAgEADgDQADgDAEAAIAWAAIgxhKg");
	this.shape_1.setTransform(0,-7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.upArrow_bounce, new cjs.Rectangle(-7.7,-17.6,15.6,19.9), null);


(lib.txtEnd2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMANQgFgFgBgIQABgHAFgFQAGgFAGAAQAIAAAFAFQAGAFAAAHQAAAIgGAFQgFAFgIAAQgGAAgGgFg");
	this.shape.setTransform(101.7,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrA8IAFgaQASAIASgBQAHAAAFgCQAEgEAAgFQAAgGgCgCQgCgDgGgDIgNgGQgPgFgIgJQgFgFgCgGQgCgGAAgHQAAgJADgHQADgHAFgFQAGgFAIgCQAJgCALAAQALAAAYAFIgGAZQgTgGgLABQgIAAgEACQgDADAAAFQAAAEACADQACADAGADIAOAGQAIADAGAEQAGAEAEAEQAIAJAAAOQAAAKgDAHQgDAHgFAFQgMAKgXAAQgZAAgQgGg");
	this.shape_1.setTransform(93.6,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYBBIAAhUQABgKgGgFQgFgGgJABQgHgBgHADQgIADgGAFIAABeIgfAAIAAh/IAZAAIAEALQATgNAVAAQAMAAAIAFQAKAFAFAJQAEAJABANIAABYg");
	this.shape_2.setTransform(81.5,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsAxQgHgJgEgMQgEgMAAgQQAAgPAEgMQAEgMAIgJQAQgRAbAAQAOAAALAEQALAEAIAJQAIAJAEAMQAEANAAAOQAAAQgEAMQgEAMgIAJQgIAIgLAFQgLAEgOAAQgcAAgQgRgAgUgeQgEAFgCAIQgBAIAAAJQAAAKABAHQACAIAEAGQAHAKANAAQAOAAAHgKQADgGACgIQACgHAAgKQAAgJgCgIQgBgIgEgFQgEgFgFgDQgFgCgHAAQgNAAgHAKg");
	this.shape_3.setTransform(67.4,2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOBZIAAh/IAdAAIAAB/gAgLg7QgFgFAAgHQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAEgHAAQgGAAgFgEg");
	this.shape_4.setTransform(57.2,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGBPQgGgCgEgEQgHgIAAgRIAAhIIgTAAIAAgYIAUAAIADggIAZAAIAAAgIAiAAIAAAYIgiAAIAABDQAAANAMAAQAGAAAPgDIAEAWQgIADgJACIgTABQgHAAgGgCg");
	this.shape_5.setTransform(49.6,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQA+QgLgEgHgJQgOgQAAghQAAgeAPgRQAPgTAZABQASAAATAFIgHAZQgUgFgIAAQgMAAgHALQgGALAAASQAAAKABAHQACAHAEAGQAEAFAFACQAFADAIAAIAPgBQAIgBAIgDIAFAYIgTAFQgKACgLAAQgOABgLgFg");
	this.shape_6.setTransform(39.8,2.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTA+QgMgEgHgIQgPgRgBgfQABgfAOgTQAHgJAKgDQALgFAMAAQANAAAKADQAKAFAGAHQANAQAAAeIAAAKIhLAAQgBASAJAJQAJAKAPAAQAJAAAMgCQAMgDAGgDIAFAXQgIAEgNACQgNACgNAAQgPAAgLgEgAAYgOQAAgNgGgJQgFgHgKAAQgFAAgFACQgEACgDADQgIAJAAANIAuAAIAAAAg");
	this.shape_7.setTransform(27.7,2.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAYBBIAAhUQAAgKgFgFQgFgGgJABQgHgBgHADQgIADgGAFIAABeIgfAAIAAh/IAZAAIAEALQATgNAVAAQAMAAAIAFQAKAFAFAJQAEAJAAANIAABYg");
	this.shape_8.setTransform(14.3,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAZBBIAAhUQgBgKgFgFQgGgGgIABQgHgBgHADQgIADgGAFIAABeIgfAAIAAh/IAZAAIAEALQATgNAVAAQAMAAAIAFQAJAFAGAJQAEAJAAANIAABYg");
	this.shape_9.setTransform(0.3,2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgsAxQgHgJgEgMQgEgMAAgQQAAgPAEgMQAEgMAIgJQAQgRAbAAQAOAAALAEQALAEAIAJQAIAJAEAMQAEANAAAOQAAAQgEAMQgEAMgIAJQgIAIgLAFQgLAEgOAAQgcAAgQgRgAgUgeQgEAFgCAIQgBAIAAAJQAAAKABAHQACAIAEAGQAHAKANAAQAOAAAHgKQADgGACgIQACgHAAgKQAAgJgCgIQgBgIgEgFQgEgFgFgDQgFgCgHAAQgNAAgHAKg");
	this.shape_10.setTransform(-13.8,2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQA+QgLgEgHgJQgOgQAAghQAAgeAPgRQAPgTAZABQASAAATAFIgHAZQgUgFgIAAQgMAAgHALQgGALAAASQAAAKABAHQACAHAEAGQAEAFAFACQAFADAIAAIAPgBQAIgBAIgDIAFAYIgTAFQgKACgLAAQgOABgLgFg");
	this.shape_11.setTransform(-26.1,2.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgkBBIAAh/IAZAAIADAPQALgRARAAQAJAAAIACIgEAcQgHgCgKAAQgGAAgGADQgGADgEAFIAABag");
	this.shape_12.setTransform(-41.9,2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTA+QgLgEgIgIQgPgRgBgfQABgfAOgTQAHgJAKgDQALgFAMAAQANAAAKADQAKAFAGAHQANAQAAAeIAAAKIhLAAQgBASAJAJQAJAKAPAAQAJAAAMgCQALgDAHgDIAFAXQgIAEgNACQgNACgNAAQgPAAgLgEgAAYgOQAAgNgGgJQgEgHgMAAQgEAAgFACQgEACgEADQgGAJgBANIAuAAIAAAAg");
	this.shape_13.setTransform(-53.4,2.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGBPQgGgCgEgEQgHgIAAgRIAAhIIgTAAIAAgYIAUAAIADggIAZAAIAAAgIAiAAIAAAYIgiAAIAABDQAAANAMAAQAGAAAPgDIAEAWQgIADgJACIgTABQgHAAgGgCg");
	this.shape_14.setTransform(-64.4,0.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgGBPQgGgCgEgEQgHgIAAgRIAAhIIgTAAIAAgYIAUAAIADggIAZAAIAAAgIAiAAIAAAYIgiAAIAABDQAAANAMAAQAGAAAPgDIAEAWQgIADgJACIgTABQgHAAgGgCg");
	this.shape_15.setTransform(-73.4,0.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTA+QgMgEgHgIQgPgRgBgfQABgfAOgTQAHgJAKgDQALgFAMAAQANAAAKADQAJAFAHAHQANAQAAAeIAAAKIhMAAQAAASAJAJQAIAKAQAAQAJAAALgCQANgDAGgDIAFAXQgJAEgMACQgNACgNAAQgPAAgLgEgAAYgOQAAgNgGgJQgEgHgMAAQgEAAgFACQgEACgEADQgGAJgCANIAvAAIAAAAg");
	this.shape_16.setTransform(-84.1,2.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag4BSIAAijIA1AAQA2AAAAApQAAANgHAJQgGAJgNAGQARADAIAKQADAFACAGQACAHAAAHQAAAMgDAIQgEAJgHAGQgIAGgLADQgKADgOAAgAgZA4IAYAAQAMAAAGgGQAHgGAAgLQAAgLgHgGIgIgEQgEgBgFAAIgZAAgAgZgPIATAAIAKgBQAEgBADgDQAEgDACgEQABgEAAgFQAAgSgVAAIgWAAg");
	this.shape_17.setTransform(-97.1,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txtEnd2, new cjs.Rectangle(-106.9,-16.7,213.8,33.6), null);


(lib.txtEnd1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMANQgFgFgBgIQABgHAFgFQAGgFAGAAQAIAAAFAFQAGAFAAAHQAAAIgGAFQgFAFgIAAQgGAAgGgFg");
	this.shape.setTransform(82.8,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrA8IAFgaQASAIASgBQAHAAAFgCQAEgEAAgFQAAgGgCgCQgCgDgGgDIgNgGQgPgFgIgJQgFgFgCgGQgCgGAAgHQAAgJADgHQADgHAFgFQAGgFAIgCQAJgCALAAQALAAAYAFIgGAZQgTgGgLABQgIAAgEACQgDADAAAFQAAAEACADQACADAGADIAOAGQAIADAGAEQAGAEAEAEQAIAJAAAOQAAAKgDAHQgDAHgFAFQgMAKgXAAQgZAAgQgGg");
	this.shape_1.setTransform(74.7,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbBZQgKgCgKgEIAIgXIAPAEQAJADANAAQAGAAAFgCQAGgCAEgDQAEgEACgFQABgFAAgHIAAgLQgHAGgJADQgJADgJAAQgYAAgMgQQgMgQABgfQAAgQADgMQAFgNAHgJQAQgSAcAAQALAAANACQANACAPAFIAAB7QAAAMgDAJQgEAKgIAGQgQAOgcAAQgNAAgLgDgAgRg3QgHAMgBATQAAAUAHAKQAGAKAMAAQAGAAAIgDQAIgDAEgEIAAhFQgLgDgMAAQgMAAgIALg");
	this.shape_2.setTransform(62.3,4.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZBBIAAhUQgBgKgFgFQgGgGgIABQgHgBgHADQgIADgHAFIAABeIgdAAIAAh/IAZAAIADALQATgNAWAAQALAAAJAFQAIAFAGAJQAEAJAAANIAABYg");
	this.shape_3.setTransform(48.7,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOBZIAAh/IAdAAIAAB/gAgLg7QgFgFAAgHQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAEgHAAQgGAAgFgEg");
	this.shape_4.setTransform(38.4,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGBPQgGgCgEgEQgHgIAAgRIAAhIIgTAAIAAgYIAUAAIADggIAZAAIAAAgIAiAAIAAAYIgiAAIAABDQAAANAMAAQAGAAAPgDIAEAWQgIADgJACIgTABQgHAAgGgCg");
	this.shape_5.setTransform(30.8,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTA+QgMgEgIgIQgPgRABgfQgBgfAOgTQAIgJAKgDQALgFAMAAQANAAAJADQAKAFAHAHQANAQAAAeIAAAKIhMAAQAAASAJAJQAIAKAQAAQAJAAALgCQAMgDAHgDIAGAXQgKAEgNACQgNACgMAAQgPAAgLgEgAAYgOQAAgNgFgJQgFgHgMAAQgEAAgEACQgFACgEADQgGAJgCANIAvAAIAAAAg");
	this.shape_6.setTransform(20.1,2.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTA+QgMgEgIgIQgPgRABgfQgBgfAOgTQAIgJAKgDQALgFAMAAQANAAAJADQAKAFAHAHQANAQAAAeIAAAKIhMAAQAAASAJAJQAIAKAQAAQAJAAALgCQAMgDAHgDIAGAXQgKAEgNACQgNACgMAAQgPAAgLgEgAAYgOQAAgNgFgJQgFgHgMAAQgEAAgFACQgEACgEADQgGAJgCANIAvAAIAAAAg");
	this.shape_7.setTransform(7.5,2.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA8BBIAAhUQAAgJgFgGQgFgGgJABQgFgBgIADQgIADgFAFIAAACIAABcIgdAAIAAhUQAAgJgGgGQgFgGgIABQgHgBgHADQgHADgGAFIAABeIgeAAIAAh/IAZAAIAEALQASgNAVAAQAKAAAIAEQAHAEAFAHQAKgHALgEQAMgEAMAAQAKAAAJAFQAJAFAFAJQAFAKAAAMIAABYg");
	this.shape_8.setTransform(-9.5,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGBPQgGgCgEgEQgHgIAAgRIAAhIIgTAAIAAgYIAUAAIADggIAZAAIAAAgIAiAAIAAAYIgiAAIAABDQAAANAMAAQAGAAAPgDIAEAWQgIADgJACIgTABQgHAAgGgCg");
	this.shape_9.setTransform(-31,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdA/QgHgCgFgFQgKgKAAgTQAAgHABgGQADgGADgEQAHgJAQgEQAPgFAcgBIAAgFQAAgKgGgGQgHgGgJAAIgRACIgRAFIgHgWIAUgGQAJgCANAAQAMAAAKACQAJADAHAFQANALAAAWIAABWIgXAAIgFgLQgKAHgJADQgIADgLAAQgIAAgHgDgAgLALQgFACgCAEQgDAFAAAFQAAAIADAFQAEAEAIAAQAMAAAQgJIAAggQgXABgKAHg");
	this.shape_10.setTransform(-42.2,2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTA+QgLgEgIgIQgPgRgBgfQABgfAOgTQAHgJAKgDQALgFAMAAQANAAAKADQAKAFAGAHQANAQAAAeIAAAKIhLAAQgBASAJAJQAJAKAPAAQAJAAAMgCQALgDAHgDIAFAXQgIAEgNACQgNACgNAAQgPAAgLgEgAAYgOQAAgNgGgJQgEgHgMAAQgEAAgFACQgEACgEADQgGAJgBANIAuAAIAAAAg");
	this.shape_11.setTransform(-54.3,2.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgkBBIAAh/IAZAAIADAPQALgRARAAQAJAAAIACIgEAcQgHgCgKAAQgGAAgGADQgGADgEAFIAABag");
	this.shape_12.setTransform(-64.4,2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSBPQgRgGgKgKQgLgLgFgPQgGgPAAgUQAAgMADgLQACgMAFgKQALgUATgKQATgKAYAAQAZAAAYAIIgJAcQgKgEgKgCQgLgCgIAAQgZAAgNAQQgGAIgEAKQgDALAAANQAAAMADAKQADAJAHAHQAGAIAJADQAHAEALAAQAOAAAKgDIAAgiIgcAAIAAgbIA8AAIAABSQgMAFgNACQgNADgNAAQgUAAgPgFg");
	this.shape_13.setTransform(-78,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txtEnd1, new cjs.Rectangle(-87.9,-16.7,176,33.6), null);


(lib.TXT33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAKQgFgEABgGQgBgFAFgEQAEgFAFAAQAGAAAEAFQAEAEABAFQgBAGgEAEQgEAFgGAAQgFAAgEgFg");
	this.shape.setTransform(41.3,5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLBAIAAhqIgjAAIAAgVIBdAAIAAAVIgjAAIAABqg");
	this.shape_1.setTransform(34.1,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghAxQgIgJgEgLQgEgMAAgQQAAgJACgJQACgJADgIQAJgPANgIQAOgIARAAIATACQAKABAHADIgGAWQgPgGgOAAQgJAAgGADQgGADgFAGQgJAMAAAVQAAAKACAHQAEAIAEAFQAGAGAHADQAGADAKAAIAPgCIAOgEIAFAVQgRAHgUAAQgdAAgRgRg");
	this.shape_2.setTransform(23.7,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglBAIAAh/IBLAAIAAAVIgyAAIAAAeIAtAAIAAAVIgtAAIAAAiIAyAAIAAAVg");
	this.shape_3.setTransform(13.1,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATBAIgphRIgHgTIAAAGIABANIAABRIgYAAIAAh/IAiAAIAoBQIAIAVIgBgUIAAhRIAYAAIAAB/g");
	this.shape_4.setTransform(0.9,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AATBAIgphRIgHgTIAAAGIABANIAABRIgYAAIAAh/IAiAAIAnBQIAIAVIAAgUIAAhRIAYAAIAAB/g");
	this.shape_5.setTransform(-12.8,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRA/QgIgCgHgEQgGgEgGgFQgGgGgDgIQgEgHgBgJQgCgIgBgKQABgJACgJQACgIADgIQAIgPAOgIQAHgEAHgCQAJgCAIAAQATAAAOAIQAOAJAHAPQAHAPAAASQAAAUgHAPQgHAPgOAIQgOAIgTAAQgIAAgJgDgAgKgqIgIAEIgHAHIgFAJQgFAKAAAMIABAMIAEALQAEAKAHAFIAJAEQAFACAFAAQAIAAAHgDQAGgDAEgGQAKgMAAgUQAAgMgEgKQgEgKgJgGIgIgEIgKgBIgKABg");
	this.shape_6.setTransform(-26.7,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggAxQgJgJgEgLQgEgMAAgQQAAgJACgJQACgJAEgIQAHgPAOgIQANgIASAAIATACQAKABAHADIgGAWQgQgGgNAAQgJAAgGADQgGADgEAGQgKAMAAAVQAAAKACAHQAEAIAFAFQAFAGAHADQAHADAJAAIAPgCIAOgEIAFAVQgRAHgUAAQgdAAgQgRg");
	this.shape_7.setTransform(-39.2,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TXT33, new cjs.Rectangle(-47.1,-13.5,94.3,27.2), null);


(lib.TXT32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRA/QgIgCgHgEQgHgEgFgFQgGgGgDgIQgEgHgCgJQgCgIAAgKQAAgJACgJQADgIADgIQAIgPANgIQAIgEAHgCQAJgCAIAAQATAAAOAIQAOAJAHAPQAHAPABASQgBAUgHAPQgHAPgOAIQgOAIgTAAQgIAAgJgDgAgJgqIgJAEIgHAHIgFAJQgFAKAAAMIABAMIAEALQADAKAJAFIAJAEQAEACAFAAQAIAAAHgDQAGgDAFgGQAJgMAAgUQAAgMgEgKQgEgKgJgGIgIgEIgKgBIgJABg");
	this.shape.setTransform(62.2,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLBAIAAhqIgjAAIAAgVIBdAAIAAAVIgjAAIAABqg");
	this.shape_1.setTransform(50.2,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWBAQgKgBgKgEIAHgWQAJAEAJABQAIACAJAAQAIAAAFgEQAFgEAAgGQAAgFgCgDQgDgDgFgEIgQgIQgPgHgJgIQgEgFgCgGQgCgGAAgGQAAgQALgJQAGgEAIgDQAHgCAJAAIAQACQAIABAMADIgHAWIgPgFQgHgBgIAAQgGAAgFADQgEADAAAFQAAAGAGAEQAGAEAPAIQAIADAFAEQAGADAEAFQAIAJAAANQAAAJgDAHQgDAHgGAFQgFAFgIADQgIADgKAAQgMAAgKgCg");
	this.shape_2.setTransform(35.3,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaA8QgFgDgFgDQgFgEgDgFQgFgJAAgMIAAhYIAYAAIAABUQAAAFACAEQACAFADADQAIAGAKAAQAMAAAHgGQADgDACgEQABgFABgFIAAhUIAYAAIAABYQAAAGgCAGIgDAJQgGAKgNAFQgFADgGABQgIABgHAAQgOAAgMgFg");
	this.shape_3.setTransform(23.9,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQA/QgJgCgHgEQgHgEgFgFQgFgGgEgIQgEgHgBgJQgCgIAAgKQAAgJACgJQACgIADgIQAIgPAOgIQAGgEAJgCQAHgCAJAAQATAAAOAIQAOAJAHAPQAIAPgBASQABAUgIAPQgHAPgOAIQgOAIgTAAQgJAAgHgDgAgKgqIgIAEIgHAHIgGAJQgDAKAAAMIABAMIACALQAFAKAHAFIAJAEQAFACAFAAQAIAAAGgDQAHgDAEgGQAKgMAAgUQAAgMgEgKQgFgKgHgGIgJgEIgKgBIgKABg");
	this.shape_4.setTransform(5.4,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLBAIAAhqIgjAAIAAgVIBdAAIAAAVIgjAAIAABqg");
	this.shape_5.setTransform(-6.5,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglBAIAAh/IBLAAIAAAVIgyAAIAAAeIAtAAIAAAVIgtAAIAAAiIAyAAIAAAVg");
	this.shape_6.setTransform(-21.2,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAvBAIAAhVIABgYQgCAMgFAMIgbBVIgbAAIgchZIgEgKIgDgNQABANAAANIAABWIgXAAIAAh/IAnAAIAcBbIADAJIAAAJIAEgVIAchYIAnAAIAAB/g");
	this.shape_7.setTransform(-35.2,0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRA/QgIgCgHgEQgHgEgFgFQgFgGgEgIQgEgHgCgJQgCgIAAgKQAAgJACgJQACgIAEgIQAIgPANgIQAHgEAIgCQAJgCAIAAQATAAAOAIQAOAJAHAPQAIAPAAASQAAAUgIAPQgHAPgOAIQgNAIgUAAQgIAAgJgDgAgJgqIgJAEIgHAHIgGAJQgEAKAAAMIABAMIADALQAFAKAIAFIAJAEQAEACAFAAQAIAAAHgDQAGgDAFgGQAJgMAAgUQAAgMgEgKQgEgKgJgGIgIgEIgKgBIgJABg");
	this.shape_8.setTransform(-50.9,0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghAxQgIgJgEgLQgEgMAAgQQAAgJACgJQACgJADgIQAJgPANgIQAOgIAQAAIAUACQAKABAHADIgGAWQgPgGgOAAQgJAAgFADQgHADgFAGQgJAMAAAVQAAAKADAHQACAIAGAFQAFAGAHADQAHADAJAAIAPgCIAOgEIAFAVQgSAHgTAAQgdAAgRgRg");
	this.shape_9.setTransform(-63.4,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TXT32, new cjs.Rectangle(-71.3,-13.5,142.6,27.2), null);


(lib.TXT31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMBAIAAgyIgphNIAbAAIAbA5IAZg5IAcAAIgpBNIAAAyg");
	this.shape.setTransform(76.9,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATBAIgohRIgIgTIAAAGIABANIAABRIgYAAIAAh/IAiAAIAoBQIAIAVIgBgUIAAhRIAYAAIAAB/g");
	this.shape_1.setTransform(64.6,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAiBAIgNglIgqAAIgNAlIgaAAIAvh/IAbAAIAvB/gAAPAHIgMgiIgDgQIgEARIgLAhIAeAAg");
	this.shape_2.setTransform(51.7,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAvBAIAAhVIABgYQgCAMgFAMIgcBVIgbAAIgbhZIgEgKIgEgNQACANAAANIAABWIgXAAIAAh/IAnAAIAcBbIADAJIABAJIADgVIAchYIAnAAIAAB/g");
	this.shape_3.setTransform(37,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRA/QgIgCgHgEQgHgEgFgFQgGgGgDgIQgEgHgCgJQgCgIAAgKQAAgJACgJQADgIADgIQAIgPANgIQAIgEAHgCQAJgCAIAAQATAAAOAIQAOAJAHAPQAHAPABASQgBAUgHAPQgHAPgOAIQgOAIgTAAQgIAAgJgDgAgJgqIgJAEIgHAHIgFAJQgFAKAAAMIABAMIAEALQADAKAJAFIAJAEQAEACAFAAQAIAAAHgDQAGgDAFgGQAJgMAAgUQAAgMgEgKQgEgKgJgGIgIgEIgKgBIgJABg");
	this.shape_4.setTransform(16.3,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWBAQgKgBgKgEIAHgWQAJAEAJABQAIACAJAAQAIAAAFgEQAFgEAAgGQAAgFgCgDQgDgDgFgEIgQgIQgPgHgJgIQgEgFgCgGQgCgGAAgGQAAgQALgJQAGgEAIgDQAHgCAJAAIAQACQAIABAMADIgHAWIgPgFQgHgBgIAAQgGAAgFADQgEADAAAFQAAAGAGAEQAGAEAPAIQAIADAFAEQAGADAEAFQAIAJAAANQAAAJgDAHQgDAHgGAFQgFAFgIADQgIADgKAAQgMAAgKgCg");
	this.shape_5.setTransform(4.2,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMBAIAAgyIgphNIAbAAIAbA5IAZg5IAcAAIgpBNIAAAyg");
	this.shape_6.setTransform(-11.2,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAaBAIAAg3IgyAAIAAA3IgaAAIAAh/IAaAAIAAAzIAyAAIAAgzIAYAAIAAB/g");
	this.shape_7.setTransform(-23.2,0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAWBAIgUhXIgCgUIgBAHIgCANIgUBXIgeAAIgdh/IAaAAIAQBPIADAYIABgJIACgPIAShPIAgAAIASBPIADAYIAEgYIAQhPIAaAAIgdB/g");
	this.shape_8.setTransform(-38.6,0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AglBAIAAh/IBLAAIAAAVIgyAAIAAAeIAtAAIAAAVIgtAAIAAAiIAyAAIAAAVg");
	this.shape_9.setTransform(-57.1,0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglBAIAAh/IBLAAIAAAVIgyAAIAAAeIAtAAIAAAVIgtAAIAAAiIAyAAIAAAVg");
	this.shape_10.setTransform(-67.2,0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWBAQgKgBgKgEIAHgWQAJAEAJABQAIACAJAAQAIAAAFgEQAFgEAAgGQAAgFgCgDQgDgDgFgEIgQgIQgPgHgJgIQgEgFgCgGQgCgGAAgGQAAgQALgJQAGgEAIgDQAHgCAJAAIAQACQAIABAMADIgHAWIgPgFQgHgBgIAAQgGAAgFADQgEADAAAFQAAAGAGAEQAGAEAPAIQAIADAFAEQAGADAEAFQAIAJAAANQAAAJgDAHQgDAHgGAFQgFAFgIADQgIADgKAAQgMAAgKgCg");
	this.shape_11.setTransform(-77.5,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TXT31, new cjs.Rectangle(-84.4,-13.5,169,27.2), null);


(lib.TXT24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJArQgJgDgGgGQgGgGgDgIQgDgIAAgLQAAgGACgGQABgGADgFQAGgLAKgGQAKgFANAAQANAAANAEIgEAPIgMgDIgKgBQgMAAgIAIQgDAFgCAFQgCAGAAAHQAAAGACAFQACAGADADQAEAEAEACQAEACAGAAQAHAAAGgBIAAgTIgQAAIAAgOIAhAAIAAAsIgOAEIgOABQgKAAgIgCg");
	this.shape.setTransform(57.1,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANAsIgbg4IgGgNIAAAFIABAIIAAA4IgRAAIAAhXIAYAAIAbA3IAGAOIgBgOIAAg3IAQAAIAABXg");
	this.shape_1.setTransform(48.1,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIAsIAAhXIARAAIAABXg");
	this.shape_2.setTransform(41.4,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AANAsIgSghIgKAAIAAAhIgRAAIAAhXIAcAAQAPAAAHAGQAIAGAAANIgBAHQgBAFgDADQgEAGgHADIAXAmgAgPgDIAMAAIAEgBIAFgDQADgDAAgHQAAgFgDgDIgFgCIgEgCIgMAAg");
	this.shape_3.setTransform(36,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXAsIgJgZIgcAAIgJAZIgSAAIAghXIATAAIAgBXgAAKAEIgIgWIgCgMIgCAMIgIAWIAUAAg");
	this.shape_4.setTransform(27.5,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AASAsIAAgmIgjAAIAAAmIgRAAIAAhXIARAAIAAAkIAjAAIAAgkIARAAIAABXg");
	this.shape_5.setTransform(18.8,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOAtIgPgEIAFgPIAMAEIAMABQAGAAADgDQADgDABgEQAAgEgCgCIgGgEIgKgGQgLgFgFgFQgDgDgBgEQgCgEAAgFQAAgLAHgGIAJgFQAGgBAGAAIALABIANADIgEAPIgKgDIgLgBQgEAAgDACQgDACAAAEQAAADAEAEQAEADAKAEIAJAGQAEABADAEQAFAGABAJQAAAGgCAFQgDAFgDADQgEAEgGACQgFABgHAAIgOAAg");
	this.shape_6.setTransform(10.8,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AANAsIgcg4IgEgNIAAAFIAAAIIAAA4IgRAAIAAhXIAYAAIAbA3IAFAOIAAgOIAAg3IAQAAIAABXg");
	this.shape_7.setTransform(-0.8,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAsIAAhXIAzAAIAAAOIgiAAIAAAVIAeAAIAAAOIgeAAIAAAXIAiAAIAAAPg");
	this.shape_8.setTransform(-8.8,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAsIAAhXIAzAAIAAAOIgiAAIAAAVIAeAAIAAAOIgeAAIAAAXIAiAAIAAAPg");
	this.shape_9.setTransform(-15.7,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AANAsIgSghIgKAAIAAAhIgRAAIAAhXIAcAAQAOAAAIAGQAHAGABANIgBAHQgBAFgDADQgEAGgHADIAXAmgAgPgDIAMAAIAEgBIAFgDQACgDAAgHQAAgFgCgDIgFgCIgEgCIgMAAg");
	this.shape_10.setTransform(-22.9,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWAiQgGgGgDgIQgCgIAAgLQgBgGACgGIAEgLQAFgLAJgGQAKgFALAAIAOABQAHABAEACIgDAPQgMgEgIAAQgHAAgDACQgEACgEAEQgGAJAAAOQAAAGABAGQADAFADAEQADADAFACQAFACAHAAIAJgBIAKgCIADAOQgLAEgOAAQgUAAgLgLg");
	this.shape_11.setTransform(-30.9,0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOAtIgPgEIAFgPIANAEIALABQAGAAADgDQAEgDAAgEQAAgEgDgCIgFgEIgKgGQgLgFgFgFQgDgDgCgEQgBgEAAgFQAAgLAHgGIAJgFQAGgBAFAAIAMABIANADIgEAPIgLgDIgKgBQgEAAgDACQgDACAAAEQAAADAEAEQAEADAKAEIAJAGQAFABACAEQAGAGAAAJQgBAGgCAFQgCAFgDADQgEAEgGACQgFABgHAAIgOAAg");
	this.shape_12.setTransform(-38.4,0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZAsIAAhXIAzAAIAAAOIgiAAIAAAVIAeAAIAAAOIgeAAIAAAmg");
	this.shape_13.setTransform(-48.3,0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLAsQgFgBgGgDQgFgDgDgEIgGgJQgDgFgBgGQgBgGgBgHQABgGABgGIAEgLQAFgKAJgGIALgEQAFgBAGAAQANAAAKAGQAKAFAEALQAFAKABANQgBANgFAKQgEAKgKAGQgKAFgNAAIgLgBgAgGgcIgGADIgFAEIgEAGQgDAHAAAIIABAJIACAHQADAHAGAEIAGADIAGAAQAGAAAEgCQAFgCADgEQAHgIAAgOQgBgIgDgHQgDgHgFgDIgGgDIgHgBIgGABg");
	this.shape_14.setTransform(-56.8,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TXT24, new cjs.Rectangle(-63.1,-9.3,126.2,18.8), null);


(lib.TXT23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkBqQgRgCgQgGIALglQAOAGAPADQAPADAOAAQAOAAAIgGQAIgHAAgLQAAgIgEgFQgEgFgJgGQgJgGgRgHQgagMgOgOQgGgIgEgKQgDgJAAgLQAAgZATgPQAJgIAMgEQANgDAOAAQAOAAAOACQANACASAGIgKAjIgZgHQgMgDgMAAQgMAAgHAFQgIAFAAAJQAAAJALAHQAJAIAaALQANAGAJAHQAJAFAHAIQAMAPAAAVQABAPgFAMQgFALgKAJQgJAJgMAEQgOAEgQAAQgUAAgQgCg");
	this.shape.setTransform(57.1,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag9BpIAAjRIB8AAIAAAjIhTAAIAAAxIBKAAIAAAiIhKAAIAAA4IBTAAIAAAjg");
	this.shape_1.setTransform(41.3,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTBpIAAiuIg6AAIAAgjICbAAIAAAjIg6AAIAACug");
	this.shape_2.setTransform(24.4,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgrBiQgKgEgHgGQgHgGgFgIQgKgPAAgVIAAiQIApAAIAACKQAAAKADAHQADAHAGAFQALAKASAAQAUAAALgKQAFgFAEgHQACgHAAgJIAAiLIAoAAIAACQQAAALgCAJQgDAJgEAIQgKAPgTAIQgJAFgLACQgLACgNAAQgYAAgTgJg");
	this.shape_3.setTransform(5.7,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfBpIhDiHQgFgKgHgVIAAALIABAVIAACGIgoAAIAAjRIA4AAIBDCDIANAkIgBgiIAAiFIAoAAIAADRg");
	this.shape_4.setTransform(-16.3,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUBpIAAjRIApAAIAADRg");
	this.shape_5.setTransform(-32.3,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABNBpIAAiMQAAgXABgRQgDAUgHAUIgtCMIguAAIguiTIgGgSIgFgTQACAUAAAXIAACNIgmAAIAAjRIBAAAIAvCVIAEAQIACAOQACgUAEgOIAviRIA/AAIAADRg");
	this.shape_6.setTransform(-51.3,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TXT23, new cjs.Rectangle(-68.9,-22.3,137.8,44.8), null);


(lib.TXT22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAfBpIhDiHQgFgKgHgVIAAALIABAVIAACGIgoAAIAAjRIA4AAIBDCDIANAkIgBgiIAAiFIAoAAIAADRg");
	this.shape.setTransform(45.6,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcBpQgOgEgLgGQgMgHgIgJQgJgKgGgMQgGgMgDgPQgDgOAAgQQAAgPADgPQADgOAGgMQANgaAWgMQAMgHANgDQAOgDAOAAQAgAAAWANQAXAOAMAYQAMAZAAAgQAAAggMAYQgMAZgWANQgXANggAAQgPAAgNgDgAgQhFQgIACgGAFQgHAEgFAGQgFAHgEAIQgHARAAAUQAAALACAJQACAKADAIQAHAQANAJQAHAFAHACQAIACAJAAQANAAALgFQAKgEAIgKQAQgTAAgiQAAgUgHgRQgHgRgNgIQgHgFgIgCQgHgCgJAAQgIAAgIACg");
	this.shape_1.setTransform(22.7,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUBpIAAjRIApAAIAADRg");
	this.shape_2.setTransform(6.4,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag+BpIAAjRIAqAAIAACuIBTAAIAAAjg");
	this.shape_3.setTransform(-4.9,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag9BpIAAjRIApAAIAACuIBTAAIAAAjg");
	this.shape_4.setTransform(-20.4,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUBpIAAjRIApAAIAADRg");
	this.shape_5.setTransform(-33.9,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhJBpIAAjRIBEAAQBGAAAAA0QAAARgIAMQgIALgRAHQAVAFALANQAFAGADAIQACAIAAAKQAAAPgFALQgFALgJAIQgKAIgOADQgOAEgRAAgAggBHIAeAAQAQAAAIgHQAJgIAAgOQAAgOgJgHQgEgEgGgCQgGgBgGAAIggAAgAgggTIAYAAQAIAAAFgCQAGgCAEgDQAEgEACgFQACgFAAgHQAAgYgbAAIgcAAg");
	this.shape_6.setTransform(-47.2,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TXT22, new cjs.Rectangle(-60.5,-22.3,121,44.8), null);


(lib.TXT21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiYEYIDdnSIkEAAIAAhcIF+AAIAAA/IjkHvg");
	this.shape.setTransform(-0.7,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TXT21, new cjs.Rectangle(-31.5,-59.4,63,118.8), null);


(lib.txt14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWBAQgKgBgKgEIAHgWQAJAEAJABQAIACAJAAQAIAAAFgEQAFgEAAgGQAAgFgCgDQgDgDgFgEIgQgIQgPgHgJgIQgEgFgCgGQgCgGAAgGQAAgQALgJQAGgEAIgDQAHgCAJAAIAQACQAIABAMADIgHAWIgPgFQgHgBgIAAQgGAAgFADQgEADAAAFQAAAGAGAEQAGAEAPAIQAIADAFAEQAGADAEAFQAIAJAAANQAAAJgDAHQgDAHgGAFQgFAFgIADQgIADgKAAQgMAAgKgCg");
	this.shape.setTransform(39.6,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOA9QgNgEgIgIQgJgIgEgMQgEgMAAgQQAAgJACgJQACgJAEgHQAIgQAPgIQAPgIASAAQAUAAATAGIgHAWIgQgEIgPgCQgTAAgKAMQgFAGgDAJQgCAIAAAKQAAAJACAIQADAIAFAFQAEAGAHADQAGACAJAAQAKAAAIgCIAAgbIgWAAIAAgUIAvAAIAABAQgJADgLACQgKADgKAAQgPAAgMgFg");
	this.shape_1.setTransform(28.1,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATBAIgphRIgHgTIAAAGIABANIAABRIgYAAIAAh/IAiAAIAnBQIAIAVIAAgUIAAhRIAYAAIAAB/g");
	this.shape_2.setTransform(15.1,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLBAIAAh/IAXAAIAAB/g");
	this.shape_3.setTransform(5.4,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLBAIAAhqIgjAAIAAgVIBdAAIAAAVIgjAAIAABqg");
	this.shape_4.setTransform(-2.4,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglBAIAAh/IBLAAIAAAVIgyAAIAAAeIAtAAIAAAVIgtAAIAAAiIAyAAIAAAVg");
	this.shape_5.setTransform(-12,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglBAIAAh/IBLAAIAAAVIgyAAIAAAeIAtAAIAAAVIgtAAIAAAiIAyAAIAAAVg");
	this.shape_6.setTransform(-22,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAuBAIAAhVIABgYQgCAMgEAMIgcBVIgbAAIgchZIgDgKIgEgNQACANAAANIAABWIgXAAIAAh/IAnAAIAdBbIACAJIAAAJIAEgVIAdhYIAmAAIAAB/g");
	this.shape_7.setTransform(-36,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt14, new cjs.Rectangle(-46.7,-13.5,93.5,27.2), null);


(lib.txt13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglBAIAAh/IBLAAIAAAVIgyAAIAAAeIAtAAIAAAVIgtAAIAAAiIAyAAIAAAVg");
	this.shape.setTransform(28.6,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATBAIgohRIgIgTIABAGIAAANIAABRIgYAAIAAh/IAiAAIAoBQIAHAVIAAgUIAAhRIAYAAIAAB/g");
	this.shape_1.setTransform(16.4,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLBAIAAh/IAYAAIAAB/g");
	this.shape_2.setTransform(6.7,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglBAIAAh/IAZAAIAABqIAyAAIAAAVg");
	this.shape_3.setTransform(-0.2,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATBAIgohRIgIgTIABAGIAAANIAABRIgYAAIAAh/IAiAAIAoBQIAHAVIAAgUIAAhRIAYAAIAAB/g");
	this.shape_4.setTransform(-12.4,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQA/QgJgCgHgEQgGgEgGgFQgGgGgDgIQgEgHgCgJQgBgIAAgKQAAgJABgJQACgIAEgIQAIgPANgIQAIgEAIgCQAIgCAIAAQATAAAOAIQAOAJAHAPQAIAPAAASQAAAUgIAPQgHAPgOAIQgNAIgUAAQgIAAgIgDgAgJgqIgJAEIgHAHIgGAJQgDAKAAAMIABAMIACALQAFAKAIAFIAJAEQAEACAFAAQAIAAAGgDQAHgDAFgGQAJgMAAgUQAAgMgEgKQgFgKgHgGIgJgEIgKgBIgJABg");
	this.shape_5.setTransform(-26.3,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt13, new cjs.Rectangle(-35.4,-13.5,70.9,27.2), null);


(lib.txt12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATBAIgphRIgHgTIAAAGIABANIAABRIgYAAIAAh/IAiAAIAnBQIAJAVIgBgUIAAhRIAYAAIAAB/g");
	this.shape.setTransform(30.7,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRA/QgIgCgHgEQgGgEgGgFQgGgGgDgIQgEgHgBgJQgDgIAAgKQAAgJADgJQABgIAEgIQAIgPAOgIQAHgEAHgCQAJgCAIAAQATAAAOAIQAOAJAHAPQAHAPAAASQAAAUgHAPQgHAPgOAIQgOAIgTAAQgIAAgJgDgAgKgqIgIAEIgHAHIgFAJQgFAKAAAMIABAMIAEALQADAKAIAFIAJAEQAFACAFAAQAIAAAHgDQAGgDAFgGQAJgMAAgUQAAgMgEgKQgEgKgJgGIgIgEIgKgBIgKABg");
	this.shape_1.setTransform(16.8,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMBAIAAh/IAYAAIAAB/g");
	this.shape_2.setTransform(7,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglBAIAAh/IAZAAIAABqIAyAAIAAAVg");
	this.shape_3.setTransform(0.1,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglBAIAAh/IAZAAIAABqIAyAAIAAAVg");
	this.shape_4.setTransform(-9.3,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLBAIAAh/IAXAAIAAB/g");
	this.shape_5.setTransform(-17.5,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAuBAIAAhVIACgYQgDAMgEAMIgbBVIgbAAIgchZIgEgKIgDgNQABANAAANIAABWIgXAAIAAh/IAnAAIAdBbIACAJIAAAJIAEgVIAdhYIAmAAIAAB/g");
	this.shape_6.setTransform(-29,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt12, new cjs.Rectangle(-39.7,-13.5,79.5,27.2), null);


(lib.txt11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9DnQgegNgWgaQgrg1gBhgQABh/BFhJQAjglAygWQAxgVBCgHIAPBPQgqADgiAKQgiALgYASQgYATgPAZQgPAagFAgQAwgZAtAAQAdAAAYAJQAYAJASARQAjAjgBA9QAAAjgKAeQgKAdgUAWQgqAshEAAQgmAAgegOgAggAhQgTAFgSALQABAdAEAXQAFAWAJAPQATAfAhAAQAPAAANgGQAMgFAKgLQATgWAAgiQgBgegQgQQgSgRgdAAQgUAAgTAFg");
	this.shape.setTransform(18.9,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhWDqQgcgEglgMIAShNQAaAKAaAFQAZAGAagBQAvABAYgXQANgLAFgOQAHgPAAgTQAAgSgHgPQgGgOgOgJQgagTgxAAIhhAAIASjxID2AAIAABNIivAAIgHBdIAkAAQAogBAgAKQAfAJAWATQAVASAKAaQALAbAAAkQAAAlgMAdQgMAdgZAVQgxArhNAAQgjAAgcgDg");
	this.shape_1.setTransform(-17.3,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt11, new cjs.Rectangle(-37.6,-44.4,75.3,88.9), null);


(lib.speed_Dial = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgxBRQgHgDgGgGQgGgGgDgHQgDgIAAgJQAAgPAJgLQAKgMAOgDIBjgaQAFgCAEACQAEACACAEQADAEgBAEQAAAFgEADIhHBJQgGAHgIAEQgJAEgJAAQgJAAgIgEgAgyAZQgIAHAAAKQAAALAIAHQAHAIALAAQAKAAAIgIQAHgHAAgLQAAgKgHgHQgIgIgKAAQgLAAgHAIgAgGAJQAGAFADAHQAEAHABAIIArgqgAAEgeIgCgBIAfg1QADABABADQADACAAAEIABAHQAAADgCADIgPAYIAAAAQgCAEgEACQgEACgEAAIgGgBg");
	this.shape.setTransform(-2.8,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASBSIgCgNIgFgLQgFgKgFgHQgHgKgOgIQgNgJgCgGQgBgDABgDIgBgBQgOgEgRgFIAxhRIADAAIABAAIAAAAIABAAIAAgBQAHAEAKAKIAgAhIAIANQARAcADAPQACAIAAAQIACAoIgDAFQgEAEgGABIgMACIgMACQgJgBgEgIg");
	this.shape_1.setTransform(3.5,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.speed_Dial, new cjs.Rectangle(-10.3,-9.4,20.7,18.8), null);


(lib.share_group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiGC1QgPgHgKgLQgMgLgGgOQgGgQgBgRQABgQAGgPQAGgPAMgLQAKgLAPgGQAPgGARgBQAWAAAUAMQASALALATIBTgyQgGgNABgNQgBgOAGgMQAFgMAKgKIhKgvQgIAHgIAEQgKAFgKgBQgKAAgIgEQgJgDgHgHQgHgHgDgIQgEgJAAgKQAAgJAEgKQADgIAHgHQAHgHAJgDQAIgEAKAAQAKAAAJAEQAIADAHAHQAHAHADAIQADAKAAAJQAAAJgDAJIBQAzQAIgEAIgDQAKgCAIAAQAOgBANAGQANAFAJAKQAKAJAFAMQAFANAAAOQAAANgFANQgFANgKAJQgJAJgNAGQgNAFgOAAQgQAAgOgHQgPgHgJgNIhVAzQADALAAAMQAAARgHAQQgFAOgMALQgLALgOAHQgQAGgQAAQgRAAgPgGgAh/AvQgMAFgIAIQgJAKgFALQgFALAAANQAAANAFANQAFALAJAIQAIAJAMAGQAMAEANAAQAMAAANgEQALgGAJgJQAIgIAGgLQAEgNAAgNQAAgLgDgLIgBAAIgBgDQgHgRgQgLQgQgKgTAAQgNAAgMAFgABlg6QgIACgGAEIgBABQgLAHgFALQgGALABAMQAAAKADAKQAEAIAHAHQAHAIAJAEQAKADAKAAQALAAAKgDQAIgEAIgIQAHgHAEgIQAEgKAAgKQAAgKgEgKQgEgJgHgHQgIgHgIgEQgKgEgLAAQgHAAgHADgAhBifQgIAIgBANQABANAIAJQAKAJAMgBQANABAIgJQAKgJgBgNQABgNgKgIQgIgJgNAAQgMAAgKAJgAiACUQgEAAgEgDQgDgEAAgFIAAgRQgBgKAIgHQAGgHALAAIAaAAQAEAAAFACQAEACADADIAGAIQABAEAAAFIAAARQAAAFgDAEQgEADgEAAgAhxBQQgFgFAAgGQAAgGAFgFQAEgFAHAAQAGAAAFAFQAEAFABAGQgBAGgEAFQgFAFgGAAQgHAAgEgFgABgAUQgEAAgBgDQgDgCAAgDIAAgNIABgGIAEgGIAAAAQADgDACgBIAHgCIAUAAQAHAAAGAGQAFAFAAAHIAAANQAAADgDACQgCADgEAAgABrgdQgDgEgBgFQABgEADgEQADgDAFAAQAGAAADADQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEgAgzh7QgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgFQABgEACgCQADgDADAAIAKAAQADAAADADQADACgBAEIAAAFQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABAAAAgAgviUQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.share_group, new cjs.Rectangle(-18.4,-18.7,36.9,37.4), null);


(lib.shapes_line5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhtAKIAAgTIDbAAIAAATg");
	this.shape.setTransform(0,0,0.952,1.951);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shapes_line5, new cjs.Rectangle(-10.5,-2,21,4), null);


(lib.shapes_line4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhtAKIAAgTIDbAAIAAATg");
	this.shape.setTransform(0,0,0.317,0.976);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shapes_line4, new cjs.Rectangle(-3.5,-1,7,2), null);


(lib.shapes_line1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhtAKIAAgTIDbAAIAAATg");
	this.shape.setTransform(0,0,0.412,0.976);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shapes_line1, new cjs.Rectangle(-4.5,-1,9.1,2), null);


(lib.question = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcDhQgMgEAAgOIAAg3IgoAAQgVAAgPgPQgOgPAAgUIAAiLQAAgVAOgPQAPgOAVAAICBAAIARgRIANgMQAHgHgBgKQgBgKgIgGQgMgIgKAHQgJAFgCALQAAALgCAGQgGAKgOAAIgeAAQgKAAgFgGQgGgFABgNIAAgDQACgtAigbQAYgSAegBQAegCAZARQASAMAMATQAKASACAWQADAdgNAXIA9AAQAUAAAQAOQAOAPAAAVIAACLQAAAUgOAPQgQAPgUAAIiUAAIhDBFQgFAGgJAAQgFAAgDgCgAimg7QgIAJAAANIAACLQAAAMAIAJQAKAJAMAAIAyAAQAKAAAAAKIAABBIBGhIQACgDAFAAICYAAQANAAAIgJQAJgJAAgMIAAiLQAAgNgJgJQgIgIgNAAIhMAAIgDADIgPAMQgZASgBAHIAAAUQAAAHgFAGQgGAGgIAAIgdAAQgIAAgHgGQgGgGAAgHIAAgeQAAgPALgPIhvAAQgMAAgKAIgAABitQAMAAAKAHQAQALACAUQACATgOAOIgOANIgCACIgOANIgGAHQgRASAAAMIAAAdIABABIAbAAIABgUQAAgKAKgLQAHgIAQgLIABgBIANgLIAIgIQAQgWgCgcQgDgkgegUQgUgNgXABQgYAAgSAPQgcAWgBAiIAAAHIAeAAIADgBIAAgIQACgUARgLQAJgGAMAAIABAAgAggBaQgMgMAAgQQAAgRAMgMQALgLARAAQAQAAALALQAMAMAAARQAAAQgMAMQgLAMgQAAQgRAAgLgMgAgTAvQgFAGAAAJQAAAIAFAGQAHAGAIAAQAIAAAFgGQAGgGAAgIQAAgJgGgGQgFgFgIAAQgIAAgHAFg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTCKQgFgFAAgJQAAgIAFgGQAGgGAJAAQAHAAAGAGQAGAGAAAIQAAAJgGAFQgGAGgHAAQgJAAgGgGgAgXA2IgBAAIAAgeQAAgLARgSIAGgGIAOgOIACgCIAOgMQAOgPgCgTQgCgTgQgLQgKgHgNAAQgLgBgKAHQgRALgDAUIAAAIIgCAAIgeAAIAAgHQABgiAcgWQASgOAYgBQAXgBAUANQAeAVADAjQACAdgQAVIgIAJIgNALIgBAAQgQALgHAHQgKALAAAKIgBAUg");
	this.shape_1.setTransform(0,-6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.question, new cjs.Rectangle(-19.5,-22.6,39,45.3), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARWDdIAHgWQAlAOAkAAQApgBAXgTQAXgUAAglIAAgiQglAZgpAAQg4ABgYghQgZgigBg/QAAhAAgglQAeglA0AAQApAAA0AOIAAEKQAAArgcAZQgdAZg1AAQglAAgrgMgAR3hXQgYAfAAA2QAAA2ATAbQAVAbAqAAQAnAAAlgbIAAi8QgjgJgjAAQgnAAgZAfgAJpBHIAAi4IgpAAIAAgWIApAAIADg6IAWAAIAAA6IBGAAIAAAWIhGAAIAACzQgBAXAJAIQAHAJAPAAQASAAAYgHIAFAWQgYAGgZAAQg1AAAAg4gAF/BeQgdghAAg/QABhCAagkQAagkAxAAQAuAAAZAeQAZAeAAA3IAAAVIisAAQAAA1AWAcQAXAdAuAAQAiAAAsgTIAFAXQgSAHgXAGQgWAFgWgBQg5ABgdgigAGThfQgTAXgEAtICSAAQAAgtgRgXQgSgXgjAAQgiAAgTAXgACNBeQgdghAAg/QAAhCAagkQAcgkAvAAQAwAAAYAeQAZAdAAA4IAAAVIitAAQAAA1AYAcQAWAdAuAAQAjAAArgTIAFAXQgRAHgYAGQgWAFgWgBQg4ABgegigAChhfQgTAXgEAtICSAAQAAgtgRgXQgRgXgkAAQghAAgUAXgAoSBbQghgjAAg/QAAg/AhglQAfgjA5gBQA4ABAgAjQAgAlAAA/QAABAggAjQgfAkg5gBQg5AAgfgkgAnshNQgSAZAAAtQAAArASAZQASAZAgAAQAgAAASgYQASgYAAgtQAAgtgRgZQgSgZghABQghgBgRAZgAu2BbQgfgjAAg/QAAg/AfglQAggjA5gBQA5ABAgAjQAgAlAAA/QAABAggAjQgfAkg6gBQg5AAgggkgAuQhNQgRAYAAAuQABAsARAYQASAZAgAAQAhAAASgYQASgYAAgtQgBgtgRgZQgSgZghABQgggBgTAZgAzFBrQgmgTgWgnQgSglgBgzQABg1ATgqQAWgpAmgVQAmgVAzAAQAYAAAZAEQAbAEAUAIIgOAtQgsgPgmAAQg2AAgeAjQgfAjAAA+QAAAlAOAaQANAbAZAQQAaAPAjAAQAaAAAegIIAAhWIhAAAIAAgtIB0AAIAAClQgbAJgZAGQgYAEgbAAQg3ABgmgVgAP9B7IAAiyQABgdgPgRQgQgRgbAAQgZAAgTAGQgSAGgZAPIAADWIgXAAIAAkCIATAAIAEAVQAXgOATgGQATgGAcAAQAlAAAVAWQAVAXAAAmIAAC0gAL4B7IAAkCIAYAAIAAECgAAfB7IABkwIgFAQIh4EgIgVAAIh9kwIABEwIgXAAIAAlQIAhAAIBwELQAGANAHAcIAEgMIB5koIAiAAIAAFQgAqkB7IAAkiIhgAAIAAguIDyAAIAAAuIhgAAIAAEigAL3jKQgFgFAAgIQAAgFAFgHQAFgFAIAAQAIAAAFAFQAEAHAAAFQAAAIgEAFQgGAGgHgBQgIABgFgGg");
	this.shape.setTransform(50.6,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DDB946","#DCB344","#D9A341","#D5883D","#D5873C","#BA5D34"],[0,0.125,0.294,0.486,0.498,1],1.9,-40.2,1.9,16.8).s().p("AimBmIAIABQAJAAAJgCQgIACgHAAIgLgBgACzBlQAJACAJAAIAGAAIgHAAQgJAAgIgCgAjKBYIAKAGIAKAFQgLgEgJgHgAiohmIAKABIANgBIgNABIgKgBgAC4hmIANABIAGAAIgHAAIgMgBg");
	this.shape_1.setTransform(-142.7,6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhYFAQgmgegNgwQgSAFgUAAQgmAAgigTQgigTgTgiQgegyAPg7QALgnAbgbQgPgOgJgRQgNgYgEgbQgHgxAZgrQATghAigUQAigTAmAAQASAAAUAFQANgvAmgfQAngeAxAAQAyAAAnAeQAmAfANAvQATgFATAAQAmAAAiATQAiAUATAhQAZArgHAxQgEAbgNAYQgJARgQAOQAcAbAKAnQAQA6geAzQgTAigiATQgiATgmAAQgVAAgRgFQgNAwgmAeQgnAegyAAQgxAAgngegAgwA+IAKAFQARAJAFASQAFATgKARQgFAKgMAIQgOAKgIAPQgIAQAAARQAAAcAUAVQAUAUAcAAQAdAAAUgUQAUgVAAgcQAAgRgIgQQgIgPgPgKQgLgIgGgKQgJgRAFgTQAFgSAQgJQAMgHALAAQAMAAALAHIAKAHIAHAJIAAAAQAHALABANQABASAJAPQAJAOAPAJIARAHQAMADAMgBIAHgBQAJgCAIgDIAFgDIANgJQAHgIAFgIQAOgagHgbQgHgcgZgOQgJgFgJgDQgHgCgIAAIgCAAIgHABQgMABgLAGIgKADQgHACgHAAIgBAAQgTAAgOgOQgOgNAAgTQAAgSAOgNIABAAQANgNATgBIAAAAQANAAAMAFIAEADIANAEQAJACAKgBIAKgBIACgBIARgIQAZgOAHgcQAHgcgOgZQgFgJgHgHIgDgDIgBgBIgJgFIgFgDIgDgBIgEgBQgLgEgMAAIgEAAQgQABgPAIQgPAJgJAOQgJAPgBASQgBAOgHAKIgNAOIgEADIgEACIgEACIgDABIgMABIgIAAIgHgDIgBAAIgBgBIgDgBIgDgCQgQgJgFgTQgFgSAJgRQAHgLAKgHQAPgKAIgPQAIgPAAgRQAAgdgUgVQgUgUgdAAQgcAAgUAUQgUAVAAAdQAAARAIAPQAIAPAOAKQALAHAHALQAJARgFASQgFATgRAJIgKAGQgGABgGAAIgJAAIgDgBIgDgBIgFgDIgDgBIgDgCIgCgBIgNgOQgGgLgBgNQgBgSgJgPQgJgOgPgJQgRgJgSAAIAAAAIgRACIgBAAIgFACIgCABIgJAEIgFAEIgNAKQgFAFgDAGQgPAZAIAcQAHAcAZAOIARAIIACAAIACABIAEABQALABAMgCIANgEIAEgDQALgFANAAIABAAQATABAOANIAAAAQANANAAASQAAATgNANQgOAOgTAAIgBAAQgLAAgNgFIgCgBIgBAAIgBgBIgCgBIgBAAQgLgFgMAAIgCAAQgSABgPAJQgZAOgHAcQgIAbAPAaQADAGAFAEIAIAJQAJAHALAEIAFACIABAAIAGABIAEABQANACANgEIARgHQAPgJAJgOQAJgPABgSQABgNAGgLIABAAIAAgBIABAAIAAgCIALgLIAFgCQALgHAMAAQAGABAGABg");
	this.shape_2.setTransform(-140.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// orange gradient
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E6B921","#E18026","#C95428"],[0,0.471,1],0,-21.8,0,15.5).s().p("AhFEEQgggSgTggQglgBgggTQgggTgSggQgegzAPg6QAFgPAHgPQgRgfAAglQABglATghQASggAggTQAggTAlgBQATgfAggSQAhgTAkAAQAlAAAhATQAgASAUAfQAlABAfATQAgATATAgQASAhABAlQAAAlgRAfQAHAPAFAPQAPA6gdAzQgTAgggATQgfATglABQgUAgggASQggASgmAAQgkAAghgSg");
	this.shape_3.setTransform(-140.8,0.1,1.527,1.527);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-180.5,-42.3,361.2,84.8), null);


(lib.lightBulb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020202").s().p("AgQAKIAAgTIAiAAIAAATg");
	this.shape.setTransform(0,3.1,0.885,0.885);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020202").s().p("AgVAWQgfgeAAgsIAUAAQAAAjAZAZQAZAZAjAAIAAAUQgsAAgegfg");
	this.shape_1.setTransform(-4.8,-16.1,0.885,0.885);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#020202").s().p("AhBDAIAAgsIgRAAIAAgUIARAAIAAgTIgRAAIAAgUIARAAIAAgRQgigSgVgiQgTgggBgnQABg6ApgpQApgpA5AAQA6AAAqApQApApgBA6QAAAngTAgQgVAigiASIAAARIARAAIAAAUIgRAAIAAATIARAAIAAAUIgRAAIAAAsgAgtCsIBbAAIAAgYIhbAAgAgtCAIBbAAIAAgTIhbAAgAhUiIQgkAjAAAyQAAAjATAcQATAeAfAPIAGADIAAAdIBbAAIAAgdIAFgDQAggPATgeQATgcAAgjQgBgygjgjQgjgjgyAAQgxAAgjAjg");
	this.shape_2.setTransform(0,-14.9,0.885,0.885);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag3C2IAAh0QgigQgUgfQgUgfgBgnQAAg2AngmQAmgmA1AAQA2AAAnAmQAmAmgBA2QABAngVAfQgUAfgiAQIAAB0g");
	this.shape_3.setTransform(0,-14.9,0.885,0.885);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.lightBulb, new cjs.Rectangle(-12.4,-31.9,24.9,35.9), null);


(lib.laptop_END_screen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Az1MMQhQAAAAhQIAA13QAAhQBQAAMAnrAAAQBQAAAABQIAAV3QAABQhQAAg");

	// Layer 2
	this.instance = new lib.laptop_screen();
	this.instance.parent = this;
	this.instance.setTransform(-135,-78);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.laptop_END_screen, new cjs.Rectangle(-135,-78,270,156), null);


(lib.laptop_END = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AwxJ3QgoAAgcgcQgcgcAAgoIAAgsQAAgGAEgEQAEgFAHAAIC5AAIAAuFQAAhVA8g8QA8g8BVAAIX5AAQBVAAA8A8QA8A8AABVIAAOFIC5AAQAHAAAEAFQAEAEAAAGIAAAsQAAAogcAcQgcAcgoAAgAxzIXQAAAbATATQATAUAcAAMAhjAAAQAcAAATgUQATgTAAgbIAAgcIs6AAQgCAdgWAUQgWAUgeABInbAAQgegBgWgUQgVgUgDgdIs6AAgAkMIXQANALASAAIHbAAQASAAANgLQAMgLADgRIo3AAQADARAMALgAMWoTQAiAAAXAYQAYAYAAAhIAANrQAAAegSAVIBXAAIAAuFQAAhJg0gzQgzgzhIAAI35AAQhJAAgzAzQgzAzAABJIAAOFIBXAAQgSgVAAgeIAAtrQAAghAYgYQAXgYAiAAgAs5nmQgPAQAAAUIAANrQAAAVAOAPQAPAPAUAAIYvAAQAUAAAPgPQAOgPAAgVIAAtrQAAgUgPgQQgPgPgVABI4rAAQgVgBgPAPg");
	this.shape.setTransform(0,0,0.795,0.795);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.laptop_END, new cjs.Rectangle(-93,-50.1,186,100.3), null);


(lib.laptop_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAjBQIAAhyIgBgEIgEgBIgMAAIAcgpIAdApIgMAAIgEABIgBAEIAABygAgTBQIAAhBIAWAAIAABBgAhKBQIAAghIAWAAIAAAhg");
	this.shape.setTransform(-0.2,-2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiIB5QgMAAgIgIQgIgIAAgLIAAgLIACgFIAEgBIAQAAIAAifQAAgGAFgFQAFgFAHAAICXAAIAOgUQACgCACAAQADAAACACIANAUIBAAAQAHAAAFAFQAFAFAAAGIAACfIAQAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABAAIABAFIAAALQAAALgIAIQgIAIgLAAgAiZBeQAAAGAFAFQAFAFAHAAIESAAQAHAAAEgFQAFgFAAgGIAAgGIh/AAQgCAFgEADQgEADgGAAIgVAAQgFAAgFgDQgEgDgBgFIiAAAgAhtBNIBYAAIAEABIACAFQAAAFAFAAIAVAAQAFAAABgFIABgFIAEgBIBYAAIAAiOIgYAAIABACQACAEgCACQgBADgDAAIgRAAIAAByIgBAFIgEABIghAAIgEgBIgCgFIAAhyIgQAAQgEAAgBgDQgBgCABgEIACgCIhwAAgABOhMIAmAAIAEABIABAFIAACTIALAAIAAifQAAgFgGAAIg4AAgAiDhSIAACfIALAAIAAiTIACgFIAEgBIB9AAIAHgLIiPAAQgGAAAAAFgAAQhBIAMAAIAEABIABAFIAAByIAWAAIAAhyIACgFIAEgBIALAAIgcgogAgaBCIgEgBIgCgFIAAhLIACgFIAEgBIAgAAIAEABIABAFIAABLIgBAFIgEABgAgVA3IAVAAIAAhBIgVAAgAhRBCIgEgBIgCgFIAAgsIACgDIAEgCIAhAAIAEACIABADIAAAsIgBAFIgEABgAhMA3IAWAAIAAghIgWAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.laptop_4, new cjs.Rectangle(-16.4,-12.1,33,24.2), null);


(lib.laptop_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjApQgOgPAAgVIAAgJQAAgVAOgOQAPgPAUAAQAUAAAPAPQAPAOAAAVIAAAJQAAAVgPAPQgPAOgUAAQgUAAgPgOg");
	this.shape.setTransform(-4.9,-1.3,0.734,0.734);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhZAoIAAgbQAAgXAlgQQAcgNAYAAQAYAAAdANQAlAQAAAXIAAAbg");
	this.shape_1.setTransform(-4.9,6.4,0.734,0.734);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiLChQgPABgLgLQgKgLAAgPIAAgWIAWAAIAAioQAAgJAGgHQAHgGAJAAIBJAAIAAgsQAAgMAJgJQAIgJANABICvAAQAMgBAJAJQAIAJAAAMIAABfQAAAMgIAKQgGAFgIACIAABuIAWAAIAAAWQAAAPgKALQgLALgPgBgAihB9QAAAJAHAGQAGAHAJAAIEXAAQAJAAAGgHQAHgGAAgJIAAgHIlDAAgAiLhBIAACoIEXAAIAAhtIgxAAIgzAyQgFAEgGAAIgFgBQgJgDAAgLIAAgnIgVAAIAAgPIAjAAIAAA2IA4g2IA+AAQAGAAAEgEQAFgFAAgGIAAhfQAAgHgFgEQgEgEgGAAIivAAQgHAAgEAEQgEAEAAAHIAABJIgPAAIAAgPIhJAAQgIAAAAAIgAgOCLIAAgOIAkAAIAAAOgABRhJIAAgOIAOAAIAAAOgAAzhJIAAgOIAPAAIAAAOgAAWhJIAAgOIAPAAIAAAOg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.laptop_3, new cjs.Rectangle(-17.6,-16.1,35.3,32.3), null);


(lib.laptop_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGBfIAAgeQAAgWAMgSQAMgRAUgIQgYgPAAgcQAAgVAPgPQAPgPAUAAQAWAAAPAPQAPAPAAAVQAAAcgYAPQATAIAMARQAMASAAAWIAAAegAgjAdQgPAPAAAVIAAAKIBlAAIAAgKQAAgVgPgPQgPgPgVAAQgUAAgPAPgAgVhBQgJAJAAANQAAANAJAJQAJAJAMAAQANAAAJgJQAKgJAAgNQAAgNgKgJQgJgJgNAAQgMAAgJAJg");
	this.shape.setTransform(0,-0.4,0.628,0.628);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiQB9QgMAAgKgJQgJgKAAgMIAAgQQAAgDACgCQADgDAEAAIAPAAIAAimQAAgMAIgHQAIgJALAAID5ABQALAAAIAIQAIAHAAAMIAACmIAPAAQADAAADADQACACAAADIAAAQQABAMgKAKQgJAJgMAAgAifBeQAAAGAEAEQAFAFAGAAIEhAAQAGAAAFgFQAEgEAAgGIAAgIIk/AAgAiIBGIERAAIAAiTIkRAAgAiEhoQgEACAAAGIAAADIERAAIAAgDQAAgGgEgCQgDgEgFAAIj5AAQgFAAgDAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.laptop_2, new cjs.Rectangle(-17.5,-12.5,35.1,25), null);


(lib.laptop_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiQB9QgMAAgKgJQgJgKAAgMIAAgQQAAgDACgCQADgDAEAAIAPAAIAAimQAAgMAIgHQAIgJALAAID5ABQALAAAIAIQAIAHAAAMIAACmIAPAAQADAAADADQACACAAADIAAAQQABAMgKAKQgJAJgMAAgAifBeQAAAGAEAEQAFAFAGAAIEhAAQAGAAAFgFQAEgEAAgGIAAgIIk/AAgAiIBGIERAAIAAiTIkRAAgAiEhoQgEACAAAGIAAADIERAAIAAgDQAAgGgEgCQgDgEgFAAIj5AAQgFAAgDAEg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnA4IAAgNQAAgRALgMQAMgMAQAAQAQAAAMAMQAMAMAAARIAAANgAgSgJQgIgIAAgLQAAgLAIgIQAIgIAKAAQAMAAAHAIQAIAIAAALQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_1.setTransform(0,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.laptop_1, new cjs.Rectangle(-17.5,-12.5,35.1,25), null);


(lib.CTA_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWAnIAAhNIAtAAIAAANIgeAAIAAASIAbAAIAAAMIgbAAIAAAVIAeAAIAAANg");
	this.shape.setTransform(42.7,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAnIAAhNIAtAAIAAANIgeAAIAAASIAbAAIAAAMIgbAAIAAAVIAeAAIAAANg");
	this.shape_1.setTransform(36.6,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AALAnIgPgdIgJAAIAAAdIgPAAIAAhNIAZAAQAMAAAHAFQAGAGAAALIgBAHQAAADgCADQgEAGgGADIAUAhgAgNgDIAKAAIAEgBIAEgCQADgDAAgGQAAgFgDgDIgEgBIgDgBIgLAAg");
	this.shape_2.setTransform(30.3,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAnIAAhNIAtAAIAAANIgeAAIAAASIAbAAIAAAMIgbAAIAAAig");
	this.shape_3.setTransform(23.9,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOAnIgNg1IgBgMIAAAEIgCAIIgMA1IgSAAIgShNIAQAAIAKAwIABAOIABgFIACgJIALgwIASAAIAMAwIACAOIACgOIAJgwIARAAIgSBNg");
	this.shape_4.setTransform(12.2,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKAnIgJgEIgIgGQgDgEgCgEQgDgFgBgFIgBgLIABgLIAEgKQAFgIAIgFQAEgDAFgBIAKgBQAMAAAJAFQAHAFAFAJQAFAJgBAMQABALgFAJQgFAKgHAEQgJAFgMAAIgKgBgAgFgZIgFACIgFAFIgDAFQgDAGABAHIAAAIIACAGQADAGAFADIAFADIAFABQAFAAAEgCQAEgCADgDQAGgIAAgMQAAgHgDgGQgCgHgFgDIgGgCIgGgBIgFABg");
	this.shape_5.setTransform(2.5,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAMAnIgZgyIgEgLIAAAFIABAGIAAAyIgQAAIAAhNIAWAAIAXAwIAGANIgBgMIAAgxIAOAAIAABNg");
	this.shape_6.setTransform(-6,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHAnIAAhAIgVAAIAAgNIA5AAIAAANIgWAAIAABAg");
	this.shape_7.setTransform(-16.3,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AALAnIgPgdIgJAAIAAAdIgPAAIAAhNIAZAAQAMAAAHAFQAGAGAAALIgBAHQAAADgCADQgEAGgGADIAUAhgAgNgDIAKAAIAEgBIAEgCQADgDAAgGQAAgFgDgDIgEgBIgDgBIgLAAg");
	this.shape_8.setTransform(-22.3,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAVAnIgIgWIgZAAIgJAWIgPAAIAchNIAQAAIAdBNgAAJAEIgHgUIgCgKIgCAKIgHAUIASAAg");
	this.shape_9.setTransform(-29.8,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHAnIAAhAIgVAAIAAgNIA5AAIAAANIgWAAIAABAg");
	this.shape_10.setTransform(-36.5,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNAnIgMgCIAEgPIALAEIAKABQAFAAADgDQADgBAAgFQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBIgGgEIgIgFQgKgEgFgFQgCgDgCgDQgBgEAAgEQAAgJAHgFQADgDAFgCIAKgBIAKAAIALAEIgDAMIgJgCIgJgBQgEAAgDACQgDACAAADQAAADAEADIANAHIAHAEIAGAFQAFAFAAAJQAAAFgCAEQgBAEgEADQgDAEgFABQgFACgGAAIgNgBg");
	this.shape_11.setTransform(-42.5,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.CTA_text, new cjs.Rectangle(-47.6,-9,95.3,18.2), null);


(lib.CTA_SHINE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-33.2,0,33.3,0).s().p("AlMCpIAAlRIKZAAIAAFRg");
	this.shape.setTransform(0,0,1,1.353,0,-137.7,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CTA_SHINE, new cjs.Rectangle(-48.6,-16.8,97.3,33.8), null);


(lib.CTA_shape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD7A2A").s().p("An5CAQg1AAgmgmQglglAAg1QAAg0AlgmQAmglA1AAIPzAAQA1AAAmAlQAlAmAAA0QAAA1glAlQgmAmg1AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CTA_shape, new cjs.Rectangle(-63.4,-12.8,126.9,25.6), null);


(lib.cloud_dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhtAKIAAgTIDbAAIAAATg");
	this.shape.setTransform(0,0,0.136,0.976);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud_dot, new cjs.Rectangle(-1.5,-1,3,2), null);


(lib.bubble_people = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXB4IgTg2IglAAIgoA0QgDAFgHACQgGACgFgDQgOgDAAgPIAAgoIgUAAQgVAAgPgPQgOgPAAgUIAAhjQAAgVAOgPQAPgOAVAAIFdAAQAUAAAPAOQAPAPAAAVIAABjQAAAUgPAPQgPAPgUAAIgeAAIAAAoQAAAPgOADQgOAGgIgMIgng0IgmAAIgTA2QgDAOgOAAQgPAAgEgOgAgbAuIAXBEIAWhEIA+AAIAtA8IAAg8IAyAAQAMAAAJgJQAJgIAAgNIAAhjQAAgMgJgJQgJgJgMAAIldAAQgMAAgJAJQgJAJAAAMIAABjQAAANAJAIQAJAJAMAAIAoAAIAAA8IAtg8g");
	this.shape.setTransform(0,-7.8,0.774,0.774);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag4AnIAAgcQABgWAegPQAYgMAYAAQAPAAASAGIgGASQgNgEgOAAQgTAAgSAIQgWAKABALIAAAcg");
	this.shape_1.setTransform(-11.5,15.2,0.774,0.774);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiAjQgPgOAAgVQAAgTAPgPQAPgPATAAQAVAAAPAPQAOAPAAATQAAAVgOAOQgPAPgVAAQgTAAgPgPgAgUgUQgJAJAAALQAAAMAJAJQAJAJALAAQAMAAAJgJQAJgJAAgMQAAgLgJgJQgJgJgMAAQgLAAgJAJg");
	this.shape_2.setTransform(-9.7,7.3,0.774,0.774);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAlAnIAAgcQAAgLgWgKQgSgIgUAAQgMAAgPAEIgGgSQASgGAPAAQAaAAAYAMQAeAPAAAWIAAAcg");
	this.shape_3.setTransform(10.7,15.2,0.774,0.774);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiAjQgPgOAAgVQAAgTAPgPQAPgPATAAQAVAAAOAPQAPAPAAATQAAAVgPAOQgOAPgVAAQgTAAgPgPgAgUgUQgJAJAAALQAAAMAJAJQAJAJALAAQANAAAIgJQAJgJAAgMQAAgLgJgJQgIgJgNAAQgLAAgJAJg");
	this.shape_4.setTransform(8.9,7.3,0.774,0.774);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA8AnIAAgcQAAgLgVgKQgTgIgUAAQgSAAgUAIQgVAKAAALIAAAcIgUAAIAAgcQAAgWAegPQAYgMAZAAQAaAAAYAMQAeAPAAAWIAAAcg");
	this.shape_5.setTransform(-0.4,15.2,0.774,0.774);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiAjQgPgOAAgVQAAgTAPgPQAPgPATAAQAVAAAOAPQAPAPAAATQAAAVgPAOQgOAPgVAAQgTAAgPgPgAgUgUQgJAJAAALQAAAMAJAJQAJAJALAAQANAAAIgJQAJgJAAgMQAAgLgJgJQgIgJgNAAQgLAAgJAJg");
	this.shape_6.setTransform(-0.4,7.3,0.774,0.774);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPB7IgUhBIgxAAIgsA5IgRAAIAAg7IgsAAIgYgbIAAh7IAfgaIFpgCIAjAiIAAB5IggAZIgxABIAAA5IgSAAIgrg6IgwABIgVBAg");
	this.shape_7.setTransform(0.1,-8,0.774,0.774);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bubble_people, new cjs.Rectangle(-17.4,-18.2,34.8,36.4), null);


(lib.black_box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,2,0,3).dr(-92.7,-39.95,185.4,79.9);
	this.shape.setTransform(0,0,0.852,0.654);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.black_box, new cjs.Rectangle(-79.9,-27.1,159.9,54.2), null);


(lib.BG_gradient = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FE703D","#FF8817"],[0,1],-150,0,150,0).s().p("A3bTYMAAAgmvMAu3AAAMAAAAmvg");
	this.shape.setTransform(0,0,1,1.008);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BG_gradient, new cjs.Rectangle(-150,-125,300,250), null);


(lib.upArrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.upArrow_bounce();
	this.instance.parent = this;
	this.instance.setTransform(0,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-7.7,y:0.2},0).wait(2).to({y:0},0).wait(1).to({y:-0.2},0).wait(1).to({y:-0.6},0).wait(1).to({y:-1},0).wait(1).to({y:-1.3},0).wait(1).to({y:-1.5},0).wait(1).to({y:-1.7},0).wait(2).to({regY:0,y:6},0).wait(2).to({regY:-7.7,y:-1.7},0).wait(2).to({y:-1.5},0).wait(1).to({y:-1.3},0).wait(1).to({y:-0.9},0).wait(1).to({y:-0.5},0).wait(1).to({y:-0.2},0).wait(1).to({y:0},0).wait(1).to({y:0.2},0).wait(2).to({regY:0,y:8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-9.6,15.6,19.9);


(lib.speed_group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BG 
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgnoAjIQgQAAgPgDQiEgKhrhQQhrhRgth+IgBgCQirnhgJn9QgKnyCRndQCQndEemZQElmjGbkxQGdkxHkieQHbibHyAAQH0AAHZCbQHmCeGbExQGcExEkGjQEeGYCRHeQCSHegKHxQgLH9iqHhIgBACQgtB/hsBRQhsBRiFAIQgOADgPAAgAtu8UQm3CQl3EWQl3EWkKF6QkEFxiDGuQiDGvAKHEQALHNCdG4IAAABQAQAsAnAbQAnAbAwAAIAXACMBOhAAAIAYgCQAvAAAngbQAngbAQgsIAAgBQCdm4AKnNQAKnEiDmvQiDmukDlxQkJl5l4kXQl3kWm2iQQmuiNnCAAQnCAAmsCNg");
	this.shape.setTransform(0,0,0.057,0.057);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(140));

	// needle
	this.instance = new lib.speed_Dial();
	this.instance.parent = this;
	this.instance.setTransform(0.1,5.1,1,1,-37.9,0,0,-6,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:-37.7,x:1.6,y:-2.7},0).wait(1).to({rotation:-37,x:1.7},0).wait(1).to({rotation:-35.7,x:1.9},0).wait(1).to({rotation:-33.7,x:2.2,y:-2.6},0).wait(1).to({rotation:-30.9,x:2.5,y:-2.5},0).wait(1).to({rotation:-27.5,x:3,y:-2.3},0).wait(1).to({rotation:-23.6,x:3.5,y:-2.1},0).wait(1).to({rotation:-19.8,x:3.9,y:-1.9},0).wait(1).to({rotation:-16.2,x:4.4,y:-1.6},0).wait(1).to({rotation:-13.1,x:4.7,y:-1.3},0).wait(1).to({rotation:-10.4,x:5,y:-1.1},0).wait(1).to({rotation:-8.1,x:5.3,y:-0.9},0).wait(1).to({rotation:-6.2,x:5.5,y:-0.7},0).wait(1).to({rotation:-4.7,x:5.6,y:-0.6},0).wait(1).to({rotation:-3.4,x:5.7,y:-0.5},0).wait(1).to({rotation:-2.4,x:5.8,y:-0.4},0).wait(1).to({rotation:-1.6,x:5.9,y:-0.3},0).wait(1).to({rotation:-1,x:6,y:-0.2},0).wait(1).to({rotation:-0.5},0).wait(1).to({rotation:-0.2,y:-0.1},0).wait(1).to({rotation:-0.1},0).wait(1).to({regX:-6.1,regY:5.2,rotation:0,x:0,y:5.1},0).wait(1).to({regX:0,regY:0,rotation:-0.2,x:6.1,y:-0.1},0).wait(1).to({rotation:-0.8,x:6,y:-0.2},0).wait(1).to({rotation:-1.8,x:5.9,y:-0.3},0).wait(1).to({rotation:-3.5,x:5.8,y:-0.5},0).wait(1).to({rotation:-5.8,x:5.6,y:-0.7},0).wait(1).to({rotation:-8.7,x:5.3,y:-1},0).wait(1).to({rotation:-12,x:4.9,y:-1.3},0).wait(1).to({rotation:-15.6,x:4.5,y:-1.6},0).wait(1).to({rotation:-19.1,x:4.1,y:-1.8},0).wait(1).to({rotation:-22.3,x:3.7,y:-2},0).wait(1).to({rotation:-25.1,x:3.3,y:-2.2},0).wait(1).to({rotation:-27.6,x:3,y:-2.4},0).wait(1).to({rotation:-29.7,x:2.7,y:-2.5},0).wait(1).to({rotation:-31.4,x:2.5},0).wait(1).to({rotation:-32.9,x:2.3,y:-2.6},0).wait(1).to({rotation:-34.1,x:2.2,y:-2.7},0).wait(1).to({rotation:-35.1,x:2},0).wait(1).to({rotation:-36,x:1.9},0).wait(1).to({rotation:-36.6,x:1.8},0).wait(1).to({rotation:-37.1,y:-2.8},0).wait(1).to({rotation:-37.5,x:1.7},0).wait(1).to({rotation:-37.8},0).wait(1).to({rotation:-37.9,x:1.6},0).wait(1).to({regX:-6,regY:5.2,x:0.1,y:5.1},0).wait(1).to({regX:0,regY:0,rotation:-37.7,x:1.6,y:-2.7},0).wait(1).to({rotation:-37,x:1.7},0).wait(1).to({rotation:-35.7,x:1.9},0).wait(1).to({rotation:-33.7,x:2.2,y:-2.6},0).wait(1).to({rotation:-30.9,x:2.5,y:-2.5},0).wait(1).to({rotation:-27.5,x:3,y:-2.3},0).wait(1).to({rotation:-23.6,x:3.5,y:-2.1},0).wait(1).to({rotation:-19.8,x:3.9,y:-1.9},0).wait(1).to({rotation:-16.2,x:4.4,y:-1.6},0).wait(1).to({rotation:-13.1,x:4.7,y:-1.3},0).wait(1).to({rotation:-10.4,x:5,y:-1.1},0).wait(1).to({rotation:-8.1,x:5.3,y:-0.9},0).wait(1).to({rotation:-6.2,x:5.5,y:-0.7},0).wait(1).to({rotation:-4.7,x:5.6,y:-0.6},0).wait(1).to({rotation:-3.4,x:5.7,y:-0.5},0).wait(1).to({rotation:-2.4,x:5.8,y:-0.4},0).wait(1).to({rotation:-1.6,x:5.9,y:-0.3},0).wait(1).to({rotation:-1,x:6,y:-0.2},0).wait(1).to({rotation:-0.5},0).wait(1).to({rotation:-0.2,y:-0.1},0).wait(1).to({rotation:-0.1},0).wait(1).to({regX:-6.1,regY:5.2,rotation:0,x:0,y:5.1},0).wait(1).to({regX:0,regY:0,rotation:-0.2,x:6.1,y:-0.1},0).wait(1).to({rotation:-0.8,x:6,y:-0.2},0).wait(1).to({rotation:-1.8,x:5.9,y:-0.3},0).wait(1).to({rotation:-3.5,x:5.8,y:-0.5},0).wait(1).to({rotation:-5.8,x:5.6,y:-0.7},0).wait(1).to({rotation:-8.7,x:5.3,y:-1},0).wait(1).to({rotation:-12,x:4.9,y:-1.3},0).wait(1).to({rotation:-15.6,x:4.5,y:-1.6},0).wait(1).to({rotation:-19.1,x:4.1,y:-1.8},0).wait(1).to({rotation:-22.3,x:3.7,y:-2},0).wait(1).to({rotation:-25.1,x:3.3,y:-2.2},0).wait(1).to({rotation:-27.6,x:3,y:-2.4},0).wait(1).to({rotation:-29.7,x:2.7,y:-2.5},0).wait(1).to({rotation:-31.4,x:2.5},0).wait(1).to({rotation:-32.9,x:2.3,y:-2.6},0).wait(1).to({rotation:-34.1,x:2.2,y:-2.7},0).wait(1).to({rotation:-35.1,x:2},0).wait(1).to({rotation:-36,x:1.9},0).wait(1).to({rotation:-36.6,x:1.8},0).wait(1).to({rotation:-37.1,y:-2.8},0).wait(1).to({rotation:-37.5,x:1.7},0).wait(1).to({rotation:-37.8},0).wait(1).to({rotation:-37.9,x:1.6},0).wait(1).to({regX:-6,regY:5.2,x:0.1,y:5.1},0).wait(1).to({regX:0,regY:0,rotation:-37.7,x:1.6,y:-2.7},0).wait(1).to({rotation:-37,x:1.7},0).wait(1).to({rotation:-35.7,x:1.9},0).wait(1).to({rotation:-33.7,x:2.2,y:-2.6},0).wait(1).to({rotation:-30.9,x:2.5,y:-2.5},0).wait(1).to({rotation:-27.5,x:3,y:-2.3},0).wait(1).to({rotation:-23.6,x:3.5,y:-2.1},0).wait(1).to({rotation:-19.8,x:3.9,y:-1.9},0).wait(1).to({rotation:-16.2,x:4.4,y:-1.6},0).wait(1).to({rotation:-13.1,x:4.7,y:-1.3},0).wait(1).to({rotation:-10.4,x:5,y:-1.1},0).wait(1).to({rotation:-8.1,x:5.3,y:-0.9},0).wait(1).to({rotation:-6.2,x:5.5,y:-0.7},0).wait(1).to({rotation:-4.7,x:5.6,y:-0.6},0).wait(1).to({rotation:-3.4,x:5.7,y:-0.5},0).wait(1).to({rotation:-2.4,x:5.8,y:-0.4},0).wait(1).to({rotation:-1.6,x:5.9,y:-0.3},0).wait(1).to({rotation:-1,x:6,y:-0.2},0).wait(1).to({rotation:-0.5},0).wait(1).to({rotation:-0.2,y:-0.1},0).wait(1).to({rotation:-0.1},0).wait(1).to({regX:-6.1,regY:5.2,rotation:0,x:0,y:5.1},0).wait(1).to({regX:0,regY:0,rotation:-0.2,x:6.1,y:-0.1},0).wait(1).to({rotation:-0.8,x:6,y:-0.2},0).wait(1).to({rotation:-1.8,x:5.9,y:-0.3},0).wait(1).to({rotation:-3.5,x:5.8,y:-0.5},0).wait(1).to({rotation:-5.8,x:5.6,y:-0.7},0).wait(1).to({rotation:-8.7,x:5.3,y:-1},0).wait(1).to({rotation:-12,x:4.9,y:-1.3},0).wait(1).to({rotation:-15.6,x:4.5,y:-1.6},0).wait(1).to({rotation:-19.1,x:4.1,y:-1.8},0).wait(1).to({rotation:-22.3,x:3.7,y:-2},0).wait(1).to({rotation:-25.1,x:3.3,y:-2.2},0).wait(1).to({rotation:-27.6,x:3,y:-2.4},0).wait(1).to({rotation:-29.7,x:2.7,y:-2.5},0).wait(1).to({rotation:-31.4,x:2.5},0).wait(1).to({rotation:-32.9,x:2.3,y:-2.6},0).wait(1).to({rotation:-34.1,x:2.2,y:-2.7},0).wait(1).to({rotation:-35.1,x:2},0).wait(1).to({rotation:-36,x:1.9},0).wait(1).to({rotation:-36.6,x:1.8},0).wait(1).to({rotation:-37.1,y:-2.8},0).wait(1).to({rotation:-37.5,x:1.7},0).wait(1).to({rotation:-37.8},0).wait(1).to({rotation:-37.9,x:1.6},0).wait(1).to({regX:-6,regY:5.2,x:0.1,y:5.1},0).wait(2));

	// BG 
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A7xRwIgDgBIgKgBIgBAAIgBAAIgcgIIgCgBIgVgLIgFgDIgBgBIgLgIIgUgUIgQgYIgLgbIgFgUIgCgeIACgQIAAgEIABgDIAAgBQA0kjB4kSQB3kSCxjrQCyjuDnjAQDmi/ELiEQEJiEEkhDQEkhDEpACQEpACEjBIQEjBHEICIIAAAAQA4AdAnAwQAoAwARA6QARA8gJA+QgIA/ggA1IkAGnIAAABIAAAAQgpBDhEAmQhCAlhNAAQgzAAgxgRQmMiJmkgCQmZgBmFB/QmGCAlID0QlRD6jtFaIgBAAIgHAKIgDADIgRAQIgBABIgUAOIgKAGIgbAKIgaAEgAmVpbQk7Ccj9D2Qj5DyilEzQBDg5BLg3QFvkQGziPQGxiPHLACQHWACG7CbIAAAAID/mmIAAgCQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQnZj0oYgEIgQAAQoQAAnUDpg");
	this.shape_1.setTransform(-3.3,-2.9,0.057,0.057);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("EgnoAjIQgQAAgPgDQiEgKhrhQQhrhRgth+IgBgCQirnhgJn9QgKnyCRndQCQndEemZQElmjGbkxQGdkxHkieQHbibHyAAQH0AAHZCbQHmCeGbExQGcExEkGjQEeGYCRHeQCSHegKHxQgLH9iqHhIgBACQgtB/hsBRQhsBRiFAIQgOADgPAAgAtu8UQm3CQl3EWQl3EWkKF6QkEFxiDGuQiDGvAKHEQALHNCdG4IAAABQAQAsAnAbQAnAbAwAAIAXACMBOhAAAIAYgCQAvAAAngbQAngbAQgsIAAgBQCdm4AKnNQAKnEiDmvQiDmukDlxQkJl5l4kXQl3kWm2iQQmuiNnCAAQnCAAmsCNg");
	this.shape_2.setTransform(0,0,0.057,0.057);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkzDwQgSgegIgkQgJgkABgnQAChTAnhLQAphQBIgwQBSg0BpAAQBlAABRA0QBIAuArBQQApBLAEBSQAEBTgkA9g");
	this.shape_3.setTransform(0.1,-0.2,0.494,0.494);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.7,-16.5,35.5,29.2);


(lib.CTA_group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(8));

	// ORANGE (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("An5CAQg1AAgmglQglgmAAg1QAAg0AlgmQAmglA1AAIPzAAQA1AAAmAlQAlAmAAA0QAAA1glAmQgmAlg1AAg");
	var mask_graphics_1 = new cjs.Graphics().p("AoACCQg2AAgmgmQgmgmAAg2QAAg1AmgmQAmgmA2AAIQBAAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAg");
	var mask_graphics_2 = new cjs.Graphics().p("AoHCDQg2AAgngmQgmgnAAg2QAAg1AmgnQAngmA2AAIQPAAQA2AAAnAmQAmAnAAA1QAAA2gmAnQgnAmg2AAg");
	var mask_graphics_3 = new cjs.Graphics().p("AoMCFQg3AAgngnQgngnAAg3QAAg2AngnQAngnA3AAIQZAAQA3AAAnAnQAnAnAAA2QAAA3gnAnQgnAng3AAg");
	var mask_graphics_4 = new cjs.Graphics().p("AoRCGQg3AAgognQgngoAAg3QAAg2AngoQAognA3AAIQjAAQA3AAAoAnQAnAoAAA2QAAA3gnAoQgoAng3AAg");
	var mask_graphics_5 = new cjs.Graphics().p("AoVCHQg3AAgogoQgognAAg4QAAg3AognQAogoA3AAIQrAAQA3AAAoAoQAoAnAAA3QAAA4goAnQgoAog3AAg");
	var mask_graphics_6 = new cjs.Graphics().p("AoYCIQg4AAgngoQgogoAAg4QAAg3AogoQAngoA4AAIQxAAQA4AAAnAoQAoAoAAA3QAAA4goAoQgnAog4AAg");
	var mask_graphics_7 = new cjs.Graphics().p("AoaCIQg4AAgogoQgogoAAg4QAAg3AogoQAogoA4AAIQ1AAQA4AAAoAoQAoAoAAA3QAAA4goAoQgoAog4AAg");
	var mask_graphics_8 = new cjs.Graphics().p("AobCJQg4AAgogoQgogoAAg5QAAg4AogoQAogoA4AAIQ3AAQA4AAAoAoQAoAoAAA4QAAA5goAoQgoAog4AAg");
	var mask_graphics_9 = new cjs.Graphics().p("AobCJQg5AAgogoQgogoAAg5QAAg4AogoQAogoA5AAIQ3AAQA5AAAoAoQAoAoAAA4QAAA5goAoQgoAog5AAg");
	var mask_graphics_10 = new cjs.Graphics().p("AobCIQg4AAgogoQgogoAAg4QAAg3AogoQAogoA4AAIQ3AAQA4AAAoAoQAoAoAAA3QAAA4goAoQgoAog4AAg");
	var mask_graphics_11 = new cjs.Graphics().p("AoZCIQg4AAgogoQgogoAAg4QAAg3AogoQAogoA4AAIQzAAQA4AAAoAoQAoAoAAA3QAAA4goAoQgoAog4AAg");
	var mask_graphics_12 = new cjs.Graphics().p("AoVCHQg4AAgogoQgngnAAg4QAAg3AngnQAogoA4AAIQrAAQA4AAAoAoQAnAnAAA3QAAA4gnAnQgoAog4AAg");
	var mask_graphics_13 = new cjs.Graphics().p("AoQCGQg4AAgngnQgngoAAg3QAAg2AngoQAngnA4AAIQhAAQA4AAAnAnQAnAoAAA2QAAA3gnAoQgnAng4AAg");
	var mask_graphics_14 = new cjs.Graphics().p("AoKCEQg3AAgmgnQgngmAAg3QAAg2AngmQAmgnA3AAIQVAAQA3AAAmAnQAnAmAAA2QAAA3gnAmQgmAng3AAg");
	var mask_graphics_15 = new cjs.Graphics().p("AoCCCQg2AAgmgmQgngmAAg2QAAg1AngmQAmgmA2AAIQFAAQA2AAAmAmQAnAmAAA1QAAA2gnAmQgmAmg2AAg");
	var mask_graphics_16 = new cjs.Graphics().p("An5CAQg1AAgmglQglgmAAg1QAAg0AlgmQAmglA1AAIPzAAQA1AAAmAlQAlAmAAA0QAAA1glAmQgmAlg1AAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:0,y:0}).wait(1).to({graphics:mask_graphics_2,x:0,y:0}).wait(1).to({graphics:mask_graphics_3,x:0,y:0}).wait(1).to({graphics:mask_graphics_4,x:0,y:0}).wait(1).to({graphics:mask_graphics_5,x:0,y:0}).wait(1).to({graphics:mask_graphics_6,x:0,y:0}).wait(1).to({graphics:mask_graphics_7,x:0,y:0}).wait(1).to({graphics:mask_graphics_8,x:0,y:0}).wait(1).to({graphics:mask_graphics_9,x:0,y:0}).wait(1).to({graphics:mask_graphics_10,x:0,y:0}).wait(1).to({graphics:mask_graphics_11,x:0,y:0}).wait(1).to({graphics:mask_graphics_12,x:0,y:0}).wait(1).to({graphics:mask_graphics_13,x:0,y:0}).wait(1).to({graphics:mask_graphics_14,x:0,y:0}).wait(1).to({graphics:mask_graphics_15,x:0,y:0}).wait(1).to({graphics:mask_graphics_16,x:0,y:0}).wait(1));

	// SHINE
	this.instance = new lib.CTA_SHINE();
	this.instance.parent = this;
	this.instance.setTransform(-103.3,0.6);
	this.instance.alpha = 0.301;
	this.instance.compositeOperation = "lighter";

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:82.2},8,cjs.Ease.get(-1)).to({_off:true},1).wait(8));

	// TEXT
	this.instance_1 = new lib.CTA_text();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.07,scaleY:1.07},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},7,cjs.Ease.get(-1)).wait(1));

	// ORANGE
	this.instance_2 = new lib.CTA_shape();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.07,scaleY:1.07},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},7,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.4,-12.8,126.9,25.6);


// stage content:
(lib.mtgmagicgtmbannerconnectionicons728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		window.canvasCta = this.callToAction;
	}
	this.frame_359 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(359).call(this.frame_359).wait(1));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Eg4ugHHMBxdAAAIAAOPMhxdAAAg");
	this.shape.setTransform(364,45,1.003,0.988);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// laptop_END
	this.instance = new lib.laptop_END();
	this.instance.parent = this;
	this.instance.setTransform(422.6,45.1,0.249,0.249,0,0,0,0.4,0.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(340).to({_off:false},0).to({regX:0,regY:0,scaleX:0.78,scaleY:0.78,x:422.5,y:45,alpha:1},8,cjs.Ease.get(1)).to({scaleX:0.73,scaleY:0.73},5,cjs.Ease.get(-1)).wait(7));

	// laptop_END_screen
	this.instance_1 = new lib.laptop_END_screen();
	this.instance_1.parent = this;
	this.instance_1.setTransform(422.6,45.1,0.124,0.124,0,0,0,0.8,0.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(340).to({_off:false},0).to({regX:0,regY:0.2,scaleX:0.39,scaleY:0.39,x:422.5,alpha:1},8,cjs.Ease.get(1)).to({regY:0.1,scaleX:0.37,scaleY:0.37},5,cjs.Ease.get(-1)).wait(7));

	// txtEnd2
	this.instance_2 = new lib.txtEnd2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(180.8,52.3,0.414,0.414,0,0,0,0.4,0.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(338).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1.3,scaleY:1.3,y:61.6,alpha:1},8,cjs.Ease.get(1)).to({scaleX:1.22,scaleY:1.22,x:180.7,y:60.6},5,cjs.Ease.get(-1)).wait(9));

	// txtEnd1
	this.instance_3 = new lib.txtEnd1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(180.7,37.5,0.414,0.414,0,0,0,0.4,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(337).to({_off:false},0).to({regX:0.1,scaleX:1.3,scaleY:1.3,y:28.3,alpha:1},8,cjs.Ease.get(1)).to({scaleX:1.22,scaleY:1.22,y:29.2},5,cjs.Ease.get(-1)).wait(10));

	// upArrow
	this.instance_4 = new lib.upArrow();
	this.instance_4.parent = this;
	this.instance_4.setTransform(101.4,63.9,0.438,0.438,90,0,0,0.1,-0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(248).to({_off:false},0).to({regX:0,regY:0,scaleX:1.46,scaleY:1.46,x:101.3,y:63.8},5,cjs.Ease.get(1)).wait(78).to({regX:0.1,regY:-0.1,scaleX:0.44,scaleY:0.44,x:101.4,y:63.9},7,cjs.Ease.get(-1)).to({_off:true},1).wait(21));

	// bubble_people
	this.instance_5 = new lib.bubble_people();
	this.instance_5.parent = this;
	this.instance_5.setTransform(410.9,64.5,0.274,0.274,0,0,0,0.6,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(241).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1.13,scaleY:1.13,y:64.6},7,cjs.Ease.get(1)).to({regY:0,scaleX:1.01,scaleY:1.01,y:64.5},6,cjs.Ease.get(-1)).wait(77).to({regX:0.6,scaleX:0.27,scaleY:0.27},7,cjs.Ease.get(-1)).to({_off:true},1).wait(21));

	// laptop_4
	this.instance_6 = new lib.laptop_4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(42.5,27.2,0.398,0.398,0,0,0,-0.1,0.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(237).to({_off:false},0).to({regX:0,regY:0,scaleX:1.64,scaleY:1.64,x:42.6,y:27.1},7,cjs.Ease.get(1)).to({scaleX:1.46,scaleY:1.46},6,cjs.Ease.get(-1)).wait(81).to({regX:-0.1,regY:0.2,scaleX:0.4,scaleY:0.4,x:42.5,y:27.2},7,cjs.Ease.get(-1)).to({_off:true},1).wait(21));

	// speed_group
	this.instance_7 = new lib.speed_group();
	this.instance_7.parent = this;
	this.instance_7.setTransform(481,23.5,0.303,0.303,0,0,0,0.1,0.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(233).to({_off:false},0).to({scaleX:1.25,scaleY:1.25},7,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:1.11,scaleY:1.11,x:480.9,y:23.4},6,cjs.Ease.get(-1)).wait(85).to({regX:0.1,regY:0.1,scaleX:0.3,scaleY:0.3,x:481,y:23.5},7,cjs.Ease.get(-1)).to({_off:true},1).wait(21));

	// share_group
	this.instance_8 = new lib.share_group();
	this.instance_8.parent = this;
	this.instance_8.setTransform(101.3,67.1,0.19,0.19,0,0,0,0.6,0.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(125).to({_off:false},0).to({regX:0.2,regY:0.2,scaleX:0.78,scaleY:0.78,x:101.4},7,cjs.Ease.get(1)).to({regX:0.1,scaleX:0.7,scaleY:0.7,x:101.3},6,cjs.Ease.get(-1)).wait(80).to({regX:0.6,regY:0.8,scaleX:0.19,scaleY:0.19},5,cjs.Ease.get(-1)).to({_off:true},1).wait(136));

	// laptop_3
	this.instance_9 = new lib.laptop_3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(410.7,64.7,0.236,0.236,0,0,0,0.7,0.7);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(122).to({_off:false},0).to({regX:0.1,regY:0.2,scaleX:0.97,scaleY:0.97,x:410.6},7,cjs.Ease.get(1)).to({regY:0.1,scaleX:0.87,scaleY:0.87,y:64.6},6,cjs.Ease.get(-1)).wait(83).to({regX:0.7,regY:0.7,scaleX:0.24,scaleY:0.24,x:410.7,y:64.7},5,cjs.Ease.get(-1)).to({_off:true},1).wait(136));

	// question
	this.instance_10 = new lib.question();
	this.instance_10.parent = this;
	this.instance_10.setTransform(38.9,26.7,0.197,0.197,0,0,0,0.5,0);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(119).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.81,scaleY:0.81,y:26.8},7,cjs.Ease.get(1)).to({regY:0,scaleX:0.73,scaleY:0.73,y:26.7},6,cjs.Ease.get(-1)).wait(86).to({regX:0.5,scaleX:0.2,scaleY:0.2},5,cjs.Ease.get(-1)).to({_off:true},1).wait(136));

	// lightBulb
	this.instance_11 = new lib.lightBulb();
	this.instance_11.parent = this;
	this.instance_11.setTransform(481.2,36.1,0.207,0.207,-105,0,0,-0.8,1.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(13).to({_off:false},0).wait(1).to({regX:0,regY:-14,scaleX:0.23,scaleY:0.23,rotation:-101.8,x:477.8,y:36.6},0).wait(1).to({scaleX:0.29,scaleY:0.29,rotation:-90.4,x:476.7,y:35.9},0).wait(1).to({scaleX:0.42,scaleY:0.42,rotation:-69.3,x:475.4,y:33.5},0).wait(1).to({scaleX:0.57,scaleY:0.57,rotation:-42.3,x:475.6,y:29.4},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-18.5,x:478.2,y:25.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-1.9,x:481.3,y:23.9},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:8.3,x:483.6,y:23.2},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:13.5,x:484.9,y:23.1},0).wait(1).to({regX:0.2,regY:0.1,scaleX:0.91,scaleY:0.91,rotation:15,x:481.1,y:36.1},0).wait(2).to({regX:0,regY:-14,scaleX:0.9,scaleY:0.9,rotation:14.5,x:484,y:23.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:12.6,x:483.6,y:23.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:9.3,x:482.8,y:24.1},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:5.6,x:482,y:24.4},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:2.8,x:481.4,y:24.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:1.1,x:481.1,y:24.8},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:0.2,x:480.9,y:24.9},0).wait(1).to({regX:0.2,regY:0.1,scaleX:0.79,scaleY:0.79,rotation:0,x:481.1,y:36.1},0).wait(187).to({regX:0.8,regY:0.5,scaleX:0.21,scaleY:0.21,x:481.2,y:27.4},5,cjs.Ease.get(-1)).to({_off:true},1).wait(136));

	// laptop_2
	this.instance_12 = new lib.laptop_2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(38.6,28.7,0.328,0.328,0,0,0,0,0.1);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(17).to({_off:false},0).to({regY:0,scaleX:1.35,scaleY:1.35,y:28.6},7,cjs.Ease.get(1)).to({scaleX:1.2,scaleY:1.2},6,cjs.Ease.get(-1)).wait(81).to({regY:0.1,scaleX:0.33,scaleY:0.33,y:28.7},5,cjs.Ease.get(-1)).to({_off:true},1).wait(243));

	// laptop_1
	this.instance_13 = new lib.laptop_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(411.1,63.5,0.325,0.325,0,0,0,0,0.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(22).to({_off:false},0).to({regY:0.1,scaleX:1.34,scaleY:1.34},7,cjs.Ease.get(1)).to({scaleX:1.2,scaleY:1.2},6,cjs.Ease.get(-1)).wait(76).to({regY:0.5,scaleX:0.33,scaleY:0.33},5,cjs.Ease.get(-1)).to({_off:true},1).wait(243));

	// upArrow
	this.instance_14 = new lib.upArrow();
	this.instance_14.parent = this;
	this.instance_14.setTransform(101.4,63.9,0.438,0.438,90,0,0,0.1,-0.1);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(28).to({_off:false},0).to({regX:0,regY:0,scaleX:1.46,scaleY:1.46,x:101.3,y:63.8},5,cjs.Ease.get(1)).wait(78).to({regX:0.1,regY:-0.1,scaleX:0.44,scaleY:0.44,x:101.4,y:63.9},5,cjs.Ease.get(-1)).to({_off:true},1).wait(243));

	// TXT3-3
	this.instance_15 = new lib.TXT33();
	this.instance_15.parent = this;
	this.instance_15.setTransform(257.6,49.3,0.225,0.225,0,0,0,0.2,0.9);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(226).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1.27,scaleY:1.27,x:263.7,y:66.3},8,cjs.Ease.get(1)).to({regX:0.2,scaleX:1.16,scaleY:1.16,x:263.1,y:64.4},5,cjs.Ease.get(-1)).wait(92).to({regX:1.7,regY:1,scaleX:0.15,scaleY:0.15,x:257.1,y:49.5,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(21));

	// TXT3-2
	this.instance_16 = new lib.TXT32();
	this.instance_16.parent = this;
	this.instance_16.setTransform(257.6,45.3,0.225,0.225,0,0,0,1.1,0.7);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(225).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1.27,scaleY:1.27,x:262.8,y:44.5},8,cjs.Ease.get(1)).to({regY:0.2,scaleX:1.16,scaleY:1.16,x:262.3,y:44.6},5,cjs.Ease.get(-1)).wait(93).to({regX:1,regY:1.7,scaleX:0.15,scaleY:0.15,x:256.9,y:47,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(21));

	// TXT3-1
	this.instance_17 = new lib.TXT31();
	this.instance_17.parent = this;
	this.instance_17.setTransform(257.6,41.5,0.225,0.225,0,0,0,1.1,1.1);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(224).to({_off:false},0).to({regX:0.1,regY:0,scaleX:1.27,scaleY:1.27,x:262.8,y:22.6},8,cjs.Ease.get(1)).to({regY:0.1,scaleX:1.16,scaleY:1.16,x:262.3,y:24.6},5,cjs.Ease.get(-1)).wait(94).to({regX:1,regY:1.4,scaleX:0.15,scaleY:0.15,x:256.9,y:44.5,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(21));

	// TXT2-4
	this.instance_18 = new lib.TXT24();
	this.instance_18.parent = this;
	this.instance_18.setTransform(261.5,50.8,0.225,0.225,0,0,0,1.4,1.4);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(116).to({_off:false},0).to({regX:0.2,regY:0.2,scaleX:1.27,scaleY:1.27,x:284.6,y:74.9},8,cjs.Ease.get(1)).to({regX:0.1,scaleX:1.16,scaleY:1.16,x:282,y:72.3},5,cjs.Ease.get(-1)).wait(89).to({regX:1.4,regY:1.4,scaleX:0.23,scaleY:0.23,x:261.5,y:50.8,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(134));

	// TXT2-3
	this.instance_19 = new lib.TXT23();
	this.instance_19.parent = this;
	this.instance_19.setTransform(262,47.1,0.225,0.225,0,0,0,1.1,0.9);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(115).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1.27,scaleY:1.27,x:287.5,y:53.8},8,cjs.Ease.get(1)).to({scaleX:1.16,scaleY:1.16,x:284.7,y:53},5,cjs.Ease.get(-1)).wait(90).to({regX:1.1,regY:0.9,scaleX:0.23,scaleY:0.23,x:262,y:47.1,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(134));

	// TXT2-2
	this.instance_20 = new lib.TXT22();
	this.instance_20.parent = this;
	this.instance_20.setTransform(260,41.9,0.225,0.225,0,0,0,0.9,1.1);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(114).to({_off:false},0).to({regX:0.2,regY:0.1,scaleX:1.27,scaleY:1.27,x:276.9,y:24.3},8,cjs.Ease.get(1)).to({scaleX:1.16,scaleY:1.16,x:275,y:26},5,cjs.Ease.get(-1)).wait(91).to({regX:0.9,regY:1.1,scaleX:0.23,scaleY:0.23,x:260,y:41.9,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(134));

	// TXT2-1
	this.instance_21 = new lib.TXT21();
	this.instance_21.parent = this;
	this.instance_21.setTransform(242.1,45.6,0.225,0.225,0,0,0,0.9,1.4);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(113).to({_off:false},0).to({regX:0.2,regY:0.2,scaleX:1.27,scaleY:1.27,x:175.4},8,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,scaleX:1.16,scaleY:1.16,x:182.5,y:45.4},5,cjs.Ease.get(-1)).wait(92).to({regX:0.9,regY:1.4,scaleX:0.23,scaleY:0.23,x:242.1,y:45.6,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(134));

	// txt1-4
	this.instance_22 = new lib.txt14();
	this.instance_22.parent = this;
	this.instance_22.setTransform(265.9,49.4,0.225,0.225,0,0,0,0.2,1.6);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(5).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1.27,scaleY:1.27,x:310.6,y:67},8,cjs.Ease.get(1)).to({scaleX:1.16,scaleY:1.16,x:305.8,y:65},5,cjs.Ease.get(-1)).wait(89).to({regX:0.2,regY:1.6,scaleX:0.23,scaleY:0.23,x:265.9,y:49.4,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(245));

	// txt1-3
	this.instance_23 = new lib.txt13();
	this.instance_23.parent = this;
	this.instance_23.setTransform(263.5,45.5,0.225,0.225,0,0,0,1.4,0.7);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(4).to({_off:false},0).to({regX:0.1,regY:0.2,scaleX:1.27,scaleY:1.27,x:296.3,y:45.2},8,cjs.Ease.get(1)).to({regX:0.2,scaleX:1.16,scaleY:1.16,x:292.8},5,cjs.Ease.get(-1)).wait(90).to({regX:1.4,regY:0.7,scaleX:0.23,scaleY:0.23,x:263.5,y:45.5,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(245));

	// txt1-2
	this.instance_24 = new lib.txt12();
	this.instance_24.parent = this;
	this.instance_24.setTransform(264.4,41.6,0.225,0.225,0,0,0,0.9,0.2);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(3).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1.27,scaleY:1.27,x:301.7,y:23.4},8,cjs.Ease.get(1)).to({scaleX:1.16,scaleY:1.16,x:297.7,y:25.2},5,cjs.Ease.get(-1)).wait(91).to({regX:0.9,regY:0.2,scaleX:0.23,scaleY:0.23,x:264.4,y:41.6,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(245));

	// txt1-1
	this.instance_25 = new lib.txt11();
	this.instance_25.parent = this;
	this.instance_25.setTransform(246.6,45.6,0.225,0.225,0,0,0,0.9,1.4);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(2).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1.27,scaleY:1.27,x:200.7},8,cjs.Ease.get(1)).to({regX:0.2,scaleX:1.16,scaleY:1.16,x:205.6},5,cjs.Ease.get(-1)).wait(92).to({regX:0.9,regY:1.4,scaleX:0.23,scaleY:0.23,x:246.6,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(245));

	// Layer 1
	this.instance_26 = new lib.black_box();
	this.instance_26.parent = this;
	this.instance_26.setTransform(259.8,45.4,0.269,0.269,0,0,0,0,0.4);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1).to({_off:false},0).to({regY:0,scaleX:1.55,scaleY:1.55,x:259.6,y:45.3},8,cjs.Ease.get(1)).to({scaleX:1.46,scaleY:1.46},5,cjs.Ease.get(-1)).wait(317).to({regX:0.3,regY:0.5,scaleX:0.33,scaleY:0.33,x:259.7,y:45.5,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(21));

	// Layer 14 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_27 = new cjs.Graphics().p("AeBGJIAAlTIH/AAIAAFTgEgiqAGJIAAk9II4AAIAAE9gAUqAvIAAk8II5AAIAAE8gA4jAvIAAk8IHsAAIAAE8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_graphics_27,x:243.2,y:39.3}).wait(304).to({graphics:null,x:0,y:0}).wait(29));

	// Layer 10
	this.instance_27 = new lib.shapes_line5();
	this.instance_27.parent = this;
	this.instance_27.setTransform(62.4,18.4,1.455,1.455);
	this.instance_27._off = true;

	var maskedShapeInstanceList = [this.instance_27];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(34).to({_off:false},0).wait(1).to({x:62.5},0).wait(1).to({x:62.7},0).wait(1).to({x:63},0).wait(1).to({x:63.6},0).wait(1).to({x:64.3},0).wait(1).to({x:65.1},0).wait(1).to({x:66.2},0).wait(1).to({x:67.5},0).wait(1).to({x:69},0).wait(1).to({x:70.7},0).wait(1).to({x:72.6},0).wait(1).to({x:74.8},0).wait(1).to({x:77.2},0).wait(1).to({x:79.9},0).wait(1).to({x:82.8},0).wait(1).to({x:86},0).wait(1).to({x:89.5},0).wait(1).to({x:93.2},0).wait(1).to({x:97},0).wait(1).to({x:101.1},0).wait(1).to({x:105.2},0).wait(1).to({x:109.5},0).wait(1).to({x:113.8},0).wait(1).to({x:118},0).wait(1).to({x:122.2},0).wait(1).to({x:126.3},0).wait(1).to({x:130.2},0).wait(1).to({x:133.9},0).wait(1).to({x:137.4},0).wait(1).to({x:140.6},0).wait(1).to({x:143.6},0).wait(1).to({x:146.4},0).wait(1).to({x:148.9},0).wait(1).to({x:151.1},0).wait(1).to({x:153.2},0).wait(1).to({x:155},0).wait(1).to({x:156.6},0).wait(1).to({x:157.9},0).wait(1).to({x:159.1},0).wait(1).to({x:160.1},0).wait(1).to({x:160.9},0).wait(1).to({x:161.6},0).wait(1).to({x:162},0).wait(1).to({x:162.4},0).wait(1).to({x:162.6},0).wait(1).to({x:162.5},0).to({_off:true},1).wait(4).to({_off:false,x:62.4},0).wait(1).to({x:62.5},0).wait(1).to({x:62.7},0).wait(1).to({x:63},0).wait(1).to({x:63.6},0).wait(1).to({x:64.3},0).wait(1).to({x:65.1},0).wait(1).to({x:66.2},0).wait(1).to({x:67.5},0).wait(1).to({x:69},0).wait(1).to({x:70.7},0).wait(1).to({x:72.6},0).wait(1).to({x:74.8},0).wait(1).to({x:77.2},0).wait(1).to({x:79.9},0).wait(1).to({x:82.8},0).wait(1).to({x:86},0).wait(1).to({x:89.5},0).wait(1).to({x:93.2},0).wait(1).to({x:97},0).wait(1).to({x:101.1},0).wait(1).to({x:105.2},0).wait(1).to({x:109.5},0).wait(1).to({x:113.8},0).wait(1).to({x:118},0).wait(1).to({x:122.2},0).wait(1).to({x:126.3},0).wait(1).to({x:130.2},0).wait(1).to({x:133.9},0).wait(1).to({x:137.4},0).wait(1).to({x:140.6},0).wait(1).to({x:143.6},0).wait(1).to({x:146.4},0).wait(1).to({x:148.9},0).wait(1).to({x:151.1},0).wait(1).to({x:153.2},0).wait(1).to({x:155},0).wait(1).to({x:156.6},0).wait(1).to({x:157.9},0).wait(1).to({x:159.1},0).wait(1).to({x:160.1},0).wait(1).to({x:160.9},0).wait(1).to({x:161.6},0).wait(1).to({x:162},0).wait(1).to({x:162.4},0).wait(1).to({x:162.6},0).wait(1).to({x:162.5},0).to({_off:true},1).wait(4).to({_off:false,x:62.4},0).wait(1).to({x:62.5},0).wait(1).to({x:62.7},0).wait(1).to({x:63},0).wait(1).to({x:63.6},0).wait(1).to({x:64.3},0).wait(1).to({x:65.1},0).wait(1).to({x:66.2},0).wait(1).to({x:67.5},0).wait(1).to({x:69},0).wait(1).to({x:70.7},0).wait(1).to({x:72.6},0).wait(1).to({x:74.8},0).wait(1).to({x:77.2},0).wait(1).to({x:79.9},0).wait(1).to({x:82.8},0).wait(1).to({x:86},0).wait(1).to({x:89.5},0).wait(1).to({x:93.2},0).wait(1).to({x:97},0).wait(1).to({x:101.1},0).wait(1).to({x:105.2},0).wait(1).to({x:109.5},0).wait(1).to({x:113.8},0).wait(1).to({x:118},0).wait(1).to({x:122.2},0).wait(1).to({x:126.3},0).wait(1).to({x:130.2},0).wait(1).to({x:133.9},0).wait(1).to({x:137.4},0).wait(1).to({x:140.6},0).wait(1).to({x:143.6},0).wait(1).to({x:146.4},0).wait(1).to({x:148.9},0).wait(1).to({x:151.1},0).wait(1).to({x:153.2},0).wait(1).to({x:155},0).wait(1).to({x:156.6},0).wait(1).to({x:157.9},0).wait(1).to({x:159.1},0).wait(1).to({x:160.1},0).wait(1).to({x:160.9},0).wait(1).to({x:161.6},0).wait(1).to({x:162},0).wait(1).to({x:162.4},0).wait(1).to({x:162.6},0).wait(1).to({x:162.5},0).to({_off:true},1).wait(4).to({_off:false,x:62.4},0).wait(1).to({x:62.5},0).wait(1).to({x:62.7},0).wait(1).to({x:63},0).wait(1).to({x:63.6},0).wait(1).to({x:64.3},0).wait(1).to({x:65.1},0).wait(1).to({x:66.2},0).wait(1).to({x:67.5},0).wait(1).to({x:69},0).wait(1).to({x:70.7},0).wait(1).to({x:72.6},0).wait(1).to({x:74.8},0).wait(1).to({x:77.2},0).wait(1).to({x:79.9},0).wait(1).to({x:82.8},0).wait(1).to({x:86},0).wait(1).to({x:89.5},0).wait(1).to({x:93.2},0).wait(1).to({x:97},0).wait(1).to({x:101.1},0).wait(1).to({x:105.2},0).wait(1).to({x:109.5},0).wait(1).to({x:113.8},0).wait(1).to({x:118},0).wait(1).to({x:122.2},0).wait(1).to({x:126.3},0).wait(1).to({x:130.2},0).wait(1).to({x:133.9},0).wait(1).to({x:137.4},0).wait(1).to({x:140.6},0).wait(1).to({x:143.6},0).wait(1).to({x:146.4},0).wait(1).to({x:148.9},0).wait(1).to({x:151.1},0).wait(1).to({x:153.2},0).wait(1).to({x:155},0).wait(1).to({x:156.6},0).wait(1).to({x:157.9},0).wait(1).to({x:159.1},0).wait(1).to({x:160.1},0).wait(1).to({x:160.9},0).wait(1).to({x:161.6},0).wait(1).to({x:162},0).wait(1).to({x:162.4},0).wait(1).to({x:162.6},0).wait(1).to({x:162.5},0).to({_off:true},1).wait(4).to({_off:false,x:62.4},0).wait(1).to({x:62.5},0).wait(1).to({x:62.7},0).wait(1).to({x:63},0).wait(1).to({x:63.6},0).wait(1).to({x:64.3},0).wait(1).to({x:65.1},0).wait(1).to({x:66.2},0).wait(1).to({x:67.5},0).wait(1).to({x:69},0).wait(1).to({x:70.7},0).wait(1).to({x:72.6},0).wait(1).to({x:74.8},0).wait(1).to({x:77.2},0).wait(1).to({x:79.9},0).wait(1).to({x:82.8},0).wait(1).to({x:86},0).wait(1).to({x:89.5},0).wait(1).to({x:93.2},0).wait(1).to({x:97},0).wait(1).to({x:101.1},0).wait(1).to({x:105.2},0).wait(1).to({x:109.5},0).wait(1).to({x:113.8},0).wait(1).to({x:118},0).wait(1).to({x:122.2},0).wait(1).to({x:126.3},0).wait(1).to({x:130.2},0).wait(1).to({x:133.9},0).wait(1).to({x:137.4},0).wait(1).to({x:140.6},0).wait(1).to({x:143.6},0).wait(1).to({x:146.4},0).wait(1).to({x:148.9},0).wait(1).to({x:151.1},0).wait(1).to({x:153.2},0).wait(1).to({x:155},0).wait(1).to({x:156.6},0).wait(1).to({x:157.9},0).wait(1).to({x:159.1},0).wait(1).to({x:160.1},0).wait(1).to({x:160.9},0).wait(1).to({x:161.6},0).wait(1).to({x:162},0).wait(1).to({x:162.4},0).wait(1).to({x:162.6},0).wait(1).to({x:162.5},0).to({_off:true},1).wait(4).to({_off:false,x:62.4},0).wait(1).to({x:62.5},0).wait(1).to({x:62.8},0).wait(1).to({x:63.3},0).wait(1).to({x:64.1},0).wait(1).to({x:65},0).wait(1).to({x:66.3},0).wait(1).to({x:67.8},0).wait(1).to({x:69.7},0).wait(1).to({x:71.8},0).wait(1).to({x:74.3},0).wait(1).to({x:77.1},0).wait(1).to({x:80.3},0).wait(1).to({x:83.9},0).wait(1).to({x:87.8},0).wait(1).to({x:92},0).wait(1).to({x:96.5},0).wait(1).to({x:101.3},0).wait(1).to({x:106.2},0).wait(1).to({x:111.3},0).wait(1).to({x:116.3},0).wait(1).to({x:121.3},0).wait(1).to({x:126.1},0).wait(1).to({x:130.7},0).wait(1).to({x:135},0).wait(1).to({x:139},0).wait(1).to({x:142.6},0).wait(1).to({x:146},0).wait(1).to({x:148.9},0).wait(1).to({x:151.6},0).wait(1).to({x:153.9},0).wait(1).to({x:155.9},0).wait(1).to({x:157.6},0).wait(1).to({x:159},0).wait(1).to({x:160.2},0).wait(1).to({x:161.1},0).wait(1).to({x:161.8},0).wait(1).to({x:162.3},0).wait(1).to({x:162.6},0).wait(1).to({x:162.5},0).to({_off:true},1).wait(31));

	// Layer 10
	this.instance_28 = new lib.shapes_line5();
	this.instance_28.parent = this;
	this.instance_28.setTransform(453.9,18.4,1.455,1.455,180);
	this.instance_28._off = true;

	var maskedShapeInstanceList = [this.instance_28];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(34).to({_off:false},0).wait(1).to({x:453.8},0).wait(1).to({x:453.6},0).wait(1).to({x:453.2},0).wait(1).to({x:452.7},0).wait(1).to({x:452},0).wait(1).to({x:451.1},0).wait(1).to({x:450},0).wait(1).to({x:448.8},0).wait(1).to({x:447.3},0).wait(1).to({x:445.6},0).wait(1).to({x:443.7},0).wait(1).to({x:441.5},0).wait(1).to({x:439},0).wait(1).to({x:436.4},0).wait(1).to({x:433.4},0).wait(1).to({x:430.2},0).wait(1).to({x:426.8},0).wait(1).to({x:423.1},0).wait(1).to({x:419.2},0).wait(1).to({x:415.2},0).wait(1).to({x:411},0).wait(1).to({x:406.8},0).wait(1).to({x:402.5},0).wait(1).to({x:398.3},0).wait(1).to({x:394.1},0).wait(1).to({x:390},0).wait(1).to({x:386.1},0).wait(1).to({x:382.4},0).wait(1).to({x:378.9},0).wait(1).to({x:375.7},0).wait(1).to({x:372.7},0).wait(1).to({x:369.9},0).wait(1).to({x:367.4},0).wait(1).to({x:365.2},0).wait(1).to({x:363.1},0).wait(1).to({x:361.3},0).wait(1).to({x:359.8},0).wait(1).to({x:358.4},0).wait(1).to({x:357.2},0).wait(1).to({x:356.2},0).wait(1).to({x:355.4},0).wait(1).to({x:354.8},0).wait(1).to({x:354.3},0).wait(1).to({x:353.9},0).wait(1).to({x:353.7},0).wait(1).to({x:353.8},0).to({_off:true},1).wait(4).to({_off:false,x:453.9},0).wait(1).to({x:453.8},0).wait(1).to({x:453.6},0).wait(1).to({x:453.2},0).wait(1).to({x:452.7},0).wait(1).to({x:452},0).wait(1).to({x:451.1},0).wait(1).to({x:450},0).wait(1).to({x:448.8},0).wait(1).to({x:447.3},0).wait(1).to({x:445.6},0).wait(1).to({x:443.7},0).wait(1).to({x:441.5},0).wait(1).to({x:439},0).wait(1).to({x:436.4},0).wait(1).to({x:433.4},0).wait(1).to({x:430.2},0).wait(1).to({x:426.8},0).wait(1).to({x:423.1},0).wait(1).to({x:419.2},0).wait(1).to({x:415.2},0).wait(1).to({x:411},0).wait(1).to({x:406.8},0).wait(1).to({x:402.5},0).wait(1).to({x:398.3},0).wait(1).to({x:394.1},0).wait(1).to({x:390},0).wait(1).to({x:386.1},0).wait(1).to({x:382.4},0).wait(1).to({x:378.9},0).wait(1).to({x:375.7},0).wait(1).to({x:372.7},0).wait(1).to({x:369.9},0).wait(1).to({x:367.4},0).wait(1).to({x:365.2},0).wait(1).to({x:363.1},0).wait(1).to({x:361.3},0).wait(1).to({x:359.8},0).wait(1).to({x:358.4},0).wait(1).to({x:357.2},0).wait(1).to({x:356.2},0).wait(1).to({x:355.4},0).wait(1).to({x:354.8},0).wait(1).to({x:354.3},0).wait(1).to({x:353.9},0).wait(1).to({x:353.7},0).wait(1).to({x:353.8},0).to({_off:true},1).wait(4).to({_off:false,x:453.9},0).wait(1).to({x:453.8},0).wait(1).to({x:453.6},0).wait(1).to({x:453.2},0).wait(1).to({x:452.7},0).wait(1).to({x:452},0).wait(1).to({x:451.1},0).wait(1).to({x:450},0).wait(1).to({x:448.8},0).wait(1).to({x:447.3},0).wait(1).to({x:445.6},0).wait(1).to({x:443.7},0).wait(1).to({x:441.5},0).wait(1).to({x:439},0).wait(1).to({x:436.4},0).wait(1).to({x:433.4},0).wait(1).to({x:430.2},0).wait(1).to({x:426.8},0).wait(1).to({x:423.1},0).wait(1).to({x:419.2},0).wait(1).to({x:415.2},0).wait(1).to({x:411},0).wait(1).to({x:406.8},0).wait(1).to({x:402.5},0).wait(1).to({x:398.3},0).wait(1).to({x:394.1},0).wait(1).to({x:390},0).wait(1).to({x:386.1},0).wait(1).to({x:382.4},0).wait(1).to({x:378.9},0).wait(1).to({x:375.7},0).wait(1).to({x:372.7},0).wait(1).to({x:369.9},0).wait(1).to({x:367.4},0).wait(1).to({x:365.2},0).wait(1).to({x:363.1},0).wait(1).to({x:361.3},0).wait(1).to({x:359.8},0).wait(1).to({x:358.4},0).wait(1).to({x:357.2},0).wait(1).to({x:356.2},0).wait(1).to({x:355.4},0).wait(1).to({x:354.8},0).wait(1).to({x:354.3},0).wait(1).to({x:353.9},0).wait(1).to({x:353.7},0).wait(1).to({x:353.8},0).to({_off:true},1).wait(4).to({_off:false,x:453.9},0).wait(1).to({x:453.8},0).wait(1).to({x:453.6},0).wait(1).to({x:453.2},0).wait(1).to({x:452.7},0).wait(1).to({x:452},0).wait(1).to({x:451.1},0).wait(1).to({x:450},0).wait(1).to({x:448.8},0).wait(1).to({x:447.3},0).wait(1).to({x:445.6},0).wait(1).to({x:443.7},0).wait(1).to({x:441.5},0).wait(1).to({x:439},0).wait(1).to({x:436.4},0).wait(1).to({x:433.4},0).wait(1).to({x:430.2},0).wait(1).to({x:426.8},0).wait(1).to({x:423.1},0).wait(1).to({x:419.2},0).wait(1).to({x:415.2},0).wait(1).to({x:411},0).wait(1).to({x:406.8},0).wait(1).to({x:402.5},0).wait(1).to({x:398.3},0).wait(1).to({x:394.1},0).wait(1).to({x:390},0).wait(1).to({x:386.1},0).wait(1).to({x:382.4},0).wait(1).to({x:378.9},0).wait(1).to({x:375.7},0).wait(1).to({x:372.7},0).wait(1).to({x:369.9},0).wait(1).to({x:367.4},0).wait(1).to({x:365.2},0).wait(1).to({x:363.1},0).wait(1).to({x:361.3},0).wait(1).to({x:359.8},0).wait(1).to({x:358.4},0).wait(1).to({x:357.2},0).wait(1).to({x:356.2},0).wait(1).to({x:355.4},0).wait(1).to({x:354.8},0).wait(1).to({x:354.3},0).wait(1).to({x:353.9},0).wait(1).to({x:353.7},0).wait(1).to({x:353.8},0).to({_off:true},1).wait(4).to({_off:false,x:453.9},0).wait(1).to({x:453.8},0).wait(1).to({x:453.6},0).wait(1).to({x:453.2},0).wait(1).to({x:452.7},0).wait(1).to({x:452},0).wait(1).to({x:451.1},0).wait(1).to({x:450},0).wait(1).to({x:448.8},0).wait(1).to({x:447.3},0).wait(1).to({x:445.6},0).wait(1).to({x:443.7},0).wait(1).to({x:441.5},0).wait(1).to({x:439},0).wait(1).to({x:436.4},0).wait(1).to({x:433.4},0).wait(1).to({x:430.2},0).wait(1).to({x:426.8},0).wait(1).to({x:423.1},0).wait(1).to({x:419.2},0).wait(1).to({x:415.2},0).wait(1).to({x:411},0).wait(1).to({x:406.8},0).wait(1).to({x:402.5},0).wait(1).to({x:398.3},0).wait(1).to({x:394.1},0).wait(1).to({x:390},0).wait(1).to({x:386.1},0).wait(1).to({x:382.4},0).wait(1).to({x:378.9},0).wait(1).to({x:375.7},0).wait(1).to({x:372.7},0).wait(1).to({x:369.9},0).wait(1).to({x:367.4},0).wait(1).to({x:365.2},0).wait(1).to({x:363.1},0).wait(1).to({x:361.3},0).wait(1).to({x:359.8},0).wait(1).to({x:358.4},0).wait(1).to({x:357.2},0).wait(1).to({x:356.2},0).wait(1).to({x:355.4},0).wait(1).to({x:354.8},0).wait(1).to({x:354.3},0).wait(1).to({x:353.9},0).wait(1).to({x:353.7},0).wait(1).to({x:353.8},0).to({_off:true},1).wait(4).to({_off:false,x:453.9},0).wait(1).to({x:453.8},0).wait(1).to({x:453.5},0).wait(1).to({x:452.9},0).wait(1).to({x:452.2},0).wait(1).to({x:451.2},0).wait(1).to({x:450},0).wait(1).to({x:448.4},0).wait(1).to({x:446.6},0).wait(1).to({x:444.4},0).wait(1).to({x:441.9},0).wait(1).to({x:439.1},0).wait(1).to({x:435.9},0).wait(1).to({x:432.4},0).wait(1).to({x:428.5},0).wait(1).to({x:424.3},0).wait(1).to({x:419.8},0).wait(1).to({x:415},0).wait(1).to({x:410.1},0).wait(1).to({x:405},0).wait(1).to({x:400},0).wait(1).to({x:395},0).wait(1).to({x:390.2},0).wait(1).to({x:385.6},0).wait(1).to({x:381.3},0).wait(1).to({x:377.3},0).wait(1).to({x:373.7},0).wait(1).to({x:370.3},0).wait(1).to({x:367.4},0).wait(1).to({x:364.7},0).wait(1).to({x:362.4},0).wait(1).to({x:360.4},0).wait(1).to({x:358.7},0).wait(1).to({x:357.3},0).wait(1).to({x:356.1},0).wait(1).to({x:355.2},0).wait(1).to({x:354.5},0).wait(1).to({x:354},0).wait(1).to({x:353.8},0).wait(1).to({_off:true},1).wait(31));

	// line_dots
	this.instance_29 = new lib.cloud_dot();
	this.instance_29.parent = this;
	this.instance_29.setTransform(30.8,52.9,1.455,1.455);
	this.instance_29._off = true;

	this.instance_30 = new lib.cloud_dot();
	this.instance_30.parent = this;
	this.instance_30.setTransform(30.8,52.9,1.455,1.455);

	this.instance_31 = new lib.cloud_dot();
	this.instance_31.parent = this;
	this.instance_31.setTransform(30.8,52.9,1.455,1.455);

	var maskedShapeInstanceList = [this.instance_29,this.instance_30,this.instance_31];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_29}]},35).to({state:[{t:this.instance_30,p:{x:30.8}},{t:this.instance_29}]},8).to({state:[{t:this.instance_31},{t:this.instance_30,p:{x:38.1}},{t:this.instance_29}]},8).to({state:[]},8).to({state:[{t:this.instance_29}]},9).to({state:[{t:this.instance_30,p:{x:30.8}},{t:this.instance_29}]},10).to({state:[{t:this.instance_31},{t:this.instance_30,p:{x:38.1}},{t:this.instance_29}]},10).to({state:[]},10).to({state:[{t:this.instance_29}]},10).to({state:[{t:this.instance_30,p:{x:30.8}},{t:this.instance_29}]},10).to({state:[{t:this.instance_31},{t:this.instance_30,p:{x:38.1}},{t:this.instance_29}]},10).to({state:[]},10).to({state:[{t:this.instance_29}]},11).to({state:[{t:this.instance_30,p:{x:30.8}},{t:this.instance_29}]},10).to({state:[{t:this.instance_31},{t:this.instance_30,p:{x:38.1}},{t:this.instance_29}]},10).to({state:[]},10).to({state:[{t:this.instance_29}]},10).to({state:[{t:this.instance_30,p:{x:30.8}},{t:this.instance_29}]},10).to({state:[{t:this.instance_31},{t:this.instance_30,p:{x:38.1}},{t:this.instance_29}]},10).to({state:[]},10).to({state:[{t:this.instance_29}]},11).to({state:[{t:this.instance_30,p:{x:30.8}},{t:this.instance_29}]},10).to({state:[{t:this.instance_31},{t:this.instance_30,p:{x:38.1}},{t:this.instance_29}]},10).to({state:[]},10).to({state:[{t:this.instance_29}]},10).to({state:[{t:this.instance_30,p:{x:30.8}},{t:this.instance_29}]},9).to({state:[{t:this.instance_31},{t:this.instance_30,p:{x:38.1}},{t:this.instance_29}]},9).to({state:[]},9).to({state:[{t:this.instance_29}]},9).to({state:[{t:this.instance_30,p:{x:30.8}},{t:this.instance_29}]},9).to({state:[{t:this.instance_31},{t:this.instance_30,p:{x:38.1}},{t:this.instance_29}]},9).to({state:[]},7).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(35).to({_off:false},0).wait(8).to({x:38.1},0).wait(8).to({x:45.4},0).to({_off:true},8).wait(9).to({_off:false,x:30.8},0).wait(10).to({x:38.1},0).wait(10).to({x:45.4},0).to({_off:true},10).wait(10).to({_off:false,x:30.8},0).wait(10).to({x:38.1},0).wait(10).to({x:45.4},0).to({_off:true},10).wait(11).to({_off:false,x:30.8},0).wait(10).to({x:38.1},0).wait(10).to({x:45.4},0).to({_off:true},10).wait(10).to({_off:false,x:30.8},0).wait(10).to({x:38.1},0).wait(10).to({x:45.4},0).to({_off:true},10).wait(11).to({_off:false,x:30.8},0).wait(10).to({x:38.1},0).wait(10).to({x:45.4},0).to({_off:true},10).wait(10).to({_off:false,x:30.8},0).wait(9).to({x:38.1},0).wait(9).to({x:45.4},0).to({_off:true},9).wait(9).to({_off:false,x:30.8},0).wait(9).to({x:38.1},0).wait(9).to({x:45.4},0).to({_off:true},7).wait(29));

	// Layer 11
	this.instance_32 = new lib.shapes_line4();
	this.instance_32.parent = this;
	this.instance_32.setTransform(496.5,70.2,1.714,1.455);
	this.instance_32._off = true;

	var maskedShapeInstanceList = [this.instance_32];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(27).to({_off:false},0).to({x:474.6},10,cjs.Ease.get(1)).wait(1).to({x:474.3},0).wait(1).to({x:473.4},0).wait(1).to({x:471.7},0).wait(1).to({x:469.2},0).wait(1).to({x:465.7},0).wait(1).to({x:461.6},0).wait(1).to({x:457.5},0).wait(1).to({x:453.9},0).wait(1).to({x:451.2},0).wait(1).to({x:449.2},0).wait(1).to({x:448},0).wait(1).to({x:447.3},0).wait(1).to({regX:0.1,x:447.2},0).wait(37).to({regX:0,x:447.4},0).wait(1).to({x:448.7},0).wait(1).to({x:451.1},0).wait(1).to({x:454.9},0).wait(1).to({x:459.6},0).wait(1).to({x:464.5},0).wait(1).to({x:468.5},0).wait(1).to({x:471.4},0).wait(1).to({x:473.2},0).wait(1).to({x:474.2},0).wait(1).to({x:474.6},0).wait(47).to({x:474.3},0).wait(1).to({x:473.4},0).wait(1).to({x:471.7},0).wait(1).to({x:469.2},0).wait(1).to({x:465.7},0).wait(1).to({x:461.6},0).wait(1).to({x:457.5},0).wait(1).to({x:453.9},0).wait(1).to({x:451.2},0).wait(1).to({x:449.2},0).wait(1).to({x:448},0).wait(1).to({x:447.3},0).wait(1).to({regX:0.1,x:447.2},0).wait(47).to({regX:0,x:447.4},0).wait(1).to({x:448.7},0).wait(1).to({x:451.1},0).wait(1).to({x:454.9},0).wait(1).to({x:459.6},0).wait(1).to({x:464.5},0).wait(1).to({x:468.5},0).wait(1).to({x:471.4},0).wait(1).to({x:473.2},0).wait(1).to({x:474.2},0).wait(1).to({x:474.6},0).wait(44).to({x:474.3},0).wait(1).to({x:473.4},0).wait(1).to({x:471.7},0).wait(1).to({x:469.2},0).wait(1).to({x:465.7},0).wait(1).to({x:461.6},0).wait(1).to({x:457.5},0).wait(1).to({x:453.9},0).wait(1).to({x:451.2},0).wait(1).to({x:449.2},0).wait(1).to({x:448},0).wait(1).to({x:447.3},0).wait(1).to({regX:0.1,x:447.2},0).wait(42).to({regX:0,x:447.6},0).wait(1).to({x:449.8},0).wait(1).to({x:453.9},0).wait(1).to({x:460.1},0).wait(1).to({x:468},0).wait(1).to({x:476.1},0).wait(1).to({x:482.8},0).wait(1).to({x:487.6},0).wait(1).to({x:490.7},0).wait(1).to({x:492.3},0).wait(1).to({x:492.9},0).to({_off:true},10).wait(29));

	// Layer 11
	this.instance_33 = new lib.shapes_line1();
	this.instance_33.parent = this;
	this.instance_33.setTransform(426.9,53.5,1.455,1.455);
	this.instance_33._off = true;

	var maskedShapeInstanceList = [this.instance_33];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(27).to({_off:false},0).to({x:448.7},10,cjs.Ease.get(1)).wait(12).to({x:448.9},0).wait(1).to({x:449.6},0).wait(1).to({x:451},0).wait(1).to({x:453},0).wait(1).to({x:455.8},0).wait(1).to({x:459},0).wait(1).to({x:462.3},0).wait(1).to({x:465.1},0).wait(1).to({x:467.3},0).wait(1).to({x:468.8},0).wait(1).to({x:469.8},0).wait(1).to({x:470.3},0).wait(1).to({x:470.5},0).wait(35).to({x:470.2},0).wait(1).to({x:469.2},0).wait(1).to({x:467.2},0).wait(1).to({x:464.2},0).wait(1).to({x:460.5},0).wait(1).to({x:456.6},0).wait(1).to({x:453.5},0).wait(1).to({x:451.2},0).wait(1).to({x:449.7},0).wait(1).to({x:448.9},0).wait(1).to({x:448.7},0).wait(49).to({x:448.9},0).wait(1).to({x:449.6},0).wait(1).to({x:451},0).wait(1).to({x:453},0).wait(1).to({x:455.8},0).wait(1).to({x:459},0).wait(1).to({x:462.3},0).wait(1).to({x:465.1},0).wait(1).to({x:467.3},0).wait(1).to({x:468.8},0).wait(1).to({x:469.8},0).wait(1).to({x:470.3},0).wait(1).to({x:470.5},0).wait(45).to({x:470.2},0).wait(1).to({x:469.2},0).wait(1).to({x:467.2},0).wait(1).to({x:464.2},0).wait(1).to({x:460.5},0).wait(1).to({x:456.6},0).wait(1).to({x:453.5},0).wait(1).to({x:451.2},0).wait(1).to({x:449.7},0).wait(1).to({x:448.9},0).wait(1).to({x:448.7},0).wait(46).to({x:448.9},0).wait(1).to({x:449.6},0).wait(1).to({x:451},0).wait(1).to({x:453},0).wait(1).to({x:455.8},0).wait(1).to({x:459},0).wait(1).to({x:462.3},0).wait(1).to({x:465.1},0).wait(1).to({x:467.3},0).wait(1).to({x:468.8},0).wait(1).to({x:469.8},0).wait(1).to({x:470.3},0).wait(1).to({x:470.5},0).wait(40).to({x:469.8},0).wait(1).to({x:467.5},0).wait(1).to({x:463.2},0).wait(1).to({x:456.6},0).wait(1).to({x:448.2},0).wait(1).to({x:439.7},0).wait(1).to({x:432.6},0).wait(1).to({x:427.5},0).wait(1).to({x:424.3},0).wait(1).to({x:422.5},0).wait(1).to({x:422.1},0).to({_off:true},1).wait(29));

	// Layer 11
	this.instance_34 = new lib.shapes_line1();
	this.instance_34.parent = this;
	this.instance_34.setTransform(87,72.4,1.455,1.455);
	this.instance_34._off = true;

	var maskedShapeInstanceList = [this.instance_34];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(27).to({_off:false},0).to({x:32.7},10,cjs.Ease.get(1)).wait(12).to({x:33},0).wait(1).to({x:34.1},0).wait(1).to({x:36.1},0).wait(1).to({x:39.3},0).wait(1).to({x:43.5},0).wait(1).to({x:48.5},0).wait(1).to({x:53.5},0).wait(1).to({x:57.8},0).wait(1).to({x:61.2},0).wait(1).to({x:63.5},0).wait(1).to({x:65},0).wait(1).to({x:65.9},0).wait(1).to({x:66.1},0).wait(35).to({x:65.6},0).wait(1).to({x:64},0).wait(1).to({x:61},0).wait(1).to({x:56.4},0).wait(1).to({x:50.7},0).wait(1).to({x:44.8},0).wait(1).to({x:39.9},0).wait(1).to({x:36.4},0).wait(1).to({x:34.1},0).wait(1).to({x:32.9},0).wait(1).to({x:32.7},0).wait(49).to({x:33},0).wait(1).to({x:34.1},0).wait(1).to({x:36.1},0).wait(1).to({x:39.3},0).wait(1).to({x:43.5},0).wait(1).to({x:48.5},0).wait(1).to({x:53.5},0).wait(1).to({x:57.8},0).wait(1).to({x:61.2},0).wait(1).to({x:63.5},0).wait(1).to({x:65},0).wait(1).to({x:65.9},0).wait(1).to({x:66.1},0).wait(45).to({x:65.6},0).wait(1).to({x:64},0).wait(1).to({x:61},0).wait(1).to({x:56.4},0).wait(1).to({x:50.7},0).wait(1).to({x:44.8},0).wait(1).to({x:39.9},0).wait(1).to({x:36.4},0).wait(1).to({x:34.1},0).wait(1).to({x:32.9},0).wait(1).to({x:32.7},0).wait(46).to({x:33},0).wait(1).to({x:34.1},0).wait(1).to({x:36.1},0).wait(1).to({x:39.3},0).wait(1).to({x:43.5},0).wait(1).to({x:48.5},0).wait(1).to({x:53.5},0).wait(1).to({x:57.8},0).wait(1).to({x:61.2},0).wait(1).to({x:63.5},0).wait(1).to({x:65},0).wait(1).to({x:65.9},0).wait(1).to({x:66.1},0).wait(40).to({x:66.3},0).wait(1).to({x:67.3},0).wait(1).to({x:69.2},0).wait(1).to({x:72},0).wait(1).to({x:75.6},0).wait(1).to({x:79.3},0).wait(1).to({x:82.3},0).wait(1).to({x:84.5},0).wait(1).to({x:85.9},0).wait(1).to({x:86.7},0).wait(1).to({x:87},0).to({_off:true},1).wait(29));

	// CTA
	this.callToAction = new lib.CTA_group();
	this.callToAction.parent = this;
	this.callToAction.setTransform(624.5,66.1,1.246,1.246,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.callToAction).wait(360));

	// LOGO
	this.instance_35 = new lib.logo();
	this.instance_35.parent = this;
	this.instance_35.setTransform(624.7,24.1,0.432,0.432,0,0,0,0.6,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(360));

	// GREY BAR
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#545454").s().p("A3bDhIAAnBMAu3AAAIAAHBg");
	this.shape_1.setTransform(622.6,45,0.702,2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(360));

	// BG
	this.instance_36 = new lib.BG_gradient();
	this.instance_36.parent = this;
	this.instance_36.setTransform(260,45,1.733,0.36,0,0,0,0.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(363,44,730.1,92);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"laptop_screen.jpg?1491608119694", id:"laptop_screen"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;