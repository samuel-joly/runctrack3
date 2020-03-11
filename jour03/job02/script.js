for(i=1; i <= 6; i++)
{
	$("#rangees").append("<img src='arc"+i+".png'/>");
}

$("#rangees").children().click(function (srcE) { 
	srcE.remove;
	$("#rangees").append(srcE.target);
	
	if($("#rangees").children().length == 6)
	{
		var win = true;
		for(i=0;i<6;i++)
		{
			console.log($("#rangees").children()[i].src);
			
			if($("#rangees").children()[i].src != 'http://localhost/Runtrack3/jour03/job02/arc'+(i+1)+'.png')
			{
				var end = document.createElement("p");
				end.innerText = "Vous avez perdu"
				end.style.color = "red";
				document.body.appendChild(end);
				win = false;
				break;
			}
		}
		if(win)
		{
			var end = document.createElement("p");
			end.innerText = "Vous avez gagné"
			end.style.color = "green";
			document.body.appendChild(end);		
		}
	}
});

$("#button").click(function() {
	for(i=0; i <= 5; i++)
	{
		index = Math.floor(Math.random()*$("#rangees").children().length-1)+1;
		$("#melangees").append($("#rangees").children()[index]);
	}
	$("p").remove();
})


