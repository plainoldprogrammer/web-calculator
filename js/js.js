console.log("JavaScript is running");

var screen = document.getElementsByClassName("screen")[0];
screen.addEventListener("input", screenChange);

var operandA;
var operandB;
var readOperandB;
var operation;

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
	if (e.srcElement.innerHTML >= "0" && e.srcElement.innerHTML <= "9" && (!readOperandB))
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

		readOperandB = false;
		console.log(readOperandB);
		console.log("operandA: " + operandA);
	}
	else if (e.srcElement.innerHTML == "+")
	{
		console.log("sum");
		readOperandB = true;
		operation = "+";
	}
	else if (e.srcElement.innerHTML == "-")
	{
		console.log("rest");
		readOperandB = true;
		operation = "-";
	}
	else if (e.srcElement.innerHTML == "*")
	{
		console.log("mult");
		readOperandB = true;
		operation = "*";
	}
	else if (e.srcElement.innerHTML == "/")
	{
		console.log("division");
		readOperandB = true;
		operation = "/";
	}
	else if (e.srcElement.innerHTML >= "0" && e.srcElement.innerHTML <= 9 && readOperandB)
	{
		if (operandB == undefined)
		{
			operandB = e.srcElement.innerHTML;
		}
		else
		{
			operandB *= 10;
			operandB += +e.srcElement.innerHTML;
		}
		
		console.log(operandB);
	}
	else if (e.srcElement.innerHTML == "=")
	{
		if (operation === "+")
		{
			console.log("result: " + (+operandA + +operandB));
		}
		else if (operation === "-")
		{
			console.log("result: " + (+operandA - +operandB));
		}
		else if (operation == "*")
		{
			console.log("result: " + (+operandA * +operandB));
		}
		else if (operation == "/")
		{
			console.log("result: " + (+operandA / +operandB));
		}
	}
}

