let number=[1,2,3,4,5,6,7,8,9]
number.forEach(numb=>{
    console.log("the number is  "+numb);
})
//forEach with object
let peaple=[
    {name:"mohamed",age:23,city:"muqdisho"},
    {name:"cali",age:44,city:"bososo"},
    {name:"farax",age:23,city:"garoowe"},
];

// forEach with objects
peaple.forEach(person=>{
  for(key in person){
    console.log(key+  "  " +person[key])
  }
})