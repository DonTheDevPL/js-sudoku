function addInputValidation() {
    let inputs = document.getElementsByClassName('input_pl');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input', updateValue, false);
    }
}
function updateValue() {
    if (!((this.value > 0) && (this.value < 10))) {
        this.value = '';
    }
}
function validateGame() {
    let suma = 0;
    //row
    for (var i = 1; i <= 9; i++) {
        suma = suma + document.getElementById(i + '_1').value;
        suma = suma + document.getElementById(i + '_2').value;
        suma = suma + document.getElementById(i + '_3').value;
        if (suma != 45) {
            alert("blad");
            break;
        } else { suma = 0; }
    }
}
