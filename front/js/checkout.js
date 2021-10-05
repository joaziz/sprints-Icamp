function getItemHtml(item) {
    return `
        <li class="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                            <h6 class="my-0">${item.title}</h6>
                            <small class="text-muted">${item.description}</small>
                        </div>
                        <span class="text-muted">$ ${item.price}</span>
                    </li>`
}

function writeTotal(totalAmount) {
    return `
        <li class="list-group-item d-flex justify-content-between lh-sm">
    <span>Total (USD)</span>
    <strong>$ ${totalAmount}</strong>
</li>`
}


function addItemToList(html) {
    let ele = document.getElementById("checkList");
    ele.innerHTML = ele.innerHTML + html;
}


function setItemsListOnHtml() {
    let totalAmount = 0;
    Cart.getAll().forEach(item => {
        addItemToList(getItemHtml(item));
        totalAmount += parseFloat(item.price);
    });
    addItemToList(writeTotal(totalAmount))
}

setItemsListOnHtml()

//


function checkOut() {
    let form = document.getElementById("checkOutForm");
    form.onsubmit = (e) => {
        e.preventDefault();
        let data = {};
        data.name = document.getElementById("firstName").value;
        data.address = document.getElementById("address").value;
        data.items_id = Cart.getAll().map(item => item._id);
        CheckOut.cehckot(data).then(res => {
            alert(`invoice created with id ${res.invoice_id}`)
            Cart.clear();
            location.href = "/";
        })
        return false;
    }


}

checkOut()