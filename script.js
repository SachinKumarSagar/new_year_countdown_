// Countdown Timer Logic
const countdownDate = new Date("Jan 1, 2025 00:00:00").getTime();

const timerInterval = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".timer h2").innerHTML =
        days + " : " + hours + " : " + minutes + " : " + seconds;

    if (distance < 0) {
        clearInterval(timerInterval);
        document.querySelector(".timer h2").innerHTML = "HAPPY NEW YEAR!";
    }
}, 1000);

// Preview Button Logic
document.getElementById("previewBtn").addEventListener("click", function () {
    alert("Happy New Year!");
});
