const arrow = document.querySelector(".arrow");
const speedDisplay = document.querySelector(".speed-value");
const latitudeDisplay =document.querySelector('.latitude');
const longitudeDisplay = document.querySelector('.longitude');

navigator.geolocation.watchPosition(element => {
    console.log(element);

    if(element.coords.speed !== null){
        speedDisplay.textContent = element.coords.speed.toFixed(2);
    }else {
        speedDisplay.textContent = 'N/A';
        console.warn("Speed is not available.");
    }

    if(element.coords.heading !== null){
        arrow.style.transform = `rotate(${element.coords.heading}deg)`;
    }else {
        console.warn("Heading not available. Arrow will remain visible but not rotate.");
        //arrow.style.display = 'none';
        arrow.style.transform = `rotate(0deg)`;
        arrow.style.display = 'block';
    }

    latitudeDisplay.textContent = element.coords.latitude.toFixed(6);
    longitudeDisplay.textContent = element.coords.longitude.toFixed(6);
}, err => {
    console.error(err);
    speedDisplay.textContent = "Error";
    latitudeDisplay.textContent = "Error";
    longitudeDisplay.textContent = "Error";
    //arrow.style.display = "none";
    arrow.style.transform = `rotate(0deg)`;
    arrow.style.display = 'block';
});