

function fizzbuzz()
{
	for(i=0;i<151;i++)
	{
		if(i % 3 == 0)
		{
			if(i % 5 == 0)
			{
				console.log("FizzBuzz");
			}
			else
			{
				console.log("Fizz");				
			}
		}
		else
		{
			console.log("Buzz");
		}
	}
}