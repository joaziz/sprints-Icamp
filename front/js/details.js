isUserLogin();


const id = readQuery().id;


function readerItem(item) {
    document.getElementById("itemTitle").innerHTML = item.title
    document.getElementById("itemDesc").innerHTML = item.description
    document.getElementById("itemImg").src = item.imageUrl
    document.getElementById("itemPrice").innerText = item.price
}

Items.findById(id).then(item => {
    readerItem(item)
    document.getElementById("addToCart").onclick = () => Cart.add(JSON.stringify(item))
})

writeCartHTML()


