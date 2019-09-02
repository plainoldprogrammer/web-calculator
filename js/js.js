console.log("JavaScript is running");

var screen = document.getElementsByClassName("screen")[0];
screen.addEventListener("input", screenChange);

function screenChange(e)
{
	console.log("screen value: " + e.target.value);
}

