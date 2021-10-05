const CheckOut = {
    cehckot(data) {
        return new Promise(resolve =>
            axios.post("http://localhost:8500/checkout", data).then(res => resolve(res.data)).catch(alert)
        )
    }
}