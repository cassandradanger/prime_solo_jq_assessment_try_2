var i = 0;

$(document).ready(function (){
	$('body').append("<div id = all></div>")
	$("#start").click(function (){
		i++;
		$("#all").append("<div id = div" + i + "><p>This is line #" + i + 
			"</p><button id = color" + i + ">change color</button><button id = remove" + i + 
			">remove</button></div>");
		
		$("#color" + i).on("click",function (){
			$(this).parent().css("background-color", "yellow");
		});

		$("#remove" + i).click(function (){
			$(this).parent().remove();
		});
	});
});
