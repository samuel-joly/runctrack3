document.addEventListener("keydown", function(e) {
	text = document.getElementById("keylogger");
	text.value += e.key;
});