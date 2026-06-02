let number=[1,2,3,4]
let allNumber=[...number,6,7,8,9,10]
console.log(allNumber);


function multi(...numb){
    return numb.reduce((total,numbers)=>total*numbers,0)
};
console.log(multi(66,2));
console.log(multi(6,2));
