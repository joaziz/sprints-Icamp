const doLogin = (user, password) => {
    axios.post('http://localhost:8500/auth/login', {username: user, password})
        .then(function (response) {
            Token.save(response.data.token);
            location.href = "/";
        })
        .catch(function (error) {
            alert(error.message)
        });
}


// --------------------------

const loginAction = (ele) => {
    console.log(ele)
    ele.onclick = function (e) {
        console.log("dd")
        e.preventDefault();
        const username = document.getElementById("floatingInput").value;
        const password = document.getElementById("floatingPassword").value;
        doLogin(username, password);
        return false
    }
}

function checkUserIsLogin() {
    if (Token.get())
        location.href = "/";
}

checkUserIsLogin()
loginAction(document.getElementById("loginBtn"))
