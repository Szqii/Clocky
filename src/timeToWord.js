// Exported from https://github.com/jarrad-m/qlocktwo/blob/master/src/components/TimeToWordConverter.js

const timeToWord = (time) => {
  const letterIndex = [];
  let adjustedHours = time.hours;
  let additionalMinutes = 0;

  const O_CLOCK = [104, 105, 106, 107, 108, 109],
    IT_IS = [0, 1, 3, 4],
    A_QUARTER = [11, 13, 14, 15, 16, 17, 18, 19],
    TO = [42, 43],
    PAST = [44, 45, 46, 47],
    TWENTY = [22, 23, 24, 25, 26, 27],
    TEN = [38, 39, 40],
    FIVE = [28, 29, 30, 31],
    HALF = [33, 34, 35, 36];

  letterIndex.push(IT_IS);

  if (time.minutes < 5) {
    letterIndex.push(O_CLOCK);
    additionalMinutes = time.minutes;
  } else if (time.minutes < 10) {
    letterIndex.push(FIVE, PAST);
    additionalMinutes = time.minutes - 5;
  } else if (time.minutes < 15) {
    letterIndex.push(TEN, PAST);
    additionalMinutes = time.minutes - 10;
  } else if (time.minutes < 20) {
    letterIndex.push(A_QUARTER, PAST);
    additionalMinutes = time.minutes - 15;
  } else if (time.minutes < 25) {
    letterIndex.push(TWENTY, PAST);
    additionalMinutes = time.minutes - 20;
  } else if (time.minutes < 30) {
    letterIndex.push(TWENTY, FIVE, PAST);
    additionalMinutes = time.minutes - 25;
  } else if (time.minutes < 35) {
    letterIndex.push(HALF, PAST);
    additionalMinutes = time.minutes - 30;
  } else if (time.minutes < 40) {
    letterIndex.push(TWENTY, FIVE, TO);
    additionalMinutes = time.minutes - 35;
  } else if (time.minutes < 45) {
    letterIndex.push(TWENTY, TO);
    additionalMinutes = time.minutes - 40;
  } else if (time.minutes < 50) {
    letterIndex.push(A_QUARTER, TO);
    additionalMinutes = time.minutes - 45;
  } else if (time.minutes < 55) {
    letterIndex.push(TEN, TO);
    additionalMinutes = time.minutes - 50;
  } else if (time.minutes < 60) {
    letterIndex.push(FIVE, TO);
    additionalMinutes = time.minutes - 55;
  }

  if (time.minutes > 34) {
    if (adjustedHours === 12) {
      adjustedHours = 1;
    } else {
      adjustedHours = adjustedHours + 1;
    }
  }

  switch (adjustedHours) {
    case 1:
      letterIndex.push(55, 56, 57);
      break;

    case 2:
      letterIndex.push(76, 75, 74);
      break;

    case 3:
      letterIndex.push(61, 62, 63, 64, 65);
      break;

    case 4:
      letterIndex.push(66, 67, 68, 69);
      break;

    case 5:
      letterIndex.push(70, 71, 72, 73);
      break;

    case 6:
      letterIndex.push(58, 59, 60);
      break;

    case 7:
      letterIndex.push(88, 89, 90, 91, 92);
      break;

    case 8:
      letterIndex.push(77, 78, 79, 80, 81);
      break;

    case 9:
      letterIndex.push(51, 52, 53, 54);
      break;

    case 10:
      letterIndex.push(99, 100, 101);
      break;

    case 11:
      letterIndex.push(82, 83, 84, 85, 86, 87);
      break;

    case 12:
      letterIndex.push(93, 94, 95, 96, 97, 98);
      break;
    default:
  }

  return { letters: letterIndex.flat(), additionalMinutes: additionalMinutes };
};

export default timeToWord;
