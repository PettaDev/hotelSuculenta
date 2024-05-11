
let valorD = "";
let quantD;

const loginUserForm = document.getElementById("form");
loginUserForm.addEventListener("submit", e => {
  e.preventDefault();
  

  valorD = document.getElementById("valorD").value;
  quantD = document.getElementById("quantD").value; // Obtem o valor da quantD do campo de entrada



  if (valorD > 0 && 1 < quantD < 30) { // Verifica se a quantD inserida é igual à quantD válida
    let calc = valorD * quantD;
    alert(`O valor de ${quantD} dias de hospedagem é de ${calc}`);
  } else {
    alert("Usuário, informe valores corretos !");
  }

});