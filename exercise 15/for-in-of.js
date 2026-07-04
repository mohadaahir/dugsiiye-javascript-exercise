
let peaple=[
    {name:"mohamed",age:23,city:"muqdisho"},
    {name:"cali",age:44,city:"bososo"},
    {name:"farax",age:23,city:"garoowe"},
];
for(const person of peaple){
for(key in person){
    console.log(key +"  "+person[key]);
    
}
console.log("...........")
}

//for of
const fruits=["mango","banna","lemon","cherry" ,"orange","spice"]
for(const fruit of fruits){
    console.log(fruit);
}

// for in
const fruits1={
    mango:"yellow",
    banna:"yellow",
    lemon:"yellow", 
}
for(key in fruits1){
    console.log(key+""+fruits1[key]);
}