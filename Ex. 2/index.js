let numeros = []; //Criamos um vetor vazio para guardar os números aleatórios
quantidade = 7;

for (let i = 0; i < quantidade; i++) { // Vamos gerar 7 números aleatórios

    let numero = Math.floor(Math.random() * 100); // Geramos um número aleatório entre 0 e 99
    numeros[i] = numero; // Guardamos esse número no vetor
}
console.log("Números gerados:");
for (let i = 0; i < 7; i++) {
    console.log (numeros[i]);
}

