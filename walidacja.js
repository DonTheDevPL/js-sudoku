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
//debug
function fillbyid() {
    for (var a = 1; a <= 9; a++) {
        for (var b = 1; b <= 9; b++) {
            document.getElementById(a + '_' + b).value = b;
        }
    }
}
function fillbyrow() {
    let offset = 0;
    let numbers = [1, 2, 3, 3, 4, 5, 5, 6, 7]
    for (var i in numbers) {
        document.getElementById(1 + '_' + i).value = numbers[i];
    }
}