
// let typer = document.getElementById('typefield');

// var fr = new FileReader();
// let file = 'C:\fakepath\merge_sort.txt';

// const upload = document.getElementById('file');

// upload.addEventListener('change',()=>{
//     // console.log(input.files);
//     let reader = new FileReader();

//     reader.readAsText(upload.files[0]);

//     reader.onload = function(){
//         //console.log(reader.result);
//         console.log(reader.result);

//     }
// });


// fr.onload = function(){
//     typer.textContent = fr.result;
// }

// document.addEventListener('keydown',(e)=>{
//     console.log(e.key);
// });

var lines = "";
let input = document.querySelector('input[type="file"]');
let typer = document.getElementById('typefield');

input.addEventListener('change',(e=>{
    const reader = new FileReader();

    reader.readAsText(input.files[0]);

    reader.onload = function() {
        lines = reader.result;
    }
}));

let i = 0;
document.addEventListener('keydown',(e)=>{
    if(!lines == ""){
        typer.innerText += lines[i++];
        typer.innerText += lines[i++];
        typer.innerText += lines[i++];
    }
});