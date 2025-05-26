let numeros = []; // Criamos um vetor vazio para guardar os números digitados
let quantidade = 10; ; 
let numero = 0;
soma = 0; // Variável para armazenar a soma dos números pares


for (let i = 0; i < quantidade; i++) { //Repetimos 10 vezes para pedir os 10 números

    numero = parseInt(prompt(`Digite o número ${i + 1}:`)); //Usamos prompt para pedir ao usuário um número inteiro

    if (isNaN(numero)) { //Não permitirá o usuária digitar outra coisa diferente de um número
        alert("Número inválido. Digite um número, por favor.");

    } if (numero % 2 == 0) { //Verificamos se o número é par (divisível por 2)
        numeros[i] = numero
        soma += numero // Se for par, somamos na variável soma
    }
}
alert(`A soma dos números pares é de: ${soma}`)

