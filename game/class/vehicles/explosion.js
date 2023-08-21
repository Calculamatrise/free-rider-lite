import s from "../math/cartesian.js";
import n from "./debris.js";

export default class {
	complete = !1;
	time = 0;
	powerupsEnabled = !1;
	constructor(t, e) {
		this.time = 20;
		this.gravity = new s(0, .3);
		this.scene = e;
		this.createMasses(t);
		this.positionX = t.x;
		this.positionY = t.y;
	}
	draw(l, t) {
		var e = this.time
			, i = this.positionX
			, s = this.positionY
			, n = this.scene.camera.zoom
			, h = this.scene.screen;
		if (l.globalAlpha = t,
		e > 0) {
			e -= 10;
			var c = h.realToScreen(i, "x")
				, u = h.realToScreen(s, "y")
				, p = 0
				, d = 6.2 * Math.random()
				, f = e * n
				, v = c + f * Math.cos(d)
				, g = u + f * Math.sin(d);
			for (l.lineWidth = 0,
			l.strokeStyle = lite.storage.get("theme") === "midnight" ? "#ccc" : lite.storage.get("theme") === "dark" ? "#fff" : "#000",
			l.beginPath(),
			l.moveTo(v, g),
			l.fillStyle = lite.storage.get("theme") === "midnight" ? "#ccc" : lite.storage.get("theme") === "dark" ? "#fff" : "#000"; p++ < 16; )
				f = (e + 30 * Math.random()) * n,
				v = c + f * Math.cos(d + 6.283 * p / 16),
				g = u + f * Math.sin(d + 6.283 * p / 16),
				l.lineTo(v, g);
			l.fill(),
			l.stroke()
		}
		var m = this.masses;
		for (var y in m)
			m[y].draw(l);
		l.globalAlpha = 1,
		this.time = e
	}
	createMasses(t) {
		this.masses = [],
		this.masses.push(new n(t, this, lite.storage.get("theme") === "midnight" ? "#ccc" : lite.storage.get("theme") === "dark" ? "#fff" : "#000")),
		this.masses.push(new n(t, this, lite.storage.get("theme") === "midnight" ? "#ccc" : lite.storage.get("theme") === "dark" ? "#fff" : "#000")),
		this.masses.push(new n(t, this, lite.storage.get("theme") === "midnight" ? "#ccc" : lite.storage.get("theme") === "dark" ? "#fff" : "#000")),
		this.masses.push(new n(t, this, lite.storage.get("theme") === "midnight" ? "#ccc" : lite.storage.get("theme") === "dark" ? "#fff" : "#000")),
		this.masses.push(new n(t, this, lite.storage.get("theme") === "midnight" ? "#ccc" : lite.storage.get("theme") === "dark" ? "#fff" : "#000")),
		this.masses.push(new n(t, this, lite.storage.get("theme") === "midnight" ? "#ccc" : lite.storage.get("theme") === "dark" ? "#fff" : "#000")),
		this.masses.push(new n(t, this, lite.storage.get("theme") === "midnight" ? "#ccc" : lite.storage.get("theme") === "dark" ? "#fff" : "#000"))
	}
	fixedUpdate() {
		for (let t of this.masses)
			t.fixedUpdate()
	}
	update(progress, delta) {
		for (let t of this.masses)
			t.update(progress, delta)
	}
}