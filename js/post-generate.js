import {
  getRandomInteger,
  generateUniqueRandomNumber,
  createIdGenerator,
} from "./util.js";

import { NAMES, MESSAGES, DESCRIPTIONS, POST_COUNT_RANGE } from "./data.js";

import { commentList } from "./comments-generate.js";

// Для генерации Id для каждого поста
const generateIdForPost = createIdGenerator();
// Для генерации Id для каждого фото
const generatePhotoId = generateUniqueRandomNumber(1, 25);

// Функция для создания объекта поста публикации
const createPost = () => {
  return {
    id: generateIdForPost(),
    url: `photos/${generatePhotoId()}.jpg`,
    description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
    likes: getRandomInteger(15, 200),
    comments: commentList,
  };
};

const postList = () => Array.from({ length: POST_COUNT_RANGE }, createPost);

export { postList };
