var length = 0;
var current = 0;
var thing = "nothing";
var dot = 10;
var numb = '6';
var dig = 0;
var on = false;
function check() {
	console.log("check");
	if (length > 50) {
		document.getElementById('box').innerHTML = 'Whoops too long.';
	}
	else {
		document.getElementById('box').innerHTML = thing;
	}
}
function is() {
	console.log("is");
	document.getElementById('box').innerHTML = current;
	current=0;
	thing = "nothing";
	length = 0;
	numb = '6';
	dig = 0;
}
function one() {
		console.log("one");
	if(length==0){
		thing="1";
		check();
		current=1;
		length=length+1;
	}else{
		thing += "1";
		length=length+1;
		switch(numb){
			case '0':
				current+=1;
			case '1':
				current-=1;
			case'2':
				current*=1;
			case '3':
				current/=1;
			case '4' :
				dig=1 / dot;
				current += dig;
				dot=dot * 10;
			case' 5' :
				current *= 10;
				current += 1;
			case '6':
				
		}		check();
		
}	numb='5';

}
function two(){
			console.log("two");
	if(length==0){
		
		thing="2";
		length++;
		current=2;
		check();
	}else{
		thing += "2";
		length ++;
		switch(numb){
			case '0':
				current+=2;
			case '1':
				current-=2;
			case '2':
				current*=2;
			case '3':
				current/=2;
			case '4' :
				dig=2 / dot;
				current += dig;
				dot=dot * 10;
			case '5' :
				current *= 10;
				current += 2;
						case '6':
		}			check();
}	numb='5';

}
function three(numb){
			console.log("three");
	if(length==0){
		thing="3";
				check();
		current=3;
		length++;
	}else{
		thing += "3";
		length ++;
		switch(numb){
			case '0':
				current+=3;
			case '1':
				current-=3;
			case'2':
				current*=3;
			case'3':
				current/=3;
			case'4':
				dig=3 / dot;
				current += dig;
				dot=dot * 10;
			case '5' :
				current *= 10;
				current += 3;
			case '6':		}
	}	numb='5';
				check();
	
}
function four(){
		console.log("four");
	if(length==0){
		thing="4";
				check();
		current=4;
		length++;
	}else{
		thing += "4";
		length ++;
		switch(numb){
			case '0':
				current+=4;
			case '1':
				current-=4;
			case '2':
				current*=4;
			case '3':
				current/=4;
			case '4' :
				dig=4 / dot;
				current += dig;
				dot=dot * 10;
			case '5' :
				current *= 10;
				current += 4;
			case '6':		}
				check();
}	numb='5';

}
function five(){
			console.log("5");
	if(length==0){
		thing="5";
				check();
		current=5;
		length++;
	}else{
		thing += "5";
		length ++;
		switch(numb){
			case 0:
				current+=5;
			case '1':
				current-=5;
			case '2':
				current*=5;
			case '3':
				current/=5;
			case '4' :
				dig=5 / dot;
				current += dig;
				dot=dot * 10;
			case '5' :
				current *= 10;
				current += 5;
			case '6':	}	}		check();
		numb='5';
	
}
function sex(){
			console.log("6");
	if(length==0){
		thing="6";
				check();
		current=6;
		length++;
	}else{
		thing += "6";
		length ++;
		
		switch(numb){
			case '0':
				current+=6;
			case '1':
				current-=6;
			case '2':
				current*=6;
			case '3':
				current/=6;
			case '4' :
				dig=6 / dot;
				current += dig;
				dot=dot * 10;
			case '5' :
				current *= 10;
				current += 6;
			case '6':		}		check();
	}	numb='5';
	
}
function seven(){
			console.log("7");
	if(length==0){
		thing="7";
				check();
		current=7;
		length++;
	}else{
		thing += "7";
		length ++;
		switch(numb){
			case '0':
				current+=7;
			case '1':
				current-=7;
			case '2':
				current*=7;
			case '3':
				current/=7;
			case '4' :
				dig=7 / dot;
				current += dig;
				dot=dot * 10;
			case '5' :
				current *= 10;
				current += 7;
			case '6':		}		check();
}		numb='5';

}
function eight(){
			console.log("8");
	if(length==0){
		thing="8";
				check();
		current=8;
		length++;
	}else{
		thing += "8";
		length ++;
		
		switch(numb){
			case '0':
				current+=8;
			case '1':
				current-=8;
			case '2':
				current*=8;
			case '3':
				current/=8;
			case '4' :
				dig=8 / dot;
				current += dig;
				dot=dot * 10;
			case '5' :
				current *= 10;
				current += 8;
			case '6':	}	}		check();
numb='5';
			}	
function nine(){
			console.log("9");
	if(length==0){
		thing="9";
				check();
		current=9;
		length++;
	}else{
		thing += "9";
		length ++;
		switch(numb){
			case '0':
				current+=9;
			case '1':
				current-=9;
			case '2':
				current*=9;
			case '3':
				current/=9;
			case '4' :
				dig=9 / dot;
				current += dig;
				dot=dot * 10;
			case '5' :
				current *= 10;
				current += 9;
			case '6':		}		check();
numb='5';
	}		}
function zero(){
			console.log("0");
	if(length==0){
		thing="0";
				check();
		current=0;
		length++;
	}else{
		thing += "0";
		length ++;
		switch(numb){
			case '0':
				current+=0;
			case '1':
				current-=0;
			case '2':
				current*=0;
			case '3':
				current/=0;
			case '4' :
				dig=0 / dot;
				current += dig;
				dot=dot * 10;
			case '5' :
				current *= 10;
				current += 0;
			case '6':}		}numb='5';
		check();

}
function plus(){
	console.log("plus");
	if(length==0){
		document.getElementById('box').innerHTML="Please start with a number."
	}else if(on=false){
		dot=10;
		numb='0';
		thing += '+';
		length=length+1;
		check();
		
	}else{
		dot=10;
		numb='0';
		thing=current+ '+'
		length++
		check();
	}
}
function minus(){
	if(length==0){
		document.getElementById('box').innerHTML="Please start with a number."
	}else if(on=false){
		dot=10;
		numb='1';
		thing += "-";
		length ++;
		check();
	}	else{
		dot=10;
		numb='1';
		thing=current+ '-'
		length++
		check();
	}
}
function times(){
	console.log("times");
	if(length==0){
		document.getElementById('box').innerHTML="Please start with a number."
	}else if (on=false){
		dot=10;
		numb='2';
		thing += "*";
		length ++;
		check();
	}else{
		dot=10;
		numb='0';
		thing=current+ '+'
		length++
		check();
	}
}
function slash(){
	console.log("slash");
	if(length=0){
		document.getElementById('box').innerHTML="Please start with a number."
	}else if(on=false){
		dot=10;
		numb='3';
		thing += "/";
		length ++;
		check();
	}else{
		dot=10;
		numb='3';
		thing=current+ '/'
		length++
		check();
	}
}
function c(){
	console.log("c");
	length=0;
	current=0;
	thing="nothing";
	dot=10;
	numb='6';
	dig=0;
	document.getElementById('box').innerHTML=""
	
}
function point(){
	console.log("dot");
	if(length=0){
		document.getElementById('box').innerHTML="Please start with a number."
	}
	else if(on=false){
		dot=10;
		numb='4';
		thing += ".";
		length ++;
		check();
	}else{
		dot=10;
		numb='4';
		thing=current+ '.'
		length++
		check();
	}
}