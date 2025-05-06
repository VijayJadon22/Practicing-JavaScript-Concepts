const outerFunction = () => {
    let count = 0;
    return () => {
        count++;
        console.log(count);
    }
}

const counter = outerFunction();
counter();
counter();
counter();