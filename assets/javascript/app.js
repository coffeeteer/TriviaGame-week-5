$(document).ready(function() {


	var i = 120;
	function timer() {
		i --;
		var x = document.getElementById("timer").innerHTML = i;
		
		if (i === 0) {
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
	
function test() {
	var test = $('#tester').val();	
}

$('#submitbutton').on('click', function() {
	dataCapture();
});

function dataCapture(){
	var fname = $('#txtFirstName').val();
	$('#lblFirstName').html(fname);
	
	var numberCorrect = $('input.cor:checked').length;
	var numberIncorrect = 10 - numberCorrect;
	console.log(numberCorrect);
	console.log(numberIncorrect);
	}

	console.log(test);
	console.log(dataCapture());
	
});