const Items = {
    all() {
        return new Promise((resolve) => axios.get("http://localhost:8500/items")
            .then(r => resolve(r.data.data)).catch(alert))
    },
    findById(id) {
        return new Promise((resolve) => axios.get(`http://localhost:8500/items/${id}`)
            .then(r => resolve(r.data.data)).catch(alert))
    }

}