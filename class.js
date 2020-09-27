const ballons = document.querySelectorAll('.ballon');
const nextStageButton = document.querySelector('.next-stage');
const retryStageButton = document.querySelector('.retry-stage');
const countdownDiv = document.querySelector('.count-down-timer');
const popMessages = document.querySelectorAll('.pop-message');
let nextStageClickCount = 0;
let poppedBallon = 0;
let seconds = 30;

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

class Ballon {
  nextStage() {
    nextStageButton.addEventListener('click', () => {
      let poppedBallon = 0;
      for (let index = 0; index < ballons.length; index++) {
        const ballon = ballons[index];
        ballon.style.display = 'block';
       
        ballon.addEventListener('click', () => {
          const popSound = new Audio("./Balloon_Pop_Sound.mp3");
          popSound.play();
          ballon.style.display = 'none';
          ballon.nextElementSibling.style.display = 'block';
          
          poppedBallon++

          checkPoppedBallon(poppedBallon)
        })
      }
      document.querySelector('.next-stage-message').style.display = 'none';
      nextStageButton.style.display = 'none';
      nextStageClickCount++
      let newSeconds = 20 / nextStageClickCount;
      seconds = Math.round(newSeconds);
    })
  }

  retryStage() {
    retryStageButton.addEventListener('click', () => {
      location.reload();
    })
  }

  click() {
    for (let index = 0; index < ballons.length; index++) {
      const ballon = ballons[index];

      ballon.addEventListener('click', () => {
        
        const popSound = new Audio("./Balloon_Pop_Sound.mp3");
        popSound.play();
        ballon.style.display = 'none';
        ballon.nextElementSibling.style.display = 'block';
        
        poppedBallon++

        checkPoppedBallon(poppedBallon)
      })
    }
  }
}

const ballon = new Ballon();
ballon.click();
ballon.nextStage();
ballon.retryStage();


