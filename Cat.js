function Cat(name)  {
  this.name = name;
  this.stomach = [];
  console.log("This is a cat.");
}
Cat.prototype.eat = function(mouse) {
  this.stomach.push(mouse);
}
module.exports = Cat;