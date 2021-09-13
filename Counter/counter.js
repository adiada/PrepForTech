let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let reset = document.getElementById("reset-button");
let val = document.getElementById("val");

let mdinterval = 0;
let mdminus = 0;
let mdplus = 0;

minus.addEventListener('click',(e)=>{
        val.innerText = parseInt(val.innerText) - 1;
})

minus.addEventListener('mousedown',(e)=>{
    mdminus = 1;
    mdinterval = setInterval(function(){
        val.innerText = parseInt(val.innerText) - 1;
    },500);
})

document.addEventListener('mouseup',(e)=>{
    if(mdminus == 1){
        mdminus == 0;
        clearInterval(mdinterval);
    }
})

plus.addEventListener("click",(e)=>{
    val.innerText = parseInt(val.innerText) + 1;
})

plus.addEventListener('mousedown',(e)=>{
    mdplus = 1;
    mdinterval = setInterval(function(){
        val.innerText = parseInt(val.innerText) + 1;
    },500);
});

document.addEventListener('mouseup',(e)=>{
    if(mdplus == 1){
        mdplus == 0;
        clearInterval(mdinterval);
    }
});

reset.addEventListener('click',(e)=>{
    val.innerText = 0;
})

