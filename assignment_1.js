'use strict'


//A1
function getSum(){
    var arr = parseInt(prompt('Enter the array values:'));
    var sum = 0;
    for( let i = 0 ; i < arr.length ; i++ ){
        sum += arr[i];
    }
    console.log('The sum of the entered values :' + sum);
}

//A2
function checkEvenOrNot(n){
    var retVal = '';

    retVal = (n%2 === 0)? 'Number is Even' : 'Number is Odd';

    return retVal;
}

console.log(checkEvenOrNot(10));

//A3
function checkPrimeOrNot(n){
    var midVal = Math.abs(Math.sqrt(n));
    var retVal = 'This Number is Prime';
    for(let i = 2 ; i <= midVal ; i++){
        if(n%i === 0)
            retVal = 'This Number is Not Prime';
    }

    return retVal;
}

console.log(checkPrimeOrNot(53));

//A4
function findTheDay(n){
    var retVal = '';

    switch(n){
        case 1: retVal = 'Sunday'; break;
        case 2: retVal = 'Monday'; break;
        case 3: retVal = 'Tuesday'; break;
        case 4: retVal = 'Wednesday'; break;
        case 5: retVal = 'Thursday'; break;
        case 6: retVal = 'Friday'; break;
        case 7: retVal = 'Saturday'; break;
        default : retVal = 'Invalid Input';
    }

    return retVal;
}


console.log(findTheDay(5));

//A5
function findTheDay(n){
    var retVal = '';

    if(n === 1){
        retVal = 'Sunday';
    }
    else if(n === 2){
        retVal = 'Monday';
    }
    else if(n === 3){
        retVal = 'Tuesday';
    }
    else if(n === 4){
        retVal = 'Wednesday';
    }
    else if(n === 5){
        retVal = 'Thursday';
    }
    else if(n === 6){
        retVal = 'Friday';
    }
    else if(n === 7){
        retVal = 'Saturday';
    }
    else if(n === 8){
        retVal = 'Monday';
    }
    else{
        retVal = 'Invalid Input';
    }

    return retVal;
}


console.log(findTheDay(3));

//A6
function findTheDay(n){
    var retVal = '';

    retVal = (n === 1)? 'Sunday' :  (n === 2)? 'Monday' : (n === 3)? 'Tuesday' : (n === 4)? 'Wednesday' : (n === 5)? 'Thursday' : (n === 6)? 'Friday' : (n === 7)? 'Saturday'  : 'Invalid Input' ;

    return retVal;
}


console.log(findTheDay(5));

//A7