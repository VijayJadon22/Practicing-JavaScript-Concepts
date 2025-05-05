const searchCount = document.querySelector(".searchTimes");
const fetchedCount = document.querySelector(".fetchTimes");
const input = document.querySelector(".input");

let searchNum = 0;
let fetchNum = 0;

function debouncedSearch(fn, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => fn(), delay);
    }
}

const search = () => {
    fetchNum += 1;
    fetchedCount.innerText = fetchNum;
}

const clickedSearch = debouncedSearch(search, 2000);

input.addEventListener("input", () => {
    searchNum += 1;
    searchCount.innerText = searchNum;
    clickedSearch();
})