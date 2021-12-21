function validateForm() {
var errors=[];
var selectedShape = document.querySelector('input[name="shape"]:checked');
var goingTo = document.detailsForm.goingTo;
var goingToValue = goingTo.value;
var packageWeight = document.detailsForm.packageWeight;

document.getElementById("shapeError").style.display="none";
document.getElementById("shapeError").innerHTML = "";

if(!radioSelectValidation(selectedShape)) {
errors.push(1);
document.getElementById("shapeError").style.display="";
document.getElementById("shapeError").innerHTML = "You must select an option";
document.getElementById('cylindrical').focus();
return false;
}


return true;
}

function radioSelectValidation(selectedVal) {
if(selectedVal != null) {
return true;
}
return false;
}
