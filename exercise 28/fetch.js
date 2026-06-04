
function FetchingDate(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const success=false
            if(success){
                resolve({id:12,name:"moha"})
            }else{
                reject("failed to fetch")
            }
        },2000)

    })
}
// FetchingDate()
// .then(date=>console.log(date))
// .then(error=>console.log(error))

async function displayDate(){
    try{
         const user =await FetchingDate();
    console.log(user)

    }catch(error){
console.log(error);

    }
   
    
};
displayDate()
