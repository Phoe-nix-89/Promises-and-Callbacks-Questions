let val = new Object();
async function fn() {

   let ob = await fetch("https://jsonplaceholder.typicode.com/todos/1");
   let nn = await ob.json();
   
   let obj2 = await fetch("https://jsonplaceholder.typicode.com/posts/1")
   let nn2 = await obj2.json();

   Object.assign(nn,nn2);

   console.log(nn);
}

fn();