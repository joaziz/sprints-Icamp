function addToCard(itemId) {
    console.log("dd")
    Cart.add(itemId);
}

function getItemHtml(item) {
    return `                <div class="col">
                    <div class="card shadow-sm">
                        <div style="overflow: hidden;    max-height: 270px;    position: relative;">
                        <img  class="img-fluid" src="${item.imageUrl}">
                        <p style="position: absolute; color: #fff;    bottom: -14px;  background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgb(88,88,88));
;    display: inline-block;    left: 0;    width: 100%;    font-size: 20px;    padding: 10px;    text-transform: capitalize;">
                        ${item.title}
                        </p>
                        <p style="    position: absolute;
    top: 8px;
    right: 8px;
    background: #fff;
    padding: 16px;
    color: #eb9c35;
    font-size: 24px;
    border-radius: 13px;
    box-shadow: 0px 2px 3px 0px #0000002b;">${item.price}</p>
                        </div>

                        <div class="card-body">
                            <p class="card-text">
                            ${item.description}
</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="details.html?id=${item._id}" class="btn btn-sm btn-outline-secondary">View</a>
                                    <button onclick="addToCard(JSON.stringify({_id:'${item._id}',title:'${item.title}',description:'${item.description}',price:'${item.price}'}))" type="button" class="btn btn-sm btn-outline-secondary toToCardButtn">Add to cart</button>
                                </div>
                                <small class="text-muted">9 mins</small>
                            </div>
                        </div>
                    </div>
                </div>
`
}


function getItems() {
    const ele = document.getElementById("itemsHolder");


    Items.all().then(items => {
        console.log(items)
        items.forEach(item => {
            ele.innerHTML = ele.innerHTML + getItemHtml(item)
        })
    })
    // setInterval(() => {
    //     ele.innerHTML = ele.innerHTML + getItemHtml()
    //     ele.innerHTML = ele.innerHTML + getItemHtml()
    //     ele.innerHTML = ele.innerHTML + getItemHtml()
    // }, 5000)
}

isUserLogin();

getItems()
writeCartHTML()