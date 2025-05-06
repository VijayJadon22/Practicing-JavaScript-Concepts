
const btn = document.querySelector(".btn");
const search = document.querySelector(".searchTimes");
const fetch = document.querySelector(".fetchTimes");

let searchCount = 0;
let fetchCount = 0;

function throttled(fn,delay) {
    let lastCall = 0;
    return function () {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            return fn();
        }
    }
}

function fetched() {
    fetchCount += 1;
    fetch.innerText = fetchCount;
}

const throttledFetch = throttled(fetched, 2000);


btn.addEventListener("click", () => {
    searchCount += 1;
    search.innerText = searchCount;
    throttledFetch();
})