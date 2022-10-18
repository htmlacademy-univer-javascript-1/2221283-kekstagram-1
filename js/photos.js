import { photos } from './data.js';
import { onFullImageClick } from './full-photo.js';

const photoItemTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const pictures = photos();
const fragment = document.createDocumentFragment();
const photosList = document.querySelector('.pictures');

const createPicture = (picture) => {
  const photoElement = photoItemTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = picture.url;
  photoElement.querySelector('.picture__likes').textContent = picture.likes;
  photoElement.querySelector('.picture__comments').textContent = picture.comments.length;
  onFullImageClick(photoElement, picture);
  return photoElement;
};

const showPhotos = () => {
  for (const picture of pictures) {
    fragment.appendChild(createPicture(picture));
  }
  photosList.appendChild(fragment);
};

showPhotos();
