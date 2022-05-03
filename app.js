const MIN_VALUE_INPUT = 0;
const MAX_VALUE_INPUT = 100;
let VALUE_INITIAL = 0;

const input = document.getElementById('acount');
const button_reduce = document.getElementById('btn__reduce');
const button_add = document.getElementById('btn__add');

// Asignación del valor inicial del input
input.value = VALUE_INITIAL;

// Asignar funcion a cada boton
button_add.addEventListener("click",addAmount);
button_reduce.addEventListener("click",reduceAmount);
input.addEventListener("keypress", validateInput)


// Funcion para validar solo el ingreso de números
function validateInput(e){
    var key = e.charCode;
    
    if (key < 48 || key > 57) {
        e.preventDefault();
    }
}

// Funcion para incrementar la cantidad del input
function addAmount(){
    let VALUE_CURRENT = parseInt(input.value);

    if(VALUE_CURRENT >= MAX_VALUE_INPUT) return;   

    VALUE_CURRENT+= 1; 
    input.value = VALUE_CURRENT;
}

// Funcion para decrementar la cantidad del input
function reduceAmount(){
    let VALUE_CURRENT = parseInt(input.value);

    if(VALUE_CURRENT == MIN_VALUE_INPUT) return;

    VALUE_CURRENT -= 1;
    input.value = VALUE_CURRENT;
}