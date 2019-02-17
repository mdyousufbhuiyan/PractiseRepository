var Person = {
    name: "md Yousuf",


    print: function () {
        console.log('hello ' + this.name);
    
    }

}

var p = Person.print.bind(Person);
p()