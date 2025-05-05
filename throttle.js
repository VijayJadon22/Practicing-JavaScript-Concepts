const inputEle = document.querySelector(".input");
const searchedNum = document.querySelector(".searchTimes");
const fetchedNum = document.querySelector(".fetchTimes");
const btn = document.querySelector(".btn");

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

function search() {
    fetchCount += 1;
    fetchedNum.innerText = fetchCount;
}

const throttleSearch = throttled(search, 2000);

btn.addEventListener("click", () => {
    searchedNum.innerText = ++searchCount;
    throttleSearch();
})