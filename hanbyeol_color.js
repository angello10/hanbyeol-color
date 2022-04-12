var arr = document.querySelectorAll("#__next > div > div > div > div > div > svg > rect");

var origin = [
	arr[arr.length-5].getAttribute("fill"),
	arr[arr.length-4].getAttribute("fill"),
	arr[arr.length-3].getAttribute("fill"),
	arr[arr.length-2].getAttribute("fill"),
];

var converted = [
	"rgb(255, 212, 89)",
	"rgb(255, 170, 105)",
	"rgb(255, 124, 121)",
	"rgb(255, 95, 132)",
];

arr.forEach(p => {
	var i = origin.indexOf(p.getAttribute("fill"));
	if (i != -1) p.setAttribute("fill", converted[i]);
});
