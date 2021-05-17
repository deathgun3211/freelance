class LoginObject{
    login;
    password;

    constructor(login, password) {
        this.login = login;
        this.password = password;
    }
}
function handleData(){
    let form = document.getElementById("login-form");
    let data = saveData(form).split(",");

    if (data === undefined){
        return false;
    }

    let formObject = new LoginObject(data[0],data[1]);

    localStorage.setItem("CurrentLogin",JSON.stringify(formObject));
}
function regAdmin() {
    let registeredUser = new LoginObject("admin", "admin")
    let arrayReg = [registeredUser];
    localStorage.setItem("RegisteredUsers", JSON.stringify(arrayReg));
}
regAdmin();
