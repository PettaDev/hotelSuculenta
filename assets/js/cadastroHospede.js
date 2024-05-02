
// Parte 01
function hospedagem() {
    let valorDiaria = parseFloat(prompt(`Qual o valor padrão da diária? `));
    let quantidadeDias = parseInt(prompt(`Qual a quantidade de dias? `));

    if (valorDiaria > 0 && 0 < quantidadeDias <= 30) {
        let precoHospedagem = valorDiaria * quantidadeDias;
        alert = (`O valor de ${quantidadeDias} de hospedagem é de ${precoHospedagem}`);
        cadastrar();

    } else {
        alert(`Valor inválido!`)
        hospedagem();
    }
}

function cadastrar() {
    let cadastrar = prompt("Iniciar cadastro de hospedes (S - Sim / N - Não): ");
    cadastrar = cadastrar.toLocaleUpperCase();

    if (cadastrar == "S"){
        let cadastros = prompt(`Cadastrar (1 - Cadastrar / 2 - sair)`);

        if (cadastros === "N") {
            return;
    }


        let hospedes = [];
        let idades = [];

        while (cadastrar !== 2 ) {
           let nome = prompt(`Qual o nome do Hospede? `);
           let idade = prompt(`Qual a idade do cliente? `);
           alert(`${nome} Cadastrado(a) com Sucesso`);

           hospedes.push(nome);
           idades.push(idade);

           cadastros = prompt(`1 - Cadastrar / 2 - sair`);

        }

        let valorTotal = 0;
        let gratuintes = 0;
        let meias = 0;
        let inteiras = 0;

        if (idades < 6) {
            alert(`${nome}, hóspede não paga a diária`);
            gratuintes++
        } else if (idades >= 60){
            alert(`${nome}, hóspede paga meia`)
            meias++
            valorTotal += valorDiaria/2;
        } else {
            alert(`${nome}, hóspede paga inteira`)
            inteiras++
            valorTotal += valorDiaria;
        }

            alert(`${hospedes} hóspedes cadastrados e ${gratuidades} gratuidades, e ${meias} meia. Com o valor total de ${valorTotal}`);
    }
}
