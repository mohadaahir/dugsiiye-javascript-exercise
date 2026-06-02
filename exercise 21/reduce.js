let number=[1,2,3,4,5,6,7,8,9,10];
const addnum=number.reduce((total,numb)=>total+numb,0)
console.log(addnum);
console.log("-----------------------------------------");

 let score=[40,50,60,70,80,90]
let passed=score.filter((result)=>result>=60);
console.log(passed);
let numbers=[1,2,3,4,5,6,7,8,9]
let evennumber=numbers.filter((even)=>even%2===0)
console.log(evennumber);  