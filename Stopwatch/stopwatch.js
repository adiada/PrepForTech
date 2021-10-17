

const clicker1 = document.getElementById('clicker1');
const clicker2 = document.getElementById('clicker2');

const pauser1 = document.getElementById('pauser1');
const pauser2 = document.getElementById('pauser2');

const reset1 = document.getElementById('reset1');
const reset2 = document.getElementById('reset2');

const secs1 = document.getElementById('secs1');
const secs2 = document.getElementById('secs2');

const mins1 = document.getElementById('mins1');
const mins2 = document.getElementById('mins2');

const hrs1 = document.getElementById('hrs1');
const hrs2 = document.getElementById('hrs2');

var seconds1 = 0;
var minutes1 = 0;
var hours1 = 0;

var seconds2 = 0;
var minutes2 = 0;
var hours2 = 0;

var intervalID1;
var intervalID2;

clicker1.addEventListener('click',function(e){

    intervalID1 = setInterval( function(){

        seconds1++;
        if(seconds1 == 60) {
            seconds1 = 0;
            minutes1++;
            if(minutes1 == 60){
                minutes1 = 0
                hours1++;
                if(hours1 < 10){
                    hrs1.innerHTML = '0' + hours1;
                }
                else{
                    hrs1.innerHTML = hours1;
                }
            }
            if(minutes1 < 10){
                mins1.innerHTML = '0' + minutes1;
            }
            else{
                mins1.innerHTML = minutes1;
            }
        }
        if(seconds1 < 10){
            secs1.innerHTML = ('0' + seconds1);
        }
        else{
            secs1.innerHTML = seconds1;
        }

       
        // console.log('Hi');
    },1000)
});

reset1.addEventListener('click',function(e){
    seconds1 = 0;
    minutes1 = 0;
    hours1 = 0;
    document.getElementById('hrs1').innerHTML = '00';
    document.getElementById('mins1').innerHTML = '00';
    document.getElementById('secs1').innerHTML = '00';
});

pauser1.addEventListener('click',function(e){
    clearInterval(intervalID1);
});


clicker2.addEventListener('click',function(e){

    intervalID2 = setInterval( function(){

        seconds2++;
        if(seconds2 == 60) {
            seconds2 = 0;
            minutes2++;
            if(minutes2 == 60){
                minutes2 = 0
                hours2++;
                if(hours2 < 10){
                    hrs2.innerHTML = '0' + hours2;
                }
                else{
                    hrs2.innerHTML = hours2;
                }
            }
            if(minute2 < 10){
                mins2.innerHTML = '0' + minutes2;
            }
            else{
                mins2.innerHTML = minutes2;
            }
        }
        if(seconds2 < 10){
            secs2.innerHTML = ('0' + seconds2);
        }
        else{
            secs2.innerHTML = seconds2;
        }

       
        // console.log('Hi');
    },1000)
});

reset2.addEventListener('click',function(e){
    seconds2 = 0;
    minutes2 = 0;
    hours2 = 0;
    document.getElementById('hrs2').innerHTML = '00';
    document.getElementById('mins2').innerHTML = '00';
    document.getElementById('secs2').innerHTML = '00';
});

pauser2.addEventListener('click',function(e){
    clearInterval(intervalID2);
});



