//get number class
const numbers = document.querySelectorAll('.number')

numbers.forEach((number) => {
    number.addEventListener("click", (event)=> {
        inputNumber(event.target.value) //untuk menampilkan angka pada screen
        updateScreen(currentNumber)//get input number
    })
})


//untuk menampilkan angka pada screen
const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number)=> {
    calculatorScreen.value = number
}

//get input number
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number)=>{
    if(currentNumber === '0'){
        currentNumber = number
    } else {
        currentNumber += number
    }
}

//get operator class
const operators = document.querySelectorAll('.operator')

operators.forEach((operator)=> {
    operator.addEventListener("click", (event)=> {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator)=> {
    if(calculationOperator === ''){
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', ()=> {
    calculate()
    updateScreen(currentNumber)
})

const calculate = ()=> {
    let result = ''
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber) //parseInt utk mengubah string jd int
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber) //parseFloat utk mengubah string jd dec
            break
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case 'mod':
            result = parseFloat(prevNumber) % parseFloat(currentNumber)
            break
        case 'pow':
            result = Math.pow(parseFloat(prevNumber),parseFloat(currentNumber))
            break
        default:
        return
    }
    currentNumber = result
    calculationOperator = ''
}

const clearBtn = document.querySelector('.all-clear')

const clearAll = ()=> {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

clearBtn.addEventListener('click', ()=> {
    clearAll()
    updateScreen(currentNumber)
})

const decimal = document.querySelector('.decimal')

inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}

decimal.addEventListener('click', (event)=> {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

const percent = document.querySelector('.percentage')

const percenta = ()=> {
    currentNumber = currentNumber/100
}

percent.addEventListener('click', ()=> {
    percenta()
    updateScreen(currentNumber)
})

const sqrts = document.querySelector('.sqrt')

const sq = ()=> {
    currentNumber = Math.sqrt(currentNumber)
}

sqrts.addEventListener('click', ()=> {
    sq()
    updateScreen(currentNumber)
})

const exponential = document.querySelector('.pow2')

const exp = ()=> {
    currentNumber = Math.pow(currentNumber,2)
}

exponential.addEventListener('click', ()=> {
    exp()
    updateScreen(currentNumber)
})