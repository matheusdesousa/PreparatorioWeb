const fisica = {
    nome: 'Física',
    alunos: ['Iago', 'João'],
    localização: {
        bloco: 3,
        sala: 4
    }
}

let {localização: {sala}} = fisica
console.log(sala)