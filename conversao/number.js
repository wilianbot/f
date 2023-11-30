// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da multiplicação

let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN

let usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.

usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.