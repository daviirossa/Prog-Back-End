// --- ENTRADA DE DADOS ---
const veiculo = "Moto"; // Testar com: "Carro", "Moto", "Caminhão"
const eixos = 4;            // Quantidade de rodas/eixos
const temTag = false;       // Simulação de pagamento automático

// --- PROCESSAMENTO (A Lógica do Back-End) ---
let valorBase = 0;

// 1. Definindo o valor por tipo de veículo
if (veiculo === "Carro") {
    valorBase = 10;
} else if (veiculo === "Moto") {
    valorBase = 5;
} else if (veiculo === "Caminhão") {
    valorBase = 10 * eixos; // Caminhão paga por eixo!
}

// 2. Aplicando desconto com Operador Lógico (&&)
// Regra: Só ganha desconto se for Carro E tiver Tag.
let valorFinal = valorBase;


if (veiculo === "Carro" && temTag === true) {
    valorFinal = valorBase * 0.95; // 5% de desconto
    console.log(">> Desconto de categoria aplicado!");
}

else if (veiculo === "Carro" && temTag === false) {
    valorFinal = valorBase;
    console.log(">> Desconto de categoria aplicado!");
}

else if (veiculo === "Moto" ) {
    valorFinal = valorBase * 0.90;
}

// --- SAÍDA DE DADOS ---
console.log("-----------------------------------------");
console.log(`VEÍCULO: ${veiculo} (${eixos} eixos)`);
console.log(`VALOR ORIGINAL: R$ ${valorBase.toFixed(2)}`);
console.log(`VALOR COM DESCONTO: R$ ${valorFinal.toFixed(2)}`);
console.log("-----------------------------------------");
