$(document).ready(function() {
	$("input[name=password]").keyup(function() {
		var score = scorePassword( $(this).val() );
		$(".progress-bar").css("width",score+"%");
	});
});