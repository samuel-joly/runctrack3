$(document).ready( function()
	{
		$('#inscription').click( function() 
		{
			form = $('#inscription-form');
			$('#connexion-form').css("display","none");
			
			if(form.css("display")== 'none')
			{
				form.css("display","flex");					
			}
			else
			{
				form.css("display","none");					
			}
		});
			
		$('#connexion').click( function() 
		{
			form = $('#connexion-form');
			$('#inscription-form').css("display","none");
			if(form.css("display") == 'none')
			{
				form.css("display","flex");					
			}
			else
			{
				form.css("display","none");					
			}
		});
		
		$("#inscription-submit").click(function(e) 
		{
			e.preventDefault();
			
			email = $('#email').val();
			password = $('#password').val();
			passwordV = $('#passwordV').val();
			
			length = /.{8,30}/;
			symbol = /\W/;
			letter = /\w/;
			digit = /\d/;
			
			if(length.exec(password) == null || symbol.exec(password) == null ||
			   letter.exec(password) == null || digit.exec(password)  == null)
			{
				$("#passwordError").css("display","block");
				return false;
			}
			else
			{
				$("#passwordError").css("display","none");
			}
			
			if(password != passwordV)
			{
				$('#passwordVError').css("display","block");
				return false;
			}
			
			$.post(
				"inscription.php",
				{
					nom: $("#nom").val(),
					prenom: $('#prenom').val(),
					email: $('#email').val(),
					password: $('#password').val()
				},
				function(data)
				{
					if(data == "success")
					{
						$("#inscription-form").css("display", "none");
						$("#connexion-form").css("display", "flex");
					}
					else if(data == "err")
					{
						$("main").prepend($("<p></p>").text("Les serveurs ne répondent pas."));
					}
					else if(data == "errMail")
					{
						$("main").prepend($("<p></p>").text("Le mail est déja pris."));
					}
				},
				'text'
			);
		});
		
		$("#connexion-submit").click(function(e) 
		{
			e.preventDefault();
			
			$.post(
				"connexion.php",
				{
					email: $('#email-co').val(),
					password: $('#password-co').val()
				},
				function(data){
					$("#connexion-form").css("display", "none");
					$("body").prepend($('<p></p>').text("Bonjour "+data["nom"]));
				},
				"json"
			);
			
		});
	});