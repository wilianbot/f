let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

let numberString = String(telefone); 

console.log(typeof(numberString));

let telefone2 = 12341234;
console.log("O telefone é " + telefone2.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.