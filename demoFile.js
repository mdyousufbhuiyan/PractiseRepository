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



