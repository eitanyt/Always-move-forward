class SearchBox {
    constructor(el) {
        el.innerHTML = `
        <input type="text">
        <ul class="options"></ul>`
        this.input = el.querySelector('input')
        this.options = el.querySelector('.options')
        this.recentSearches = []
        this.appropriateSearches
        this.input.addEventListener('input', (ev) => {
            this.options.innerHTML = '';
            let search = ev.target.value
            if (search.length > 0) {
                this.whatAreTheOptions(search)
                this.showOptions()
            }
        })
        this.input.addEventListener('keydown', (ev) => {
            if (ev.key === 'Enter') {
                this.recentSearches.push(this.input.value)
            }
        })
    }
    pushInArr(str) {
        this.recentSearches.push(str)
    }
    whatAreTheOptions(str) {
        this.appropriateSearches = this.recentSearches.filter((element) => { return element.includes(str) })
    }
    showOptions() {
        for (let i = 0; i < this.appropriateSearches.length; i++) {
            const option = this.appropriateSearches[i];
            const li = document.createElement('li')
            li.textContent = option
            li.className = 'option'
            this.options.appendChild(li)
        }
    }
}

const parents = [] //save here ahows of searchBox

const container = document.createElement('div')
document.body.appendChild(container)
container.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') {
        saveToLocalStorage()
    }
})
// create 5 shows of searchBox 
for (let i = 0; i < 5; i++) {
    parent = document.createElement('div')
    parent.className = `e${i}`
    container.appendChild(parent)
    parents[i] = new SearchBox(parent)
}

function saveToLocalStorage() {
    const data = []
    for (const i of parents) {
        data.push(i.recentSearches)
    }
    localStorage.setItem(`searchBox`, JSON.stringify(data))
}

function getDataFromLocalStorage() {
    if (localStorage['searchBox']) {
        const data = JSON.parse(localStorage['searchBox'])
        for (let i = 0; i < data.length; i++) {
            parents[i].recentSearches = data[i];
        }
    }
}
getDataFromLocalStorage()