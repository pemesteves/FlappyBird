(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
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
	this.shape_1.graphics.f("#333333").s().p("ANqBgQgEgCgCgEQgCgDAAgEIABgXIgBgCIAAgCIAAgOIgdAAIAAAnQgBAGgEAFQgEAEgHAAIgmAAQgGAAgEgEQgEgFgBgGIAAihQABgHAEgEQAEgEAGAAIBcAAQAEAAADABIABAAIApACIADAAQAEABAEADQADAEAAAEIAAADIAAAWIAAAFIgBA3IAzgCQAGgBAFAFQADADABAEIAUhhQABgGAEgDQAFgEAFABIAzAAQAFAAAEADQAFACABAFIATA/IAAg6QAAgHAEgEQAEgEAGAAIA5AAQARAAAKAFQALAFAGAIIABACQAFAIABAKIABARIAAACIAAAFIgBATIAAABQgEAPgNAHIgEACIgCABQgJACgNABIgKAAIAABCQAAAGgEAFQgEAEgGAAIgnAAIgDAAIgFAAIgrAAQgGAAgFgEQgEgEAAgFIgEgeIgEAAIgCAeQgBAFgFAEQgEAEgGAAIgjAAQgEAAgEgCIgCgCIgCACQgEACgEAAIhsACIgBAAQgEAAgDgCgAJgBgIgVgBIgBAAQgPgBgMgIIAAAAQgNgIgHgNQgHgNgBgPIAAgZIAAgBIAAgJIgQADIAABMQAAAGgEAFQgFAEgGAAIgoAAQgEAAgEgCQgDgCgCgEQgCgEAAgEIABgUIgBgFIADgzIgTAAQgGgBgFgDQgEgEAAgGIgCgrQgBgDACgDIgBgVIAAAAIAAgBIAAgCIABgFQACgDAEgCQAEgDAEABIBvABQAGAAAFAEQADAEABAFQAIgIAKgDIgBABQALgFALABIAQAAQAOAAAOAIIgBAAQAMAHAIAMQAIANABAPIAAABIAAAaIAAABIAAAxQAAANgFAMIgBAAQgEAKgIAIIAAABQgIAHgJAEQgLAEgJAAIAAAAIgBAAgArbBgIgmAAQgXAAgMgIIAAAAQgGgEgEgGQgEAFgFAEIABAAQgLAIgMABIgBAAIglAAQgVAAgMgGIgBACQgFAEgGAAIhgAAIgEgBIgGABIgjAAQgGAAgEgEQgFAEgFAAIglAAQgHAAgEgEQgEgFgBgGIAAhHIgCABIgDABQgIACgNABIgKAAIAABCQAAAGgEAFQgEAEgHAAIgmAAQgGAAgEgEQgEgFgBgGIAAihQABgHAEgEQAEgEAGAAIA5AAQARAAAKAFIAHAEIADgFQAEgEAHAAIA3AAQAPAAAJACIABAAIAKAFIACgDQAEgEAGAAIBcAAQAGAAAEAEQAFAEAAAGIADgCIABAAQAIgGAJgDQAKgEAIABIAZAAQAOAAAKAFIAAABQAJAEAGAIIABABIADAEQAEgGAHgFIABAAQAIgGAJgDQAKgEAIABIAZAAQAOAAAJAFIABABQAJAEAGAIIABABQAFAHACAHQAEAJgBAGIAAAQIAAAEIAAAHIAAAQIgBAFIABAJIAAAKIAAABIAAADIAAABIgBADIABAJIAAAKQAAAKgFAMIAAgBQgFAMgKAHIABAAQgLAIgMABIgBAAIAAAAgAAMBeQgDgBgCgDIgKgQIgBAHQAAAGgEAFQgEAEgGAAIgnAAQgGAAgFgEQgEgFAAgGIAAiiQAAgFACgDQADgEAEgCQADgCAFABIAoAFQAGAAAEAFIAAAAIAAABIACACIABACIACgFQACgDADgCIAFgCIAogEQAGAAAFADIACACQAEgDAFAAIBbAAIAGABQAEgCAEAAIApAFQAEAAADADQADACACADIAEAJIAEgMQACgEADgDQAEgCAFAAIAogBQAGAAAEAEQAEADABAFIAAAAQABAFgCAFIgFAIIABABQAEADABAFQABAGgCAFIgmBBIgGA/QAAAGgEAEQgFAEgGAAIgkAAQgEAAgDgCQgEgCgCgEQgCgDABgEIAAgXIAAgEIAAgmIgUglIgDADIAAAAIAAASIAAABIAAAGIAFAEQAEAEgBAGIAAAbIAAABIAAAgQAAAGgEAFQgEAEgGAAIhgAAQgEAAgDgCIgFABIgpABIAAAAQgEAAgDgCgAkYBeQgDgCgCgEQgCgDAAgEIAAgXIAAgEIAAgmIgSghIAABGIAAADIAAAYQABAGgFAFQgEAEgGAAIg2ABQgFAAgEgCQgEgDgBgEIgBgBIgBACQgCAEgDACQgEACgEAAIgkAAIgEAAIgEAAIgsAAQgGAAgEgEQgEgEgBgFIgEgeIgDAAIgDAeQgBAFgEAEQgEAEgGAAIgjAAQgFAAgEgCQgDgDgCgEQgCgFABgEIADgOIgCgEQgCgFABgEIAciGQABgGAEgDQAEgEAFABIA0AAQAFAAAEADQAEACABAFIATA/IAAg7QAAgEACgEQADgEADgBQAEgCAFAAIAoAFQAEAAAEADQADACABADIAIASIgBgRIACgGQACgDAEgCQADgDAFABIAogBQAEAAADACQADgCAFAAIAoAFQAEAAADADQAEACABADIAEAJIAFgMQABgEAEgDQAEgCAEAAIApgBQAFAAAFAEQAEADABAFIAAAAQABAFgDAFIgEAIIABABQAEADABAFQABAGgDAFIglBBIgGA/QgBAGgEAEQgEAEgGAAIgkAAIAAAAQgEAAgEgCg");
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


(lib.ChooseBird = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text Body
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAuBqQgGgHAAgKIAAgFQgIAJgHAHQgIAFgJADQgJADgKAAQgPAAgMgGQgMgGgJgLQgJgMgFgPQgEgPAAgRQAAglASgVQASgVAeAAQAQAAAMAGQAMAGALAMIAAg7QAAgMAFgHQAFgGAJAAQAJAAAFAGQAFAFAAAMIAACwQAAAKgFAHQgFAFgJAAQgIAAgFgFgAgTgPQgJAHgEAKQgFAMAAAPQAAARAFALQAFAMAJAFQAIAHAKAAQAKgBAJgFQAJgGAFgLQAFgMAAgRQAAgQgFgLQgFgKgJgHQgJgFgKgBQgKABgJAFg");
	this.shape.setTransform(117.875,19.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwBLQgGgGAAgMIAAhuQAAgbAUAAQAKAAAEAGQAEAGABANQAHgNAIgGQAGgGANAAQAMAAAMAGQAMAGAAALQAAAHgFAFQgFAFgGAAIgLgDQgIgDgGAAQgJAAgFAFQgFAEgDAKQgEAJgBAMIgBAeIAAAhQAAAMgGAGQgFAGgJAAQgJAAgFgGg");
	this.shape_1.setTransform(103.275,22.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOBoQgFgGAAgMIAAhxQAAgNAFgFQAGgHAIAAQAJAAAFAHQAGAFAAAMIAAByQAAAMgGAGQgFAGgJAAQgIAAgGgGgAgNhLQgGgFAAgJQAAgJAGgGQAGgFAIAAQAHAAAGAFQAGAFAAAKQAAAJgGAFQgGAFgHAAQgIAAgGgFg");
	this.shape_2.setTransform(91.65,19.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag+BrQgOAAgGgGQgGgGAAgOIAAihQAAgOAGgGQAGgGAOAAIBFAAQAPAAAMABQALACAJAGQAHAEAGAHQAGAHADAJQADAIAAAJQAAAhggAPQAqAMAAAnQAAASgJAPQgJAOgQAHQgKAEgMACQgNABgRAAgAgtBLIAuAAQAsAAAAggQAAgQgLgIQgMgHgWAAIgtAAgAgtgSIAoAAQAQAAAIgDQAJgDAFgJQAEgGAAgIQAAgQgMgFQgMgGgWAAIgkAAg");
	this.shape_3.setTransform(77.225,19.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgwBLQgGgGAAgMIAAhuQAAgbAUAAQAKAAAEAGQAEAGABANQAHgNAIgGQAGgGANAAQAMAAAMAGQAMAGAAALQAAAHgFAFQgFAFgGAAIgLgDQgIgDgGAAQgJAAgFAFQgFAEgDAKQgEAJgBAMIgBAeIAAAhQAAAMgGAGQgFAGgJAAQgJAAgFgGg");
	this.shape_4.setTransform(52.875,22.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAnBMQgFgGAAgLIAAgFQgHAJgIAGQgIAGgKADQgIADgMAAQgOAAgMgGQgLgGgHgKQgHgNAAgYIAAhOQAAgMAFgGQAGgGAJAAQAJAAAFAGQAGAGAAAMIAAA/QAAAOACAJQACAKAHAFQAGAFAKAAQAJAAAJgGQAJgGAEgJQADgJAAgcIAAgwQAAgMAGgGQAGgGAIAAQAJAAAGAGQAFAGAAAMIAABzQAAALgFAGQgFAFgIAAQgJAAgFgFg");
	this.shape_5.setTransform(36.325,22.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggBMQgOgGgLgLQgLgLgFgPQgGgPAAgSQAAgRAGgPQAGgPAKgLQAKgLAPgFQAPgGARAAQASAAAPAGQAPAGAKAKQALALAFAPQAGAPAAARQAAASgGAPQgGAPgKALQgLALgOAGQgPAFgSAAQgRAAgPgFgAgUgsQgJAGgFALQgEAMAAAPQAAAQAEAMQAFALAJAHQAJAGALAAQASAAALgOQAKgOAAgYQAAgXgKgOQgLgOgSAAQgLAAgJAHg");
	this.shape_6.setTransform(18.225,22.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPBoQgGgGAAgOIAAhDIg1hRIgKgRQgCgGAAgEQAAgIAFgGQAGgFAJAAQAJAAAEAFQAFAFAJAPIAnBCIAphCIAGgKIAFgIQADgDAEgCQAEgCAFAAQAIAAAGAFQAFAGAAAHQAAAFgDAGQgCAGgHAKIg2BSIAABDQAAAOgGAGQgGAHgJAAQgJAAgGgHg");
	this.shape_7.setTransform(-0.225,19.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag2A7QgVgWAAglQAAgRAFgPQAGgPAKgLQAKgLAPgGQAPgFAQAAQAYAAARAJQARAKAIAQQAIAQAAAQQAAAOgIAFQgJAEgPAAIhOAAQAAAOAGAKQAFAKAJAGQAJAFAKAAQAHAAAFgCQAGgBAGgEIAKgIIANgLQADgDAFAAQAHAAADAEQAEADAAAGQAAAGgEAHQgFAHgIAHQgJAHgNAEQgNAEgQAAQgmAAgWgWgAgWgqQgKAKgCAUIBHAAQgBgUgKgKQgJgLgQAAQgNAAgKALg");
	this.shape_8.setTransform(-26.05,22.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmBLQgPgHgHgKQgIgKAAgKQABgGAEgFQAEgEAIAAQAGAAAEADQADADADAFQAGALAJAFQAIAFAOAAQAMAAAIgFQAHgFABgHQAAgLgJgEQgIgFgRgFQgVgFgNgFQgNgFgHgJQgIgKAAgNQAAgMAHgLQAHgKAOgHQAOgGAUAAQAPAAAMADQAMADAJAGQAIAFAFAHQADAGAAAHQABAGgFAFQgEAEgJAAQgGAAgFgDQgEgEgGgHQgEgGgGgDQgHgEgJAAQgLAAgHAFQgHAFAAAGQAAAHAGAEQAFAEAIACIAYAHQATAEAMAHQALAFAHAJQAFAIAAALQABARgJAMQgHALgQAGQgQAGgWAAQgWAAgPgGg");
	this.shape_9.setTransform(-43.1,22.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggBMQgOgGgLgLQgLgLgFgPQgGgPAAgSQAAgRAGgPQAGgPAKgLQAKgLAPgFQAPgGARAAQASAAAPAGQAPAGAKAKQALALAFAPQAGAPAAARQAAASgGAPQgGAPgKALQgLALgOAGQgPAFgSAAQgRAAgPgFgAgUgsQgJAGgFALQgEAMAAAPQAAAQAEAMQAFALAJAHQAJAGALAAQASAAALgOQAKgOAAgYQAAgXgKgOQgLgOgSAAQgLAAgJAHg");
	this.shape_10.setTransform(-60.225,22.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AggBMQgOgGgLgLQgLgLgFgPQgGgPAAgSQAAgRAGgPQAGgPAKgLQAKgLAPgFQAPgGARAAQASAAAPAGQAPAGAKAKQALALAFAPQAGAPAAARQAAASgGAPQgGAPgKALQgLALgOAGQgPAFgSAAQgRAAgPgFgAgUgsQgJAGgFALQgEAMAAAPQAAAQAEAMQAFALAJAHQAJAGALAAQASAAALgOQAKgOAAgYQAAgXgKgOQgLgOgSAAQgLAAgJAHg");
	this.shape_11.setTransform(-78.325,22.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAfBXIAAhDQAAgUgGgJQgFgLgQABQgKAAgIAFQgJAHgEAJQgDAJAAAXIAAA1QAAAMgGAGQgFAGgKAAQgTAAAAgYIAAitQAAgMAFgGQAFgGAJAAQAKAAAFAGQAGAGAAAMIAAA8QAHgJAHgFQAIgGAIgCQAIgCAKgBQAQABALAGQAMAHAHAMQAEAHACAJQABAJAAAKIAABNQAAAMgFAGQgGAGgJAAQgUAAAAgYg");
	this.shape_12.setTransform(-96.375,19.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWBsQgOgDgLgHQgMgHgJgLQgJgKgGgNQgGgMgDgPQgDgOAAgPQAAgZAIgVQAHgUAOgPQAOgOATgJQATgHAVAAQAaAAAUALQAUAKALAQQALAPAAANQAAAIgFAFQgFAGgIAAQgIAAgEgEQgFgEgFgJQgIgQgMgJQgLgHgRgBQgaABgQAUQgQAVAAAkQAAAZAHARQAHAQANAIQANAIAQAAQATAAANgJQANgJAHgSQACgIAFgGQAEgFAJAAQAIAAAFAFQAGAGAAAHQAAALgFAMQgFAMgLALQgLAMgRAHQgRAHgWAAQgQAAgOgDg");
	this.shape_13.setTransform(-116.625,19.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Text Shadow
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAuBqQgGgHAAgKIAAgFQgIAKgHAGQgIAFgJADQgJADgKAAQgPAAgMgGQgMgGgJgLQgJgMgFgPQgEgPAAgSQAAgkASgVQASgVAeAAQAQAAAMAGQAMAGALAMIAAg7QAAgMAFgHQAFgGAJAAQAJAAAFAGQAFAFAAAMIAACwQAAAKgFAHQgFAFgJAAQgIAAgFgFgAgTgPQgJAHgEAKQgFAMAAAPQAAARAFALQAFAMAJAFQAIAHAKAAQAKgBAJgFQAJgGAFgLQAFgMAAgRQAAgPgFgMQgFgKgJgHQgJgFgKAAQgKAAgJAFg");
	this.shape_14.setTransform(116.375,20.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgwBLQgGgGAAgMIAAhuQAAgbAUAAQAKAAAEAGQAEAGABANQAHgNAIgGQAGgGANAAQAMAAAMAGQAMAGAAALQAAAHgFAFQgFAFgGAAIgLgDQgIgDgGAAQgJAAgFAFQgFAEgDAKQgEAJgBAMIgBAeIAAAhQAAAMgGAGQgFAGgJAAQgJAAgFgGg");
	this.shape_15.setTransform(101.775,23.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNBoQgGgGAAgMIAAhxQAAgNAGgFQAFgHAIAAQAIAAAHAHQAFAFAAAMIAAByQAAAMgFAGQgHAGgIAAQgIAAgFgGgAgNhLQgGgFAAgKQAAgIAHgGQAGgFAGAAQAIAAAGAFQAGAFAAAJQAAAKgFAFQgHAFgIAAQgHAAgGgFg");
	this.shape_16.setTransform(90.15,20.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag+BrQgOAAgGgGQgGgGAAgOIAAihQAAgOAGgGQAGgGAOAAIBFAAQAPAAAMABQALACAJAGQAHAEAGAHQAGAHADAJQADAIAAAJQAAAhggAPQAqAMAAAnQAAASgJAPQgJAOgQAHQgKAEgMACQgNABgRAAgAgtBLIAuAAQAsAAAAggQAAgQgLgIQgMgHgWAAIgtAAgAgtgSIAoAAQAQAAAIgDQAJgDAFgJQAEgGAAgIQAAgQgMgFQgMgGgWAAIgkAAg");
	this.shape_17.setTransform(75.725,20.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgwBLQgGgGAAgMIAAhuQAAgbAUAAQAKAAAEAGQAEAGABANQAHgNAIgGQAGgGANAAQAMAAAMAGQAMAGAAALQAAAHgFAFQgFAFgGAAIgLgDQgIgDgGAAQgJAAgFAFQgFAEgDAKQgEAJgBAMIgBAeIAAAhQAAAMgGAGQgFAGgJAAQgJAAgFgGg");
	this.shape_18.setTransform(51.375,23.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAnBMQgFgGAAgLIAAgFQgHAJgIAGQgIAGgKADQgIADgMAAQgOAAgMgGQgLgGgHgKQgHgNAAgYIAAhOQAAgMAFgGQAGgGAJAAQAJAAAFAGQAGAGAAAMIAAA/QAAAOACAJQACAKAHAFQAGAFAKAAQAJAAAJgGQAJgGAEgJQADgJAAgcIAAgwQAAgMAGgGQAGgGAIAAQAJAAAGAGQAFAGAAAMIAABzQAAALgFAGQgFAFgIAAQgJAAgFgFg");
	this.shape_19.setTransform(34.825,23.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AggBMQgOgGgLgLQgLgLgFgPQgGgPAAgSQAAgRAGgPQAGgPAKgLQAKgLAPgFQAPgGARAAQASAAAPAGQAPAGAKAKQALALAFAPQAGAPAAARQAAASgGAPQgGAPgKALQgLALgOAGQgPAFgSAAQgRAAgPgFgAgUgsQgJAGgFALQgEAMAAAPQAAAQAEAMQAFALAJAHQAJAGALAAQASAAALgOQAKgOAAgYQAAgXgKgOQgLgOgSAAQgLAAgJAHg");
	this.shape_20.setTransform(16.725,23.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgPBpQgGgHAAgOIAAhDIg1hRIgKgRQgCgGAAgEQAAgIAFgGQAGgFAJAAQAJAAAEAFQAFAFAJAPIAnBCIAphCIAGgKIAFgIQADgDAEgCQAEgCAFAAQAIAAAGAFQAFAGAAAHQAAAGgDAFQgCAGgHAKIg2BSIAABDQAAAOgGAHQgGAGgJAAQgJAAgGgGg");
	this.shape_21.setTransform(-1.725,20.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag2A7QgVgWAAglQAAgRAGgPQAEgPALgLQAKgLAOgGQAPgFASAAQAXAAARAJQARAKAIAQQAIAQAAAQQAAAOgIAFQgJAEgQAAIhNAAQAAAOAFAKQAGAKAJAGQAJAFAKAAQAGAAAGgCQAHgBAFgEIAKgIIAMgLQADgDAGAAQAGAAAEAEQAEADAAAGQAAAGgFAHQgDAHgJAHQgIAHgOAEQgNAEgRAAQglAAgWgWgAgWgqQgKAKgCAUIBIAAQgCgUgKgKQgJgLgQAAQgNAAgKALg");
	this.shape_22.setTransform(-27.55,23.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AglBLQgQgHgIgKQgGgKgBgKQAAgGAFgFQAFgEAHAAQAGAAADADQAEADADAFQAGALAJAFQAJAFANAAQAMAAAIgFQAHgFAAgHQABgLgJgEQgHgFgSgFQgVgFgMgFQgOgFgHgJQgIgKAAgNQAAgMAHgLQAHgKAPgHQANgGAUAAQAOAAANADQANADAIAGQAIAFAEAHQAFAGAAAHQAAAGgFAFQgFAEgIAAQgGAAgEgDQgFgEgGgHQgEgGgGgDQgHgEgJAAQgLAAgHAFQgHAFAAAGQAAAHAFAEQAGAEAJACIAXAHQASAEANAHQALAFAHAJQAFAIABALQgBARgHAMQgJALgQAGQgPAGgWAAQgVAAgPgGg");
	this.shape_23.setTransform(-44.6,23.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AggBMQgOgGgLgLQgLgLgFgPQgGgPAAgSQAAgRAGgPQAGgPAKgLQAKgLAPgFQAPgGARAAQASAAAPAGQAPAGAKAKQALALAFAPQAGAPAAARQAAASgGAPQgGAPgKALQgLALgOAGQgPAFgSAAQgRAAgPgFgAgUgsQgJAGgFALQgEAMAAAPQAAAQAEAMQAFALAJAHQAJAGALAAQASAAALgOQAKgOAAgYQAAgXgKgOQgLgOgSAAQgLAAgJAHg");
	this.shape_24.setTransform(-61.725,23.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AggBMQgOgGgLgLQgLgLgFgPQgGgPAAgSQAAgRAGgPQAGgPAKgLQAKgLAPgFQAPgGARAAQASAAAPAGQAPAGAKAKQALALAFAPQAGAPAAARQAAASgGAPQgGAPgKALQgLALgOAGQgPAFgSAAQgRAAgPgFgAgUgsQgJAGgFALQgEAMAAAPQAAAQAEAMQAFALAJAHQAJAGALAAQASAAALgOQAKgOAAgYQAAgXgKgOQgLgOgSAAQgLAAgJAHg");
	this.shape_25.setTransform(-79.825,23.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAfBXIAAhEQAAgTgGgJQgFgKgQAAQgKAAgIAFQgJAHgEAJQgDAJAAAXIAAA1QAAAMgGAGQgFAGgKAAQgTAAAAgYIAAitQAAgMAFgGQAFgGAJAAQAKAAAFAGQAGAGAAAMIAAA8QAHgJAHgFQAIgGAIgCQAIgCAKgBQAQABALAGQAMAHAHAMQAEAHACAJQABAJAAAKIAABNQAAAMgFAGQgGAGgJAAQgUAAAAgYg");
	this.shape_26.setTransform(-97.875,20.65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgWBsQgOgDgLgHQgMgHgJgLQgJgKgGgNQgGgMgDgPQgDgOAAgQQAAgYAIgVQAHgUAOgPQAOgPATgIQATgHAVAAQAaAAAUALQAUAKALAQQALAOAAAOQAAAIgFAFQgFAGgIAAQgIAAgEgEQgFgEgFgKQgIgPgMgJQgLgHgRgBQgaABgQAUQgQAVAAAkQAAAZAHARQAHAQANAJQANAHAQAAQATAAANgJQANgJAHgSQACgIAFgGQAEgFAJAAQAIAAAFAFQAGAGAAAHQAAALgFAMQgFAMgLALQgLAMgRAHQgRAHgWAAQgQAAgOgDg");
	this.shape_27.setTransform(-118.125,20.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ChooseBird, new cjs.Rectangle(-139,0,276.5,39.8), null);


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

}).prototype = getMCSymbolPrototype(lib.LowerPipe, new cjs.Rectangle(-1,-1,62,205), null);


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

}).prototype = getMCSymbolPrototype(lib.GroundSlice, new cjs.Rectangle(-1,-1,195,51), null);


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
	this.instance.cache(-3,-3,66,209);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Lower Pipe
	this.instance_1 = new lib.LowerPipe();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.7,150.8,1,1,0,0,0,29.7,101.8);
	this.instance_1.cache(-3,-3,66,209);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pipe, new cjs.Rectangle(-3,-252,60.1,504.1), null);


(lib.Bird2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.gotoAndPlay(0);
		/*
		When the animation reaches the end of the timeline it will be sent
			back to the first frame (0) of the timeline and continue to 
			play. It creates a endless animation.
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit0},{t:this.hit1},{t:this.hit2},{t:this.hit3},{t:this.hit4},{t:this.hit5},{t:this.hit6},{t:this.hit7},{t:this.hit8}]}).to({state:[]},14).wait(1));

	// Wing
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("ACLCTIgYgUIAHAHIABABIACABIAOALIgTgFIiDg4IgegQIgqgZIgvggQgFgFgCgIQgCgGACgIQADgSAOgOQAPgPASgDQAIgBAHABIgCgEIgBgHQABgJADgGQAIgQASgKQASgLASACQAIAAAFAEIAGAEIADADQABgGADgFQACgFAIgFQAOgKAVgBQAVgBAPAJIALAKQAEAHAAAFIgEBaIAEA6IABADIAAABIAAACIALA9IAOAwg");
	this.shape.setTransform(-23.2375,-19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("ACLCJIgogjIAXAVIABACIACABIAOALIhygsIhCgiIgqgZIgvggQgFgEgCgIQgCgGACgJQADgRAOgPQAPgPASgDQAIgBAHABIgCgEIgBgHQABgIADgHQAIgQASgKQASgKASABQAIAAAFAEIAGAEIAEAFIBaDHIAjA9g");
	this.shape_1.setTransform(-23.2375,-18.3348);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AAZA/IhCgiIgqgZIgvgfQgFgFgCgIQgCgGACgJQADgRAOgPQAPgPASgDQAIgBAHABQAIACAEAEIBgBxIBWBPIABACIACABIAOALg");
	this.shape_2.setTransform(-23.2375,-15.3125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("Ah/AyQgNgCgIgQQgIgQACgTQADgVALgNQALgNAOABQASACD8BPQjvASglAAIgGAAg");
	this.shape_3.setTransform(-24.8461,-7.8732);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AhXBrQgQgDgQgPQgOgPgDgRQgBgJABgHQADgHAFgFIAugfQAtgbAsgXICCg3IgnAkIgIAHIg1A0QggAhggAoIggAoQgFAFgHABIgIABIgIgBg");
	this.shape_4.setTransform(-23.095,6.1625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AgzCEQgSgJgJgRQgDgFgBgJQAAgIAEgHIABgBIgKgBQgQgDgQgPQgOgPgDgRQgBgJABgHQADgHAFgEIAuggQAtgbAsgXICCg3IgIAIIAIgIIgXAmQgHALgPAcIgYAvQgLAWgLAZIgCAGIgCACIgfBPIgDAGQgDAGgFADQgHAFgIAAIgHABQgOAAgPgIg");
	this.shape_5.setTransform(-23.095,9.351);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AAZCJQgHgGgDgFQgDgHAAgHIABgEIgCAEIgDAGQgDAGgFADQgHAFgIAAQgRADgTgKQgSgKgJgQQgDgFgBgKQAAgHAEgHIABgBIgKgBQgQgDgQgPQgOgPgDgRQgBgJABgHQADgGAFgFIAuggQAtgbAsgXICCg4IgIAIIAHgGIABgCIAAABIAAAAIAAAAIgNAwIgLA9IgBACIAAABIAAADIgEBRIAEBEQAAAEgFAHIgLAKQgOAIgWAAQgVAAgOgKg");
	this.shape_6.setTransform(-23.095,10.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AAZCJQgHgGgDgFQgDgHAAgHIABgEIgCAEIgDAGQgDAGgFADQgHAFgIAAQgRADgTgKQgSgKgJgQQgDgFgBgKQAAgHAEgHIABgBIgKgBQgQgDgQgPQgOgPgDgRQgBgJABgHQADgGAFgFIAuggQAtgbAsgXICCg4IgIAIIAHgGIABgCIAAABIAAAAIAAAAIgUBPIgEAeIgBACIAAABIAAADIgEBRIAEBEQAAAEgFAHIgLAKQgOAIgWAAQgVAAgOgKg");
	this.shape_7.setTransform(-23.095,10.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066FF").s().p("ACLCTIgogjIAXAWIABABIACABIAOALIhygrIhCgiIgqgZIgvggQgFgFgCgIQgCgGACgIQADgSAOgOQAPgPASgDQAIgBAHABIgCgEIgBgHQABgJADgGQAIgQASgKQASgLASACQAIAAAFAEIAGAEIADADQABgGADgFQACgFAIgFQAOgKAVgBQAVgBAPAJIALAKQAEAHAAAFIgDAqIADBqIABADIAAABIAAACIASBXIAHAWg");
	this.shape_8.setTransform(-23.2375,-19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_8}]},1).to({state:[]},1).wait(1));

	// Eye
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAhIgEgDQgMgNAAgRQAAgRAMgMQANgMAQAAQASAAAMAMIAEAFQAIALAAANQAAARgMANQgMAMgSAAQgOAAgLgJg");
	this.shape_9.setTransform(10.45,-15.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AECCE7").s().p("AAACbQgwAAgpgyQgpgygBheIAAgRQAZAVAYALIACAIQAMAyAQAkQAQAkAkACQAiACAbgrQAbgrAAg7QAAgjgJgcQAPgZAPgfQAcA0gGBNQgGBegnAsQgmAqgwAAIAAAAg");
	this.shape_10.setTransform(14.6646,-0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D4EBFF").s().p("Ah4BKQADhRAngwQArg1AwADQAxACAsA5QAIALAHAMQgPAegPAZQgHgWgLgRQgbgrgmAFIgEABIgEgGQgMgMgSAAQgRAAgMAMQgNANAAARQAAASANALIADAEQgXAvAJAuQgYgKgagWg");
	this.shape_11.setTransform(13.5,-13.4308);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6D0000").s().p("AhPBHQgIguAXgvQALAKAPAAQARAAANgNQALgMAAgSQAAgOgHgLIAEAAQAlgFAbArQAMASAGAWQg1BUg+AAQgWAAgYgLg");
	this.shape_12.setTransform(14.3544,-9.9244);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#410000").s().p("AgDBnQgkgCgPgjQgRgkgMgyIgBgIQBZAnBIhyQAIAdABAjQAAA7gbArQgaApghAAIgDgBg");
	this.shape_13.setTransform(14.9,0.1304);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).to({state:[]},14).wait(1));

	// Body
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("AD9gVQhhBDiGACQiNADhihHQgTgOgQgN");
	this.shape_14.setTransform(1.3875,20.0912);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#0066FF").ss(1,1,1).p("AksCLIB9AqIAdhvQBRBHBjAiQg+hVgfhVQBuk/CsCDQCkDMi0CnIBZgIQgOANgQAMQgFAEgEADQjsAniMhwQgQAkAaAqIiMgfQgfgZgUgWg");
	this.shape_15.setTransform(1.0705,-3.3576);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#0099FF").ss(1,1,1).p("Ak3CqQgZgbgKgYQgZg1AshPQAshQDbhOQDZhOBlBQQBmBRAAB8QAABphGBF");
	this.shape_16.setTransform(2.0788,-6.4376);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066FF").s().p("Ah3CLQgQAkAaAqIiMgfQgfgZgUgWIB9AqIAdhvQBRBHBjAiQg+hVgfhVQBuk/CsCDQCkDMi0CnIBZgIQgOANgQAMIgJAHQg9AKg1AAQidAAhphTg");
	this.shape_17.setTransform(1.0705,-3.3576);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0099FF").s().p("ADVicQisiEhuE/QAfBVA+BWQhjgihRhHIgdBuIh+gqQgZgbgKgXQgZg1AshPQAshQDbhOQDZhOBlBQQBmBQAAB8QAABphGBGIhZAJQC0inikjMg");
	this.shape_18.setTransform(2.0788,-6.0126);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AjZADIgjgbICMAeQgagpAQgkQCLBvDsgmQhhBEiGACIgJAAQiHAAhfhFg");
	this.shape_19.setTransform(1.3875,17.7162);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).to({state:[]},14).wait(1));

	// Beak
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFE054").s().p("AgiAdIAAgdIBDAOQgDApgaAPQgSgJgUgggAgiAAIAAgcQAMgXAZgSQAiAPgCAnQggAPgkAAIgBAAgAgiAAIAAAAg");
	this.shape_20.setTransform(40.9542,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).to({_off:true},14).wait(1));

	// Crest
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00CFFF").s().p("AgBA1IgUgKIgcgIQgHglAHgoQAVgbAcAjQgTAlgCAoQAQgzAzACQAQAggQAbQgDACgMAAQgMAAgUgCg");
	this.shape_21.setTransform(26.2833,-30.3649);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).to({_off:true},14).wait(1));

	// Tail
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00CFFF").s().p("AgxAlQgIgNgHgTQgHgTAAgPQAAgPAGgCQAIgDCBAJQhiBUgIADIgBABQgGAAgIgLg");
	this.shape_22.setTransform(-34.3269,2.0616);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00CFFF").s().p("AhOAXQgGgDADgQQADgOAKgSQALgSANgJQAMgKAGAEQAJAFBkB3QiYgigJgGg");
	this.shape_23.setTransform(-33.1974,-6.8843);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22}]}).to({state:[]},14).wait(1));

	// Feet
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFE054").s().p("AAAAxQgNgJgOgOQgPgPgHgMQgHgOADgDQAFgFBngeQgjBlgFAFIgDABQgEAAgIgFg");
	this.shape_24.setTransform(-20.5799,21.9114,0.982,0.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E5C222").s().p("AgIAvQgNgJgNgQQgNgQgGgNQgGgNAEgEQAFgEBsgZQguBlgFAFIgDABQgEAAgIgHg");
	this.shape_25.setTransform(-16.2159,22.1635,0.9568,1.1192);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24}]}).to({state:[]},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-35.8,86.9,65.69999999999999);


(lib.Bird = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.gotoAndPlay(0);
		/*
		When the animation reaches the end of the timeline it will be sent
			back to the first frame (0) of the timeline and continue to 
			play. It creates a endless animation.
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit0},{t:this.hit1},{t:this.hit2},{t:this.hit3},{t:this.hit4},{t:this.hit5},{t:this.hit6},{t:this.hit7},{t:this.hit8}]}).to({state:[]},14).wait(1));

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
	this.shape_9.graphics.f("#C90102").s().p("AgwCJQgIgGgCgFQgEgHAAgHIACgMIAfhgIAag0IABgCIAAgBIAcguIABgCIACgCIAiguIgUBQIgFAeIAAACIAAABIgBADIgEBRIAEBEQAAAEgEAHIgLAKQgPAIgUAAQgVAAgOgKg");
	this.shape_9.setTransform(-15.625,10.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C90102").s().p("AAaBjIgcgvIAAgBIgBgCIgag1IgVg6IgMgxQAAgIAEgGQACgFAIgFQAOgKAVgBQAUgBAPAJIALAKQAEAHAAAFIgDAqIADBqIABADIAAABIAAACIASBXIAHAWg");
	this.shape_10.setTransform(-15.625,-19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6},{t:this.shape_7}]},1).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_8}]},1).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_9}]},1).to({state:[{t:this.shape_6},{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_10},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[]},1).wait(1));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).to({state:[]},14).wait(1));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).to({state:[]},14).wait(1));

	// Beak
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFE054").s().p("AgiAdIAAgdIBDAOQgDApgaAPQgSgJgUgggAgiAAIAAgcQAMgXAZgSQAiAPgCAnQggAPgkAAIgBAAgAgiAAIAAAAg");
	this.shape_20.setTransform(40.9542,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).to({_off:true},14).wait(1));

	// Crest
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgBA1IgUgKIgcgIQgHglAHgoQAVgbAcAjQgTAlgCAoQAQgzAzACQAQAggQAbQgDACgMAAQgMAAgUgCg");
	this.shape_21.setTransform(26.2833,-30.3649);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).to({_off:true},14).wait(1));

	// Tail
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgxAlQgIgNgHgTQgHgTAAgPQAAgPAGgCQAIgDCBAJQhiBUgIADIgBABQgGAAgIgLg");
	this.shape_22.setTransform(-34.3269,2.0616);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AhOAXQgGgDADgQQADgOAKgSQALgSANgJQAMgKAGAEQAJAFBkB3QiYgigJgGg");
	this.shape_23.setTransform(-33.1974,-6.8843);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22}]}).to({state:[]},14).wait(1));

	// Feet
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFE054").s().p("AAAAxQgNgJgOgOQgPgPgHgMQgHgOADgDQAFgFBngeQgjBlgFAFIgDABQgEAAgIgFg");
	this.shape_24.setTransform(-20.5799,21.9114,0.982,0.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E5C222").s().p("AgIAvQgNgJgNgQQgNgQgGgNQgGgNAEgEQAFgEBsgZQguBlgFAFIgDABQgEAAgIgHg");
	this.shape_25.setTransform(-16.2159,22.1635,0.9568,1.1192);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24}]}).to({state:[]},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-35.8,86.9,73.6);


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

	// timeline functions:
	this.frame_0 = function() {
		function UI(){
			/*
			exportRoot: represents the stage and all the content
				within it
			*/
			this.scoreLabel = exportRoot.score;
			this.gameOverPrompt = exportRoot.gameOverPrompt;
			this.getReadyPrompt = exportRoot.getReadyPrompt;
			this.startInstructions = exportRoot.startInstructions;
			this.screenFlash = exportRoot.screenFlash;
			this.chooseBirdPrompt = exportRoot.chooseBird;
			
			this.chooseBird();
			//this.getReady();
		}
		
		UI.prototype.updateScore = function(score){
			this.scoreLabel.text = "Score: " + score;
		}
		
		UI.prototype.chooseBird = function(){
			this.gameOverPrompt.visible = false;
			this.getReadyPrompt.visible = false;
			this.startInstructions.visible = false;
			this.screenFlash.visible = false;
			this.scoreLabel.visible = false;
			this.chooseBirdPrompt.visible = true;
		}
		
		UI.prototype.gameStart = function(){
			this.gameOverPrompt.visible = false;
			this.getReadyPrompt.visible = false;
			this.startInstructions.visible = false;
			this.screenFlash.visible = false;
			this.scoreLabel.visible = true;
			this.chooseBirdPrompt.visible = false;
			this.updateScore(0);
		}
		
		UI.prototype.getReady = function(){
			this.gameOverPrompt.visible = false;
			this.getReadyPrompt.visible = true;
			this.startInstructions.visible = true;
			this.screenFlash.visible = false;
			this.scoreLabel.visible = false;
			this.chooseBirdPrompt.visible = false;
		}
		
		UI.prototype.gameOver = function(){
			this.gameOverPrompt.visible = true;
			this.getReadyPrompt.visible = false;
			this.startInstructions.visible = true;
			this.screenFlash.visible = false;
			this.scoreLabel.visible = true;
			this.chooseBirdPrompt.visible = false;
		}
		
		UI.prototype.triggerScreenFlash = function(){
			this.screenFlash.visible = true;
			this.screenFlash.alpha = 1;
			createjs.Tween.get(this.screenFlash).to({alpha:0}, 100);
			/*
			Tween: change the value of properties over a period of time
			Changing screen flash alpha from 1 to 0 in 100ms
			*/
		}
		function Bird(mc){
			this.mc = mc;
			this.initY = this.mc.y;
			this.state = Bird.DEAD;
			this.velocity = 0;
			this.setupCollisionPoints();
		}
		
		Bird.ALIVE = 0;
		Bird.DYING = 1;
		Bird.DEAD = 2;
		
		Bird.MAX_UP_ANGLE = -22.5;
		Bird.MAX_DOWN_ANGLE = 90;
		Bird.ANGLE_DIFF = Bird.MAX_DOWN_ANGLE - Bird.MAX_UP_ANGLE;
		
		Bird.prototype.updateVelocity = function(){
			this.velocity += Main.GRAVITY;
			
			if(this.velocity > Main.MAX_VELOCITY){
				this.velocity = Main.MAX_VELOCITY;
			}
			
			this.mc.y += this.velocity;
		}
		
		Bird.prototype.update = function(){
			if(this.state === Bird.ALIVE || this.state === Bird.DYING){
				this.updateVelocity();
				this.updateRotation();
			}
		}
		
		Bird.prototype.isAlive = function(){
			return this.state === Bird.ALIVE;
		}
		
		Bird.prototype.isDead = function(){
			return this.state === Bird.DEAD;
		}
		
		Bird.prototype.isDying = function(){
			return this.state === Bird.DYING;
		}
		
		Bird.prototype.setXPosition = function(){
			this.mc.x = 94;
		}
		
		Bird.prototype.startFlying = function(){
			this.state = Bird.ALIVE;
			this.mc.x = 94;
			this.mc.y = this.initY;
			this.mc.play();
			this.velocity = 0;
			this.flap();
		}
		
		Bird.prototype.flap = function(){
			if(this.state === Bird.ALIVE && this.mc.y > 0){
				this.velocity = Main.FLAP_IMPULSE;
				createjs.Sound.play("flap");
			}
		}
		
		Bird.prototype.setupCollisionPoints = function(){
			this.collisionPoints = [
				this.mc.hit0,
				this.mc.hit1,
				this.mc.hit2,
				this.mc.hit3,
				this.mc.hit4,
				this.mc.hit5,
				this.mc.hit6,
				this.mc.hit7,
				this.mc.hit8
			];
			
			for(let i = 0; i < this.collisionPoints.length; i++){
				this.collisionPoints[i].visible = false;
			}
		}
		
		Bird.prototype.hitTest = function(target){
			for(let i = 0; i < this.collisionPoints.length; i++){
				const pt = this.collisionPoints[i].localToLocal(0, 0, target);
				const collision = target.hitTest(pt.x, pt.y);
				
				if(collision){ 
					return true;
				}
			}
			return false;
		}
		
		Bird.prototype.hitGround = function(){
			if(this.state === Bird.ALIVE){
				createjs.Sound.play("hit");
			}
			
			this.state = Bird.DEAD;
			this.mc.stop();
		}
		
		Bird.prototype.fallFromSky = function(){
			if(this.state === Bird.ALIVE){
				this.state = Bird.DYING;
				this.velocity = 0;
				createjs.Sound.play("hit");
			}
		}
		
		Bird.prototype.updateRotation = function(){
			if(this.velocity > 0){
				const norm = this.velocity / Main.MAX_VELOCITY;
				this.mc.rotation = Bird.MAX_UP_ANGLE + (Bird.ANGLE_DIFF*norm);
			}else{
				this.mc.rotation = Bird.MAX_UP_ANGLE;
			}
		}
		
		Bird.prototype.getPosition = function(){
			return {x: this.mc.x, y: this.mc.y};
		}
		
		Bird.prototype.getMC = function(){
			return this.mc;
		}
		function Pipes(){
			this.scrolling = false;
			
			this.distanceBetweenPipes = exportRoot.pipe1.x - exportRoot.pipe0.x;
			this.leftBound = -exportRoot.pipe0.nominalBounds.width;
			/*
			nominalBounds: returns the bounding rectangle for a 
				movie-clip's first frame
			*/
			
			this.maxPipeY = exportRoot.pipe0.y;
			this.minPipeY = exportRoot.pipe2.y;
			
			this.setupStartPosition();
		}
		
		Pipes.prototype.startScrolling = function(){
			this.scrolling = true;
			this.setupStartPosition();
			this.approachingPipe = this.pipes[0];
		}
		
		Pipes.prototype.stopScrolling = function(){
			this.scrolling = false;
		}
		
		Pipes.prototype.update = function(){
			if (this.scrolling){
				this.updatePipePositions();
				this.checkLeftPipeIsOutsideScreen();
			}
		}
		
		Pipes.prototype.updatePipePositions = function(){
			for (let i = 0; i < this.pipes.length; i++){
				let pipe = this.pipes[i];
				pipe.x -= Main.SCROLL_SPEED;
			}
		}
		
		Pipes.prototype.checkLeftPipeIsOutsideScreen = function(){
			let leftMostPipe = this.pipes[0];
			let rightMostPipe = this.pipes[2];
			if (leftMostPipe.x < this.leftBound){
				leftMostPipe.x = rightMostPipe.x + this.distanceBetweenPipes;
				this.setRandomYPosition(leftMostPipe);
				this.pipes.shift();
				this.pipes.push(leftMostPipe);
		  }
		}
		
		Pipes.prototype.setRandomYPosition = function(pipe){
			const delta = this.minPipeY - this.maxPipeY;
			pipe.y = this.maxPipeY + Math.round(Math.random()*delta);
		}
		
		Pipes.prototype.setupStartPosition = function(){
			this.pipes = [
				exportRoot.pipe0,
				exportRoot.pipe1,
				exportRoot.pipe2
			];
			
			for(let i = 0; i < this.pipes.length; i++){
				let pipe = this.pipes[i];
				pipe.x = (lib.properties.width*1.5)+(i*this.distanceBetweenPipes);
				/*
				lib.properties contains some properties used to 
					describe the stage (width, height, fps, color, ...)
				*/
				
				this.setRandomYPosition(pipe);
			}
		}
		
		Pipes.prototype.isBirdTouchingAPipe = function(bird){
			for(let i = 0; i < this.pipes.length; i++){
				if(bird.hitTest(this.pipes[i])){
					return true;
				}
			}
			return false;
		}
		
		Pipes.prototype.setNextApproachingPipe = function(){
			for(let i = 0; i < this.pipes.length; i++){
				if(this.pipes[i] === this.approachingPipe){
					this.approachingPipe = this.pipes[i+1];
					return;
				}
			}
		}
		
		Pipes.prototype.hasBirdPassedApproachingPipe = function(bird){
			let birdXPosition = bird.getPosition().x;
			if(birdXPosition > this.approachingPipe.x){
				return true;
			}
			
			return false;
		}
		function Ground(){
			this.scrolling = false;
			this.slices = [
				exportRoot.ground0,
				exportRoot.ground1,
				exportRoot.ground2
			];
			this.sliceWidth = exportRoot.ground1.x - exportRoot.ground0.x;
			this.leftBound = exportRoot.ground0.x - this.sliceWidth;
		}
		
		Ground.prototype.update = function(){
			if(this.scrolling == true){
				this.updateSlicePositions();
				this.checkLeftSliceIsOutsideScreen();
			}
		}
		
		Ground.prototype.startScrolling = function(){
			this.scrolling = true;
		}
		
		Ground.prototype.stopScrolling = function(){
			this.scrolling = false;
		}
		
		Ground.prototype.updateSlicePositions = function(){
			for(let i = 0; i < this.slices.length; i++){
				this.slices[i].x -= Main.SCROLL_SPEED;
			}
		}
		
		Ground.prototype.checkLeftSliceIsOutsideScreen = function(){
			let firstSlice = this.slices[0];
			let lastSlice = this.slices[2];
			if(firstSlice.x <= this.leftBound){
				firstSlice.x = lastSlice.x + this.sliceWidth;
				this.slices.shift();
				this.slices.push(firstSlice);
			}
		}
		
		Ground.prototype.isBirdTouchingGround = function(bird){
			for(let i = 0; i < this.slices.length; i++){
				if(bird.hitTest(this.slices[i])) return true;
			}
			return false;
		}
		function Main(){
			this.ground = new Ground();
			this.pipes = new Pipes();
			this.ui = new UI();
			
			this.choosingBird = true;
			this.loadBirds();
			
			this.score = 0;
			
			this.registerSound();
		
			// Detect mouse and keyboard key press
			canvas.onmousedown = this.userPressed.bind(this);
			window.onkeydown = this.userPressed.bind(this);
			
			createjs.Ticker.addEventListener(
				"tick", 
				this.update.bind(this)
			);				
		}
		
		Main.SCROLL_SPEED = 3.0;
		Main.GRAVITY = 0.55;
		Main.FLAP_IMPULSE = -8.15;
		Main.MAX_VELOCITY = 15;
		
		Main.prototype.update = function(e){
			if(!this.choosingBird){
				this.ground.update();
				this.pipes.update();
				this.bird.update();
				
				this.checkForBirdCollidingWithGround();
				this.checkForBirdCollidingWithPipes();
				this.checkForBirdPassingPipe();
			}
		}
		
		Main.prototype.loadBirds = function(){
			this.birds = [
				new Bird(exportRoot.bird),
				new Bird(exportRoot.bird2)
			];
			
			for(let i = 0; i < this.birds.length; i++){
				this.birds[i].getMC().addEventListener(
					"click",
					this.chooseBird.bind(this, i)
				);
			}
		}
		
		Main.prototype.chooseBird = function(i, event){
			this.bird = this.birds[i];
			for(let j = 0; j < this.birds.length; j++){
				if(j !== i){
					this.birds[j].getMC().visible = false;
				}
			}	
			
			this.bird.setXPosition();
			this.ui.getReady();
			this.choosingBird = false;
		}
		
		Main.prototype.userPressed = function(e){
			if(!this.choosingBird){
				if(this.bird.isDead()){
					this.startGame();
				}else{
					this.bird.flap();
				}
			}
		}
		
		Main.prototype.startGame = function(){
			this.score = 0;
			this.ground.startScrolling();
			this.pipes.startScrolling();
			this.bird.startFlying();
			this.ui.gameStart();
		}
		
		Main.prototype.checkForBirdCollidingWithGround = function(){
			if(!this.bird.isDead()){
				if(this.ground.isBirdTouchingGround(this.bird)){
					this.birdHitGround();
				}
			}
		}
		
		Main.prototype.checkForBirdCollidingWithPipes = function(){
			if(!this.bird.isDead() && !this.bird.isDying()){
				if(this.pipes.isBirdTouchingAPipe(this.bird)){
					this.birdHitPipe();
				}
			}
		}
		
		Main.prototype.birdHitGround = function(){
			this.bird.hitGround();
			this.ground.stopScrolling();
			this.pipes.stopScrolling();
			this.ui.gameOver();
		}
		
		Main.prototype.birdHitPipe = function(){
			this.bird.fallFromSky();
			this.ground.stopScrolling();
			this.pipes.stopScrolling();
			this.ui.triggerScreenFlash();
		}
		
		Main.prototype.checkForBirdPassingPipe = function(){
			if(this.bird.isAlive()){
				if(this.pipes.hasBirdPassedApproachingPipe(this.bird)){
					this.pipes.setNextApproachingPipe();
					this.scoredPoint();
				}
			}
		}
		
		Main.prototype.scoredPoint = function(){
			this.score++;
			this.ui.updateScore(this.score);
			createjs.Sound.play("point");
		}
		
		Main.prototype.registerSound = function(){
			createjs.Sound.registerSound("sound/point.wav", "point");
			createjs.Sound.registerSound("sound/flap.wav", "flap");
			createjs.Sound.registerSound("sound/hit.wav", "hit");
		}
		
		let main = new Main();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Screen Flash
	this.screenFlash = new lib.ScreenFlash();
	this.screenFlash.name = "screenFlash";
	this.screenFlash.parent = this;
	this.screenFlash.setTransform(150,200);
	this.screenFlash.cache(-154,-204,309,409);

	this.timeline.addTween(cjs.Tween.get(this.screenFlash).wait(1));

	// Choose Bird
	this.chooseBird = new lib.ChooseBird();
	this.chooseBird.name = "chooseBird";
	this.chooseBird.parent = this;
	this.chooseBird.setTransform(149.95,119.9,1,1,0,0,0,-0.8,19.9);

	this.timeline.addTween(cjs.Tween.get(this.chooseBird).wait(1));

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

	// Bird2
	this.bird2 = new lib.Bird2();
	this.bird2.name = "bird2";
	this.bird2.parent = this;
	this.bird2.setTransform(202.75,175.35,0.3101,0.347,0,0,0,2.1,-2.9);

	this.timeline.addTween(cjs.Tween.get(this.bird2).wait(1));

	// Bird
	this.bird = new lib.Bird();
	this.bird.name = "bird";
	this.bird.parent = this;
	this.bird.setTransform(95,174.65,0.3102,0.3098,0,0,0,3.2,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.bird).wait(1));

	// Ground
	this.ground0 = new lib.GroundSlice();
	this.ground0.name = "ground0";
	this.ground0.parent = this;
	this.ground0.setTransform(96,375.9,1,1,0,0,0,96,24.9);
	this.ground0.cache(-3,-3,199,55);

	this.ground2 = new lib.GroundSlice();
	this.ground2.name = "ground2";
	this.ground2.parent = this;
	this.ground2.setTransform(470,375.9,1,1,0,0,0,96,24.9);
	this.ground2.cache(-3,-3,199,55);

	this.ground1 = new lib.GroundSlice();
	this.ground1.name = "ground1";
	this.ground1.parent = this;
	this.ground1.setTransform(283,375.9,1,1,0,0,0,96,24.9);
	this.ground1.cache(-3,-3,199,55);

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
	this.instance = new lib.Background();
	this.instance.parent = this;
	this.instance.setTransform(161.8,200.1,1,1,0,0,0,161.8,200.1);
	this.instance.cache(-12,-3,347,406);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(90,47.9,477.5,454.20000000000005);
// library properties:
lib.properties = {
	id: 'B62E11E6CB1BE24C8F2EB7FCB785FEF3',
	width: 300,
	height: 400,
	fps: 60,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [],
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