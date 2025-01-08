let timer;
let isRunning = false;
let [hours, minutes, seconds] = [0, 0, 0];

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const laps = document.getElementById('laps');

// Start Timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 1000);
    }
}

// Pause Timer
function pauseTimer() {
    isRunning = false;
    clearInterval(timer);
}

// Reset Timer
function resetTimer() {
    isRunning = false;
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0];
    display.innerHTML = '00:00:00';
    laps.innerHTML = ''; // Clear laps
}

// Update Timer
function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    display.innerHTML = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Add Lap
function addLap() {
    const lapTime = display.innerHTML;
    const lapItem = document.createElement('li');
    lapItem.innerText = lapTime;
    laps.appendChild(lapItem);
}

// Event Listeners
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', addLap);
