$(document).ready(function() {
	//load modal at beginning 
	//and end of test
	var i = 10;
	function timer() {
		i --;
		var x = document.getElementById("timer").innerHTML = i;
		
		if (i === 0) {
			// alert("Test is over");
			$('#submitModal').show('show');
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

$('#submitButton').on('click', function() {
	dataCapture();
	//Submit button Modal
	$('#submitModal').show('show');
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

	//Submit button Modal
	// $('#submitButton').on('click',function() {
	// 	$('#submitModal').show('show');
	// });
});

//Modal when page loads
$(window).on('load', function () {
	  $('#myModal').modal('show');
});	