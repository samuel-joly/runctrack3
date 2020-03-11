for(i=1; i <= 6; i++)
{
	$("#rangees").append("<img src='arc"+i+".png'/>");
}

$("#rangees").children().click(function (srcE) { 
	srcE.remove;
	$("#rangees").append(srcE.target);
});

$("#button").click(function() {
	
	for(i=0; i <= 5; i++)
	{
		index = Math.floor(Math.random()*$("#rangees").children().length-1)+1;
		$("#melangees").append($("#rangees").children()[index]);
	}
})


