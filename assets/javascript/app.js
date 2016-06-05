$(document).ready(function() {


	var i = 120;
	function timer() {
		i --;
		var x = document.getElementById("timer").innerHTML = i;
		
		if (i ===0) {
			alert("Test is over");
			clear();
		}
	}
	var m = setInterval(timer, 1000);
	document.getElementById("timer").innerHTML = i; 
	console.log(i);
	function clear() {
	  clearInterval(m);
	}
	//setTimeout('clear()', 2000);
var correct [];
var	incorrect [];
function store(){
	toArray();
	
}

});

//Generate buttons dynamically using jQuery

//window.reload();
//reset();