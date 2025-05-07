// console.log(1);
// setTimeout(() => console.log(2), 1000);
// setTimeout(() => console.log(3), 0);
// console.log(4);


// function x() {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000)
//     var i = 1;
// }

// x();


const list = [
    {
        "name": "Menu 1",
        "subitems": [
            { "name": "Menu 2" }
        ]
    },
    {
        "name": "Menu 3",
        "subitems": [
            {
                "name": "Menu 4",
                "subitems": [
                    { "name": "Menu 5" },
                    { "name": "Menu 6" }
                ]
            }
        ]
    }
]

function extractNames(items) {
    let names = [];
    items.forEach((item) => {
        names.push(item.name);
        if (item.subitems) {
            names = names.concat(extractNames(item.subitems));
        }
    });
    return names;
}

const allNames = extractNames(list);
console.log(allNames);

// const a1 = [1, 2, 3];
// const a2 = [1, "hello", 3];
// const a3 = a1.concat(a2);
// console.log(a3);
