console.log("hello");
console.log("i am md yousuf bhuiyan");

var arr = [12, 12, 23, 24];

arr.forEach(function(element) {
  console.log("element is : " + element);
});

arr.every(function(element) {
  console.log("element : " + element);
});

function add(a, b, callback) {
  callback(a, b);
}

function calculateGpa(number) {
  var gpa;
  if (number >= 80) {
    gpa = "A+";
  } else if (number >= 70) {
    gpa = "A";
  } else if (number >= 60) {
    gpa = "A-";
  } else if (number >= 50) {
    gpa = "B";
  } else if (number >= 40) {
    gpa = "C";
  } else {
    gpa = "Failed";
  }

  return function(name) {
    return "Hello " + name + " , Your gpa is : " + gpa;
  };
}

var gpaReference = calculateGpa(35);
console.log(gpaReference("md yousuf"));
