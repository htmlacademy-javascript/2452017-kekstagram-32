import {
  getRandomInteger,
  generateUniqueRandomNumber,
  createIdGenerator,
} from "./util.js";

import { NAMES, MESSAGES, DESCRIPTIONS } from "./data.js";

const generateIdForComments = createIdGenerator();

const createComment = () => {
  return {
    id: generateIdForComments(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
    name: NAMES[getRandomInteger(0, NAMES.length - 1)],
  };
};

const commentList = () =>
  Array.from({ length: getRandomInteger(0, 30) }, createComment);

export { commentList };
