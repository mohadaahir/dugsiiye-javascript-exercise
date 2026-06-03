
function FetchingDate(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const success=true
            if(success){
                resolve({id:12,name:"moha"})
            }else{
                reject("failed to fetch")
            }
        },2000)

    })
}
FetchingDate()
.then(date=>console.log(date))
.then(error=>console.log(error))
