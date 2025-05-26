let original = []; // Criamos dois vetores, um para os números digitados e outro para armazenar os números só que sem os duplicados.
let semDuplicados = [];

for (let i = 0; i < 10; i++) { // Pedimos 10 números ao usuário
    let numero = parseInt(prompt("Digite um número (" + (i + 1) + "|10): "));
    original[i] = numero;

    if (isNaN(numero)) { //Não permitirá o usuária digitar outra coisa diferente de um número
        alert("Número inválido. Digite um número, por favor.");} 
}

let k = 0; //A Variável k controla o índice do vetor semDuplicados
for (let i = 0; i < 10; i++) { // Vamos percorrer o vetor original

    let duplicado = false;
    for (let j = 0; j < k; j++) {  //Verificamos se o número já existe no vetor semDuplicados

        if (original[i] === semDuplicados[j]) {
            duplicado = true; // Se acharmos igual, é duplicado
        }
    }
    if (!duplicado) { // Se não for duplicado, adicionamos ao vetor semDuplicados

        semDuplicados[k] = original[i];
        k++; // Aumentamos o índice para o próximo valor único
    }
}

alert (`Os números que você escolheu foram: ${original}`);
alert (`Agora os número que você escolheu só que sem os duplicados: ${semDuplicados}`);

