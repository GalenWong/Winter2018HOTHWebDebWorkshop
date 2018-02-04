function attachEventHandlers() {
	$("#doge1").on('click',function(){
		$(".paragraph").css("background-color", "blue");
	});
	$("#doge2").on('click',function(){
		$("#doge1").toggle();
	});
}


$('document').ready(function() {
	attachEventHandlers();
});				//when the webpage finishes loading, it will enable your javascipt


