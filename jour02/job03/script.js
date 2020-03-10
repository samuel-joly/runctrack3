function addone()
{
	compteur = document.getElementById("compteur");
	value = Number(compteur.innerHTML) + 1;
	compteur.innerHTML=value;
}

document.getElementById("button").onclick = addone;
