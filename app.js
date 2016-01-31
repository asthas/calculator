var current = "";

function addDigit(val){
	current += val;
	console.log(current);
	document.getElementById("result").value = current;
}

function clearall(){
	console.log(current);
	current="";
	document.getElementById("result").value = "0";
}

function clear(){
	current += "hi";
	document.getElementById("result").value = current;
}

function clearone(){
	console.log(current);
	current = current.substr(0, current.length-1);
	if(current.length > 0){
		document.getElementById("result").value = current;
	} else{
		document.getElementById("result").value = "0";
	}
}