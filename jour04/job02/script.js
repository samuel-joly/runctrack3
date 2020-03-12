function jsonValueKey(json_txt, key)
{
	let value = JSON.parse(json_txt);
	return value[key];
}




var json = '{"name":"La Plateforme_", "address":"8 rue d\'hozier", "city":"Marseille", "nb_staff":"11", "creation":"2019"}';

console.log(jsonValueKey(json, "city"));