let numeros = []; // Criamos um vetor vazio para guardar os números digitados
quantidade = 10;

for (let i = 0; i < quantidade; i++) {
    let numero = parseInt(prompt("Digite um número inteiro (" + (i + 1) + "|10): ")); // Pedimos ao usuário para digitar 10 números
    numeros[i] = numero;

    if (isNaN(numero)) { //Não permitirá o usuária digitar outra coisa diferente de um número
        alert("Número inválido. Digite um número, por favor.");}
}

let busca = parseInt(prompt("Digite um número para verificar quantas vezes ele aparece: "));{}
let contador = 0; // Criamos uma variável para contar quantas vezes o número aparece


for (let i = 0; i < 10; i++) { // Vamos percorrer o vetor comparando cada número
    if (numeros[i] === busca) {
        contador++;   
    }
}

alert ("O número " + busca + " aparece " + contador + " vezes.");

