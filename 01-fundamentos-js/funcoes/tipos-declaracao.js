/**
 * TEMA: Declaração de Funções e Organização de Código
 * CONCEITOS: Hoisting, Arrow Functions, Escopo de Bloco vs Função
 * * OBJETIVO:
 * Demonstrar a aplicação prática dos diferentes tipos de declaração:
 * 1. Function Declaration: Usada para a estrutura global (aproveitando o Hoisting para legibilidade).
 * 2. Arrow Function (Const): Usada para encapsular regras de negócio (proteção de escopo).
 */

// --- 1. CAMADA DE EXECUÇÃO (EntryPoint) ---
// O Hoisting permite chamar a função principal antes de sua definição.
// Isso mantém o topo do arquivo limpo, focando no "O QUE" o código faz.
console.log(">> Iniciando checkout do E-commerce...");
processarCheckout("Monitor 4K", 2500);


// --- 2. CAMADA DE LÓGICA (Core) ---

function processarCheckout(produto, valorBruto) {
    // Escopo da Função Principal
    
    // [Arrow Function] - Encapsulamento de Lógica
    // Definida como 'const' para garantir que esta regra de negócio 
    // exista APENAS dentro deste escopo e não possa ser acessada globalmente.
    const calcularDesconto = (valor) => {
        const taxaDesconto = 0.10; // 10%
        return valor * taxaDesconto;
    };

    const desconto = calcularDesconto(valorBruto);
    const total = valorBruto - desconto;

    console.log(`\n[PEDIDO] ${produto}`);
    console.log(`- Valor: R$ ${valorBruto}`);
    console.log(`- Desconto: R$ ${desconto}`);
    console.log(`= Total: R$ ${total}`);

    // Chamada para utilitário global
    enviarConfirmacao();
}

// --- 3. CAMADA UTILITÁRIA (Helpers) ---

function enviarConfirmacao() {
    console.log("\n[SISTEMA] Email de confirmação enviado. ");
}