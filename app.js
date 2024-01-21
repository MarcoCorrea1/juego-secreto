let numeroSectreto = 0;
let intentos=0;
let listaNumeros=[];
let numeroMaximo=10;

function asignarTextoElemento(elemento,texto){
    let titulo= document.querySelector(elemento);
    titulo.innerHTML= texto;
}

function verificarIntento() {
    let numeroUsuario=parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroUsuario === numeroSectreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos==1) ? 'vez!': 'veces!' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }
    else {
        if (numeroUsuario < numeroSectreto)
        {asignarTextoElemento('p','El numero secreto es mayor');
    }   
        else{
            asignarTextoElemento('p','El numero secreto es menor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let valorCaja=document.querySelector('#valorUsuario').value="";
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);

    //preguntar si ya usamos todos los numeros
    if(listaNumeros.length == numeroMaximo){
        asignarTextoElemento('p','Haz adivinado todos los numeros');
    }
    
    else{
    //Si el numero generado esta en la lista hacer... si no...
    if(listaNumeros.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }
    else{
        listaNumeros.push(numeroGenerado);
        console.log(listaNumeros);
        return numeroGenerado;
    }
}
}

function reiniciarJuego(){
    //reiniciar juego;
    limpiarCaja();
    condicionesIniciales(); 
    //deshabilitar boton nuevo juego
        document.querySelector('#reiniciar').setAttribute('disabled','true');

}

function condicionesIniciales(){    //Asignar los valores en el HTML Elemento y Texto
//Mensaje de inicio
asignarTextoElemento('h1','Juego del numero secreto');
asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
//Generar numero aleatorio
numeroSectreto = generarNumeroSecreto();
//Inicializar numero intentos
intentos=1;
}

//Ejecutar funciones
condicionesIniciales();