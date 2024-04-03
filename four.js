function cons(ttl,auth,yr) {
    this.title = ttl;
    this.author = auth;
    this.year = yr;
}
let obj1 = new cons("Z","adad",2009)
let obj2 = new cons("B","adad",2044)
let obj3 = new cons("J","adad",2043)
let obj4 = new cons("AB","adad",2023)
let obj5 = new cons("A","adad",2012)

let arr = []
arr.push(obj1)
arr.push(obj2)
arr.push(obj3)
arr.push(obj4)
arr.push(obj5)
// console.log(arr);

function fn(arr,logttl) {
    let list = arr.map((element,index,arr) => element['title'])
    // console.log(list);
    list.sort();
    return logttl(list);
}

function logttl(lst) {
    console.log(lst);
}

fn(arr,logttl)