const alunos = [
  "Wilian",
  "Gustavo",
  "Vinicius",
  "Marcelo",
  "Joao",
  "Fernando",
  "Caio",
  "Ana",
  "Andressa",
  "Renan",
  "Luffy",
  "Zoro",
  "Sanji",
  "Naruto",
];

const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2);

console.log(sala1);
console.log(sala2);