/*fetch("https://jsonplaceholder.typicode.com/posts")
.then(resp=>resp.json())
.then(data=>console.log(data))*/

async function loadData(){
    

    try{
        const res=await fetch("https://jsonplaceholder.typicode.com/posts")
        const data=await res.json()
        console.log(data)
    }catch(error){
        console.log(error)
    }
}

loadData()