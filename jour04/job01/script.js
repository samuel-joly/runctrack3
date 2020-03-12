$("#filtrer").click(function (){
	$.ajax({
		type: "GET",
		url: "expression.txt",
		success:function(data)
		{
			$("body").append(data);		
		}
	});
});
