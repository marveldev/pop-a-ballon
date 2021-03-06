const ballons = document.querySelectorAll('.ballon');
const nextStageButton = document.querySelector('.next-stage');
const retryStageButton = document.querySelector('.retry-stage');
const countdownDiv = document.querySelector('.count-down-timer');
const popMessages = document.querySelectorAll('.pop-message');
let seconds = 30;
let poppedBallon = 0;

function playPopSound(){
  const popSound = new Audio("./Balloon_Pop_Sound.mp3");
  popSound.play();
}

function updateCountDown() {
  countdownDiv.innerHTML = `${seconds}`;
  if (seconds == 0) {
    clearInterval(countDown);
    if (poppedBallon !== 12) {
      document.querySelector('.ballon-container').style.display = 'none';
      document.querySelector('.next-stage-message').style.display = 'none';
      nextStageButton.style.display = 'none';
      document.querySelector('.retry-stage-message').style.display = 'block';
      retryStageButton.style.display = 'block';
    }
  }
  seconds--
}
const countDown = setInterval(updateCountDown, 1000);

for (let index = 0; index < ballons.length; index++) {
  const ballon = ballons[index];
  ballon.addEventListener('click',() => {
    playPopSound();
    ballon.style.display = 'none';
    ballon.nextElementSibling.style.display = 'block';
    poppedBallon++
    checkPoppedBallon(poppedBallon);
  })
}

let nextStageClickCount = 0;
nextStageButton.addEventListener('click', () => {
  let poppedBallon = 0;
  for (let index = 0; index < ballons.length; index++) {
    const ballon = ballons[index];
    ballon.style.display = 'block';
    ballon.addEventListener('click', () => {
      poppedBallon++
      checkPoppedBallon(poppedBallon);
    })
  }
  document.querySelector('.next-stage-message').style.display = 'none';
  nextStageButton.style.display = 'none';
  nextStageClickCount++
  let newSeconds = 20 / nextStageClickCount;
  seconds = Math.round(newSeconds);
})

retryStageButton.addEventListener('click', () => {
  location.reload();
})

function checkPoppedBallon(poppedBallon) {
  if (poppedBallon === 12) {
    for (let index = 0; index < popMessages.length; index++) {
      const popMessage = popMessages[index];
      popMessage.style.display = 'none';
    }
    document.querySelector('.next-stage-message').style.display = 'block';
    nextStageButton.style.display = 'block';
  }
}
