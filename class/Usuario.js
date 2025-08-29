class Usuario {
        static totalUsuarios = 0;
    #ativo
    constructor(nome, idade, email) {
        this.#ativo = false
        this.nome = nome
        this.idade = idade
        this.email = email
        Usuario.totalUsuarios++
    }

    get ativo() {
        return this.#ativo
    }

    set ativo(value) {
        this.#ativo = value

    }
    get boasVindas() {
        return `Bem-vindo, ${this.nome}!`;
    }

    mostrarDados() {
        console.log('----------');
        console.log(this.boasVindas)
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Email: ${this.email}`);
        console.log(`Ativo: ${this.ativo}`);
        console.log('--------');
    }

    static contarUsuarios() {
        console.log(`Total de usuários criados: ${Usuario.totalUsuarios}`);
    }
}

module.exports = Usuario;