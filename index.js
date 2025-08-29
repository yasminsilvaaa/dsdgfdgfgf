const prompt = require('prompt-sync')();
const Usuario = require('./class/Usuario');

const usuarios = [];
let continuar = true; 

while (continuar) {
  console.log("\n=== Bem-vindo  ===");
  
  const nome = prompt("Digite seu nome: ");
  const idade = Number(prompt("Digite sua idade: "));
  const email = prompt("Digite seu email: ");
  
  const usuario = new Usuario(nome, idade, email);
  
 
  let ativo = prompt("Usuário ativo? [S/N]: ");
  while (ativo.toUpperCase() !== 'S' && ativo.toUpperCase() !== 'N') {
    ativo = prompt("Digite só S para sim ou N para não: ");
  }
  ativo.toUpperCase() == 'S' ? usuario.ativo = true : usuario.ativo = false
  
  usuarios.push(usuario);
 
  let resposta = prompt("Deseja adicionar outro usuário? [S/N]: ");
  while (resposta.toUpperCase() !== 'S' && resposta.toUpperCase() !== 'N') {
    resposta = prompt("Digite só S para sim ou N para não: ");
  }
  
  if (resposta.toUpperCase() === 'N') {
    continuar = false; 
  }
}

console.log("\nCadastro finalizado!");
Usuario.contarUsuarios(); 


usuarios.forEach((u, i) => {
    u.mostrarDados()
    if(usuarios.length - 1 == i) {
        Usuario.contarUsuarios()
    }
});
