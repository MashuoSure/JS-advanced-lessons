//立即执行的函数表达式 
(function min(x,y){
	return x<y?x:y;
}(5,6));
5


true && function(a,b){
    return a>b?a:b;
}(5,9); //9


0 && function(a,b){
    return a>b?a:b;
}(5,9); //0

!function(x,y){
	return x==y?true:false;        
}("5",5); //false				   
									//注意前面的"!"
!function(x,y){
	return x===y?true:false;
}("5",5); //true



//下面的两个function中间需要加分号，他们不是表达式
(function() {
	console.log("111");
})()//；
(function(){
	console.log("222");
})()