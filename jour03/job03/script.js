for(i=0;i<8;i++)
{
	$("body").append("<div class='imgbox box"+i+"'></div>");
	$(".box"+i).css("background-image","url(plateforme.png)");
	var width = i*150;
	if(i%3==0)
	{
		var height = i*150
	}
	$(".box"+i).css("background-size",width+"px "+height+"px");
	
}

$(".imgbox").css("width","150px");
$(".imgbox").css("height","150px");
$(".imgbox").css("margin","5px");
$(".imgbox").css("border","2px solid black");

