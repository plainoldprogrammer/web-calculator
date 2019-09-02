console.log("JavaScript is running");

var screen = document.getElementsByClassName("screen")[0];
screen.addEventListener("input", screenChange);

var operandA;

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
	if (e.srcElement.innerHTML >= '0' && e.srcElement.innerHTML <= '9')
	{
		if (operandA === undefined)
		{
			operandA = e.srcElement.innerHTML;
		}
		else
		{
			operandA *= 10;
			operandA += +e.srcElement.innerHTML;
		}

		console.log("operandA: " + operandA);
	}
}

