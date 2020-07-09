(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"flappy_atlas_", frames: [[0,394,481,339],[0,0,1239,392],[1241,0,304,866]]}
];


// symbols:



(lib.bird = function() {
	this.initialize(ss["flappy_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ground = function() {
	this.initialize(ss["flappy_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pipe = function() {
	this.initialize(ss["flappy_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.StartInstructions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text Body
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-0.5,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("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");
	this.shape_1.setTransform(-0.5,3.6481);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.StartInstructions, new cjs.Rectangle(-125.1,-6.1,249.3,19.6), null);


(lib.ScreenFlash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("EhuxhLOMDdjAAAMAAACWdMjdjAAAg");
	this.shape.setTransform(0.0205,0.0136,0.2116,0.4154);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhuxBLOMAAAiWcMDdjAAAMAAACWcg");
	this.shape_1.setTransform(0.0205,0.0136,0.2116,0.4154);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ScreenFlash, new cjs.Rectangle(-152.5,-202.5,305,405), null);


(lib.GetReady = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text Body
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtXCHIgGgPQgKAGgLAEQgKADgJAAIgBAAIAAAAIgpgCQgXgCgSgMQgTgLgMgUQgKgTgBgXIAAhHQABgfAIgVQAIgVANgNQANgNAPgFQAPgFAPAAIAkAAQAUAAASALQATAMAMASQAMATAAAVIAAAZIgzACQAAgNgDgMQgEgMgIgHQgHgIgMAAIgDAAIgDABIgcAFQgMACgGAQQgGAQAAAgIAAAWQAAAOAFAPQAEAPAIAKQAHAKALAAIAYAAQADAAAGgDQAFgCADgFQADgEABgFIAAgCIgBgBIgfgDIgEggIBhAAIgBB2gANhCFIACiJIhKiGIBRAJIAmBTIAhhbIBRgBIhNCKIgMCFgAI2CFIAAkNIB3AAQAsABAVASQATATAAAhIAACQQAAANgCAKQgCAKgGAHQgIAHgOAEQgOADgYAAgAKDBcIAaAAQATAAAJgDQAIgDACgGQACgHAAgJIABghIACgqQACgXAAgZQAAgOgEgGQgDgHgGgBQgFgCgGAAIgxAAgAHPCFIgKhWIg9AAIgJBWIhHAAIA4kOIBnAAIBPEOgAGMgCIA1gDIgdhigABqCFIgBkOIC3AAIAAAyIhvAGIAAAvIBmAIIAAAyIhhAAIAAAkIByAIIAABBgAAPCFIAAhRQAAgJgHgGQgGgFgHgDIgPgEIgGgBIAABtIhKAAIAAkOIBuAAQAaAAAPAFQAPAEAIAJQAHAIADAMQACAMAAAPQAAAdgFASQgEATgOAHQgOAJgbAAIAGACIAQAHIATAJQAJAGAHAGQAGAFABAGIAABSgAgcgpIAiAAQALAAAEgCQAFgDABgEQACgEgBgGQAAgLgDgJQgFgJgOAAIgiAAgAoPCFIAKi2IhIgCIgFhWIDfACIABBPIhMAMIAACxgAshCFIAAkOIC3AAIAAAyIhwAGIAAAvIBmAIIAAAyIhgAAIAAAkIByAIIAABBg");
	this.shape.setTransform(-1.1,10.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("As7C7IgfgEQgIgBgHgFIgBAAQgOAEgNAAIgBAAIgBAAIgBAAIgpgCIAAAAQgfgCgYgQIgBAAQgYgQgPgZIgBgBQgOgZgBgfIAAgBIAAgjIAAgBIAAhHQABglAKgaIAAAAQAKgcASgQIAAgBQASgRAVgHIAAAAQAVgHATAAIAjAAIABAAQAcAAAaAQIAAAAQAJAFAIAHQAAgMAJgIQAJgJAMAAIC3AAQAHAAAFACQAGgCAGAAIDfACQANAAAIAJQAJAJAAAMIABBPIgBAGIABAeQAAALgHAJQgHAIgLACIg0AIIAACXQAAANgIAJQgJAIgNAAIhQAAQgIAAgIgEQgHgEgEgIQgDgHAAgIIABgaQgBgFAAgFIAGh0IgngBIgIgBIAAAbQAGACAEAFQAIAIAAAMIAABlQAAANgJAJQgJAIgMAAIi/AAIgFAAIgFADQgGADgHAAIgDAAgAImC1IhXAAQgLAAgJgHQgJgIgBgLIgHg8IgHAAIgGA7QgBAMgJAIQgJAHgLAAIhHAAIgHgBIgJABIi+AAQgGAAgEgBQgFABgGAAIhHAAQgMAAgHgIQgJAIgMAAIhKAAQgMAAgJgIQgJgJAAgNIAAkyQAAgNAJgIQAJgJAMAAIBuAAQAfAAATAGIABAAQAKAEAJAEIAEgFQAJgJAMAAIC3AAQANAAAJAJQAIAIAAANIAAAxIAAADIAAAiQAAAMgIAJIgBABIAAADIAAAbIAdiQQADgLAIgGQAIgHALAAIBnAAQAKAAAIAGQAIAGADAKIAkB8IAAhzQAAgMAJgJQAJgJAMAAIB3AAQA0ABAbAVIAAAAQACgMAJgGQAKgHALACIBRAIQAIABAGAFQAHAEADAIIAIARIAIgYQAEgJAHgFQAIgFAJAAIBRgBQALAAAIAHQAJAHACALQACAKgFAKIgCAEQAEAFABAHQACAKgFAKIhLCDIgLCAQgBAMgJAHQgIAIgMAAIhIAAQgIAAgHgEQgHgEgEgHQgEgHAAgIIABggIgBgEIABhfIglhDIAAAAIgBBsIAAABIAAAIIAAAEIAAAWIAAABQABARgDAMQgDATgNANIAAABQgMAMgXAGQgRAEgdAAIiFAAIgIgBIgIABIAAAAg");
	this.shape_1.setTransform(-1.0946,12.2219);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.GetReady, new cjs.Rectangle(-106.7,-6.4,211.3,37.3), null);


(lib.GameOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text Body
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtsCIIgGgPQgKAGgLADQgKAEgJAAIgBAAIgBAAIgogDQgXgBgTgMQgSgMgMgTQgKgTgBgXIAAhHQABgfAIgVQAIgWANgMQANgNAPgFQAPgGAPAAIAjAAQAVABASALQATAMAMASQAMASAAAWIAAAZIgzABQAAgNgEgLQgEgMgHgIQgIgHgLAAIgDAAIgEABIgbAFQgMACgGAQQgGAPAAAhIAAAVQAAAPAEAPQAFAOAHAKQAIALAKgBIAZAAQADABAFgDQAFgDAEgEQADgFABgEIgBgCIAAgBIgfgDIgFggIBhAAIAAB1gAo5CGIAAkPIBOAAIBBCeIAwieIBTADIAGEMIhPAAIAAh/IghB/IhBAAIgZh1IgGB6gAPRCGIAAhSQAAgIgGgGQgHgFgIgDIgOgFIgHAAIAABtIhJAAIAAkPIBuAAQAaAAAQAGQAPAEAHAIQAIAJACAMQACAMAAAOQAAAegEASQgFATgOAHQgNAJgcAAIAHACIAPAHIATAJQAKAGAGAFQAGAGABAGIAABSgAOlgoIAjAAQALAAAEgCQAFgDABgEQACgEgBgGQABgLgEgJQgFgJgOAAIgjAAgAKPCGIAAkPIC3AAIAAAzIhwAGIAAAvIBmAIIAAAyIhhAAIAAAjIBzAIIAABCgAIwCGIgTgBIgYgBIgUAAIgKgBIhOkMIBQAIIArDPIAfjXIBQgCIhLERIgIAAgAE1CGIgBAAIgpgDQgXgBgSgMQgTgLgLgUQgLgSAAgYIAAhGQAAggAIgVQAIgWANgMQANgMAPgGQAQgGAPAAIAjAAQAUABATAMQASAKAMATQAMASABAWIAABjQgBAVgHARQgIAQgMAMQgMALgNAGQgOAGgNAAIgBAAgAEihLIgUACQgMABgFAQQgGAQgBAhIAAAWQAAAOAFAOQAEANAIAKQAIAIAKABIAQAAQAMgBAHgHQAIgIADgKQAEgLAAgHIgBgoQAAgagGgOQgGgPgJgFQgJgGgJAAIgBAAgAkLCGIAAkPIC3AAIAAAzIhwAGIAAAvIBmAIIAAAyIhhAAIAAAjIBzAIIAABCgAqgCGIgKhWIg9AAIgJBWIhGAAIA3kPIBnAAIBPEPgArigCIA0gCIgdhig");
	this.shape.setTransform(-1.1725,10.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AtQC9IgfgDQgJgBgGgFIgBAAQgOAEgNAAIgBAAIgBAAIgBAAIgpgCIAAAAQgfgDgZgPIAAgBQgYgPgQgaIAAAAQgOgagBgeIAAgBIAAgnIAAgBIAAghIAAgBIAAglQABglAKgaIAAAAQAKgcARgRIABAAQASgSAVgGIAAAAQAUgIAUABIAjAAIABAAQAcAAAZAPIABABQAYAOAQAYIAAABQAOAWADAYIAQhOQACgLAIgHQAJgGAKAAIBnAAQAKAAAIAGQAIAGADAJIAkB9IAAh0QAAgNAJgJQAJgIAMAAIBOAAQAJgBAIAGQAIAFADAIIAhBRIAXhOQAEgKAIgGQAIgGAKABIBTACQAFAAAFACQAHgEAKAAIC3AAQAMAAAJAIQAJAJAAANIAAAwIAAAEIAAAmQAAAMgJAJIgBABIAAAlIAAAEIAAAYQAFADAFAEQAIAJAAAMIAAAoIAAACIAAA/QAAAMgJAJQgJAJgMAAIi/AAQgGAAgFgCQgFACgGAAIhPAAQgJAAgHgFQgIAFgJAAIhBAAQgGAAgFgCIgHAEQgHAEgIgBIhIgFIgGgBIgIABIhXAAQgLAAgJgIQgIgHgCgLIgHg8IgHAAIgGA7QgBALgJAIQgIAIgMAAIhGAAIgFAAIgFADQgGACgHAAIgDAAgAIuC4IgRgBIgCAAIgXAAIgTgBIgCAAIgIAAQgKAAgIgGQgIgHgDgJIgmiFIAAAmIAAABQgBAbgKAWQgKAWgQAPQgQAQgSAIIgBAAQgUAIgSAAIgBAAIgBAAIgCAAIgogCIgBAAQgegDgZgPIgBgBQgYgPgPgZIgBgBQgNgZgBgfIAAgBIAAgnIAAgBIAAhHQAAglAKgaIAAAAQALgcARgQQASgSAVgHIAAAAQAVgIAUABIAjAAIABAAQAcABAZAPQAJAFAIAHQAAgFACgGQAEgJAJgGQAIgFAKABIBQAJQAKABAHAGQAIAHACAKIAHAmIAHgtQACgLAIgHQAIgHALAAIBQgCQAGgBAFADIACAAIC3AAQAGAAAGACQAFgCAHAAIBuAAQAfAAATAGIABAAQAYAHAMAPQANAOADAVQADAOAAASIgBAaIAAAAIAAABIABAMIAAABQAAAigFATIgCAHQAHAKAAALIAAACIAAAmIAAAFIAABPQAAAMgJAJQgJAJgMAAIhHAAQgMAAgJgIQgJAIgMAAIhJAAIgIgBIgIABIi/AAQgMAAgJgJQgJgJAAgMIAAheIgcBmQgCAKgJAGQgIAGgKAAIgIAAIgBAAIgBAAg");
	this.shape_1.setTransform(-1.1694,12.3466);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.GameOver, new cjs.Rectangle(-108.9,-6.6,215.5,37.9), null);


(lib.LowerPipe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6BDB12").ss(5,1,1).p("AAAmpIAANT");
	this.shape.setTransform(13,116.0047,1,1.9495);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6BDB12").ss(5,1,1).p("AAAk3IAAJv");
	this.shape_1.setTransform(6,13.9486,1,0.1925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Shadow
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#377E00").ss(0.1,1,1).p("AkGgmIINAAQAMAAAJAJQAJAJAAAMIAAAvIpJAAIAAgvQAAgMAJgJQAJgJAMAAg");
	this.shape_2.setTransform(30.0229,1.5226,1.0256,0.3871);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(55,126,0,0.4)").s().p("AkkAnIAAgvQABgMAIgJQAJgJAMAAIINAAQAMAAAJAJQAJAJgBAMIAAAvg");
	this.shape_3.setTransform(30.0229,1.5226,1.0256,0.3871);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Pipe Top
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#4CAD00").ss(0.1,1,0,3).p("AkNiGIIbAAQAeAAAAAeIAADRQAAAegeAAIobAAQgeAAAAgeIAAjRQAAgeAeAAg");
	this.shape_4.setTransform(30,13.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#59C900","#459E00"],[0,1],-30,0,30,0).s().p("AkNCHQgeAAAAgeIAAjRQAAgeAeAAIIbAAQAeAAAAAeIAADRQAAAegeAAg");
	this.shape_5.setTransform(30,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Shadow
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(55,126,0,0.4)").s().p("AjugLIgBgrIHfAAIAABtg");
	this.shape_6.setTransform(30,30.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Pipe Bottom
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().ls(["#59C900","#459E00"],[0,1],-23.3,0,23.4,0).ss(0.1,1,1).p("AjoleIHRAAIAAK9InRAAg");
	this.shape_7.setTransform(30.0048,113.4767,1.03,2.5517);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#59C900","#459E00"],[0,1],-23.3,0,23.3,0).s().p("AjoFfIAAq9IHRAAIAAK9g");
	this.shape_8.setTransform(30.0048,113.4767,1.03,2.5517);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	// Reference
	this.instance = new lib.pipe();
	this.instance.parent = this;
	this.instance.setTransform(-9,-8,0.2541,0.254);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.LowerPipe, new cjs.Rectangle(-9,-8,77.3,220), null);


(lib.GroundSlice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Edges
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#85D93D").ss(0.1,1,1).p("At8gLIb5AAIAAAXI75AAg");
	this.shape.setTransform(96.4855,2.9878,1.0803,0.8163);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#85D93D").s().p("At8AMIAAgXIb5AAIAAAXg");
	this.shape_1.setTransform(96.4855,2.9878,1.0803,0.8163);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#4B841D").ss(0.1,1,1).p("At8gLIb5AAIAAAXI75AAg");
	this.shape_2.setTransform(96.4855,0.9878,1.0803,0.8163);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4B841D").s().p("At8AMIAAgXIb5AAIAAAXg");
	this.shape_3.setTransform(96.4855,0.9878,1.0803,0.8163);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Grass
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#72BE32").ss(1,0,1).p("AvDgvIeHAAIAABFQgZA0ggg0QgLANgHgNQggAVgHgVQgtAkgSgkQgmAYgIgYQgSAVgKgVQgrAxgPgxQgfASgOgSQgnAogUgoQguAogcgoQgPANgVgNQgmAzgHgzQgyAjgcgjQgxAlgIglQggAfgMgfQg3AlgoglQgTAbgJgbQgVAUgLgUQguA0gQg0QgWAtgcgrQgPAGgMgIQgRAYgSgYQglAhgbghQghAUgKgUQgTAUgGgUQgpApgZgpQgfARgNgRQghAfgcgfQglAkghgkQgXALgMgLQgcAogTgoQgmAigqgiQgdAigagiQgeAagLgaQg2AcgpgcQgUAWgHgWQgRAUgRgUQgjAugdgug");
	this.shape_4.setTransform(96.4998,8.4809,1.001,1.1348);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#72BE32").s().p("AAAAWQgWAtgcgrQgPAGgMgIQgRAYgRgYQgmAhgbghQghAUgKgUQgTAUgGgUQgpApgZgpQgfARgNgRQghAfgcgfQglAkghgkQgXALgLgLQgdAogTgoQgmAigqgiQgdAigagiQgeAagKgaQg3AcgpgcQgUAWgHgWQgRAUgRgUQgjAugdguIAAhFIeHAAIAABFQgZA0ggg0QgLANgIgNQgfAVgHgVQgtAkgRgkQgnAYgHgYQgTAVgKgVQgrAxgPgxQgfASgOgSQgnAogUgoQguAogcgoQgPANgVgNQgmAzgHgzQgyAjgcgjQgxAlgJglQgfAfgMgfQg3AlgoglQgTAbgJgbQgVAUgLgUQgXAagPAAQgQAAgIgag");
	this.shape_5.setTransform(96.4998,8.4809,1.001,1.1348);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Grass copy
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5AA11F").ss(1,0,1).p("AvDgvIeHAAIAABFQgZA0ggg0QgLANgHgNQggAVgHgVQgtAkgSgkQgmAYgIgYQgSAVgKgVQgrAxgPgxQgfASgOgSQgnAogUgoQguAogcgoQgPANgVgNQgmAzgHgzQgyAjgcgjQgxAlgIglQggAfgMgfQg3AlgoglQgTAbgJgbQgVAUgLgUQguA0gQg0QgWAtgcgrQgPAGgMgIQgRAYgSgYQglAhgbghQghAUgKgUQgTAUgGgUQgpApgZgpQgfARgNgRQghAfgcgfQglAkghgkQgXALgMgLQgcAogTgoQgmAigqgiQgdAigagiQgeAagLgaQg2AcgpgcQgUAWgHgWQgRAUgRgUQgjAugdgug");
	this.shape_6.setTransform(96.4998,10.4809,1.001,1.1348);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5AA11F").s().p("AAAAWQgWAtgcgrQgPAGgMgIQgRAYgRgYQgmAhgbghQghAUgKgUQgTAUgGgUQgpApgZgpQgfARgNgRQghAfgcgfQglAkghgkQgXALgLgLQgdAogTgoQgmAigqgiQgdAigagiQgeAagKgaQg3AcgpgcQgUAWgHgWQgRAUgRgUQgjAugdguIAAhFIeHAAIAABFQgZA0ggg0QgLANgIgNQgfAVgHgVQgtAkgRgkQgnAYgHgYQgTAVgKgVQgrAxgPgxQgfASgOgSQgnAogUgoQguAogcgoQgPANgVgNQgmAzgHgzQgyAjgcgjQgxAlgJglQgfAfgMgfQg3AlgoglQgTAbgJgbQgVAUgLgUQgXAagPAAQgQAAgIgag");
	this.shape_7.setTransform(96.4998,10.4809,1.001,1.1348);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// Grass copy 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#4B841D").ss(1,0,1).p("AvDgvIeHAAIAABFQgZA0ggg0QgLANgHgNQggAVgHgVQgtAkgSgkQgmAYgIgYQgSAVgKgVQgrAxgPgxQgfASgOgSQgnAogUgoQguAogcgoQgPANgVgNQgmAzgHgzQgyAjgcgjQgxAlgIglQggAfgMgfQg3AlgoglQgTAbgJgbQgVAUgLgUQguA0gQg0QgWAtgcgrQgPAGgMgIQgRAYgSgYQglAhgbghQghAUgKgUQgTAUgGgUQgpApgZgpQgfARgNgRQghAfgcgfQglAkghgkQgXALgMgLQgcAogTgoQgmAigqgiQgdAigagiQgeAagLgaQg2AcgpgcQgUAWgHgWQgRAUgRgUQgjAugdgug");
	this.shape_8.setTransform(96.4998,12.4809,1.001,1.1348);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4B841D").s().p("AAAAWQgWAtgcgrQgPAGgMgIQgRAYgRgYQgmAhgbghQghAUgKgUQgTAUgGgUQgpApgZgpQgfARgNgRQghAfgcgfQglAkghgkQgXALgLgLQgdAogTgoQgmAigqgiQgdAigagiQgeAagKgaQg3AcgpgcQgUAWgHgWQgRAUgRgUQgjAugdguIAAhFIeHAAIAABFQgZA0ggg0QgLANgIgNQgfAVgHgVQgtAkgRgkQgnAYgHgYQgTAVgKgVQgrAxgPgxQgfASgOgSQgnAogUgoQguAogcgoQgPANgVgNQgmAzgHgzQgyAjgcgjQgxAlgJglQgfAfgMgfQg3AlgoglQgTAbgJgbQgVAUgLgUQgXAagPAAQgQAAgIgag");
	this.shape_9.setTransform(96.4998,12.4809,1.001,1.1348);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Dirt
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#663333").s().p("AvED6IAAnzIeJAAIAAHzg");
	this.shape_10.setTransform(96.5,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Reference
	this.instance = new lib.ground();
	this.instance.parent = this;
	this.instance.setTransform(-8,-8,0.1679,0.1679);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.GroundSlice, new cjs.Rectangle(-8,-8,208,65.8), null);


(lib.CollisionPoint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape.setTransform(3.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CollisionPoint, new cjs.Rectangle(0,0,6.8,6.8), null);


(lib.Trees = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Front
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1CD241").s().p("AiPEwIgJgIQgqATgxAAQhaAAhAg+QgvAqhAAAQg6AAgrgiQgyAig/AAQhIAAg2grQgcAIgfAAQgpAAgkgOQgnAXgxAAQhIAAg0gzQgWgWgNgaIgLAAIgFAAQgUApgiAjQhPBPhwAAQhwAAhPhPQgPgQgNgQIAApOQAcgIAgAAQBaAABBBBQAwAwAMA/QBBANA0AsQAjgSAqAAQBGAAAyAxQATAUAMAXQAJgCAKAAIAKABIAKgLQA8g8BVAAQBIAAA2ArQAbgIAgAAQBVAAA7A8IAQASQAZgIAdAAQAkAAAgANIAMgIQALgPAOgOQBDhCBdAAQBCAAA0AiQBLhABkAAQByAABRBQIADAEQA4goBHAAQBYAABAA9QAfgOAlAAQBGAAAyAxQAOAOALAQQARguAmgnQBGhGBkAAQBjAABGBGQAZAaARAdQAJgQAOgOQAygyBGAAQBGAAAyAyQATATAMAXIAFgCIgBgPQAAhhBFhFQBFhEBhAAIADAAIAAHTIgDAAIgcgBQgMAlgeAdQgyAzhGAAQhGAAgzgzQgTgTgLgWQgXAGgaAAQhGAAgygyIgJgKQgSAvgmAmQhGBGhjAAQhkAAhGhGQgkgkgRgrQgLATgQAQQgyAxhGAAQgiAAgcgLIgCACQhBBBhbAAQhAAAgzggIgPAQQhRBRhyAAQhxAAhQhRg");
	this.shape.setTransform(162.125,352.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Middle
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5BE7AB").s().p("AN8EcQgXgXgOgaIgLAMQgqAqg6AAQg8AAgqgqQgcgcgKgkQggAhgvAAQgvAAghgiQgIgIgFgIQgNAUgSASQg2A3hOAAQhNAAg4g3QgbgcgNgiQgTAIgWAAQgpAAgdgdQgIgJgGgJQgLAtgiAkQgxAwhEAAQguAAgngXQgKAcgWAWQgsArg9AAQg9AAgrgrQgcgcgJghIgUAAQhMAAg1g1IgHgHIgIAIQgrArg8AAQgpAAgggTQgKAOgMALQg2A3hOAAQhOAAg2g3QgmgmgMgwQgaAIgeAAQhGAAgxgyQgygxAAhGIAAgCQgTAKgWAAQgkAAgagaQgRgSgGgWQgfAWgpAAQgfAAgagNIAAjiQAagNAfAAQA1AAAkAkQAmAlgBA1IAAAAQAPgFAQAAQAkAAAZAaQAOAOAHARIAJgKQAxgyBGAAQBHAAAxAyQAeAdAMAkQAjgQApAAQBNAAA2A1QAogjA4AAQAyAAAmAdQALgUATgRQA1g2BMAAQBLAAA2A2QA0AzACBGQAWADAUAJQALgmAegfQAxgwBEAAQBEAAAxAwQAaAbAMAgQAIgQANgOQAdgdApAAQAhAAAZASQALgPAMgOQA4g2BNAAQBOAAA2A2QAjAjANAsQAggdAsAAQAvAAAhAgQARARAIATQAFgHAHgHQAqgpA8AAQA6AAAqApIALANQAOgbAXgXQA5g4BRAAQBPAAA3A1QAZgJAcAAQATAAASAFQANguAjgjQA3g3BNAAQAnAAAgAOQAGgrAegeQAlglA0AAQAvAAAiAdIAADCQgiAcgvAAIgLAAQADAPgBAQQABBOg3A2Qg3A3hOAAQg/AAgwgkIgOAQQglAmg3AAQgMAAgKgCQgMAQgPAPQg5A5hRAAQhRAAg5g5g");
	this.shape_1.setTransform(161.95,341.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Back
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B6FFFC").s().p("AK0E0QgQgQgKgRQgoAng5AAQg6gBgpgpQgIgHgGgJQgVAFgWAAQhDAAgwgvQgbgcgLgiIgRABQg1AAgngiQgEAlgbAaQgeAfgrAAQgYAAgTgIIgDACQgRATgbAAQgbAAgTgTIgJgLQgjARgpAAQhHAAg0gzIAAgBIgEAEQgsAshAAAQg/AAgtgsQgYgZgLgeQgKAZgWAVQgmAog5AAQgsAAgjgaIgGAGQgtAvhBAAQhBAAgvgvQgMgMgIgNIgUABQg1AAglglQgkglAAg0IAAgMQgdAVgkgBQgmABgdgWQgbAbglAAQgKgBgJgCQgHAJgIAHQgqArg7AAQg8AAgpgrQgrgpAAg7IABgRQgvgBglgcIAAjkQAlgeAzgBQA7ABAqAqQAqAqABA7IgBASQA4ABApApIAJAJQAMgDANAAQASAAAQAGQAHgLAKgKQAhghAvAAQAuAAAhAhQAiAhgBAvIAAAFQAigbAtAAQAsAAAhAbQAfgRAkgBIAAgJQAAg/AsgtQAtgsA/AAQA/AAAtAsQAiAkAIAuIALAAQAoAAAbAcQAKAKAIANQAhgVAqABQA2gBApAhQAHgLAKgKQA0gyBHgBQBIABAzAyQArArAHA4QAVgLAbAAQAdAAAXANIAAgJQAAg6AqgqQArgqA7gBQA7ABAqAqQARARAKATQAUgEAWgBQBCAAAvAwQAXAUAKAaIABAAQAJgmAfgeQArgrA9AAQA9AAAsArQASATALAVQAUgJAYAAQAqAAAdAcQAFgrAhghQAngoA5ABQAuAAAjAaIACgDQApgpA6AAQAvAAAjAbQAHgMALgLQAfgeAogDQgBgLAAgMQAAgvAggiQAiggAvAAQAuAAAiAgQAdAdAEAnQATAIARARIAKAMIAAChIgKALQgmAmg2AAQgnAAgegTIgFAGQgjAjgwAAQgdAAgYgNQgKAagVAVQgkAjgvAFQgGAhgaAZQghAhguAAQgvAAghghQgWgWgIgcQgqgHgfggIgNgOQgGAWgTATIgEADQADAPAAAQQAABAgsAsQgtAsg/AAQg/AAgtgsg");
	this.shape_2.setTransform(161.95,332.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Trees, new cjs.Rectangle(-9.1,297,342.40000000000003,94.10000000000002), null);


(lib.Clouds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Front
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECF8FF").s().p("A6cIRIgKiKIAAtrQAUgFAXAAQBBAAAuAtQAkAkAJAvQBrAIBOBNQBNBNAJBoQAJgNAMgLQA3g3BPAAQAbAAAYAHIAAgOQAAhUA8g7QA8g7BVAAQBUAAA8A7QApAoAOAzQAygeA/AAQA1AAAsAUIACgCQArgqA7AAQA7AAAqAqQAqApAAA7IAAACQANgUARgRQBDhBBcAAQBdAABCBBQAiAiARApQALgUASgSQAzgxBHAAQAYAAAWAFIgBgVQgBhmBKhIQBIhIBnAAQBnAABJBIQA8A7ALBPQAlAHAeAXIAAgLQAAhCAvgvQAwgvBCAAQBDAAAwAvQARARALAUQADhcBDhCQBFhFBhAAQBiAABGBFIADADIAAPZg");
	this.shape.setTransform(-0.4,-9.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Back
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D0EFFF").s().p("A5hIRIAAwfIANgBIAUgBQBiAABFBFQBDBCACBcQALgUASgRQAvgvBDAAQBCAAAwAvQAvAvAABCIAAALQAegXAmgHQALhPA7g7QBJhIBnAAQBnAABJBIQAtAtARA3IAOgPQBQhPBwAAQBxAABPBPQAZAZARAcQBNAHA6A5QASARAMAUIAAgCQAAg7AqgpQAqgqA7AAQA8AAAqAqIACACQAsgUA1AAQA/AAAzAeQAOgzAogoQA8g7BUAAQA1AAArAXQAKgMAMgMQBVhVB5AAQB4AABWBVIADAEQAogiA2AAQAlAAAfAQQALgZAVgVQAugtBCAAQAWAAAUAFIAANrIgKCKg");
	this.shape_1.setTransform(-8.825,-13.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clouds, new cjs.Rectangle(-172.2,-66.3,342.1,109.4), null);


(lib.Pipe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Upper Pipe
	this.instance = new lib.LowerPipe();
	this.instance.parent = this;
	this.instance.setTransform(26.7,-150.8,1,1,0,180,0,29.7,101.8);
	this.instance.cache(-11,-10,81,224);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Lower Pipe
	this.instance_1 = new lib.LowerPipe();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.7,150.8,1,1,0,0,0,29.7,101.8);
	this.instance_1.cache(-11,-10,81,224);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pipe, new cjs.Rectangle(-12,-261,77.3,522), null);


(lib.Bird = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Collision Points
	this.hit8 = new lib.CollisionPoint();
	this.hit8.name = "hit8";
	this.hit8.parent = this;
	this.hit8.setTransform(-12.6,-21.4,1,1,0,0,0,3.4,3.4);

	this.hit7 = new lib.CollisionPoint();
	this.hit7.name = "hit7";
	this.hit7.parent = this;
	this.hit7.setTransform(-27.05,-12.35,1,1,0,0,0,3.4,3.4);

	this.hit6 = new lib.CollisionPoint();
	this.hit6.name = "hit6";
	this.hit6.parent = this;
	this.hit6.setTransform(-18.45,26.45,1,1,0,0,0,3.4,3.4);

	this.hit5 = new lib.CollisionPoint();
	this.hit5.name = "hit5";
	this.hit5.parent = this;
	this.hit5.setTransform(12,23.7,1,1,0,0,0,3.4,3.4);

	this.hit4 = new lib.CollisionPoint();
	this.hit4.name = "hit4";
	this.hit4.parent = this;
	this.hit4.setTransform(29,15.35,1,1,0,0,0,3.4,3.4);

	this.hit3 = new lib.CollisionPoint();
	this.hit3.name = "hit3";
	this.hit3.parent = this;
	this.hit3.setTransform(42,0.85,1,1,0,0,0,3.4,3.4);

	this.hit2 = new lib.CollisionPoint();
	this.hit2.name = "hit2";
	this.hit2.parent = this;
	this.hit2.setTransform(33.2,-18.1,1,1,0,0,0,3.4,3.4);

	this.hit1 = new lib.CollisionPoint();
	this.hit1.name = "hit1";
	this.hit1.parent = this;
	this.hit1.setTransform(27.3,-31.7,1,1,0,0,0,3.4,3.4);

	this.hit0 = new lib.CollisionPoint();
	this.hit0.name = "hit0";
	this.hit0.parent = this;
	this.hit0.setTransform(6.8,-27.55,1,1,0,0,0,3.4,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit0},{t:this.hit1},{t:this.hit2},{t:this.hit3},{t:this.hit4},{t:this.hit5},{t:this.hit6},{t:this.hit7},{t:this.hit8}]}).wait(14));

	// Wing
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C90102").s().p("AB4BlIiDg4IgegQIgqgZIgvgfQgFgFgCgIQgCgGACgJQADgRAOgPQAPgPASgDQAIgBAHABQAIACAEAEIBgBxIBWBPIABACIACABIAOALg");
	this.shape.setTransform(-23.2375,-15.3125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C90102").s().p("AAeBHIh5iAIgIgKIgDgFQgDgDAAgEIgBgHQABgIADgHQAIgQARgKQATgKARABQAIAAAHAEIAGAEIAEAFIBZDHIAiA9g");
	this.shape_1.setTransform(-20.075,-18.3348);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C90102").s().p("AAlBzIgng/IAAgBIgBgCIgag1IgVg6IgMgxQAAgIAEgGQACgFAIgFQAOgKAVgBQAUgBAPAJIALAKQAEAHAAAFIgEBaIAEA6IABADIAAABIAAACIALA9IAOAwg");
	this.shape_2.setTransform(-15.625,-19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C90102").s().p("AAZA/IhCgiIgqgZIgvgfQgFgFgCgIQgCgGACgJQADgRAOgPQAPgPASgDQAIgBAHABQAIACAEAEIBgBxIBWBPIABACIACABIAOALg");
	this.shape_3.setTransform(-23.2375,-15.3125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C90102").s().p("AABAsIhkhvIgDgFQgDgDAAgEIgBgHQABgIADgHQAIgQARgKQATgKARABQAIAAAHAEIAGAEIAEAFIBZDHIAiA9g");
	this.shape_4.setTransform(-20.075,-18.3348);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C90102").s().p("Ah/AyQgNgCgIgQQgIgQACgTQADgVALgNQALgNAOABQASACD8BPQjvASglAAIgGAAg");
	this.shape_5.setTransform(-24.8461,-7.8732);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C90102").s().p("AhXBrQgQgDgQgPQgOgPgDgRQgBgJABgHQADgHAFgFIAugfQAtgbAsgXICCg3IgnAkIgIAHIg1A0QggAhggAoIggAoQgFAFgHABIgIABIgIgBg");
	this.shape_6.setTransform(-23.095,6.1625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C90102").s().p("AhOCEQgSgJgJgRQgDgFgBgJQAAgIAEgHIADgGIA3hDIADgCIACgCIAqgtIBuheIgXAmQgHALgPAcIgYAvQgLAWgLAZIgDAGIgBACIgeBPIgDAGQgDAGgHADQgGAFgIAAIgHABQgOAAgPgIg");
	this.shape_7.setTransform(-20.35,9.376);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C90102").s().p("AgwCJQgIgGgCgFQgEgHAAgHIACgMIAKgkIACgGIADgKIAqhgIABgCIAAgBIAcguIABgCIACgCIAiguIgOAxIgLA9IAAACIAAABIgBADIgEBRIAEBEQAAAEgEAHIgLAKQgPAIgUAAQgVAAgOgKg");
	this.shape_8.setTransform(-15.625,10.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C90102").s().p("AgwCJQgIgGgCgFQgEgHAAgHIACgMIAKgkIAVg8IAag0IABgCIAAgBIAcguIABgCIACgCIAiguIgUBQIgFAeIAAACIAAABIgBADIgEBRIAEBEQAAAEgEAHIgLAKQgPAIgUAAQgVAAgOgKg");
	this.shape_9.setTransform(-15.625,10.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C90102").s().p("AAaBjIgcgvIAAgBIgBgCIgag1IgVg6IgMgxQAAgIAEgGQACgFAIgFQAOgKAVgBQAUgBAPAJIALAKQAEAHAAAFIgDAqIADBqIABADIAAABIAAACIASBXIAHAWg");
	this.shape_10.setTransform(-15.625,-19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6},{t:this.shape_7}]},1).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_8}]},1).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_9}]},1).to({state:[{t:this.shape_6},{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_10},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	// Eye
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZAhIgEgDQgMgNAAgRQAAgRAMgMQANgMAQAAQASAAAMAMIAEAFQAIALAAANQAAARgMANQgMAMgSAAQgOAAgLgJg");
	this.shape_11.setTransform(10.45,-15.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AECCE7").s().p("AAACbQgwAAgpgyQgpgygBheIAAgRQAZAVAYALIACAIQAMAyAQAkQAQAkAkACQAiACAbgrQAbgrAAg7QAAgjgJgcQAPgZAPgfQAcA0gGBNQgGBegnAsQgmAqgwAAIAAAAg");
	this.shape_12.setTransform(14.6646,-0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D4EBFF").s().p("Ah4BKQADhRAngwQArg1AwADQAxACAsA5QAIALAHAMQgPAegPAZQgHgWgLgRQgbgrgmAFIgEABIgEgGQgMgMgSAAQgRAAgMAMQgNANAAARQAAASANALIADAEQgXAvAJAuQgYgKgagWg");
	this.shape_13.setTransform(13.5,-13.4308);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6D0000").s().p("AhPBHQgIguAXgvQALAKAPAAQARAAANgNQALgMAAgSQAAgOgHgLIAEAAQAlgFAbArQAMASAGAWQg1BUg+AAQgWAAgYgLg");
	this.shape_14.setTransform(14.3544,-9.9244);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#410000").s().p("AgDBnQgkgCgPgjQgRgkgMgyIgBgIQBZAnBIhyQAIAdABAjQAAA7gbArQgaApghAAIgDgBg");
	this.shape_15.setTransform(14.9,0.1304);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(14));

	// Body
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("ADVicQisiEhuE/QAfBVA+BWQhjgihRhHIgdBuIh+gqQgZgbgKgXQgZg1AshPQAshQDbhOQDZhOBlBQQBmBQAAB8QAABphGBGIhZAJQC0inikjMg");
	this.shape_16.setTransform(2.0788,-6.0126);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C90102").s().p("Ah3CLQgQAkAaAqIiMgfQgfgZgUgWIB9AqIAdhvQBRBHBjAiQg+hVgfhVQBuk/CsCDQCkDMi0CnIBZgIQgOANgQAMIgJAHQg9AKg1AAQidAAhphTg");
	this.shape_17.setTransform(1.0705,-3.3576);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AjZADIgjgbICMAeQgagpAQgkQCLBvDsgmQhhBEiGACIgJAAQiHAAhfhFg");
	this.shape_18.setTransform(1.3875,17.7162);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFE054").s().p("AAAADIgDgCIAAgBIABgCIACgBIABAAIACABIAAABIABABIgBACIgBABIgBAAIAAABg");
	this.shape_19.setTransform(39.55,37.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(14));

	// Beak
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFE054").s().p("AgiAdIAAgdIBDAOQgDApgaAPQgSgJgUgggAgiAAIAAgcQAMgXAZgSQAiAPgCAnQggAPgkAAIgBAAgAgiAAIAAAAg");
	this.shape_20.setTransform(40.9542,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(14));

	// Crest
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgBA1IgUgKIgcgIQgHglAHgoQAVgbAcAjQgTAlgCAoQAQgzAzACQAQAggQAbQgDACgMAAQgMAAgUgCg");
	this.shape_21.setTransform(26.2833,-30.3649);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(14));

	// Tail
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgxAlQgIgNgHgTQgHgTAAgPQAAgPAGgCQAIgDCBAJQhiBUgIADIgBABQgGAAgIgLg");
	this.shape_22.setTransform(-34.3269,2.0616);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AhOAXQgGgDADgQQADgOAKgSQALgSANgJQAMgKAGAEQAJAFBkB3QiYgigJgGg");
	this.shape_23.setTransform(-33.1974,-6.8843);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22}]}).wait(14));

	// Feet
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFE054").s().p("AAAAxQgNgJgOgOQgPgPgHgMQgHgOADgDQAFgFBngeQgjBlgFAFIgDABQgEAAgIgFg");
	this.shape_24.setTransform(-20.5799,21.9114,0.982,0.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E5C222").s().p("AgIAvQgNgJgNgQQgNgQgGgNQgGgNAEgEQAFgEBsgZQguBlgFAFIgDABQgEAAgIgHg");
	this.shape_25.setTransform(-16.2159,22.1635,0.9568,1.1192);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24}]}).wait(14));

	// Reference
	this.instance = new lib.bird();
	this.instance.parent = this;
	this.instance.setTransform(-50,-40,0.2212,0.2212);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-40,106.4,77.8);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Trees
	this.instance = new lib.Trees();
	this.instance.parent = this;
	this.instance.setTransform(162.1,344,1,1,0,0,0,162.1,344);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Clouds
	this.instance_1 = new lib.Clouds();
	this.instance_1.parent = this;
	this.instance_1.setTransform(162.65,309.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Sky
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#70C6CE").ss(1,1,1).p("A3b/PMAu3AAAMAAAA+fMgu3AAAg");
	this.shape.setTransform(150,200.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#56CCFF","#E7F7FF"],[0,1],0,-199.9,0,200).s().p("A3bfQMAAAg+fMAu3AAAMAAAA+fg");
	this.shape_1.setTransform(150,200.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Background, new cjs.Rectangle(-9.6,-0.9,342.90000000000003,402), null);


// stage content:
(lib.flappy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Score
	this.score = new cjs.Text("0", "24px 'Arial'", "#FFFFFF");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 29;
	this.score.lineWidth = 121;
	this.score.parent = this;
	this.score.setTransform(150,9);

	this.timeline.addTween(cjs.Tween.get(this.score).wait(1));

	// Start Instructions
	this.startInstructions = new lib.StartInstructions();
	this.startInstructions.name = "startInstructions";
	this.startInstructions.parent = this;
	this.startInstructions.setTransform(150.5,246.6,1,1,0,0,0,-0.5,3.6);
	this.startInstructions.cache(-127,-8,253,24);

	this.timeline.addTween(cjs.Tween.get(this.startInstructions).wait(1));

	// Get Ready
	this.getReadyPrompt = new lib.GetReady();
	this.getReadyPrompt.name = "getReadyPrompt";
	this.getReadyPrompt.parent = this;
	this.getReadyPrompt.setTransform(149.9,98.2,1,1,0,0,0,-1.1,12.2);
	this.getReadyPrompt.cache(-109,-8,215,41);

	this.timeline.addTween(cjs.Tween.get(this.getReadyPrompt).wait(1));

	// Game Over
	this.gameOverPrompt = new lib.GameOver();
	this.gameOverPrompt.name = "gameOverPrompt";
	this.gameOverPrompt.parent = this;
	this.gameOverPrompt.setTransform(149.8,98.3,1,1,0,0,0,-1.2,12.3);
	this.gameOverPrompt.cache(-111,-9,220,42);

	this.timeline.addTween(cjs.Tween.get(this.gameOverPrompt).wait(1));

	// Bird
	this.instance = new lib.Bird();
	this.instance.parent = this;
	this.instance.setTransform(95,174.65,0.3102,0.3098,0,0,0,3.2,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Ground
	this.ground0 = new lib.GroundSlice();
	this.ground0.name = "ground0";
	this.ground0.parent = this;
	this.ground0.setTransform(96,375.9,1,1,0,0,0,96,24.9);
	this.ground0.cache(-10,-10,212,70);

	this.ground2 = new lib.GroundSlice();
	this.ground2.name = "ground2";
	this.ground2.parent = this;
	this.ground2.setTransform(470,375.9,1,1,0,0,0,96,24.9);
	this.ground2.cache(-10,-10,212,70);

	this.ground1 = new lib.GroundSlice();
	this.ground1.name = "ground1";
	this.ground1.parent = this;
	this.ground1.setTransform(283,375.9,1,1,0,0,0,96,24.9);
	this.ground1.cache(-10,-10,212,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ground1},{t:this.ground2},{t:this.ground0}]}).wait(1));

	// Pipes
	this.pipe0 = new lib.Pipe();
	this.pipe0.name = "pipe0";
	this.pipe0.parent = this;
	this.pipe0.setTransform(-30.4,100,1,1,0,0,0,26.6,0);

	this.pipe2 = new lib.Pipe();
	this.pipe2.name = "pipe2";
	this.pipe2.parent = this;
	this.pipe2.setTransform(329.6,250,1,1,0,0,0,26.6,0);

	this.pipe1 = new lib.Pipe();
	this.pipe1.name = "pipe1";
	this.pipe1.parent = this;
	this.pipe1.setTransform(149.6,200,1,1,0,0,0,26.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pipe1},{t:this.pipe2},{t:this.pipe0}]}).wait(1));

	// Background
	this.instance_1 = new lib.Background();
	this.instance_1.parent = this;
	this.instance_1.setTransform(161.8,200.1,1,1,0,0,0,161.8,200.1);
	this.instance_1.cache(-12,-3,347,406);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Screen Flash
	this.screenFlash = new lib.ScreenFlash();
	this.screenFlash.name = "screenFlash";
	this.screenFlash.parent = this;
	this.screenFlash.setTransform(150,200);
	this.screenFlash.cache(-154,-204,309,409);

	this.timeline.addTween(cjs.Tween.get(this.screenFlash).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(81,39,493,472);
// library properties:
lib.properties = {
	id: 'B62E11E6CB1BE24C8F2EB7FCB785FEF3',
	width: 300,
	height: 400,
	fps: 60,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/flappy_atlas_.png?1594311674695", id:"flappy_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B62E11E6CB1BE24C8F2EB7FCB785FEF3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;