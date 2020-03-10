function showhide()
{
	
	console.log("oui");
	article = document.getElementsByTagName("article")[0];
	if(article.style.display != 'none')
	{
		article.style.display = 'none';
	}
	else
	{
		article.style.display = 'block';	
	}
}

document.getElementById("button").onclick = showhide;

