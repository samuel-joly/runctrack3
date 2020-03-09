function jourtravaille(date)
{
	ferier = [	new Date(2020,00,01),	new Date(2020,03,13),	new Date(2020,04,03),
				new Date(2020,04,8),	new Date(2020,04,21),	new Date(2020,05,1),
				new Date(2020,06,14),	new Date(2020,07,15),	new Date(2020,10,1),
				new Date(2020,10,11),	new Date(2020,11,25)];
	
	is_ferier = false;
	
	
	for(i=0; i<ferier.length; i++)
	{
		if (date.getTime() == ferier[i].getTime())
		{
			month = date.getMonth() + 1;
			console.log("Le " + date.getDate() + " " + month + " " + date.getFullYear() + " est un jour férier.");
			is_ferier = true;
			break;
		}
	}
	
	if(date.getDay() == 5 || date.getDay() == 6)
	{
		month = date.getMonth() + 1;
		console.log("Le " + date.getDate() + " " + month + " " + date.getFullYear() + " est un week-end.");
	}
	else if(!is_ferier)
	{
		month = date.getMonth() + 1;
		console.log("Le " + date.getDate() + " " + month + " " + date.getFullYear() + " est un jour travaillé.");
	}
}


ferierDay = new Date(2020,00,01);
normalDay = new Date(2020,07,15);

jourtravaille(ferierDay);
jourtravaille(normalDay);
