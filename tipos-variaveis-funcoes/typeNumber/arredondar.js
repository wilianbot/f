function ganhoPorHora(salario, horasTrabalhadasNoMes) {
    const salarioHora = (salario / horasTrabalhadasNoMes);

    return Math.round(salarioHora);
}


resultado = ganhoPorHora(3000, 176);

console.log(resultado);