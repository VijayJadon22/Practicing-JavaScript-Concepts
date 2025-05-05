import data from "./data.js";
// const data = require("./data.js");

const inputEle = document.querySelector(".input");
const searchedNum = document.querySelector(".searchTimes");
const fetchedNum = document.querySelector(".fetchTimes");
const suggestion = document.querySelector(".suggestion");

let searchCount = 0;
let fetchCount = 0;

function debouncedSearch(fn, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => fn(), delay);
    }
}

function search() {
    fetchCount += 1;
    fetchedNum.innerText = fetchCount;
    const query = inputEle.value.trim();
    const list = data.filter((user, index) => user.name.includes(query));
    suggestion.innerText=list?.map((item)=>item.name).join(", ")
}
const fetchSearch = debouncedSearch(search, 3000);

inputEle.addEventListener("input", () => {
    searchedNum.innerText = ++searchCount;
    fetchSearch();
})