alert(`Hello World!`)

let number1 = 3
let number2 = 7
let sum = Number(number1) + Number(number2)
alert(`A soma de ${number1} e ${number2} é ${sum}`)

let isNumber = 6
if (typeof isNumber === "number") {
  alert(`${isNumber} é um número`)
} else {
  alert(`${isNumber} não é um número`)
}

let isString = "estrela"
if (typeof isString === "string") {
  alert(`${isString} é uma string`)
} else {
  alert(`${isString} não é uma string`)
}

let isNotBoolean = 5
if (typeof isNotBoolean === "boolean") {
  alert(`${isNotBoolean} é um booleano`)
} else {
  alert(`${isNotBoolean} não é um booleano`)
}

let number3 = 9
let number4 = 8
let sub = Number(number3) - Number(number4)
alert(`A subtração de ${number3} por ${number4} é ${sub}`)

let number5 = 1
let number6 = 0
let mult = Number(number5) * Number(number6)
alert(`A multiplicação de ${number5} por ${number6} é ${mult}`)

let number7 = 3
let number8 = 3
let div = Number(number7) / Number(number8)
alert(`A divisão de ${number7} por ${number8} é ${div}`)

let isPar = 4
if (isPar % 2 == 0)/*se na divisão de -4- por 2, o resto da divisão ser 0*/ {
  alert(`${isPar} é um número par`)
} else {
  alert(`${isPar} não é um número par`)
}

let isNotImpar = 8
if (isNotImpar % 2 != 0) {
  alert(`${isNotImpar} é um número ímpar`)
} else {
  alert(`${isNotImpar} não é um número ímpar`)
}