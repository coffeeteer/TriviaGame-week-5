//var load = window.location.reload();
$(document).ready(function() {
	var i = 120;

	//reloads page after'Try Again' is clicked
	var reload = function(){ 
		window.location.reload();
		return false;
	};

	function timer() {
		i --;

		// when goTime button is clicked timer starts
		$('#go').on('click', function() {
			var timer = $('#timer').html(i);
		});
		
		if (i === 0) {
			// alert("Test is over");
			$('#submitModal').show('show');
			clear();
		}
	}
	var m = setInterval(timer, 1000);
	$("#timer").html(i); 
	console.log(i);
	function clear() {
	  clearInterval(m);
	}
	
	function test() {
		var test = $('#tester').val();	
	}

function dataCapture(){
	// var fname = $('#txtFirstName').val();
	// $('#lblFirstName').html(fname);
	
	var numberCorrect = $('input.cor:checked').length;
	var numberIncorrect = 10 - numberCorrect;
	var percentCorrect = numberCorrect * 10;
	//var defer = $.Deferred()
	console.log('This is correct ' + numberCorrect);
	console.log('This is incorrect ' + numberIncorrect);
	console.log('This is your percentage ' + percentCorrect + '%');

	(function finScore(){
		//Puting the scores in the modal
		$('.finalScore').replaceWith(
		'<p>'+ numberCorrect +'</p>'
		);
	})();
}

// Fires off the dataCapture function in modal
$('#submitButton').on('click', function() {
		dataCapture();
		
		//Using first modal when question is missed
		if($('input.child' == null)){
			$('#myModalLabel').replaceWith('<h2>Sorry you missed a question.</h2>');
			$('#modal-para').replaceWith('<p>You missed a question.</p>')
		}

		//Submit button Modal
		$('#submitModal').show('show', function(){
			//When 'Try Again' is clicked page resets
			$('#tryAgain').on('click', function(){
				reload();
				}
			);
		});
	});
	console.log(test);
	console.log(dataCapture());

	//Submit button Modal
	// $('#submitButton').on('click',function() {
	// 	$('#submitModal').show('show');
	// });
});

//Modal when page loads
$(window).on('load', function () {
	  $('#myModal').modal('show', function() {
	  });
});	