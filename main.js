const all_counters = document.querySelectorAll(".counter")
all_counters.forEach(counter => {
    counter.addEventListener('click', () => {
        let currentCount = parseInt(counter.innerHTML);
        if (currentCount > 0) {
            currentCount--;
            counter.innerHTML = currentCount;
            if (currentCount === 0) {
                counter.classList.add('finish');
            }
        }
    })
})

const searchBar=document.getElementById("search");
searchBar=addEventListener("keyup" , e =>{
    let currentValue= e.target.value
    // console.log(currentValue)
    let titles=document.querySelectorAll("h5.card-title")
    titles.forEach(title => {
        if(title.textContent.includes(currentValue)){
            title.parentNode.parentNode.style.display="";

        }else{
            title.parentNode.parentNode.style.display="none"

        }
    })
});



