async function show() {
    const res=await fetch("https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json")
    const data= await res.json()
    for(let i=0;i<data.length;i++){
        console.log(data)

       show() 
    }

}