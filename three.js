function AID(obj,logres) {
    let name = ""
    name = name + obj['firstname'] + " " + obj['lastname'];
    let ageindays = obj['age'] * 365;
    return logres(name,ageindays);
}

let obj = new Object();

obj['firstname'] = "Koustav"
obj['lastname'] = "Seth"
obj['age'] = 21

function logres(name,age) {
    console.log(`The person's full name is ${name} and their age in days is ${age}`);
}

AID(obj,logres);