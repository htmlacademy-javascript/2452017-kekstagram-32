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

// Генератор последовтельных чисел

function createIdGenerator() {
  let lastGeneratedId = 0;
  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

export { getRandomInteger, generateUniqueRandomNumber, createIdGenerator };
