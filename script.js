
const birthdayDate = new Date(2025, 8, 1, 0, 0, 0);

function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

   
    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "<h2>It's your birthday! Happy Birthday!</h2>";
        clearInterval(countdownInterval);
        return;
    }

    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
}


const countdownInterval = setInterval(updateCountdown, 1000);


updateCountdown();