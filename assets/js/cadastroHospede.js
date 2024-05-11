let hospedes = [];


const loginUserForm = document.getElementById("form");
loginUserForm.addEventListener("submit", e => {
  e.preventDefault();

  hospedes.push(
    {
      diaria: Number(document.querySelector("#diarHos").value),
      nome: Number(document.querySelector("#nomeHos").value),
      idade: Number(document.querySelector("#idadeHos").value)
    }
  )

  document.querySelector("#nomeHos").value = "";
  document.querySelector("#idadeHos").value = "";
});

const pare = document.querySelector(".parar");

pare.addEventListener("click", event => {
  let informacoes = {
    quantidadeDeMeias:0,
    quantidadeDeGratuitas:0,
    quantidadeDeInteiras: 0
  }
  for(let pessoa of hospedes) {
    if(verificarIdade(pessoa.idade) == "gratuita") {
      informacoes.quantidadeDeGratuitas += 1;
    } else if (verificarIdade(pessoa.idade) == "meia"){
      informacoes.quantidadeDeMeias += 1;
    } else {
      informacoes.quantidadeDeInteiras += 1
    }
  }
  alert(`A quantidade de pessoa que vão pagar meia é de ${informacoes.quantidadeDeMeias} pessoa(s), o total a ser pago é de R$ ${hospedes[0].diaria * informacoes.quantidadeDeMeias / 2}`);
  alert(`A quantidade de pessoa que não vão pagar é de ${informacoes.quantidadeDeGratuitas}.`);
  alert(`A quantidade de pessoa que vão pagar inteira é de ${informacoes.quantidadeDeInteiras}, o total a ser pago é de R$ ${hospedes[0].diaria * informacoes.quantidadeDeInteiras}`);
  // Colocar um total
})

function verificarIdade(idade){
  if(idade < 6) { // gratuintes
    return "gratuita"
  } else if (idade >= 60) { // meia
    return "meia"
  } else { // normal
    return "inteira"
  }
}