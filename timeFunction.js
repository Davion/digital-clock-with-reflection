setInterval(function() {
	let time = new Date();
	let h = time.getHours();
	let m = time.getMinutes();
	let s = time.getSeconds();
	document.querySelector("#hour").innerHTML = h;
	document.querySelector("#minute").innerHTML = m;
	document.querySelector("#second").innerHTML = s;
}, 1000);