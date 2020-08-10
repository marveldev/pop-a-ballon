const ballons = document.querySelectorAll('.ballon');
let poppedBallon = 0;

ballons.forEach((ballon) => {
  ballon.addEventListener('click', () => {
    ballon.style.display = 'none';
    ballon.nextElementSibling.style.display = 'block';
    poppedBallon++
    if (poppedBallon === 12) {
      document.querySelector('.ballon-container').innerHTML = '';
      document.querySelector('.no-ballons-message').style.display = 'block';
    }
  })
});
