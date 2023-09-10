function makeBubble() {
  var clutter = "";
  function randomNumber() {
    return Math.floor(Math.random() * 10);
  }
  for (let index = 0; index < 198; index++) {
    clutter += `<div class="bubble">${randomNumber()}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function timer() {
  var timer = 60;

  function runTimer() {
    // Display the initial value
    document.querySelector("#timerval").textContent = timer;

    var interval = setInterval(() => {
      if (timer > 0) {
        timer--;
        document.querySelector("#timerval").textContent = timer;
      } else {
        clearInterval(interval); // Stop the timer when it reaches 0
      }
    }, 1000);
  }
  // Call the runTimer function to start the timer
  runTimer();
}

function getNewHit() {
    let num = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = num;
}

// getNewHit();
// makeBubble();
// timer();