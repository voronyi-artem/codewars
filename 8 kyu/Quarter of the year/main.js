// DESCRIPTION:
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2(February), is part of the first quarter; month 6(June), is part of the second quarter; and month 11(November), is part of the fourth quarter.

//   Constraint:

// 1 <= month <= 12
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af


const quarterOf = (month) => {

  if (month <= 3) return 1;
  if (month <= 6) return 2;
  if (month <= 9) return 3;
  if (month <= 12) return 4;
}