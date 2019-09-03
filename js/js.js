console.log("JavaScript is running");

var screen = document.getElementsByClassName("screen")[0];

var operandA;
var operandB;
var readOperandB;
var operation;
var result;

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
		document.getElementsByClassName("screen")[0].value = operandA;
	}
	else if (e.srcElement.innerHTML == "+")
	{
		readOperandB = true;
		operation = "+";
		document.getElementsByClassName("screen")[0].value = "+";
		operandB = 0;
	}
	else if (e.srcElement.innerHTML == "-")
	{
		readOperandB = true;
		operation = "-";
		document.getElementsByClassName("screen")[0].value = "-";
		operandB = 0;
	}
	else if (e.srcElement.innerHTML == "*")
	{
		readOperandB = true;
		operation = "*";
		document.getElementsByClassName("screen")[0].value = "*";
		operandB = 0;
	}
	else if (e.srcElement.innerHTML == "/")
	{
		readOperandB = true;
		operation = "/";
		document.getElementsByClassName("screen")[0].value = "/";
		operandB = 0;
	}
	else if (e.srcElement.innerHTML >= "0" && e.srcElement.innerHTML <= 9 && readOperandB)
	{
		if (operandB === undefined)
		{
			operandB = e.srcElement.innerHTML;
		}
		else
		{
			operandB *= 10;
			operandB += +e.srcElement.innerHTML;
		}
		
		document.getElementsByClassName("screen")[0].value = operandB;
	}
	else if (e.srcElement.innerHTML == "=")
	{
		if (operation === "+")
		{
			result = (+operandA + +operandB);
		}
		else if (operation === "-")
		{
			result = (+operandA - +operandB);
		}
		else if (operation == "*")
		{
			result = (+operandA * +operandB);
		}
		else if (operation == "/")
		{
			result = (+operandA / +operandB);
		}

		document.getElementsByClassName("screen")[0].value = result;
		operandA = result;
	}
}

