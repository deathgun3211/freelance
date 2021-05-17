function createDataField() {
    let Output = document.getElementById("OutPutArea");
    Output.innerHTML = "";
    if(localStorage["EntryTable"] === undefined || localStorage["EntryTable"] === null){
        return false;
    }

    for (let i = 0; i < JSON.parse(localStorage["EntryTable"]).length; i++) {
        let divEntry = document.createElement("div");
        divEntry.className = "entry";

        let objectsArray = JSON.parse(localStorage.getItem("EntryTable"));

        divEntry.textContent = objectsArray[i].name + " " + objectsArray[i].description + " "
        + objectsArray[i].tags;

        Output.appendChild(divEntry);
    }
}
createDataField();


