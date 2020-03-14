<?php
	$stmt = new PDO("mysql:host=localhost;dbname=utilisateurs","root","");
	
	if(isset($_POST["nom"]) && isset($_POST["prenom"]) && isset($_POST["email"]) && isset($_POST["password"]))
	{
		
		if(!empty($stmt->query("SELECT * FROM utilisateurs WHERE email = '".$_POST["email"]."'")->fetch()))
		{
			echo "errMail";
		}
		else
		{
			if ($stmt->query("INSERT INTO `utilisateurs`(`ID`, `nom`, `prenom`, `email`, `password`)
							  VALUES (NULL, '".$_POST["nom"]."', '".$_POST["prenom"]."', '".$_POST["email"]."',
							  '".password_hash($_POST["password"], PASSWORD_BCRYPT)."')"))
			{
				echo "success";
			}
			else
			{
				echo "err";
			}			
		}
		
	}
	else
	{
		echo "err";		
	}
?>