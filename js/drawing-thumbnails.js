import { postList } from "./post-generate.js";

const thumbNailsTemplate = document
  .querySelector("#picture")
  .content.querySelector(".picture");
const container = document.querySelector(".pictures");

const creatThumbnail = function (picture) {
  const thumbnail = thumbNailsTemplate.cloneNode(true);
  console.log("самнейл", thumbnail);
  thumbnail.querySelector(".picture__img").src = picture.url;
  thumbnail.querySelector(".picture__img").alt = picture.description;
  thumbnail.querySelector(".picture__likes").textContent = picture.likes;
  thumbnail.querySelector(".picture__comments").textContent =
    picture.comments.length;
  thumbnail.dataset.id = picture.id;

  return thumbnail;
};

const generateThumbnails = function (pictures) {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = creatThumbnail(picture);
    fragment.append(thumbnail);
  });

  container.append(fragment);
};
generateThumbnails(postList);
export { generateThumbnails };
