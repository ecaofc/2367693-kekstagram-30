//import {createCommentedObject} from './data.js';

const pictureContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const popup = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentShowCount = bigPicture.querySelector('.social__comment-shown-count');
const commentsTotalCount = bigPicture.querySelector('.social__comment-total-count');
const description = bigPicture.querySelector('.social__caption');

pictureContainer.addEventListener('click', (evt) => {
  const thumbnail = evt.target.closest('.picture');
  if (thumbnail) {
    evt.preventDefault();
    bigPicture.classList.remove('hidden');
    popup.src = thumbnail.querySelector('.picture__img').src;
    likesCount.textContent = thumbnail.querySelector('.picture__likes').textContent;
    commentShowCount.textContent = '2';
    commentsTotalCount.textContent = thumbnail.querySelector('.picture__comments').textContent;
    description.textContent = thumbnail.querySelector('.picture__img').alt;
  }
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
});
