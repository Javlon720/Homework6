const url = await(await fetch("http://localhost:3001/users")).json()
const nameList = document.querySelector('.name_list')




function render() {
    nameList.innerHTML = url.map(item => `
        <li class="name_items">${item.name}</li>
        `).join("")
}
render()
console.log(url);
