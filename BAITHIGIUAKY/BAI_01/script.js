var sum = () => {
	var a = parseFloat(document.getElementById("inputA").value);
	var b = parseFloat(document.getElementById("inputB").value);
	var result = document.getElementById("result");
	if (isNaN(a) || isNaN(b)) {
		result.innerHTML = "Please enter a valid number";
	} else {
		result.innerHTML = a + b;
	}
};
var subtract = () => {
	var a = parseFloat(document.getElementById("inputA").value);
	var b = parseFloat(document.getElementById("inputB").value);
	var result = document.getElementById("result");
	if (isNaN(a) || isNaN(b)) {
		result.innerHTML = "Please enter a valid number";
	} else {
		result.innerHTML = a - b;
	}
};

var multiply = () => {
	var a = parseFloat(document.getElementById("inputA").value);
	var b = parseFloat(document.getElementById("inputB").value);
	var result = document.getElementById("result");
	if (isNaN(a) || isNaN(b)) {
		result.innerHTML = "Please enter a valid number";
	} else {
		result.innerHTML = a * b;
	}
};
var divide = () => {
	var a = parseFloat(document.getElementById("inputA").value);
	var b = parseFloat(document.getElementById("inputB").value);
	var result = document.getElementById("result");
	if (isNaN(a) || isNaN(b)) {
		result.innerHTML = "Please enter a valid number";
	} else {
		if (b == 0) {
			result.innerHTML = "Cannot divide by zero";
		} else {
			result.innerHTML = a / b;
		}
	}
};

var reset = () => {
	document.getElementById("inputA").value = "";
	document.getElementById("inputB").value = "";
	document.getElementById("result").innerHTML = "";
};
