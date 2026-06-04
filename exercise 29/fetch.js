async function fetchData() {
  console.log("Start fetching data...");

  const response = await fetch('fetch.json');
  console.log(response);

  const data = await response.json(); // ← was missing ()
  console.log(data);
}

fetchData(); // 

 const FetchingDate=async () => {
    console.log("starting fechting");
    const festch=await fetch ('https://jsonplaceholder.typicode.com/photos/20')
    console.log(festch);
    const chng=await festch.json()
    
console.log(chng);

    
 }
 FetchingDate();