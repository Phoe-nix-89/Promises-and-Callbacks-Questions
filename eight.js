async function fn() {
    let pr = await fetch("https://jsonplaceholder.typicode.com/posts")
    let jsn = await pr.json();
    console.log(jsn);
}
fn();