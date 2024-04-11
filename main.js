const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const cards = document.querySelector('.cards');

let currentCardIndex = 0;
const cardWidth = document.querySelector('.card').offsetWidth;

function slideCards(direction) {
  if (direction === 'next') {
    currentCardIndex++;
    if (currentCardIndex > cards.children.length - 1) {
      currentCardIndex = 0;
    }
  } else {
    currentCardIndex--;
    if (currentCardIndex < 0) {
      currentCardIndex = cards.children.length - 1;
    }
  }
  const offset = -currentCardIndex * cardWidth;
  cards.style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener('click', () => slideCards('prev'));
nextBtn.addEventListener('click', () => slideCards('next'));


const burgerMenu = document.querySelector('.burger-menu');
const dropdownMenu = document.querySelector('.dropdown-menu');

burgerMenu.addEventListener('click', () => {
  dropdownMenu.classList.toggle('dropdown-toggle');
  if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
    dropdownMenu.style.display = 'block';
  } else {
    dropdownMenu.style.display = 'none';
  }
});