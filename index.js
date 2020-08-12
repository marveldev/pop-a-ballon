const ballons = document.querySelectorAll('.ballon');
const nextStageButton = document.querySelector('.next-stage');
const retryStageButton = document.querySelector('.retry-stage');
const countdownDiv = document.querySelector('.count-down-timer');
const popMessages = document.querySelectorAll('.pop-message');
let time = 30;
let poppedBallon = 0;

function playPopSound(){
  const popSound = new Audio("./pop_a_ballon sound.mp3");
  popSound.play();
}

const countDown = setInterval(updateCountDown, 1000);
function updateCountDown() {
  let seconds = time;
  countdownDiv.innerHTML = `${seconds}`;
  time--
  if (time == 0) {
    clearInterval(countDown);
    if (poppedBallon !== 12) {
      document.querySelector('.ballon-container').style.display = 'none';
      document.querySelector('.retry-stage-message').style.display = 'block';
      retryStageButton.style.display = 'block';
    }
  }
}

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

