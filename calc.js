var a='';
var b='';
var current=0;
var number='';
var ab=true;
var an='';
function c(){
	console.log('c')
	current=0;
	a='';
	b='';
	number='';
	ab=true;
	show();
}
function ans(){
	console.log('ans')
	switch(number){
		case '+':
			current=Number(a) + Number(b);
			break;
		case '-':
			current=Number(a)- Number(b);
			break;
		case '/':
			current=Number(a)/Number(b);
			break;
		case '*':
			current=Number(a)*Number(b);
			break;
			
	}
}
function show(){
	console.log('show')
	an=a+number;
	document.getElementById('box').innerHTML = an+b;
}
function plus(){
	console.log('plus')
	if(ab==true){
		number='+';
		ab=false;
	}else{
		
		
		ab=false;
		ans();
		a=current;
		b='';
		number='+';
	}
	
	show();
}
function minus(){
	console.log('minus')
	if(ab==true){
		number='-';
		ab=false;
	}else{
		
		ab=false;
		ans();
		a=current;
		b='';
		number='-';
	}
	
	show();
}
function slash(){
	console.log('slash')
	if(ab==true){
		number='/';
		ab=false;
	}else{
		ab=false;
		ans();
		a=current;
		b='';
		number='/';
	}
	
	show();
}
function times(){
	console.log('times')
	if(ab==true){
		number='*';
		ab=false;
	}else{
		ab=false;
		ans();
		a=current;
		b='';
		number='*';
	}
	
	show();
}
function point(){
	console.log('point')
	if(ab==true){
		a+='.';		
	}else{
		b+='.';
	}
	show();
}
function is(){
	ab=false;
	ans();
	a=current;
	b='';
	number='';
	show();
	a='';
	current='';
	ab=true;
}
function one(){
	console.log('1')
	if(ab==true){
		a+='1';			
	}
	else{
		b+='1';
		
	}
	show();
}
function two(){
	console.log('2')
	if(ab==true){
		a+='2';		
	}else{
		b+='2';
	}
	show();
}
function three(){
	console.log('3')
	if(ab==true){
		a+='3';		
	}else{
		b+='3';
	}
	show();
}
function four(){
	console.log('4')
	if(ab==true){
		a+='4';		
	}else{
		b+='4';
	}
	show();
}
function five(){
	console.log('5')
	if(ab==true){
		a+='5';		
	}else{
		b+='5';
	}
	show();
}
function sex(){
	console.log('6')
	if(ab==true){
		a+='6';		
	}else{
		b+='6';
	}
	show();
}
function seven(){
	console.log('7')
	if(ab==true){
		a+='7';		
	}else{
		b+='7';
	}
	show();
}
function eight(){
	console.log('8')
	if(ab==true){
		a+='8';		
	}else{
		b+='8';
	}
	show();
}
function nine(){
	console.log('9')
	if(ab==true){
		a+='9';		
	}else{
		b+='9';
	}
	show();
}
function zero(){
	console.log('0')
		if(ab==true){
		a+='0';		
	}else{
		b+='0';
	}
	show();
}