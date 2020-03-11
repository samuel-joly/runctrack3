function getPos(element)
{
	var enfants = $("body").children();
	for(i=1;i<enfants.length;i++)
	{
		if($(enfants[i]).attr("id") == element.attr("id"))
		{
			// console.log(i, element);
			return i;
		}
	}
}

var width = 0;
var height = 0;

for(i=0;i<8;i++)
{
	$("body").append("<div class='imgbox' id='box"+i+"'></div>");
	$("#box"+i).css("background-image","url(plateforme.png)");
	$("#box"+i).css("background-size","443px 443px");
	$("#box"+i).css("background-position",width+"% "+height+"%");
	
	width += 50;
	if(i>=2)
	{
		if(width == 150)
		{
			width = 0;			
		}
		if(i >=5)
		{
			height = 100;
		}
		else
		{
			height = 50;
		}
	}
}
$("body").append("<div class='imgbox' id='emptyBox'></div>");

$(".imgbox").css("width","143px");
$(".imgbox").css("height","143px");
$(".imgbox").css("margin","1%");
$(".imgbox").css("border","2px solid black");

for(i=0;i<8;i++)
{
	var rand = Math.floor(Math.random()*8);
	$("#box"+i).after($("#box"+rand));
}

$(".imgbox").click(function() {
	if($(this).next().attr("id")=="emptyBox" && getPos($(this))%3 != 0)
	{
		
		($(this)).insertAfter($("#emptyBox"));						
		
		
	}
	else if($(this).prev().attr("id")=="emptyBox")
	{
		($(this)).insertBefore($("#emptyBox"));
	}
	// else if()
	else if($(this).next().next().next().attr("id")=="emptyBox")
	{
		var before = $(this).prev();
		$(this).insertAfter($("#emptyBox"));
		$("#emptyBox").insertAfter(before);
	}
	else if($(this).prev().prev().prev().attr("id")=="emptyBox")
	{
		var before = $(this).prev();
		$(this).insertBefore($("#emptyBox"));
		$("#emptyBox").insertAfter(before);
	}
})