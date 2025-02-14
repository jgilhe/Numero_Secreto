
let numeroSecreto = 0;
let intento = 0;
let ListaNumeroSorteado = [];
let NumeroMax = 10;
function asignarTextoElemento(elemento, texto){

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    
let numeroDeUsuario = parseInt(document.getElementById('ValorUsuario').value); 

if (numeroDeUsuario === numeroSecreto){
    asignarTextoElemento ('p',`Acertaste el número en ${intento} ${ (intento === 1) ? 'intentos' : 'intentos' }`);
    document.getElementById('reiniciar').removeAttribute('disabled');
}
    else {
        if (numeroDeUsuario > numeroSecreto){
             asignarTextoElemento ('p','El número secreto es menor');
    }
            else {
            asignarTextoElemento ('p','El número secreto es mayor');   
    }
    intento++;
    LimpiarCaja();
}          
return;
}

function LimpiarCaja(){
    document.querySelector('#ValorUsuario').value = '';
}

function generarNumerosecreto(){
    let NumeroGenerado = Math.floor(Math.random()*NumeroMax)+1;
    console.log (NumeroGenerado);
    console.log(ListaNumeroSorteado);
    //Todos los número sorteados 
    if (ListaNumeroSorteado.length === NumeroMax){
        asignarTextoElemento('P', 'Ya se sortearon todos los números posibles');
    }
    else {
    //si el numero generado esta incluido en la lista 
    if (ListaNumeroSorteado.includes(NumeroGenerado)){
        return generarNumerosecreto();
    }
    else{
        ListaNumeroSorteado.push(NumeroGenerado);
        return NumeroGenerado;
        }
    }
}

function CondicionesIniciales(){

    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${NumeroMax}`); 
    //generar el nunmero aleatorio 
    numeroSecreto = generarNumerosecreto();
    //iniciar contador de intentos 
    intento = 1;
}

function ReiniciarJuego() {
    //limpiar caja 
    LimpiarCaja();

    // indicar mensaje de intervalo de numero 
    CondicionesIniciales();

    //deshabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}
CondicionesIniciales();

