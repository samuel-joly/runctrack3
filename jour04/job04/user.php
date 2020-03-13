

<?php
	$stmt = new PDO("mysql:host=localhost;dbname=utilisateurs","root","");
	echo json_encode($stmt->query("SELECT * FROM utilisateurs")->fetchAll(PDO::FETCH_ASSOC));
?>