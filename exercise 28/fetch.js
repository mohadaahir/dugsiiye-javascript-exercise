
// function FetchingDate(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const success=false
//             if(success){
//                 resolve({id:12,name:"moha"})
//             }else{
//                 reject("failed to fetch")
//             }
//         },2000)

//     })
// }
// // FetchingDate()
// // .then(date=>console.log(date))
// // .then(error=>console.log(error))

// async function displayDate(){
//     try{
//          const user =await FetchingDate();
//     console.log(user)

//     }catch(error){
// console.log(error);

//     }
   
    
// };
// displayDate()




// const newpromise=new Promise((resolve,reject)=>{
//     const success=true
//     if(success){
//         resolve("got date")
//     }else{
//         reject("failed")
//     }
// });

// async function displayDate() {
//     try{
// const user=await newpromise;
// console.log(user);

//     }catch (error){
// console.log(error);

//     }
    
// }
// displayDate();


const car={
    name:"totoyo",
    id:2334,
    typ:"baradada",
    price:3488,

}
console.log(car);

// object to json
const newjson=JSON.stringify(car)
console.log(newjson);
// json to object
 const backobject=JSON.parse(newjson)
 console.log(backobject);
 


