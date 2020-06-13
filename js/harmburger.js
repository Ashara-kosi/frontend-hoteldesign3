let isClicked = false;
const harm = document.querySelector('.harmburger');
const harmMenu = document.querySelector('.harmburgermenu');
const close = document.querySelector('.closee');

const handleClick = () => {
  if (!isClicked) {
    harmMenu.style.display = 'flex';
    isClicked = true;
  } else {
    harmMenu.style.display = 'none';
    isClicked = false;
  }
};

harm.addEventListener('click', handleClick);
close.addEventListener('click', () => {
  harmMenu.style.display = 'none';
  isClicked = false;
});
