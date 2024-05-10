
// Parte 01
function hospedagem() {
    let valorDiaria = parseFloat(prompt(`Qual o valor padrão da diária? `));
    let quantidadeDias = parseInt(prompt(`Qual a quantidade de dias? `));

    if (valorDiaria > 0 && 0 < quantidadeDias <= 30) {
        let precoHospedagem = valorDiaria * quantidadeDias;
        alert(`O valor de ${quantidadeDias} de hospedagem é de ${precoHospedagem}`);
    } else {
        alert(`Valores inválidos!`)
    }
}
