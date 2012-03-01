Crystal = new function () {
	var width  = 500,
	    height = 500,
	    sx     = 0,
		sy     = 0,
		canvas = null;

	var c = {
		'ctop'          : 20,
		'cbottom'       : 50,
		'tOffset'      : 50,
		'bOffset'      : 50,
		'tLatOffset'   : 20,
	}

	function drawFront (ctx) {
		// BASE CRYSTAL
		ctx.beginPath();
		ctx.moveTo(width / 2, c.ctop + 10);
		ctx.lineTo(width / 2 + c.tOffset, height / 4);
		ctx.lineTo(width / 2 + c.bOffset, height / 1.35);
		ctx.lineTo(width / 2, height - c.cbottom - 10);
		ctx.lineTo(width / 2 - c.bOffset, height / 1.35);
		ctx.lineTo(width / 2- c.tOffset, height / 4);
		ctx.lineTo(width / 2, c.ctop + 10);
		ctx.closePath();

		ctx.lineWidth = 4;
		ctx.lineJoin = "round";
		ctx.stroke();

		// TOP LATTICE
		ctx.beginPath();
		ctx.moveTo(width / 2 - c.tOffset, height / 4);
		ctx.lineTo(width / 2 - c.tOffset + c.tLatOffset, height / 4 + c.tLatOffset);
		ctx.lineTo(width / 2 + c.tOffset - c.tLatOffset, height / 4 + c.tLatOffset);
		ctx.lineTo(width / 2 + c.tOffset, height / 4);
		
		ctx.lineWidth = 4;
		ctx.lineJoin = "round";	
		ctx.stroke();

		// BOTTOM LATTICE
		ctx.beginPath();
		ctx.moveTo(width / 2 - c.bOffset, height / 1.35);
		ctx.lineTo(width / 2 - c.bOffset + c.tLatOffset, height / 1.35 + c.tLatOffset / 2);
		ctx.lineTo(width / 2 + c.bOffset - c.tLatOffset, height / 1.35 + c.tLatOffset / 2);
		ctx.lineTo(width / 2 + c.bOffset, height / 1.35);
	
		ctx.lineWidth = 4;
		ctx.lineJoin = "round";
		ctx.stroke();

		// STRUTS
		ctx.beginPath();
		ctx.moveTo(width / 2 - c.tOffset + c.tLatOffset, height / 4 + c.tLatOffset);
		ctx.lineTo(width / 2 - c.bOffset + c.tLatOffset, height / 1.35 + c.tLatOffset / 2);
		ctx.moveTo(width / 2 + c.tOffset - c.tLatOffset, height / 4 + c.tLatOffset);
		ctx.lineTo(width / 2 + c.bOffset - c.tLatOffset, height / 1.35 + c.tLatOffset / 2);

		ctx.moveTo(width / 2, 10 + c.ctop);
		ctx.lineTo(width / 2 - c.tOffset + c.tLatOffset, height / 4 + c.tLatOffset);
		ctx.moveTo(width / 2, 10 + c.ctop);
		ctx.lineTo(width / 2 + c.tOffset - c.tLatOffset, height / 4 + c.tLatOffset);

		ctx.moveTo(width / 2 , height - 10 - c.cbottom);
		ctx.lineTo(width / 2 + c.bOffset - c.tLatOffset , height / 1.35 + c.tLatOffset / 2);
		ctx.moveTo(width / 2 , height - 10 - c.cbottom);
		ctx.lineTo(width / 2 - c.bOffset + c.tLatOffset , height / 1.35 + c.tLatOffset / 2);

		ctx.lineWidth = 4;
		ctx.lineJoin = "round";
		ctx.stroke();

	}

	function drawBack (ctx) {
		// (BACK) TOP LATTICE
		ctx.beginPath()
		ctx.moveTo(width / 2 - c.tOffset, height / 4);
		ctx.lineTo(width / 2 - c.tOffset + c.tLatOffset * 1.5, height / 4 - c.tLatOffset / 2);
		ctx.lineTo(width / 2 + c.tOffset - c.tLatOffset * 1.5, height / 4 - c.tLatOffset / 2);
		ctx.lineTo(width / 2 + c.tOffset, height / 4);

		ctx.lineWidth = 2;
		ctx.lineJoin = "round";
		ctx.strokeStyle = "#AAAAAA";
		ctx.stroke();

		// (BACK) BOTTOM LATTICE
		ctx.beginPath();
		ctx.moveTo(width / 2 - c.bOffset, height / 1.35);
		ctx.lineTo(width / 2 - c.bOffset + c.tLatOffset * 1.5, height / 1.35 - c.tLatOffset / 4);
		ctx.lineTo(width / 2 + c.bOffset - c.tLatOffset * 1.5, height / 1.35 - c.tLatOffset / 4);
		ctx.lineTo(width / 2 + c.bOffset, height / 1.35);

		ctx.lineWidth = 2;
		ctx.lineJoin = "round";
		ctx.stroke();

		// (BACK) STRUTS
		ctx.beginPath();
		ctx.moveTo(width / 2 - c.tOffset + c.tLatOffset * 1.5, height / 4 - c.tLatOffset / 2);
		ctx.lineTo(width / 2 - c.bOffset + c.tLatOffset * 1.5, height / 1.35 - c.tLatOffset / 4);
		ctx.moveTo(width / 2 + c.tOffset - c.tLatOffset * 1.5, height / 4 - c.tLatOffset / 2);
		ctx.lineTo(width / 2 + c.bOffset - c.tLatOffset * 1.5, height / 1.35 - c.tLatOffset / 4);

		ctx.moveTo(width / 2, 10 + c.ctop);
		ctx.lineTo(width / 2 - c.tOffset + c.tLatOffset * 1.5, height / 4 - c.tLatOffset / 2);
		ctx.moveTo(width / 2, 10 + c.ctop);
		ctx.lineTo(width / 2 + c.tOffset - c.tLatOffset * 1.5, height / 4 - c.tLatOffset / 2);

		ctx.moveTo(width / 2, height - 10 - c.cbottom);
		ctx.lineTo(width / 2 - c.bOffset + c.tLatOffset * 1.5, height / 1.35 - c.tLatOffset / 4);
		ctx.moveTo(width / 2, height - 10 - c.cbottom);
		ctx.lineTo(width / 2 + c.bOffset - c.tLatOffset * 1.5, height / 1.35 - c.tLatOffset / 4);

		ctx.lineWidth = 2;
		ctx.lineJoin = "round";
		ctx.stroke();
	}

	this.render = function () {
		var front = document.getElementById("top");
    	var ctx   = front.getContext("2d");

    	var back = document.getElementById("back");
    	var bctx = back.getContext("2d");

		drawFront(ctx);
		drawBack(bctx);

		Crystal.Physics.render(document.getElementById("middle"), c);		
	}

	return this;
}

