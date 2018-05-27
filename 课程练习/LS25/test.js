



// window.onload = function (e) {
  
    // console.log("window onload");
    // var div1 = document.getElementById("div1");
  
    //点击
    // div1.onclick = function(){
    //     console.log("div1 onclick");
    // }


    //拖动
    // div1.ondrag = function(){
    //     console.log("div1 ondrag");
    // }

    // console.log(e.target);
    // console.log(this);
    // var div1 = document.getElementById("div1");
    // div1.onclick = function(e){
        // console.log(e.clientX,e.clientY,e.ctrlKey);
        // console.log(e.type,e.target)
        // console.log(e.target,this);

        // console.log(e);
        // console.log(e);

        // console.log(e);
        // console.log(e.__proto__);
        // console.log(e.__proto__.__proto__);
        // console.log(e.__proto__.__proto__.__proto__);
        // console.log(e.__proto__.__proto__.__proto__.__proto__);
        // console.log(e._proto_._proto_._proto_.hasOwnProperty("target"))

        // for(var k in e){
        //     console.log(k,e[k]);
        // }
        // for(var k in e.__proto__){
        //     console.log(k);
        // }
        // for(var k in e.__proto__.__proto__){
        //     console.log(k);
        // }
        // for(var k in e.__proto__.__proto__.__proto__){
        //     console.log(k);
        // }
        
        //自定义事件
        // document.addEventListener("myclick",functione()
        // {console.log("e.type")});
        // document.dispatchEvent(new Event("myclick"))

window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
        function clickHandler(e) {
            console.log(e.target,this)
        }
        div1.addEventListener("click",clickHandler);
        div2.addEventListener("click",clickHandler);
        document.addEventListener("click",clickHandler);
        window.addEventListener("click",clickHandler);
        // div1.removeEventListener("click",clickHandler);
        
        // div1.onclick = clickHandler;
        // div1.onclick = function(){
        //     console.log("xx")
        }

//     div2.onclick = clickHandler;
//     div2.onclick = null;
// }
        
//     }
// }