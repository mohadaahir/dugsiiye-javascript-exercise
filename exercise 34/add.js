function additem(){
    const add=document.querySelector('ul')
    console.log(add);
    
    const crtelement=document.createElement('li')
    crtelement.textContent='mongdb'
    add.appendChild(crtelement)

}
function changeImage(){

    const img=document.querySelector("#image")
   console.log(img);
   img.setAttribute("width","200")
const pararagph=document.querySelector("p")
pararagph.style.color="blue"

}
function removeitem(){
        const remove=document.querySelector('ul')
        remove.removeChild(remove.lastChild)

}