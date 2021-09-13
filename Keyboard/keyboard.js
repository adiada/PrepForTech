let print = document.getElementById('print');
let key = '';

document.addEventListener('keydown',(e)=>{
    
    if(e.key == ' '){
        key = 'SPACE';
    }
    else
    {
        key = e.key;
    }
    print.innerHTML = "The key pressed is <span id=\"red\">" + key + "</span> and the Key Code is <span id=\"red\">" + e.keyCode + "</span>";
});