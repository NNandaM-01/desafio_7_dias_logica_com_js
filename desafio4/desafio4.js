let numAleatorio= 0
let numtentativa = 0;
 numAleatorio = parseInt (Math.random()*10)
 console.log(numAleatorio)


function verificaNum(){

    let valor = document.getElementById('numero').value
console.log(valor);
    if(valor > numAleatorio) {
        numtentativa++
        alert('o numero encontrado e MENOR')
    }
    else if(valor < numAleatorio){
        numtentativa++
        alert('o numero encontrado e MAIOR')
    }
    else{
        alert(' PARABÉNS!! VOCE ACERTOU.')
    }
}