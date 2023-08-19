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