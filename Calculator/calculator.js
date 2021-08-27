function getHistory(){
    return document.getElementById('history-value').innerText;
}

function printHistory(num){
    document.getElementById('history-value').innerText = num;
}

function getOutput(){
    return document.getElementById('output-value').innerText;
}

function printOutput(num){
    if(num == '-')
    {document.getElementById('output-value').innerText = '';}
    else{
    document.getElementById('output-value').innerText = num;
    }
}

const number = document.getElementsByClassName('number');

for(let i = 0 ; i < number.length ; i++){

    number[i].addEventListener('click',function(e){
        //console.log('hit');
        var output = getOutput();
        output = output + this.id;
        printOutput(output);
    });
}

const operator = document.getElementsByClassName('operator');

for(let i = 0; i < operator.length ; i++){

    operator[i].addEventListener('click',function(e){

        var output = getOutput();
        var history = getHistory();
        if(this.id == 'clear'){
            printOutput('');
            printHistory('');
            document.getElementById('/').disabled = false;
            document.getElementById('*').disabled = false;
            document.getElementById('-').disabled = false;
            document.getElementById('+').disabled = false;
            document.getElementById('%').disabled = false;
        }
        else
        if(this.id == 'backspace'){
            output = output.substr(0,output.length - 1 );
            printOutput(output);
        }
        else
        {
            if(this.id == '='){
                if(output != '' && history != ''){
                    history = history + output;
                    output = eval(history);
                    printHistory('');
                    printOutput(output);
                    document.getElementById('/').disabled = false;
                    document.getElementById('*').disabled = false;
                    document.getElementById('-').disabled = false;
                    document.getElementById('+').disabled = false;
                    document.getElementById('%').disabled = false;
                }
            }
            else
            {   
                
                if(!( history == '' && output == '')){   //condition to consider a negative number in the beginning
                document.getElementById('/').disabled = true;
                document.getElementById('*').disabled = true;
                document.getElementById('-').disabled = true;
                document.getElementById('+').disabled = true;
                document.getElementById('%').disabled = true;
                }

                if(history == '' && output == ''){
                    if(this.id == '-'){
                        output = this.id;
                        printOutput(output);
                    }
                }
                else
                if(history == '' && output != ''){
                    history = output + this.id;
                    output = '';
                    printOutput(output);
                    printHistory(history);
                }
                else
                if(history != '' && output == ''){
                    history =  hitory.substr(0,history.length - 1);
                    history = history + this.id;
                    printHistory(history);
                }
                else
                {
                    history = history + output + this.id;
                    output = '';
                    printOutput(output);
                    printHistory(history);
                }
            }
        }
    });
}

