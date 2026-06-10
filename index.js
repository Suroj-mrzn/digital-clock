//Clock
function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    //determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';     
    // convert to 12 hr format
    hours = hours % 12 || 12;
    hours = hours ? hours : 12;
    const hoursString = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hoursString}:${minutes}:${seconds} ${ampm}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000); 