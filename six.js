fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((rss) => {
    return rss.json();
})
.then((ans) => {
    console.log(ans);
})