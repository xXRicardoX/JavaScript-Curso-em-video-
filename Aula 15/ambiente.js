let num = [5, 4, 3, 8, 9]
num.push(1)
num.sort()

console.log(`${num}`)
console.log( `O vetor tem ${num.length} posições`)
console.log( `O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(100)


if (pos == -1) {
    console.log(`Valor não encontrado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}

