// var studentGrades =[7, 85, 59, 66, 40, 4, 43, 90, 47, 5, 35, 83, 11, 
// 	56, 72, 20, 68, 53, 58, 62, 43, 52, 66, 31, 22, 35, 58, 43, 18, 72, 
// 	43, 79, 65, 95, 55, 49, 24, 27, 22, 76, 88, 53, 72, 54, 2, 90, 96, 
// 	37, 50, 31, 72, 79, 94, 80, 74, 2, 14, 57, 22, 48, 15, 21, 76, 61, 
// 	40, 26, 82, 90, 22, 27, 86, 24, 19, 54, 52, 79, 83, 72, 15, 55, 5, 
// 	81, 6, 73, 3, 58, 64, 64, 48, 8, 86, 79, 86, 22, 36, 74, 6, 83, 12, 91]

var studentGrades = [100, 85, 51, 63, 61, 90, 53, 51, 55, 57, 86, 70, 55, 
	79, 62, 90, 75, 71, 56, 83, 69, 94, 66, 72, 73, 69, 91, 81, 95, 50, 
	71, 95, 64, 73, 96, 67, 68, 83, 56, 72, 94, 83, 77, 58, 59, 79, 59, 
	74, 76, 70, 72, 64, 81, 100, 96, 80, 80, 84, 96, 93, 79, 62, 89, 58, 
	90, 69, 58, 96, 97, 58, 98, 73, 52, 85, 87, 56, 81, 99, 79, 94, 59, 
	50, 57, 51, 100, 100, 66, 58, 89, 63, 88, 76, 51, 86, 100, 87, 77, 
	75, 79, 100];

var f_grades = [];
var d_grades = [];
var c_grades = [];
var b_grades = [];
var a_grades = [];
var lowGrade = 100;
var highGrade = 0;

for (var i = studentGrades.length - 1; i >= 0; i--) {
  if (studentGrades[i] <= 60) {
    f_grades[f_grades.length] = studentGrades[i];
    if (studentGrades[i] < lowGrade) {
      lowGrade = studentGrades[i];
    }
  } else
  if (studentGrades[i] > 60 && studentGrades[i] <= 70) {
    d_grades[d_grades.length] = studentGrades[i];
  } else
  if (studentGrades[i] > 70 && studentGrades[i] <= 80) {
    c_grades[c_grades.length] = studentGrades[i];
  } else
  if (studentGrades[i] > 80 && studentGrades[i] <= 90) {
    b_grades[b_grades.length] = studentGrades[i];
  } else
  if (studentGrades[i] > 90) {
    a_grades[a_grades.length] = studentGrades[i];
    if (studentGrades[i] > highGrade) {
      highGrade = studentGrades[i];
    }
  }
}


console.log("There are " + f_grades.length + " F Grades: " + f_grades.sort().join(", "));
console.log("There are " + d_grades.length + " D Grades: " + d_grades.sort().join(", "));
console.log("There are " + c_grades.length + " C Grades: " + c_grades.sort().join(", "));
console.log("There are " + b_grades.length + " B Grades: " + b_grades.sort().join(", "));
console.log("There are " + a_grades.length + " A Grades: " + a_grades.sort().join(", "));
console.log("The highest grade is " + highGrade + "!");
console.log("The lowest grade is " + lowGrade + " =(");