Crystal.Physics = new function () {
	var ctx     = null,
		physics = null,
		ball    = [],
		circle  = [];

	function init (ctx) {
		var gravity = new b2Vec2(0, 5000);
		var doSleep = true;

		physics = new b2World(gravity, doSleep);

		ctx = ctx;
	}

	function step () {
		var timeStep = 1.0/60;
		var iteration = 10;
		physics.Step(timeStep, iteration);	

		ctx.clearRect(0,0,500,500);

		for (var x = 0; x < circle.length; x++) {
			circle[x].render(ctx);
		}
	}

	this.render = function (canvas, crystal) {
		ctx = canvas.getContext("2d");
		init(ctx);

		for (var x = 0; x < 300; x++) {
			circle.push(new Crystal.Physics.Particle().init(ctx,physics, 250, x * 15 - 4500, x % 30));	
		}

		var bounds = Crystal.Physics.Bounds.init(ctx, physics, crystal);
		setInterval(step, 1);
	}

	return this;
}

Crystal.Physics.Particle = function () {
	var circle = null,
		body = null,
		fix  = null,
		node = null,
	    cb   = null;

	this.render = function (ctx) {
		ctx.beginPath();
		ctx.arc(cb.GetPosition().x, cb.GetPosition().y, 5, Math.PI * 2, false);
		ctx.fillStyle = "#FFA000";
		ctx.strokeStyle = "#FFA000";
		ctx.fill();
		ctx.stroke();
	}

	this.init = function (ctx, world, x, y, mod) {
		fix  = new b2FixtureDef();
		body = new b2BodyDef();
		circle = new b2CircleShape();

		fix.density = 1;
		fix.restitution = 1.0;
		fix.friction = 0.5;
		
		body.type = b2Body.b2_dynamicBody;
		body.position.Set(x, y);
		
		circle.m_radius = 4;
		fix.shape = circle;

		/*
		ctx.beginPath();
		ctx.arc(x, y, 5, Math.PI * 2, false);
		ctx.fillStyle = "#FFA000";
		ctx.strokeStyle = "#FFA000";
		ctx.fill();
		ctx.stroke();
		*/

		cb = world.CreateBody(body);
		cb.SetLinearDamping(1);
		cb.CreateFixture(fix);

		return this;
	}
}

Crystal.Physics.Bounds = new function () {
	var width  = 500,
		height = 500;

	function draw (world, crystal) {
		var c = crystal;
		var fix = new b2FixtureDef();
		fix.restitution = 0;
		fix.friction = 0;

		var body = new b2BodyDef();
		body.type = b2Body.b2_staticBody;

		var ps = new b2PolygonShape();
		ps.SetAsArray(
			[new b2Vec2(width / 2 - c.bOffset - 10, height / 1.35 - 10),
			new b2Vec2(width / 2 + 10, height - 10 - c.cbottom + 10)],
			2
		);
		fix.shape = ps;

		var cb = world.CreateBody(body);
		cb.CreateFixture(fix);

		ps = new b2PolygonShape();
		ps.SetAsArray(
			[new b2Vec2(width / 2 + c.bOffset + 10, height / 1.35 - 10),
			new b2Vec2(width / 2 - 10, height - 10 - c.cbottom + 10)],
			2
		);
		fix.shape = ps;
		cb.CreateFixture(fix);

		ps = new b2PolygonShape();
		ps.SetAsArray(
			[new b2Vec2(width / 2 + c.tOffset, height / 4 - 10),
			new b2Vec2(width / 2 + c.bOffset, height / 1.35 + 10)],
			2
		);
		fix.shape = ps;
		cb.CreateFixture(fix);

		ps = new b2PolygonShape();
		ps.SetAsArray(
			[new b2Vec2(width / 2 - c.tOffset, height / 4 - 10),
			new b2Vec2(width / 2 - c.bOffset, height / 1.35 + 10)],
			2
		);
		fix.shape = ps;
		cb.CreateFixture(fix);
	}

	this.init = function (canvas, world, crystal) {
		draw(world, crystal);
	}

}


$(document).ready(function() {
	Crystal.render();
});

