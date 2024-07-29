let wasting = false;
let dataWasted = 0;
let intervalId;

function toggleWasting() {
    if (wasting) {
        stopWasting();
    } else {
        startWasting();
    }
}

function startWasting() {
    document.getElementById('startStopButton').textContent = 'Stop';
    document.getElementById('startStopButton').classList.remove('start');
    document.getElementById('startStopButton').classList.add('stop');

    wasting = true;

    intervalId = setInterval(() => {
        const speed = 200; // max speed is 200 MB/s
        dataWasted += speed;

        document.getElementById('dataWasted').textContent = dataWasted;
        document.getElementById('speed').textContent = speed;
    }, 1000);
}

function stopWasting() {
    clearInterval(intervalId);
    document.getElementById('startStopButton').textContent = 'Start';
    document.getElementById('startStopButton').classList.remove('stop');
    document.getElementById('startStopButton').classList.add('start');

    wasting = false;
    document.getElementById('speed').textContent = 0;
  }
