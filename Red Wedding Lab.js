const starksdiv = document.querySelector('.starks')

function addChild(){
    const starkChild = document.createElement('div')
    starkChild.className = 'child'
    starkChild.textContent = 'Child'
    starksdiv.appendChild(starkChild)
}

function redWedding(){
    const starkChildren = document.querySelectorAll('.child')
    starkChildren.forEach(child => child.remove())
}

const addButton = document.getElementById('add-child')
addButton.addEventListener('click', addChild)

const subButton = document.getElementById('red-wedding')
subButton.addEventListener('click', redWedding)