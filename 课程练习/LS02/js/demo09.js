console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("abc"));
console.log(Boolean({}));

if(new Boolean(false)){
    console.log("执行");
}
//如果转换的内容本身就是一个数值类型的字符串，那么将来在转换的时候会返回自己。
//如果转换的内容本身不是一个数值类型的字符串，那么在转换的时候结果是NaN.
//如果要转换的内容是空的字符串，那以转换的结果是0.
//如果是其它的字符，那么将来在转换的时候结果是NaN.
console.log(Number(undefined));
console.log(Number(null));
console.log(Number(true));
console.log(Number(false));
console.log(Number(""));
console.log(Number("abc"));
console.log(Number("123.345xx"));//
console.log(Number("32343,345xx"));
console.log(Number({x:1,y:2}));

console.log(parseFloat("123.345xx"));
console.log(parseFloat("32343,345xx"));
console.log(parseInt("123.345xx"));
console.log(parseInt("32343,345xx"));

