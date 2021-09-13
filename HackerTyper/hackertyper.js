
var lines = "";
let input = document.querySelector('input[type="file"]');
let typer = document.getElementById('typefield');
let cursor = document.getElementById('cursor'); //this element gets changed when the span gets rewritten 
let access = document.querySelector('div[class="access"]');

let blinkOnOff = 1;
let accBlinkerOnOff = 0;

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
let onlyOnce = 1;

document.addEventListener('keydown',(e)=>{
    if(!lines == "" && i<= lines.length){
        typestring = typer.innerText;
        typestring = typestring.substr(0,typestring.length - 1);
        typestring += lines.substr(i,3);
        console.log(typestring);
        typer.innerText = typestring;
        i = i + 3;
        typer.innerHTML += "<span id=\"cursor\">|</span>"
        cursor = document.getElementById('cursor');
    }
    else{
        if(e.code == "Enter" && onlyOnce ){
            onlyOnce = 0;
            access.style.opacity = "1";
            const accblink = setInterval(function(){
                if(accBlinkerOnOff){
                    access.style.fontWeight = 200;
                    // access.style.fontSize = "1em"
                    access.style.border = "1px solid rgb(31, 209, 31)";
                    accBlinkerOnOff = 0;
                }
                else{
                    access.style.fontWeight = 700;
                    // access.style.fontSize = "1.1em";
                    access.style.border = "1.5px solid rgb(31, 209, 31)";
                    accBlinkerOnOff = 1;
                }
            },1000);
        }
    }
});

