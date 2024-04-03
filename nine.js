/* Using async :-
async function fn() {
    try{
        let pr = await fetch('https://website')
        let jsn = await pr.json();
    }
    catch(Error){
        console.log("Error");
    }
}
fn();
*/

// Using fetch with then , catch function :-
fetch('https://website')
.then(() => {
    console.log("Successful retrieve");
}).catch(() => {
    console.log("Nope , error in retrieve");
})