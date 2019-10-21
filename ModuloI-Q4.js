const fisica = {
    nome: 'Física',
    alunos: ['Iago', 'João'],
    localização: {
        bloco: 3,
        sala: 4
    }
}

var {localização: {sala}} = fisica
console.log(sala)
console.log(typeof sala)