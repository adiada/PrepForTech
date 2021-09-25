var theme = 'white';

function switchTheme(){
    const contstyle = document.getElementById('container').style;
    const switchstyle = document.getElementById('switch').style;
    if(theme == 'white'){
        document.body.style.backgroundColor = "black";
        contstyle.backgroundColor = 'black';
        contstyle.color = 'white';
        switchstyle.backgroundColor = 'black';
        switchstyle.color = 'white';
        switchstyle.borderColor = 'white';
        theme = 'black';
        //contstyle.
    }
    else
    {
        document.body.style.backgroundColor = "white";
        contstyle.backgroundColor = 'white';
        contstyle.color = 'black';
        switchstyle.backgroundColor = 'white';
        switchstyle.color = 'black';
        switchstyle.borderColor = 'black';
        theme = 'white';
    }
}