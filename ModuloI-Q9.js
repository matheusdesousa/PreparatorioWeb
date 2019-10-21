const joao = {
    nome: 'João',
    saudacao(){
        console.log(`Olá ${this.nome}`)
    }
}

const maria = {
    nome: 'Maria'
}

maria.saudacaoMaria =  joao.saudacao
console.log(maria.saudacaoMaria())
console.log(joao.nome)