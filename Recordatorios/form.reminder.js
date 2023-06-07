const formContainer = document.getElementById('form-div');
const inputNombre = document.getElementById('nombre-input');
const inputAmount = document.getElementById('amount-input');
const inputDate = document.getElementById('date-input');
const inputPlace = document.getElementById('place-input');
const inputDetails = document.getElementById('details-input');

function displayForm() {
    formContainer.style.left = '0'
}

function emptyForm() {
    inputNombre.value='';
    inputAmount.value='';
    inputDate.value='';
    inputPlace.value='';
    inputDetails.value='';
}

function contractFrom() {
    emptyForm();

    formContainer.style.left = '-100%'
}



function acceptButton() {
    let nombreReminder = inputNombre.value;
    let amountReminder = inputAmount.value;
    let dateReminder = inputDate.value;
    let placeReminder = inputPlace.value;
    let detailsReminder = inputDetails.value;

    contractFrom();

    addData(nombreReminder, amountReminder, dateReminder, placeReminder, detailsReminder);
    addReminder();
}