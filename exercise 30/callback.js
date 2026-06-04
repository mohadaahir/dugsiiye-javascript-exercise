function operate(a,b,callback){
    return callback(a,b)
}
function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

function mult(a,b){
    return a*b
}

function div(a,b){
    return a/b
}
console.log(operate(6,8,add));
console.log(operate(6,8,sub));
console.log(operate(6,8,mult));
console.log(operate(6,8,div));
