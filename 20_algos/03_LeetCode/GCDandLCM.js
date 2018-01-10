// GCD and LCM of 2 numbers

function GCD(a, b){
	if(b === 0){
		return a;
	}else{
		return GCD(b, a%b);
	}
}

console.log(GCD(4, 6));//2


function LCM(a, b){
	return (a*b)/GCD(a, b);
}

console.log(LCM(4, 6));//12