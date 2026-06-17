function delayBlocking() {
   alert("Fetching user data..."); 
    return "Blocking delay completed!";
}

console.log("Start blocking delay...");
console.log(delayBlocking());
console.log("This message is blocked until the delay is complete.");
// function delayNonBlocking(callback) {
//     setTimeout(() => {
//         callback("Non-blocking delay completed!");
//     }, 2000);
// }

// console.log("Start non-blocking delay...");
// delayNonBlocking((message) => {
//     console.log(message);
// });
// console.log("This message is not blocked and runs immediately.");


// function FetchingDate(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const success=true;
//             if(success){
//                 resolve({id:12,name:"moha"})
//             }else{
//                 reject("failed fatching")
//             }
//         },200);
//     });
// };
// FetchingDate()
// .then((data)=>(data))
// .catch((error)=>(error))
// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true; // Simulating success or failure
//             if (success) {
//                 resolve({ id: 1, name: "John Doe" });
//             } else {
//                 reject("Failed to fetch user data");
//             }
//         }, 3000);
//     });
// }

// fetchUserData()
//     .then(data => console.log("User Data:", data))
//     .catch(error => console.error("Error:", error));

