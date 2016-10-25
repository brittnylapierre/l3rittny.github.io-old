$( document ).ready(function(){
	console.log("begin!");
	$( "#menu-icon" ).click(function(){
		console.log("show");
		$( "#menu" ).css("width", "250px");
		$( "#content" ).css("margin-left", "250px");
	});

	$( "#menu-close-icon" ).click(function(){
		console.log("hide");
		$( "#menu" ).css("width", "0");
		$( "#content" ).css("margin-left", "0");
	});
});
