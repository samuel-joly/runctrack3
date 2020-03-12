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
			$("#displayer p").remove();

			let id = $("#id").val();
			let nom = $("#nom").val();
			let select_type = $("#type-select").val();
			
			let pokedex = [];
			
			for(var pokemon of data)
			{
				if(id != "" && nom != "" && select_type != null)
				{
					if(pokemon["id"] == id)
					{
						if(pokemon["name"]["french"] == nom)
						{
							for(var type of pokemon["type"])
							{
								if(type == select_type)
								{
									display_pokemon(pokemon);
								}
							}
						}
					}
				}
				else if(id!= "" && nom != "")
				{
					if(pokemon["id"] == id)
					{
						if(pokemon["name"]["french"] == nom)
						{
							display_pokemon(pokemon);
						}
					}
				}
				else if(id != "" && select_type != null)
				{
					if(pokemon["id"] == id)
					{
						for(var type of pokemon["type"])
						{
							if(type == select_type)
							{
								display_pokemon(pokemon);
							}
						}
					}
				}
				else if(nom != "" && select_type != null)
				{
					if(pokemon["name"]["french"] == nom)
					{
						for(var type of pokemon["type"])
						{
							if(type == select_type)
							{
								display_pokemon(pokemon);
							}
						}
					}
				}
				else if(nom != "")
				{
					if(pokemon["name"]["french"] == nom)
					{
						display_pokemon(pokemon);											
					}
				}
				else if(id != "")
				{
					if(pokemon["id"] == id)
					{
						display_pokemon(pokemon);
					}
				}
				else if (select_type != null)
				{
				
					for(var type of pokemon["type"])
					{
						if(type == select_type)
						{
							console.log(type, select_type);
							display_pokemon(pokemon);
						}
					}
				}
			}
		});
	}
});

