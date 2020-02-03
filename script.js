var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
   
    formData["firstName"] = document.getElementById("firstName").value;  
    formData["lastName"] = document.getElementById("lastName").value;  
    formData["address"] = document.getElementById("address").value;
    formData["country"] = document.getElementById("country").value;
    formData["email"] = document.getElementById("email").value;
   
    return formData;
}


var i=1;
function insertNewRecord(data) {
    
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = i;
    i=i+1;

    var first=data.firstName
    var last=data.lastName
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.firstName+" "+data.lastName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.address;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.country;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.email;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<button class="edit" onClick="onEdit(this)">Edit</button>
                       <button class="delete" onClick="onDelete(this)">Delete</button>`;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.firstName;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.lastName;
}

function resetForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("address").value = "";
    document.getElementById("country").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    selectedRow = null;
}
var edit;
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;

    edit = selectedRow.cells[0].innerHTML ;
    document.getElementById("firstName").value = selectedRow.cells[6].innerHTML ;
    document.getElementById("lastName").value = selectedRow.cells[7].innerHTML ;
    document.getElementById("address").value = selectedRow.cells[2].innerHTML;
    document.getElementById("country").value = selectedRow.cells[3].innerHTML;
    document.getElementById("email").value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData) {
   
    selectedRow.cells[0].innerHTML = edit;
    selectedRow.cells[1].innerHTML = formData.firstName + " " + formData.lastName;
    selectedRow.cells[2].innerHTML = formData.address;
    selectedRow.cells[3].innerHTML = formData.country;
    selectedRow.cells[4].innerHTML = formData.email;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
   

     if (document.getElementById("firstName").value == "") {
        isValid = false;
        document.getElementById("firstNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("firstNameValidationError").classList.contains("hide"))
            document.getElementById("firstNameValidationError").classList.add("hide");
    }

    if (document.getElementById("lastName").value == "") {
        isValid = false;
        document.getElementById("lastNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("lastNameValidationError").classList.contains("hide"))
            document.getElementById("lastNameValidationError").classList.add("hide");
    }

    if (document.getElementById("address").value == "") {
        isValid = false;
        document.getElementById("addressValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("addressValidationError").classList.contains("hide"))
            document.getElementById("addressValidationError").classList.add("hide");
    }

    if (document.getElementById("country").value == "") {
        isValid = false;
        document.getElementById("countryValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("countryValidationError").classList.contains("hide"))
            document.getElementById("countryValidationError").classList.add("hide");
    }

    if (document.getElementById("email").value == "") {
        isValid = false;
        document.getElementById("emailValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("emailValidationError").classList.contains("hide"))
            document.getElementById("emailValidationError").classList.add("hide");
    }

    if (document.getElementById("password").value == "") {
        isValid = false;
        document.getElementById("passwordValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("passwordValidationError").classList.contains("hide"))
            document.getElementById("passwordValidationError").classList.add("hide");
    }


    return isValid;
}
