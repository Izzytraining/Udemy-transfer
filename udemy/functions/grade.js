///studentsscore and total possible score
// a* 9 - 8, a 7-8, b 5.5-6, c 4 - 5, d 3, e 2, f 1, g fail

let grade = function (studentsScore, totalScore = 10) {
  let gradePercent = (studentsScore / totalScore) * 100;
  let student = studentsScore;
  let highest = totalScore;
  return `your score is, ${student} out of a possible, ${highest}, at ${gradePercent}% well done`;
};

let sGrade = grade(7);
console.log(sGrade);

let studentGrade = 7;

if (studentGrade >= 9) {
  return "Congrats you scored a A*";
} else if (studentGrade >= 8) {
  console.log("Congrats you scored a A");
} else if (studentGrade >= 7) {
  console.log("Congrats you scored a B");
} else if (studentGrade >= 6) {
  console.log("Congrats you scored a C");
} else if (studentGrade >= 5) {
  console.log("Good try, you scored a D");
} else if (studentGrade >= 4) {
  console.log("Getting there, you scored an E");
} else if (studentGrade >= 3) {
  console.log("Needs improvement,  scored an F");
} else {
  console.log("Failed, you scored a G");
}

///////////////

let getScore = function (theScore, theTotal = 10) {
  let percentage = (theScore / theTotal) * 100;

  if (percentage <= 90) {
    return `Congrats, you a an A* with (${percentage})%!`;
  }
};

let score = getScore(7);
console.log(score);
////
