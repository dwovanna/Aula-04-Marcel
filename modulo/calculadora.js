/******************************************************
 * Objetivo: Arquivo de funções para calculos matemáticos
 * Autor: Dwovanna Santos
 * Data: 03/02/2023
 * Versão: 1.0
*****************************************************/

//Função para realizar calculos matemáticos (SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR

function calculadora(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1);
    let Valor2 = Number(numero2);
    let operacao = tipoCalculo.toUpperCase();
    let resultado;

    if (operacao.toUpperCase() == 'SOMAR')

        resultado = valor1 + Valor2;
    else if (operacao.toUpperCase() == 'SUBTRAIR')

        resultado = valor1 - Valor2;
    else if (operacao.toUpperCase() == 'MULTIPLICAR')

        resultado = valor1 * Valor2;
    else if (operacao.toUpperCase() == 'DIVIDIR') {

        // Validação para tratar a divisão por 0
        if (Valor2 == 0)
            console.log('ERRO: Não é possível realizar a divisão por 0');
        else
            resultado = valor1 / Valor2;
    } else {
        console.log('ERRO: A sua escolha de operação matemática foi invalida');
        //finaliza o call back do objeto de entrada de dados (Sai do programa)
        entradaDados.close();

    }

    //Validação para tratar quando a variável resultado não for processada por algum problema
    if (resultado == undefined)
        return false;
    else
        return resultado;

}


// Permite adicionar uma function no escopo global (public)
//As functions que não estiverem aqui no exports, serão tratadas apenas como escopi local(private)
module.exports = {
    calculadora
}