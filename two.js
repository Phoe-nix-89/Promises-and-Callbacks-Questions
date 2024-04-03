function logstr(s) {
    console.log("The manipulated string is : " , s);
}
function manstr(s,fn) {
    return fn(s.toUpperCase());   
}
manstr("Hello World",logstr)