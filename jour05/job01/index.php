<!DOCTYPE html>


<html>
	<head>
		<title>jour05</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	</head>

	<body>
		<header>
			<button id="inscription">Inscription</button>
			<button id="connexion">Connexion</button>
		</header>
		
		<main>
			<form method="post" action="" id="inscription-form">
				<div class="input-zone">
					<label for="email">Email:</label>
					<input type="email" id="email"required/>
				</div>
				<p class="error" id="emailError">Cet Email est déja pris</p>
				
				<div class="input-zone">
					<label for="nom">Nom: </label>
					<input type="text" id="nom" required/>
				</div>
				
				<div class="input-zone">
					<label for="prenom">Prénom: </label>
					<input type="text" id="prenom" required/>
				</div>
				
				<div class="input-zone">
					<label for="password">Mot de passe:</label>
					<input type="password" id="password" required/>
				</div>
				<p class="error" id="passwordError">Le mot de passe doit contenir au moins 8 characteres dont majuscule, minuscule et symbole</p>
				
				<div class="input-zone">
					<label for="passwordV">Vérif MdP:</label>
					<input type="password" id="passwordV" required/>
				</div>
				<p class="error" id="passwordVError">Les mot de passes ne correspondent pas !</p>
				
				<input type="submit" id="inscription-submit" value="S'inscrire"/>
			</form>
			
			<form method="post" action="" id="connexion-form">
				<div class="input-zone">
					<label for="email-co">Email:</label>
					<input type="email" id="email-co"/>
				</div>
				
				<div class="input-zone">
					<label for="password-co">Mot de passe:</label>
					<input type="password" id="password-co"/>
				</div>

				<input type="submit" id="connexion-submit" value="Se Connecter"/>
			</form>
	
		</main>

		<footer>
		</footer>
		
		<script src="script.js"></script>
	</body>
</html>


<style>

	body
	{
		display:flex;
		flex-direction:column;
		justify-content:flex-start;
		align-items:center;
	}

	#inscription-form, #connexion-form
	{
		display:none;
		flex-direction:column;
		align-items:center;
		justify-content:center;
		
		width:20em;
	}

	.input-zone
	{
		display:flex;
		justify-content:space-between;
		margin:0.5em;
	}

	input
	{
		max-width:50%;
		max-height:2em;
		align-self:center;
	}
	
	label
	{
		align-self:center;
	}
	
	.error
	{
		color:white;
		background-color:red;
		text-align:center;
		height:fit-content;
		border-radius:0.3em;
		align-self:center;
		padding:0.2em;
		margin-top:-0.3em;
		width:70%;
		display:none;
	}
</style>