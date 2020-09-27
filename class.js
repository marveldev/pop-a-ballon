const ballons = document.querySelectorAll('.ballon');
const nextStageButton = document.querySelector('.next-stage');
const retryStageButton = document.querySelector('.retry-stage');
const countdownDiv = document.querySelector('.count-down-timer');
const popMessages = document.querySelectorAll('.pop-message');
let poppedBallon = 0;

class Button {
  confirmNextStage() {
    nextStageButton.addEventListener('click', () => {
      let poppedBallon = 0;
      for (let index = 0; index < ballons.length; index++) {
        const ballon = ballons[index];
        ballon.style.display = 'block';
        ballon.addEventListener('click', () => {
          poppedBallon++
          console.log(poppedBallon);
          if (poppedBallon === 12) {
            for (let index = 0; index < popMessages.length; index++) {
              const popMessage = popMessages[index];
              popMessage.style.display = 'none';
            }
            document.querySelector('.next-stage-message').style.display = 'block';
            nextStageButton.style.display = 'block';
          }
        })
      }
      document.querySelector('.next-stage-message').style.display = 'none';
      nextStageButton.style.display = 'none';
    })
  }
}

class PoppedBallon {
  constructor() {
    if (poppedBallon === 12) {
      for (let index = 0; index < popMessages.length; index++) {
        const popMessage = popMessages[index];
        popMessage.style.display = 'none';
      }
      document.querySelector('.next-stage-message').style.display = 'block';
      nextStageButton.style.display = 'block';
    }
  }
}

class Ballon {
  click() {
    for (let index = 0; index < ballons.length; index++) {
      const ballon = ballons[index];
      ballon.addEventListener('click', () => {
        const popSound = new Audio("./Balloon_Pop_Sound.mp3");
        popSound.play();
        ballon.style.display = 'none';
        ballon.nextElementSibling.style.display = 'block';
        poppedBallon++
        const thing = new PoppedBallon();
        thing.checkPoppedBallon(poppedBallon);

        const something = new Button();
        something.confirmNextStage();
      })
    }
  }
}

const stuff = new Ballon();
stuff.click();


