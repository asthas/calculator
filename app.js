var current = "";
console.log("hi");
function addDigit(val){
	current += val;
	console.log(current);
	document.getElementById("result").value = current;
}