function Person(firstName, lastName, age, email, phone) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.phone = phone;

  //   this.fullName = function() {
  //     return function() {
  //       console.log("name : " + this.name + "age : " + this.age);
  //     }.bind(this);
  //   };
}

//........................ person prototype.................................................
Person.prototype = {
  fullName: function(firstName, lastName) {
    //  Person.call(this, firstname, lastName);
    this.firstName = firstName;
    this.lastName = lastName;

    console.log("fullName is : " + this.firstName + "  " + this.lastName);
  }
};

function SavingsAccounts(firstName, lastName, age, email, phone, accountNo) {
  Person.call(this, firstName, lastName, age, email, phone);
}

function fullName(name) {
  //  Person.call(this,name);

  console.log("Name " + this.name);
}

var p1 = new Person(
  "md yousuf",
  "bhuiyan",
  25,
  "mdyousuf336@gmail.com",
  "01837005336"
);
var p2 = new Person(
  "md Arif",
  "bhuiyan",
  22,
  "mdyousuf336@gmail.com",
  "01837005336"
);

// p1.fullName("md yousuf", "bhuiyan");
// fullName("md yousuf");

// var s = new SavingsAccounts(
//   "md yousuf",
//   "bhuiyan",
//   25,
//   "mdyousuf336@gmail.com",
//   "7290"
// );

// var a = [23, 4, 23, 4, 5, 6];
// a.forEach(element => {
//   console.log("" + element);
// });
