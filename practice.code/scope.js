let globalScope="iam globalScope"
function global(){
    console.log(globalScope)
}
global()
console.log(globalScope)

const local=function(){
    let localScope="i am localScope"
    console.log(localScope)
}
local()


 {
   //const and let is block scope 
   const myNme="mohamed"
   let age=90;
   console.log(age)
    var work="full-stack-development"

    function blockScope(){
        let localScope="iam local-Scope"
        console.log(localScope)
    }
}
blockScope()
// console.log(work)
