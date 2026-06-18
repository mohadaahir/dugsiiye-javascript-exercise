const head=document.querySelector('#head')
console.log(head);
const describtion=document.querySelector('.text')
console.log(describtion);
const name=document.querySelector("#name")
console.log(name);
const button=document.querySelector(".btn")
console.log(button);
const p=document.querySelector("#paragarph")
console.log(p);
function changeContent(){
    head.textContent='firts dom i can make'
}

function changeCont(){
            describtion.innerHTML = "This content has been <strong>updated</strong>.";
}