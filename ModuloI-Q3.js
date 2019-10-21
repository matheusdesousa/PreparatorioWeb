const array = [5, 6, 10, 4, 3, 7, 1]
let mediaAritmetica = array.reduce((valorTotal, valorAtual) => valorTotal + valorAtual) / array.length 
console.log(`Média Aritmética dos valores do Array: ${mediaAritmetica}`) // 5.142857142857143

let valoresMaximos = array.filter((valor) => valor > mediaAritmetica)
console.log(valoresMaximos) // [6, 10, 7]