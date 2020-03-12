<!DOCTYPE html>


<html>
	<head>
		<title>Jour04</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	</head>

	<body>
		<header>
		</header>

		<main class="flexc">	
			<form action="" method="POST" class="flexc center">
				<div class="flex center just-between">
					<label for="id">ID</label>
					<input type="text" id="id" />
				</div>
				
				<div class="flex center just-between">
					<label for="nom">Nom</label>
					<input type="text" id="nom"/>
				</div>
				
				<div class="flex center just-between">
					<label for="type-select">Type</label>
					<select id="type-select">
						<option value="default" disabled selected>Select type</option>
					</select>
				</div>
				
			</form>
			<button id="filter" class="wide center">Filtrer</button>
			
			
			<div class="flexr just-between center" id="displayer">
			
			</div>
		</main>

		<footer>
		</footer>
		
		<script src="script.js"></script>
	</body>
</html>


<style>
	.flexr
	{
		display:flex;
		flex-direction:row;
	}
	
	.flexc
	{
		display:flex;
		flex-direction:column;
	}
	
	.center
	{
		align-self:center
	}

	.just-between
	{
		justify-content:space-evenly;
	}
	
	.wide
	{
		width:230px;
	}
	
	#displayer
	{
		width:90%;
		flex-wrap:wrap;
	}
	
	.pokedex
	{
		border:1px solid black;
		margin:5px;
		padding:5px;
		background-color:grey;
		min-width:250px;
	}

</style>