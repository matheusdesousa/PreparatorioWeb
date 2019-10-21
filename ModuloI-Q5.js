const aluno = {
    nome:'Iago',
    notas: [
        {nome: 'Física', valor: 5},
        {nome: 'Estatística', valor: 4},
        {nome: 'Probabilidade', valor: 1}
    ]
}

function imprimirNota(nota) {
    console.log(nota); 
}


console.log(aluno.notas[0].valor)
console.log(aluno.notas[1].valor)
console.log(aluno.notas[2].valor)