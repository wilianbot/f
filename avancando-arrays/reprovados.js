const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((aluno, indice) => {
    return medias[indice] < 7;
})

console.log(reprovados);  


const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 9 || num2 > 9) {
        console.log("somente numeros de 1 a 9")
    } else {
        console.log(num1 + num2)
    }
}

somaNumerosPequenos(3,4);