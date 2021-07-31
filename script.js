let a = +prompt('a');
let b = +prompt('b');
let operation = prompt('operation');

let plus = function(a,b){
	alert(a+b);
};

switch(operation){
	case'+':
			plus(a,b);
			break;
}

let minus = function(a,b){
	alert(a-b);
};

switch(operation){
	case'-':
			minus(a,b);
			break;
}

let sub = function(a,b){
	alert(a*b);
};

switch(operation){
	case'*':
			sub(a,b);
			break;
}

let nul = function(a,b){
	alert(a/b);
};

switch(operation){
	case'/':
			nul(a,b);
			break;
}
