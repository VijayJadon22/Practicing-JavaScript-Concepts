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

navigator.geolocation.getCurrentPosition(position => {
    console.log(`Latitude: ${position.coords.latitude} , Longitude: ${position.coords.longitude}, Altitude: ${position.coords.altitude}`)
})