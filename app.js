//Passo 1 - Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno. 
//Passo 2 - Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. 

let curso = require('./curso');


function Aluno(nome, quantidadeFaltas, notas){
    this.nome = nome;
    this.quantidadeFaltas = quantidadeFaltas;
    this.notas = notas;
    this.faltas = function (){
        this.quantidadeFaltas += 1;
    }
    this.calcularMedia = function (){
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++){
            soma += this.notas[i];
        }
        return soma / this.notas.length; 
    }
}

let aluno1 = new Aluno("Washington", 7, [9, 10, 9]);
let aluno2 = new Aluno ("José", 2, [9, 8, 7]);
let aluno3 = new Aluno("João", 4, [5, 5, 5]);

curso.curso.novoEstudante(aluno1);
curso.curso.novoEstudante(aluno2);
curso.curso.novoEstudante(aluno3);

console.log(curso.curso.listaResultados())
