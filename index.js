const arr = document.querySelectorAll('.slider__input');
const array = Array.from(arr);

function moveRight() {
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (item.checked) {
      item.checked = false;
      if (i === array.length - 1) {
        array[0].checked = true;
      } else {
        item.nextElementSibling.checked = true;
      }
      return;
    }
  }
}

function moveLeft() {
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (item.checked) {
      item.checked = false;
      if (i === 0) {
        array[array.length - 1].checked = true;
      } else {
        item.previousElementSibling.checked = true;
      }
      return;
    }
  }
}

document.querySelector('.slider__arrow_theme_right').addEventListener('click', moveRight);
document.querySelector('.slider__arrow_theme_left').addEventListener('click', moveLeft);