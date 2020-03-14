<?php
	if(!isset($_SESSION["id"]))
	{
		if(isset($_POST["email"]) && isset($_POST["password"]))
		{
			$stmt = new PDO("mysql:host=localhost;dbname=utilisateurs","root","");
			$usr = $stmt->query("SELECT nom, password, id FROM utilisateurs WHERE email = '".$_POST["email"]."'")->fetch(PDO::FETCH_ASSOC);
			if(password_verify($_POST["password"], $usr["password"]))
			{
				echo json_encode($usr);
			}
			else
			{
				echo "err";
			}
		}		
	}
?>