// Criar uma Classe Livro

class Livro {
    constructor(nome, editora, paginas){
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }
    anunciarTitulo(){
        console.log(`Titulo: ${this.nome}`)
    }
    descreverTitulo(){
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas`)
    }
}

const NodeJS = new Livro("Primeiro passo com NodeJS", "Casa do Codigo", 195)
NodeJS.anunciarTitulo()
NodeJS.descreverTitulo()

const Java = new Livro("Fundamentos do Java", "Codificando", 250)
Java.anunciarTitulo()
Java.descreverTitulo()

// Herança

class LivroColecao extends Livro {
    constructor(nome, nomeColecao){
        super(nome)
        this.nomeColecao = nomeColecao
    }

    descreverColecao(){
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`)
    }
}

const LogicaDeProgramacao = new LivroColecao("Lógica de Programação", "Comece a Programar")
LogicaDeProgramacao.descreverColecao()


// Objeto

const Livro = {
    nome: "React Native",
    editora: "Casa do Código",
    paginas: 185,
    anunciar: function(){
        console.log("A Alura indica o livro" + this.nome + "!")
    }
}

Livro.anunciar()