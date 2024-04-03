let arr = [1,2,3,4]
function fn(double,arr) {
    return double(arr);
}
console.log(fn((array) => {
    for(let i=0;i<array.length;i++){
        array[i] = 2*array[i];
    }
    return array;
},arr))