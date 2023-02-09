/******************************************************
 * Objetivo: Correção da Calculadora com 4 operações matemáticas 
 * Autor: Dwovanna Santos
 * Data: 03/02/2023
 * Versão: 1.0
*****************************************************/

//Import da biblioteca da calculadora
var matematica = require('./modulo/calculadora.js');

//Import da biblioteca de entrada de dados
var readline = require('readline');
const { REFUSED } = require('dns');


// Cria um objeto para manipular as entradas de dados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Valor 1
entradaDados.question('Valor: \n', function(numero1){
    
    // replace - metodo da classe string que localiza um caracter e substitui por outro
    // APRENDER A UTILIZAR : replace, substring, upercase, lenght, lowercase, indexof, trim (comandos que usam bastante)
    let valor1 = numero1.replace(',', '.');
    

    //Valor 2
    entradaDados.question('Valor2: \n', function(numero2){

        let Valor2 = numero2.replace(',', '.');
        
        // Tipo de operação matemática
        entradaDados.question('Escolha uma operação matemática: [ SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR] \n',function(tipoCalculo){
            let operacao = tipoCalculo;

            let resultado;

            //Validação de entrada de dados vazio
            if(valor1 == '' || Valor2 == '' || operacao == ''){
                console.log('ERRO: Não é possivel calcular se algum dos dados estiver em branco');

            //typeof() - indentifica o tipo de dados de um elemento
            // O isNaN - identifica o tipo de conteúdo independente do tipo de dados
        
        //Validação de dados numericos
        }else if(isNaN(valor1) || isNaN(Valor2)){
            console.log('ERRO: Não é possivel calcular se os dados digitados não forem números')
        }else{
            //toUpperCase - converte uma string em MAIUSCULO
            //toLowerCase - converte uma string em minusculo

            resultado = matematica.calculadora(valor1, Valor2, operacao);
            if(resultado == false && typeof(resultado) == 'boolean')
            entradaDados.close();

            else
            
            console.log(resultado);

        
        }

            
        });
    });
});