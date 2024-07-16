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
    } else {
      return true;
    }
  }
}
// Примеры использования функции проверки длины строки
console.log(checkStringLength("Этот текст пройдет", 20));
console.log(checkStringLength("Этот тоже пройдет", 18));
console.log(checkStringLength("Длинна строки больше, покажет false", 5));

// Примеры использования функции проверки палиндрома
console.log(isPalindrome("топот"));
console.log(isPalindrome("ДовОд"));
console.log(isPalindrome("Кекс"));

// Функция "Делу - время"

const checkWorkTime = function (Start, End, Meeting, timeMeeting) {
  const workStart = Start.split(":");
  const workEnd = End.split(":");
  const meetingStart = Meeting.split(":");

  const totalStartMinutes =
    parseInt(workStart[0] * 60) + parseInt(workStart[1]);
  const totalEndMinutes = parseInt(workEnd[0] * 60) + parseInt(workEnd[1]);
  const totalMeetingMinutes =
    parseInt(meetingStart[0] * 60) + parseInt(meetingStart[1]);

  if (
    totalMeetingMinutes >= totalStartMinutes &&
    totalMeetingMinutes + timeMeeting <= totalEndMinutes
  ) {
    return true;
  }
  return false;
};

checkWorkTime("08:00", "17:30", "14:00", 90);
checkWorkTime("8:0", "10:0", "8:0", 120);
checkWorkTime("08:00", "14:30", "14:00", 90);
checkWorkTime("14:00", "17:30", "08:0", 90);
checkWorkTime("8:00", "17:30", "08:00", 900);
