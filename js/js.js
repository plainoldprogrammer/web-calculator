console.log("JavaScript is running");

var screen = document.getElementsByClassName("screen")[0];
screen.addEventListener("input", screenChange);

function screenChange(e)
{
	console.log("screen value: " + e.target.value);
}

for (let i = 0; i < document.getElementsByClassName("cell").length; i++)
{
	document.getElementsByClassName("cell")[i].addEventListener("click", pushButton);
}

function pushButton(e)
{
	console.log(e.srcElement.innerHTML);
}

