document.addEventListener("keydown", function(e){
	easter = true;
	
	if(typeof(code) != "undefined")
	{
		if(code.length < 9)
		{
			code.push(e.key);
		}
		else
		{
			ref = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
			for(i=0;i<9;i++)
			{
				if(code[i] != ref[i])
				{
					easter = false;
					break;
				}
			}
			
			if(easter)
			{
				link = document.createElement("link");
				link.type="text/css";
				link.rel="stylesheet";
				link.href="stylesheet.css";
				
				document.head.appendChild(link);
			}
		}
	}
	else
	{
		code = [];		
	}
});