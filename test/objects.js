// Object construction
function Fruit(color)
{
  this.color = color;
  return this;
};

Fruit.color = 'White';

var orange = new Fruit('Orange');
var red = Fruit('Red');

console.log(orange.color, red.color, Fruit.color); // Values?

// So what is 'red' actually
console.log(red.color, global.color); // global === window in Node.js
