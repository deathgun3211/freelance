function saveData(form) {
    if(!form || form.nodeName !== "FORM"){
        return false;
    }
    let i,j,q = [];
    for (i = 0; i < form.elements.length; i++){
        if(form.elements[i].name === "" || form.elements[i].value === null){
            continue;
        }
        switch (form.elements[i].nodeName) {
            case "INPUT":
                switch (form.elements[i].type) {
                    case "text":
                    case "tel":
                    case "email":
                    case "hidden":
                    case "password":
                    case "button":
                    case "reset":
                    case "submit":
                        q.push(encodeURIComponent(form.elements[i].value));
                        break;
                    case "checkbox":
                    case "radio":
                        if (form.elements[i].checked) {
                            q.push(encodeURIComponent(form.elements[i].value));
                        }
                        break;
                }
                break;
            case "file":
                break;
            case "TEXTAREA":
                q.push( encodeURIComponent(form.elements[i].value));
                break
            case "SELECT":
                switch (form.elements[i].type) {
                    case"select-one":
                        q.push(encodeURIComponent(form.elements[i].value));
                        break;
                    case "select-multiple":
                        for (j = 0; j < form.elements[i].options.length; j++) {
                            if (form.elements[i].options[j].selected) {
                                q.push(encodeURIComponent(form.elements[i].options.value));
                            }
                        }
                        break;
                }
                break;
            case "BUTTON":
                switch (form.elements[i].type) {
                    case "reset":
                    case "submit":
                    case "button":
                        q.push(encodeURIComponent(form.elements[i].value));
                        break;
                }
                break;
        }
    }
    return q.join(",");
}