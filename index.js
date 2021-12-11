//Passo 3 - Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).
//Passo 4 - Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
//Passo 5 - Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.
//Passo 6 - Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não.


module.exports = {
    curso: {
        nomeCurso: "Curso CTD",
        notaAprovacao: 7,
        faltasMaximas: 8,
        listaEstudantes: [],
        novoEstudante: function (estudante){
            this.listaEstudantes.push(estudante);
        },
        conclusaoCurso: function (aluno) {
            let media = aluno.calcularMedia();
            let resultado; 
            if (aluno.quantidadeFaltas < this.faltasMaximas && media >= this.notaAprovacao){
                resultado = true;        
            } else if (aluno.quantidadeFaltas === this.faltasMaximas && media > (this.notaAprovacao * 1.1)){             
                resultado = true;
            } else {
                resultado = false;
            }

            return resultado;
        },
        listaResultados: function () {
            let resposta = [];
            for (let i = 0; i < this.listaEstudantes.length; i++){
                resposta.push(this.conclusaoCurso(this.listaEstudantes[i]));
            }
            return resposta            
        }
    }
}
