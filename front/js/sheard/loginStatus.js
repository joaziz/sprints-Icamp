const LoginBtn = {
    hide() {
        document.getElementById("LoginBtn").style.display = "none"
    },
    show() {
        document.getElementById("LoginBtn").style.display = "block"
    },
}

const UsernameTitle = {
    hide() {
        document.getElementById("usernamePlaceholder").style.display = "none"
    },
    show(username) {
        const ele = document.getElementById("usernamePlaceholder");
        ele.getElementsByTagName("span")[0].innerText = username
        ele.style.display = "block"
    },
}

function isUserLogin() {
    const token = Token.get();
    if (token) {
        LoginBtn.hide();
        UsernameTitle.show(Token.getUsername());
    } else {
        LoginBtn.show();
        UsernameTitle.hide();
    }
}
