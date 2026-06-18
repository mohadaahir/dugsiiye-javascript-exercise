function changebutton(){
    const hero=document.querySelector('#project')
    const main=document.querySelector('h3')

    main.textContent=' I am full-stack development'
}
function contect(){
    const text=document.querySelector('.web')
console.log(text)
    text.textContent='just click'

}
function additem(){
    const list=document.querySelector('#skills')
    const newtlist=document.createElement('li')
newtlist.textContent='php'
    list.appendChild(newtlist)
    list
    
}
  
function remove(){
        const list=document.querySelector('#skills')
if(list.lastChild){
list.removeChild(list.lastChild)
}
}