function checkStringLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}

function isPalindrome(string) {
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  } else {
    return false;
  }
}

// Примеры использования функции проверки длины строки
console.log(checkStringLength("Этот текст пройдет", 20));
console.log(checkStringLength("Этот тоже пройдет", 18));
console.log(checkStringLength("Длинна строки больше, покажет false", 5));

// Примеры использования функции проверки палиндрома
console.log(isPalindrome('топот'));
console.log(isPalindrome('ДовОд'));
console.log(isPalindrome('Кекс'));
