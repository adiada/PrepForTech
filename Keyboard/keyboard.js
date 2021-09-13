let print = document.getElementById('print');

document.addEventListener('keydown',(e)=>{
    print.innerHTML = "The key pressed is <span id=\"red\">" + e.key + "</span> and the Key Code is <span id=\"red\">" + e.keyCode + "</span>";
});