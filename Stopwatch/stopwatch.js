

const clicker = document.getElementById('clicker');
const pauser = document.getElementById('pauser');
const reset = document.getElementById('reset');
const secs = document.getElementById('secs');
const mins = document.getElementById('mins');
const hrs = document.getElementById('hrs');
var seconds = 0;
var minutes = 0;
var hours = 0;

var intervalID;

clicker.addEventListener('click',function(e){

    intervalID = setInterval( function(){

        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0
                hours++;
                if(hours < 10){
                    hrs.innerHTML = '0' + hours;
                }
                else{
                    hrs.innerHTML = hours;
                }
            }
            if(minutes < 10){
                mins.innerHTML = '0' + minutes;
            }
            else{
                mins.innerHTML = minutes;
            }
        }
        if(seconds < 10){
            secs.innerHTML = ('0' + seconds);
        }
        else{
            secs.innerHTML = seconds;
        }

       
        // console.log('Hi');
    },1000)
});

reset.addEventListener('click',function(e){
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('hrs').innerHTML = '00';
    document.getElementById('mins').innerHTML = '00';
    document.getElementById('secs').innerHTML = '00';
});

pauser.addEventListener('click',function(e){
    clearInterval(intervalID);
});



