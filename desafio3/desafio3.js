let linguagem
const novasLinguagens = [ ]
let contador = 0

alert  ("Olá!")

let area = prompt("Você gostaria de estudar Front-End ou Back-End? Escolha 1 para Front-End e 2 para Back-End")

    if(area == 1){
        let front1 =  prompt("Gostaria de React(1) ou Vue(2)")
            if(front1 == 1)  {
                linguagem = "React"                
            }else{
                linguagem = "Vue"               
            }    
    }else{
        let back1 =  prompt("Gostaria de C++(1) ou Java(2)")  
        if(back1 == 1){
            linguagem = "C++"
        }else{
            linguagem = "Java"
        }
    }

let carreira = prompt("Continuar carreira em "+ linguagem +", digite 1, ou gostaria de se tornar FullStack, digite 2")
    if(carreira ==  1){
        alert("Você se especializará em "+ linguagem +". Parabéns!")
    }else{
        alert("Você se tornará um desenvolvedor FullStack. Parabéns!")
    }

    let aprendeMais =  prompt(" Gostaria de aprender mais linguagens? [1] sim ou [2] não.")
        if(aprendeMais === "s"){
            while(aprendeMais === "s"){
                novasLinguagens.push(prompt("Quais linguagens?"))

             aprendeMais = prompt("Alguma outra linguagem [s] ou [n]?")  
             if(aprendeMais != "s"){
                alert("Você se interessou por: " + novasLinguagens)
             } 
            }
        }

alert("Muito obrigado.!")
