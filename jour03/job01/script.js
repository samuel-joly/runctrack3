function displayText()
{
	text = document.createElement("p");
	text.append("le $ est un bon élément monétaire. Le # de twitter est une bonne I D. Il faudra faire le point avec la classe pour cacher cet élément.");
	$("#button").after(text);
}

function delet()
{
	$("p").remove();
}

$("#button").click(displayText);

