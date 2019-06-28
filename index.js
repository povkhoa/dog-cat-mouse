var Dog = require('./Dog');
var Cat = require('./Cat');

var myDog = new Dog('Pug');
var myCat = new Cat('Tom');


myDog.sayHi();
myDog.eat(myCat);
console.log(myDog);