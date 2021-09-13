
var lines = "";
let input = document.querySelector('input[type="file"]');
let typer = document.getElementById('typefield');
let cursor = document.getElementById('cursor'); //this element gets changed when the span gets rewritten 

let blinkOnOff = 1;


//fetching the file from directory
fetch('./merge_sort.txt')
.then(function(response){return response.text()})
.then(function(data){
        console.log(data);
        lines = data;});

//blinker for the cursor
const blinker = setInterval(function(){
    if(blinkOnOff){
        cursor.style.color = "black";
        blinkOnOff = 0;
    }
    else{
        cursor.style.color = "inherit";
        blinkOnOff = 1;
    }
    
},500);


let i = 0;
let typestring = '';

document.addEventListener('keydown',(e)=>{
    if(!lines == "" && i<=length(lines)){
        typestring = typer.innerText;
        typestring = typestring.substr(0,typestring.length - 1);
        typestring += lines.substr(i,3);
        console.log(typestring);
        typer.innerText = typestring;
        i = i + 3;
        typer.innerHTML += "<span id=\"cursor\">|</span>"
        cursor = document.getElementById('cursor');
    }
});

