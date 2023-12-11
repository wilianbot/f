var lista = [10, 7, 3, 5, 1, 2, 5];

function comparaNumeros(a,b) { if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; }

console.log(lista.sort(comparaNumeros));
