function ganhoPorHora(salario, horasTrabalhadasNoMes) {
    const salarioHora = (salario / horasTrabalhadasNoMes);

    const total = salarioHora.toFixed(2);

    return total;
}

console.log(ganhoPorHora(3000, 176));