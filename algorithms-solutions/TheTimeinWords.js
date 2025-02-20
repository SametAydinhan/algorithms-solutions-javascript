function timeInWords(h, m) {
  // Write your code here
  const nums = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "quarter",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty one",
    "twenty two",
    "twenty three",
    "twenty four",
    "twenty five",
    "twenty six",
    "twenty seven",
    "twenty eight",
    "twenty nine",
    "half",
  ];
  let timeInWords = "";
  if (m === 0) {
    timeInWords = nums[h] + " o' clock";
  } else if (m === 1) {
    timeInWords = nums[m] + " minute past " + nums[h];
  } else if (m === 15 || m === 30) {
    timeInWords = nums[m] + " past " + nums[h];
  } else if (m === 45) {
    timeInWords = nums[60 - m] + " to " + nums[h + 1];
  } else if (m < 30) {
    timeInWords = nums[m] + " minutes past " + nums[h];
  } else {
    timeInWords = nums[60 - m] + " minutes to " + nums[h + 1];
  }
  return timeInWords;
}
