/******************************************************
 * Objetivo: Arquivo de funções para calculos matemáticos
 * Autor: Dwovanna Santos
 * Data: 03/02/2023
 * Versão: 1.0
*****************************************************/

//Função para realizar calculos matemáticos (SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR

//Forma 1 de criar uma função
// function calculadora(numero1, numero2, tipoCalculo) {

    // let valor1 = Number(numero1);
    // let Valor2 = Number(numero2);
    // let operacao = tipoCalculo.toUpperCase();
    // let resultado;
    // let status = true;

    /* if (operacao.toUpperCase() == 'SOMAR')

        resultado = valor1 + Valor2;
    else if (operacao.toUpperCase() == 'SUBTRAIR')

        resultado = valor1 - Valor2;
    else if (operacao.toUpperCase() == 'MULTIPLICAR')

        resultado = valor1 * Valor2;
    else if (operacao.toUpperCase() == 'DIVIDIR') {

        // Validação para tratar a divisão por 0
        if (Valor2 == 0){
            console.log('ERRO: Não é possível realizar a divisão por 0');
            status = false;
    }else{
            resultado = valor1 / Valor2;
    }

    } else {
        console.log('ERRO: A sua escolha de operação matemática foi invalida');
        //finaliza o call back do objeto de entrada de dados (Sai do programa)
        status = false;

    } */

    // switch(operacao)
    // {
    //     case 'SOMAR':
    //         resultado = valor1 + Valor2;
    //         break;
    //     case 'SUBTRAIR':
    //         resultado = valor1 - Valor2;
    //         break;
    //     case 'MULTIPLICAR':
    //         resultado = valor1 * Valor2;
    //         break;
    //     case 'DIVIDIR':
    //         if (Valor2 == 0){
    //             console.log('ERRO: Não é possível realizar a divisão por 0');
    //             status = false;
    //     }else{
    //             resultado = valor1 / Valor2;
               
    //      }  break;
    //      default:
    //          console.log('ERRO: A sua escolha de operação matemática foi invalida');
    //          status = false;
        
    
         
    // }

    // //Validação para tratar quando a variável resultado não for processada por algum problema
    // if (resultado == undefined && status == false)
    //     return false;
    // else
    //     return resultado;

//}


//Forma 2 de criar uma função (é uma das mais utilizadas)
const calculadora = function(numero1, numero2, tipoCalculo) {
     let valor1 = Number(numero1);
    let Valor2 = Number(numero2);
    let operacao = tipoCalculo.toUpperCase();
    let resultado;
    let status = true;

     if (operacao.toUpperCase() == 'SOMAR')

        resultado = valor1 + Valor2;
    else if (operacao.toUpperCase() == 'SUBTRAIR')

        resultado = valor1 - Valor2;
    else if (operacao.toUpperCase() == 'MULTIPLICAR')

        resultado = valor1 * Valor2;
    else if (operacao.toUpperCase() == 'DIVIDIR') {

        // Validação para tratar a divisão por 0
        if (Valor2 == 0){
            console.log('ERRO: Não é possível realizar a divisão por 0');
            status = false;
    }else{
            resultado = valor1 / Valor2;
    }

    } else {
        console.log('ERRO: A sua escolha de operação matemática foi invalida');
        //finaliza o call back do objeto de entrada de dados (Sai do programa)
        status = false;

    } 

    switch(operacao)
    {
        case 'SOMAR':
            resultado = SOMAR(valor1, Valor2);
            break;
        case 'SUBTRAIR':
            resultado = SUBTRAIR(valor1, Valor2);
            break;
        case 'MULTIPLICAR':
            resultado = MULTIPLICAR(valor1, Valor2);
            break;
        case 'DIVIDIR':
            if (Valor2 == 0){
                console.log('ERRO: Não é possível realizar a divisão por 0');
                status = false;
        }else{
                resultado = DIVIDIR(valor1, Valor2);
               
         }  break;
         default:
             console.log('ERRO: A sua escolha de operação matemática foi invalida');
             status = false;
        
    
         
    }

    //Validação para tratar quando a variável resultado não for processada por algum problema
    if (resultado == undefined && status == false)
        return false;
    else
        return resultado;


}

// Forma 3 de criar uma função (modelo chamado de arrow Function)
const SOMAR =       (valor1, Valor2) => valor1 + Valor2;
const SUBTRAIR =    (valor1, Valor2) => valor1 - Valor2;
const MULTIPLICAR = (valor1, Valor2) => valor1 * Valor2;
const DIVIDIR =     (valor1, Valor2) => valor1 / Valor2;

// Permite adicionar uma function no escopo global (public)
//As functions que não estiverem aqui no exports, serão tratadas apenas como escopi local(private)
module.exports = {
    calculadora
}