const url = await(await fetch("http://localhost:3001/posts")).json()

console.log(url);

