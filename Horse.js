function Horse(name)  {
  this.name = name;
}

Horse.prototype.run = function() {
  console.log('horse is running...');
};

Horse.prototype.sound = function() {
  console.log("hi hihihi...");
};
module.exports = Horse;