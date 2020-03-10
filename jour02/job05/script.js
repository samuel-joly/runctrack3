footer = document.getElementsByTagName("footer")[0];

document.body.onscroll =  function() {
	color = "#"+window.pageYOffset.toString(16);
	
	while(color.length < 7)
	{
		color += Math.floor(Math.random()*10).toString(16);
	}
	
	console.log(color);
	footer = document.getElementsByTagName("footer")[0];
	footer.style.background = color;
};