function changebutton(){
    const hero=document.querySelector('#project')
    const main=document.querySelector('h3')
    const header=document.querySelector('h4')

    main.textContent=' I am full-stack development'
    header.innerHTML='<h1>welcome dom project<h/1>'
    main.style.color='blue'
    main.style.background='red'

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
    
}
  
function remove(){
        const list=document.querySelector('#skills')
if(list.lastChild){
list.removeChild(list.lastChild)
}
}