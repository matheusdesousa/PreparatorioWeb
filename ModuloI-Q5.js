const aluno = {
    nome:'Iago',
    notas: [
        {nome: 'Física', valor: 5},
        {nome: 'Estatística', valor: 4},
        {nome: 'Probabilidade', valor: 1}
    ]
}

const valores = aluno => aluno.valor
console.log(aluno.notas.map(valores))