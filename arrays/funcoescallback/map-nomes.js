const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesUpercase = nomes.map((nome) => {
    return nome.toUpperCase();
});

nomesUpercase.push("Wilian Robal")

console.log(nomesUpercase);

const nomeAlura = "Alura";
let nomeMaisculas = "";

for (let i = 0; i < nomeAlura.length; i++) {
    nomeMaisculas += nomeAlura[i].toUpperCase();
}

console.log(nomeMaisculas);