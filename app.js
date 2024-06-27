let intentos = 0
let numeroSecreto = 0;
let listaNumerosGenerados =[];
let numeroMaximo = 10;

console.log(numeroSecreto);

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log(typeof(numeroDeUsuario));
    // console.log(numeroDeUsuario);
    // console.log(typeof(numeroSecreto));
    // console.log(numeroSecreto);
    // console.log(numeroDeUsuario==numeroSecreto);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoLemento('p',`Acertaste el número al ${intentos} ${intentos >1 ? 'intentos':'intento'}`)
        //terminando el juego, activamos el botom nuevo juego
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoLemento('p','el numero secreto es menor')
        }else{
            asignarTextoLemento('p','el numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }


}

function asignarTextoLemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML =texto;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) +1 ;
    console.log(numeroGenerado);
    console.log(listaNumerosGenerados);

    //si ya sortemos todos los numero 
    if(listaNumerosGenerados.length == 10){
        asignarTextoLemento('p','Ya se sortearon todos los numeros posibles');
    }else{
        if (listaNumerosGenerados.includes(numeroGenerado)) {
            //recursividad aqui , cuando el numero secreto es repetido 
            return generarNumeroSecreto();
        }else{
            // si el numero secreto es un nuevo numero 
            listaNumerosGenerados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

    
}

function limpiarCaja(){
    // forma larga
    // let valorCaja = document.querySelector('#valorUsuario');
    // valorCaja.value = '';
    // forma abreviada
    document.querySelector('#valorUsuario').value ='';
}

function condicionesIniciales() {
    asignarTextoLemento('h1','JUEGO DEL NUMERO SECRETO');
    asignarTextoLemento('p',`Escoge un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intevalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //desahibilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();
