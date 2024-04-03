function greet(name) {
    const pr = new Promise(function exex(resolve,reject) {
        resolve(`Hello ${name}`);
    });
    return pr;
}

let x = greet("Koustav")
x.then((resolve) => {
    console.log(resolve);
}).catch((reject) => {
    console.log("Caught the reject : ",reject);
})