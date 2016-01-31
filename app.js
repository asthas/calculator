var current = "";
var newnum = "";
var op = "";

function addDigit(val){
	current += val;
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


function operator(val){
	op = val;
	newnum = current;
	current = "";
	document.getElementById("result").value = "0";
	console.log(newnum);
	console.log(current);
}

function equals(){
	var ans = 0;
	if(op === "+"){
		ans = parseInt(newnum) + parseInt(current);
		document.getElementById("result").value = ans.toString();
		current = ans.toString();
	} else if(op === '-'){
		ans = parseInt(newnum) - parseInt(current);
		document.getElementById("result").value = ans.toString();
		current = ans.toString();
	} else if(op === '*'){
		ans = parseInt(newnum) * parseInt(current);
		document.getElementById("result").value = ans.toString();
		current = ans.toString();
	} else if(op === '/'){
		ans = parseInt(newnum) / parseInt(current);
		document.getElementById("result").value = ans.toString();
		current = ans.toString();
	} else if(op === '%'){
		ans = parseInt(newnum) % parseInt(current);
		document.getElementById("result").value = ans.toString();
		current = ans.toString();
	}
}