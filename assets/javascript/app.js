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
function test() {
	var test = $('#tester').val();

	// $('#tester').alert(test);
}

$('#submitbutton').on('click', function() {
	dataCapture();
});

function dataCapture(){
	var fname = $('#txtFirstName').val();
	$('#lblFirstName').html(fname);
	// var test = [];
	// $('form input[type=radio]').each(function() {
	// 	if($(this).is(':checked').val()) {
	// 		test.push($(this).attr('value'));
	// 	}
	// });
	var numberCorrect = $('input.cor:checked').length;
	var numberIncorrect = 10 - numberCorrect;
	console.log(numberCorrect);
	console.log(numberIncorrect);
	}

	alert(test);
	console.log(test);
	console.log(dataCapture());
	

	


// var correct [];
// var	incorrect [];
// function store(correct, incorrect){
// 	if(correct[] === $('.cor');) {
// 		for(var i = ; i < correct.length; i++){
// 			correct.push($('.cor')).alert();
// 		}	
// 		alert("You got " + correct);
// 	}
// }

// function disp( divs ) {
//   var a = [];
//   for ( var i = 0; i < divs.length; i++ ) {
//     a.push( divs[ i ].innerHTML );
//   }
//   $( "span" ).text( a.join( " " ) );
// }
 
// disp( $( "div" ).toArray().reverse() );

});

//Generate buttons dynamically using jQuery

//window.reload();
//reset();