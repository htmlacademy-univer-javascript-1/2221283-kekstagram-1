import { createComment } from './comments.js';

const fullImage = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
const comments = document.querySelector('.social__comments');

const onFullImageClick = (photo, photoData) => {
  photo.addEventListener('click', () => {
    fullImage.classList.remove('hidden');

    fullImage.querySelector('.big-picture__img').querySelector('img').src = photoData.url;
    fullImage.querySelector('.likes-count').textContent = photoData.likes;
    fullImage.querySelector('.comments-count').textContent = photoData.comments.length;
    fullImage.querySelector('.social__caption').textContent = photoData.description;

    document.body.classList.add('modal-open');
    fullImage.querySelector('.social__comment-count').classList.add('hidden');
    fullImage.querySelector('.comments-loader').classList.add('hidden');

    comments.innerHTML = '';

    photoData.comments.forEach((comment) => {
      comments.appendChild(createComment(comment));
    });
  });
};

closeButton.addEventListener('click', () => {
  fullImage.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

const onDocumentEscapeKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    fullImage.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
};

document.addEventListener('keydown', onDocumentEscapeKeyDown);

fullImage.addEventListener('click', onFullImageClick);
export { onFullImageClick };
