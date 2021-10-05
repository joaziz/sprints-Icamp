const Token = {
    save(token) {
        localStorage.setItem("ser_token", token);
    },
    get() {
        return localStorage.getItem("ser_token");
    },
    getUsername() {
        return "walid Saad";
    },

    remove() {
        localStorage.removeItem("ser_token");

    }
}
