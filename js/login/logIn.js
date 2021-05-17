function isLogged() {
    if(JSON.parse(localStorage.getItem("RegisteredUsers")) === null
        ||  JSON.parse(localStorage.getItem("RegisteredUsers")) === undefined){
        return false;
    }
    if(JSON.parse(localStorage.getItem("CurrentLogin")) === null
        ||  JSON.parse(localStorage.getItem("CurrentLogin")) === undefined){
        return false;
    }

    let arrayRegisteredUsers = JSON.parse(localStorage.getItem("RegisteredUsers"));
    let LoggedUser = JSON.parse(localStorage.getItem("CurrentLogin"))

    for (let i = 0; i < arrayRegisteredUsers.length; i++) {
        if(arrayRegisteredUsers[i].login == LoggedUser.login && arrayRegisteredUsers[i].password == LoggedUser.password){
            return true;
        }
    }
    return false;
}

function logOut() {
    localStorage.removeItem("CurrentLogin");
}

function doLogWork() {
    if(isLogged()){
        let loginDiv = document.getElementById("loginNav")
        loginDiv.innerHTML = " <a class=\"button_reg\">account settings</a>\n <img src=\"img/user.png\" class=\"user_img\">\n <a class=\"user_text\" onclick=\"logOut(),doLogWork()\">User</a>";

    }else{
        let loginDiv = document.getElementById("loginNav")
        loginDiv.innerHTML = "<a class=\"button_reg\" href=\"login.html\">login</a>";
    }
}
doLogWork();