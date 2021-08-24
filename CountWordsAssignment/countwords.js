function countWords(str){
    var retVal = 0;

    str.replace(/(^\s*)|(\s*$)/gi,'');
    str.replace(/[ ]{2,}/gi,' ');
    str.replace(/\n /,'\n');

    retVal = str.split(' ').length;
    document.getElementById('op').value = retVal;
}