function display_pokemon(pokemonObj)
{
	$("#displayer").append("<div class='flexc center just-between pokedex'><h1 class='center'>N°"+pokemonObj.id+"-"+pokemonObj.name.french+
	"</h1><i class='center'>"+pokemonObj.type+"</i><ul><li>HP: "+pokemonObj.base.HP+"</li><li>ATK: "+pokemonObj.base.Attack+"</li><li>DEF: "+
	pokemonObj.base.Defense+"</li><li>SPEED: "+pokemonObj.base.Speed+"</li></ul></div>");
}

$.ajax({
	type: "POST",
	url: "pokemon.json",
	success:function(data)
	{		
		let type = []; 
		for(i=0;i<data.length;i++)
		{
			if(data[i]["type"].length >= 1)
			{
				for(var types of data[i]["type"])
				{
					if(type.indexOf(types) == -1)
					{
						type.push(types);
					}					
				}
			}
		}
		
		for(var types of type)
		{
			$("#type-select").append("<option value='"+types+"'>"+types+"</option>");
		}

		$("button").click(function (){
		
			$("#displayer div").remove();

			let id = $("#id").val();
			let nom = $("#nom").val();
			let select_type = $("#type-select").val();
			for(var pokemon of data)
			{
				if(pokemon["id"] == id)
				{
					display_pokemon(pokemon);								
				}
				if(pokemon["name"] == nom)
				{
					display_pokemon(pokemon);														
				}
				if(pokemon["type"] == select_type)
				{
					display_pokemon(pokemon);														
				}
				else if(pokemon["type"].length > 1)
				{
					for(var types of pokemon["type"])
					{
						if(types == select_type)
						{
							display_pokemon(pokemon);																					
						}
					}
				}
			}
			
		});
	}
});

