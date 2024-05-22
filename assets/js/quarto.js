
let nome = "";
let quarto;

const loginUserForm = document.getElementById("form");
loginUserForm.addEventListener("submit", e => {
  e.preventDefault();
  

  nome = document.getElementById("nome").value;
  quarto = document.getElementById("quarto").value;

  if (nome != "" && quarto <= 20) { 
    alert(`O quarto ${quarto} foi reservado para ${nome}!`);

    
  } else {
    alert("Usuário, informe valores corretos !");
  }

});