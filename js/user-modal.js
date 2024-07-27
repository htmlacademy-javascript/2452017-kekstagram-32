import { isEscapeKey } from "./util.js";
import { postList } from "./post-generate.js";

const bigPicture = document.querySelector(".big-picture");
const bigPictureImg = bigPicture.querySelector(".big-picture__img img");
const likesCount = bigPicture.querySelector(".likes-count");
const commentsShownCount = bigPicture.querySelector(
  ".social__comment-shown-count"
);
const commentsTotalCount = bigPicture.querySelector(
  ".social__comment-total-count"
);
const commentsList = bigPicture.querySelector(".social__comments");
const description = bigPicture.querySelector(".social__caption");
const body = document.querySelector("body");
const closeButton = bigPicture.querySelector(".big-picture__close");
const commentTemplate = document
  .querySelector("#comment")
  .content.querySelector(".social__comment");
const commentsLoaderButton = bigPicture.querySelector(
  ".social__comments-loader"
);

const SHOW_COMMENTS = 5;

// Функция закрытия модального окна
function closeUserModal() {
  bigPicture.classList.add("hidden");
  document.removeEventListener("keydown", onDocumentKeydown);
  body.classList.remove("modal-open");
  closeButton.removeEventListener("click", closeUserModal);
  commentsList.innerHTML = "";
}

// Функция открытия модального окна
function openUserModal() {
  bigPicture.classList.remove("hidden");
  document.addEventListener("keydown", onDocumentKeydown);
  body.classList.add("modal-open");
  closeButton.addEventListener("click", closeUserModal);
}

// Функция обработки нажатия клавиши Esc
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

// Функция отрисовки комментариев
const drawingComments = (comments) => {
  const commentFragment = document.createDocumentFragment();
  commentsList.innerHTML = "";

  comments.forEach((comment, index) => {
    const commentItem = commentTemplate.cloneNode(true);
    commentItem.querySelector(".social__picture").src = comment.avatar;
    commentItem.querySelector(".social__picture").alt = comment.name;
    commentItem.querySelector(".social__text").textContent = comment.message;

    if (index >= SHOW_COMMENTS) {
      commentItem.classList.add("hidden");
    }
    commentFragment.appendChild(commentItem);
  });

  commentsList.appendChild(commentFragment);

  commentsShownCount.textContent = Math.min(comments.length, SHOW_COMMENTS);
  commentsTotalCount.textContent = comments.length;

  if (comments.length <= SHOW_COMMENTS) {
    commentsLoaderButton.classList.add("hidden");
  } else {
    commentsLoaderButton.classList.remove("hidden");
  }
};

// Функция добавления комментариев по клику
const moreComments = () => {
  const hiddenComments = commentsList.querySelectorAll(
    ".social__comment.hidden"
  );
  const showComments = Math.min(hiddenComments.length, SHOW_COMMENTS);

  for (let i = 0; i < showComments; i++) {
    hiddenComments[i].classList.remove("hidden");
  }

  const currentShownCount =
    parseInt(commentsShownCount.textContent, 10) + showComments;
  commentsShownCount.textContent = currentShownCount;

  if (
    currentShownCount >=
    commentsList.querySelectorAll(".social__comment").length
  ) {
    commentsLoaderButton.classList.add("hidden");
  }
};

// Функция отрисовки большой картины
const renderFullscreenPicture = (post) => {
  bigPictureImg.src = post.url;
  likesCount.textContent = post.likes;
  description.textContent = post.description;

  drawingComments(post.comments);

  if (post.comments.length > SHOW_COMMENTS) {
    commentsLoaderButton.classList.remove("hidden");
    commentsLoaderButton.addEventListener("click", moreComments);
  } else {
    commentsLoaderButton.classList.add("hidden");
  }

  openUserModal();
};

// Обработчик клика по миниатюре
postList.addEventListener("click", (evt) => {
  if (evt.target.closest(".picture")) {
    const postId = parseInt(
      evt.target.closest(".picture").getAttribute("data-id"),
      10
    );
    const post = postList.find((data) => data.id === postId);

    if (post) {
      evt.preventDefault();
      renderFullscreenPicture(post);
    }
  }
});

export {
  closeUserModal,
  openUserModal,
  onDocumentKeydown,
  drawingComments,
  moreComments,
  renderFullscreenPicture,
};
