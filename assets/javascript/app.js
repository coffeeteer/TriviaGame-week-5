var i = 120;
function timer() {
	var x = getElementById("timer").innerHTML = i;
	i --;
}
var m = setInterval('timer()', 1000);

function clear() {
  clearInterval(m);
}
setTimeout('clear()', 120000);