function sommenombrespremiers(a, b)
{
	is_premier_a = true;
	is_premier_b = true;
	
	for(i=2 ; i<a ; i++)
	{
		if(a%i == 0)
		{
			is_premier_a = false;
			break;
		}
	}
	
	if(is_premier_a)
	{
		for(i=2 ; i<b ; i++)
		{
			if(b%i === 0)
			{
				is_premier_b = false;
				break;
			}
		}
		if(is_premier_a && is_premier_b)
		{
			return a+b;
		}
		else
		{
			return false;
		}
	}
	else
	{
		return false;
	}
}


console.log(sommenombrespremiers(7,11));
console.log(sommenombrespremiers(7,7));
console.log(sommenombrespremiers(4,7));
console.log(sommenombrespremiers(4,4));