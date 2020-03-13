function display_data(jsonText)
{
	$("table").remove();
	$.ajax({
		type:"GET",
		url:"user.php",
		success:function(data)
			{
				data = $.parseJSON(data);
				console.log(data);
				table = $("<table></table>");
				head = $("<tr></tr>");
				keys = [];
				for(i=0;i<Object.keys(data[0]).length; i++)
				{
					head.append($("<th></th>").text(Object.keys(data[0])[i]));
					keys.push(Object.keys(data[0])[i]);
				}
				table.append(head);
				body = $("<tbody></tbody>");
				for(i=0;i<data.length;i++)
				{
					line = $("<tr></tr>");
					for(j=0;j<keys.length;j++)
					{
						line.append($("<td></td>").text(data[i][keys[j]]));
					}
					body.append(line);
				}
				table.append(body);
				
				$("main").append(table);
			}
			
		
	});
}


$("#updateTable").click(
	function()
	{
		xmlHttp = new XMLHttpRequest();
		xmlHttp.onreadystatechange = function() 
			{
				if(this.readyState == 4 && this.status == 200)
				{
					display_data(this.responseText);	
				}
			};

		xmlHttp.open("GET","user.php");
		xmlHttp.send();
		
	}
);