var a =123;
function foo1(x){
	x = 345;
}
foo1(a);
console.log(a);

var a ={y:123};
function foo3(x){
	x.y = 345;
	x = {y:456};
}
foo3(a);
console.log(a.y);

var a ={y:123};
function foo4(x){
    x = {y:456};	
    x.y = 345;	
}