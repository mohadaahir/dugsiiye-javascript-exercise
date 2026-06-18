function additem(){
    const add=document.querySelector('ul')
    const crtelement=document.createElement('li')
    crtelement.textContent='mongdb'
    add.appendChild(crtelement)

}
function removeitem(){
        const remove=document.querySelector('ul')
        remove.removeChild(remove.lastChild)

}