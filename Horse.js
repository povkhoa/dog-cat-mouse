function Horse(name)  {
  this.name = name;
}
Horse.prototype.run = function() {
  console.log('horse is running...');
};

Horse.prototype.sound = function() {
  console.log("hihihi");
};
module.exports = Horse;