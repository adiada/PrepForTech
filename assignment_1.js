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

//console.log(checkEvenOrNot(10));

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

//console.log(checkPrimeOrNot(53));

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


//console.log(findTheDay(5));

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


//console.log(findTheDay(3));

//A6
function findTheDay(n){
    var retVal = '';

    retVal = (n === 1)? 'Sunday' :  (n === 2)? 'Monday' : (n === 3)? 'Tuesday' : (n === 4)? 'Wednesday' : (n === 5)? 'Thursday' : (n === 6)? 'Friday' : (n === 7)? 'Saturday'  : 'Invalid Input' ;

    return retVal;
}


//console.log(findTheDay(5));

//A7

function  findArrayelement(n,arr){
    var retVal = 0;
    
    for( let i = 0 ; i < arr.length ; i++ ){
        if(arr[i] === n){
            retVal = i;
            break;
        }
    }

    return 'The element is found at position ' + (retVal + 1);
}

//console.log(findArrayelement(3,[4,2,3,6,7,8]));

//A8
function findArrayMax(arr){
    var retVal = Number.MIN_VALUE;

    for(let i = 0; i < arr.length ; i++){
        if(arr[i] > retVal)
            retVal = arr[i];
    }

    return retVal;
}

//console.log(findArrayMax([5,2,3,1,6,8]));


//A9
function findArrayMin(arr){
    var retVal = Number.MAX_VALUE;

    for(let i = 0; i < arr.length ; i++){
        if(arr[i] < retVal)
            retVal = arr[i];
    }

    return retVal;
}

//console.log(findArrayMin([4,3,6,7,1,-5,-2]));

//A10
function factorial(n){
    var retVal = 1;

    for(let i = n ; i > 0; i--){
        retVal *= i; 
    }

    return retVal;
}

//console.log(factorial(5));

function reverseArray(arr){

    var mid = Math.floor(arr.length/2);
    let temp = 0;

    for(let i = 0, j = arr.length - 1 ; i < mid ; i++ , j--)
    {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    return arr;
    
}

//console.log(reverseArray([4,3,2,1,7,9]));

function reverseString(s){ //can't use logic of array as strings are immutable

    var retVal = '';
    let i = s.length - 1;

    while(i >= 0){
        retVal = retVal + s[i];
        i--;
    }
    

    return retVal;
}

//console.log(reverseString('apple'));


//A13
function remDuplicateChars(str){
    var charbook = {};
    var retVal = '';

    for(let i = 0 ; i < str.length ; i++ ){
        if(!charbook.hasOwnProperty(str[i])){
            charbook[str[i]] = 1;
            retVal += str[i];
        }
    }

    return retVal;
}

//console.log(remDuplicateChars('Missisippi'));

//A14
function checkIfPalindrome(n){
    var retVal = '';
    let k = 0;
    var rev = 0;

    n = Math.floor(n); //to ignore the decimal part

    k = n;
    while( k  > 0){
        rev = rev*10 + k%10;
        k = Math.floor(k/10);  
    }

    if( n === rev ){
        retVal = 'This is a palidrome number';
    }
    else
    {
        retVal = 'This is not a palindrome number';
    }

    return retVal;
}

//console.log(checkIfPalindrome(1234345434321));


//A15

function checkIfStringIsPalindrome(str){
    var retVal = 'String is a Palidrome';
    var mid = Math.floor(str.length/2);

    for(let i = 0 , j = str.length - 1 ; i < mid ; i++ , j--){

        if(str[i] != str[j]){
            retVal = 'String is not a Palidrome';
            break;
        }
    }

    return retVal;
}

//console.log(checkIfStringIsPalindrome('kasak'));


//A16

//link to lookup regular expressions : https://dev.to/carter/regular-expressions-regex-in-javascript-4m9h
function countNoOfWords(str){

    str.replace(/(^\s*)|(\s*$)/gi,'');
    str.replace(/[ ]{2,}/gi,' ');
    str.replace(/\n /,'\n');

    return str.split(' ').length;
}

//console.log(countNoOfWords('Hi this is my program. You are welcome.'))

//A17
function getNumberOfDays(month){

    var retVal = 0;

    switch(month){

        case 'January' : retVal = 31; break;
        case 'February' : retVal = 28; break;
        case 'March' : retVal = 31; break;
        case 'April' : retVal = 30; break;
        case 'May' : retVal = 31; break;
        case 'June' : retVal = 30; break;
        case 'July' : retVal = 31; break;
        case 'August' : retVal = 31; break;
        case 'September' : retVal = 30; break;
        case 'October' : retVal = 31; break;
        case 'November' : retVal = 30; break;
        case 'December' : retVal = 31; break;
        default : return 'Invalid input!';
    }

    return retVal;
}

//console.log(getNumberOfDays('February'));

//A18
function checkVal(n){

    var retVal  = '';
    var checker = (n === 0)? 0 : (n > 0)? 1 : -1 ;
    
    switch(checker){
        case 0 : retVal = 'Number is zero';break;
        case 1 : retVal = 'Number is positive';break;
        case -1 : retVal =  'Number is negative';break;
        default : retVal = 'Enter valid input!';
    }

    return retVal;
}

//console.log(checkVal(0.9));

//A19
function evenOrNot(n){

    var retVal = '';
    
    if(n%2 === 0){
        retVal = 'Number is even';
    }
    else{
        retVal = 'Number is odd';
    }

    return retVal;
}

//console.log(evenOrNot(4));


//A20
function evenOrNotSwitch(n){

    var retVal = '';
    
    switch(n%2){
        case 0 : retVal = 'Number is even'; break;
        case 1 : retVal = 'Number is odd' ; break;
    }

    return retVal;
}

console.log(evenOrNotSwitch(4));

//A21

//A22
function countOccurenceOfChar(str,ch){

    var retVal = 0;

    for(let i = 0 ; i < str.length ; i++){
        if(str[i] === ch)
            retVal++;
    }

    return retVal;
}

//console.log(countOccurenceOfChar('This is a poem about Missisippi','s'));

