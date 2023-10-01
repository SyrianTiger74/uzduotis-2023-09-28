let num = 5

let numbersWrapper = document.querySelector('#numbers')

let numberDisplay = document.createElement('h3')
let plusButton = document.createElement('button')
let minusButton = document.createElement('button')
let plus2Button = document.createElement('button')
let minus2Button = document.createElement('button')
let plus3Button = document.createElement('button')
let minus3Button = document.createElement('button')
let plus5Button = document.createElement('button')
let minus5Button = document.createElement('button')
let resetButton = document.createElement('button')
let input = document.createElement('input')
let grades = document.createElement('h4')
let gradesList = document.createElement('ul')
let addGrade = document.createElement('button')



numberDisplay.textContent = num
plusButton.textContent = '+'
minusButton.textContent = '-'
plus2Button.textContent = '+2'
minus2Button.textContent = '-2'
plus3Button.textContent = '+3'
minus3Button.textContent = '-3'
plus5Button.textContent = '+5'
minus5Button.textContent = '-5'
resetButton.textContent = 'Reset'
input.value = num
input.type = 'number'
grades.textContent = 'Grades:'
addGrade.textContent = 'Add Grade'




numbersWrapper.append(
    input,
    numberDisplay,
    minus5Button,
    minus3Button,
    minus2Button,
    minusButton,
    resetButton,
    plusButton,
    plus2Button,
    plus3Button,
    plus5Button,
    addGrade,
    grades,
    gradesList)

function inputColor(num) {
    if (num >= 5) {
        numberDisplay.style.color = 'green'
    } else {
        numberDisplay.style.color = 'red'
    }
}

function buttonsEnable(num) {
    if (num >= 9) {
        plusButton.setAttribute('disabled', true)
    }

    if (num >= 8) {
        plus2Button.setAttribute('disabled', true)
    }

    if (num >= 7) {
        plus3Button.setAttribute('disabled', true)
    }

    if (num >= 5) {
        plus5Button.setAttribute('disabled', true)
    }

    if (num > 5) {
        minus5Button.removeAttribute('disabled')
    }

    if (num > 3) {
        minus3Button.removeAttribute('disabled')
    }

    if (num > 2) {
        minus2Button.removeAttribute('disabled')
    }

    if (num > 1) {
        minusButton.removeAttribute('disabled')
    }

    if (num <= 2) {
        minusButton.setAttribute('disabled', true)
    }

    if (num <= 3) {
        minus2Button.setAttribute('disabled', true)
    }

    if (num <= 4) {
        minus3Button.setAttribute('disabled', true)
    }

    if (num <= 5) {
        minus5Button.setAttribute('disabled', true)
    }

    if (num < 5) {
        plus5Button.removeAttribute('disabled')
    }

    if (num < 8) {
        plus3Button.removeAttribute('disabled')
    }

    if (num < 9) {
        plus2Button.removeAttribute('disabled')
    }

    if (num < 10) {
        plusButton.removeAttribute('disabled')
    }
}

function numToInput () {
    input.value = num
}

function inputRead () {
    numberDisplay.textContent = Number(input.value)
    num = Number(input.value)
}

inputColor(num)
buttonsEnable(num)


input.addEventListener('input', function () {
    inputRead()
    inputColor(num)
    buttonsEnable(num)
})

minus5Button.addEventListener('click', function () {
    num = num - 5
    numberDisplay.textContent = num

    buttonsEnable(num)
    inputColor(num)
    numToInput ()

})

minus3Button.addEventListener('click', function () {
    num = num - 3
    numberDisplay.textContent = num

    buttonsEnable(num)
    inputColor(num)
    numToInput ()

})

minus2Button.addEventListener('click', function () {
    num = num - 2
    numberDisplay.textContent = num

    buttonsEnable(num)
    inputColor(num)
    numToInput ()

})

minusButton.addEventListener('click', function () {
    num--
    numberDisplay.textContent = num

    buttonsEnable(num)
    inputColor(num)
    numToInput ()

})

resetButton.addEventListener('click', function () {
    num = 5
    numberDisplay.textContent = num
    numToInput ()

})

plusButton.addEventListener('click', function () {
    num++
    numberDisplay.textContent = num

    buttonsEnable(num)
    inputColor(num)
   
    numToInput ()

})



plus2Button.addEventListener('click', function () {
    num = num + 2
    numberDisplay.textContent = num

    buttonsEnable(num)
    inputColor(num)
    numToInput ()

})



plus3Button.addEventListener('click', function () {
    num = num + 3
    numberDisplay.textContent = num

    buttonsEnable(num)
    inputColor(num)
    numToInput ()

})

plus5Button.addEventListener('click', function () {
    num = num + 5
    numberDisplay.textContent = num

    buttonsEnable(num)
    inputColor(num)
    numToInput ()

})


addGrade.addEventListener('click', function () {
    let listedGrade = document.createElement('li')
    listedGrade.textContent = num
    if (num >= 5) {
        listedGrade.style.color = 'green'
    } else {
        listedGrade.style.color = 'red'
    }
    let deleteButton = document.createElement('button')
    deleteButton.textContent = 'delete'
    deleteButton.addEventListener('click', function () {
        listedGrade.remove()
    })
    grades.append(listedGrade)
    listedGrade.append(deleteButton)

})