let userName = "";
let senha;

const loginUserForm = document.getElementById("form");
loginUserForm.addEventListener("submit", e => {
  e.preventDefault();

  userName = document.getElementById("userName").value;
  senha = document.getElementById("senha").value; // Obtem o valor da senha do campo de entrada

  if (userName != "" && senha == "2678") { // Verifica se a senha inserida é igual à senha válida
    alert(`Seja Bem-Vindo ${userName}`);
    window.location.href = "entrada.html";
  } else {
    alert("Usuário, login ou senha incorreto !");
  }

});