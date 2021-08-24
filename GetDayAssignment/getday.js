function getDay(n){
    //var n = parseInt(document.getElementById('inp').value);
    //console.log(typeof n);
    //console.log(n);
    var x = parseInt(n);
    var retVal = '';

    switch(x){
        case 1: retVal = 'Sunday' ; break;
        case 2: retVal = 'Monday' ; break;
        case 3: retVal = 'Tuesday' ; break;
        case 4: retVal = 'Wednesday' ; break;
        case 5: retVal = 'Thursday' ; break;
        case 6: retVal = 'Friday' ; break;
        case 7: retVal = 'Saturday' ; break;
        default: retVal = 'Enter a valid input';
            }

    console.log(retVal);

    document.getElementById('op').innerHTML = retVal;
}