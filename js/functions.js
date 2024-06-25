function checkStringLength(string, maxLength) {
  if(string.length <= maxLength){
    return true;
  }else {
    return false;
  }
};

// Примеры использования функции проверки длины строки
console.log(checkStringLength("Этот текст пройдет", 20));
console.log(checkStringLength("Этот тоже пройдет", 18));
console.log(checkStringLength("Длинна строки больше, покажет false", 5));

function isPolindrom (string) {

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }else{
  return true;
  }
}
// Примеры использования функции проверки длины строки
console.log(isPalindrome('топот')); // true
console.log(isPalindrome('ДовОд')); // true
console.log(isPalindrome('Кекс'));  // false

