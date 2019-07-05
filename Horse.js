function Horse(name)  {
  this.name = name;
}
Horse.prototype.run = function() {
  console.log('horse is running...');
};

module.exports = Horse;