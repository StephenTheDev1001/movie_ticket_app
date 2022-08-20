const standardTime = militaryTime => {
  const militaryArr = militaryTime.split(':');

  let hours = militaryArr[0]
  let mins = militaryArr[1]

  //calculate for standardTimeOutput
  let standardTimeOutput

  if (hours > 0 && hours <= 12) {
    standardTimeOutput = "" + hours;
  } else if (hours > 12) {
    standardTimeOutput = "" + (hours - 12);
  } else if (hours == 0) {
    standardTimeOutput = "12";
  }

  standardTimeOutput += (mins < 10) ? ":" + mins : ":" + mins;  // get minutes
  standardTimeOutput += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM

  return standardTimeOutput
}

export default standardTime