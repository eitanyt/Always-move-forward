const container = document.querySelector('.container')
const contr = document.querySelector('.cont')
const buttons = document.querySelectorAll('button')

let cont = 0

function ChangeRed() {
    for (const button of buttons) {
        button.className = 'blue'
    }
    let index = Math.floor(Math.random() * buttons.length)
    buttons[index].className = 'red'
}

function ChangeCount(coins) {
cont += coins
contr.textContent = `You collected a ` + cont + ` coins!`
}

container.addEventListener('click', (ev) => {
    if (ev.target.className === 'red') { ChangeCount(5) }
    else { ChangeCount(-5) }
    ChangeRed()
})

timer = setInterval(ChangeRed, 1200)
