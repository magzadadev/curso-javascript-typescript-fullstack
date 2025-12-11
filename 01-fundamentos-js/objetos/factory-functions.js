/**
 * TEMA: Factory Functions (Funções Fábrica)
 * CONCEITOS: Métodos, 'this', Getters e Setters
 * * DESCRIÇÃO:
 * Factory Function é um padrão de projeto que retorna um novo objeto.
 * Diferente de classes ou construtores, ela não exige a palavra-chave 'new'.
 * Aqui, utilizamos 'this' para referenciar a própria instância e Getters/Setters
 * para encapsular a lógica de propriedades computadas (como IMC e Nome Completo).
 */

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        // Atributos diretos
        nome,
        sobrenome,
        altura,
        peso,

        // Método simples (Sintaxe ES6)
        fala(assunto = 'nada') {
            return `${this.nome} está falando sobre ${assunto}.`;
        },

        // GETTER: Transforma o método em um "pseudo-atributo"
        // Alguém "lê" o imc, mas por trás estamos executando uma função
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },

        // GETTER: Lê o nome completo
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // SETTER: Intercepta a atribuição de valor
        // Permite logica de validação ou transformação antes de salvar
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        }
    };
}

// --- INSTANCIAÇÃO E TESTES ---

// Criando o objeto p1
const p1 = criaPessoa('Luiz', 'Otávio', 1.80, 80);

// Testando Métodos
console.log(p1.fala('JS')); // Luiz está falando sobre JS.

// Testando Getter (Note que não usamos parênteses no imc)
console.log(`IMC de ${p1.nome}: ${p1.imc}`); // IMC de Luiz: 24.69

// Testando Setter
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala('Front-end'));