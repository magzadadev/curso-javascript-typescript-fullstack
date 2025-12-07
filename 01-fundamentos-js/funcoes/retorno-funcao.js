/**
 * ESTUDO: Closures e Retorno de Funções
 * * Conceito: Criando uma "Factory Function" (Fábrica) que gera novas funções
 * com base em parâmetros pré-definidos (memória/closure).
 */

// --- ENUNCIADO DO EXERCÍCIO ---
// 1. Crie uma função chamada criaDesconto.
// 2. Ela deve receber um parâmetro: desconto (ex: 0.10).
// 3. Ela deve retornar uma função anônima que recebe 'preco' e calcula o final.

function criaDesconto(desconto) {
    // Escopo da função externa (Factory)

    return function (preco) {
        // A função interna tem acesso ao 'preco' (dela mesma)
        // E ao 'desconto' (da memória/closure da externa)
        return preco - (preco * desconto);
    };
}

// TESTES PRÁTICOS

// Criando uma ferramenta para desconto de 10%
const aplicaDesconto10 = criaDesconto(0.10);

// Criando uma ferramenta para desconto de 50%
const aplicaDesconto50 = criaDesconto(0.50);

console.log("--- Teste de Descontos ---");

// Produto de R$ 100 com 10% de desconto
console.log(`Preço Original: 100 | Com 10% off: ${aplicaDesconto10(100)}`); 
// Resultado esperado: 90

// Produto de R$ 50 com 50% de desconto
console.log(`Preço Original: 50  | Com 50% off: ${aplicaDesconto50(50)}`);  
// Resultado esperado: 25