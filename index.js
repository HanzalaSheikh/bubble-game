var num = 0;
var timer = 60;

function makeBubble() {
  var clutter = "";
  function randomNumber() {
    return (numb = Math.floor(Math.random() * 10));
  }
  for (let index = 0; index < 198; index++) {
    clutter += `<div class="bubble">${randomNumber()}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  // Display the initial value
  document.querySelector("#timerval").textContent = timer;

  var interval = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(interval); // Stop the timer when it reaches 0
    document.querySelector("#pbtm").innerHTML = "";
    }
  }, 1000);
}
// Call the runTimer function to start the timer

function getNewHit() {
  num = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = num;
}

function increaseScore() {
  var score = 0;
  function escore() {
    score += 1;
    document.querySelector("#score").textContent = score;
  }
  escore();
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickedNum = Number(dets.target.textContent);
  if (clickedNum === num) {
    increaseScore();
    getNewHit();
    makeBubble();
  }
});

getNewHit();
makeBubble();
runTimer();
