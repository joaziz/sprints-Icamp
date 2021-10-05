const Cart = {
    clear() {

        localStorage.removeItem("carts_items");
    },
    getAll() {
        let items = localStorage.getItem("carts_items");
        if (!items)
            return [];
        return JSON.parse(items);
    },
    add(id) {

        let oldItems = Cart.getAll();
        oldItems.push(JSON.parse(id))
        localStorage.setItem("carts_items", JSON.stringify(oldItems));
        writeCartHTML();
    },
    getCount() {
        return Cart.getAll().length;
    }
}


function writeCartHTML() {
    document.getElementById("cartCount").innerText = Cart.getCount()
}