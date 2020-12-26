function tocar(numero) {
    if (document.getElementById(numero).classList.value.split(" ").indexOf('seleccionada') == -1) {
        document.getElementById(numero).classList.add('seleccionada');        
    } else {
        document.getElementById(numero).classList.remove('seleccionada');        
    }
}

function limpiar() {
    document.querySelectorAll(".seleccionada").forEach(item => {
        console.log(item);
        item.classList.remove('seleccionada'); 
    });
}
