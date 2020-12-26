function tocar(numero) {
    if (document.getElementById(numero) != "black" ) {
        //document.getElementById(numero).style.background = "black";
        //document.getElementById(numero).style.color = "white";
    } else {
        //document.getElementById(numero).style.background = "red";
        //document.getElementById(numero).style.color = "";
    }
    //console.log(document.getElementById(numero).classList,document.getElementById(numero).classList.value,document.getElementById(numero).classList.value.split(" ").indexOf('seleccionada'));

    if (document.getElementById(numero).classList.value.split(" ").indexOf('seleccionada') == -1) {
        document.getElementById(numero).classList.add('seleccionada');        
    } else {
        document.getElementById(numero).classList.remove('seleccionada');        
    }
    

}