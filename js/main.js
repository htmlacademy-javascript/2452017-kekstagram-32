const NAMES = [
  "Александр",
  "Юрий",
  "Алексей",
  "Мансев",
  "Дмитрий",
  "Николай",
  "Екатерина",
  "Ася",
  "Иван",
  "Нурлан",
  "Павел",
];
const MESSAGES = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра.",
  "В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  " Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают.",
  "Как можно было поймать такой неудачный момент?!",
];
const DESCRIPTIONS = [
  "Отличный отдых в компании друзей",
  "Красивый закат",
  "Горы в утреннем тумане.",
  "Исторический памятник в центре города.",
  "Счастливая семья на прогулке.",
  "Освежающий коктейль на пляже.",
  "Турция - старый город",
  "Лучше гор, только горы",
];

// Диапазон количества постов
const POST_COUNT_RANGE = 25;

// Функция для генерации случайных чисел в заданном диапазоне
function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// Функция для генерации уникальных идентификаторов
function generateUniqueRandomNumber(min, max) {
  const generatedValues = [];
  return function () {
    let currentValue = getRandomInteger(min, max);
    if (generatedValues.length >= max - min + 1) {
      return null;
    }
    while (generatedValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    generatedValues.push(currentValue);
    return currentValue;
  };
}

function createIdGenerator() {
  let lastGeneratedId = 0;
  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

// Для генерации уникального id для каждого комментария
const generateIdForComments = createIdGenerator();

// Функция для создания объекта комментария
const createComment = () => {
  return {
    id: generateIdForComments(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
    name: NAMES[getRandomInteger(0, NAMES.length - 1)],
  };
};

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
    comments: Array.from({ length: getRandomInteger(0, 30) }, createComment),
  };
};

const greatPosts = Array.from({ length: POST_COUNT_RANGE }, createPost);

