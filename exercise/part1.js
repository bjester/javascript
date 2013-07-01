/**
 * Runs part 1
 */
var protos = new Array();
protos.push(
  require('./question/part1').Animal,
  require('./answer/part1').Animal
);

for (var i in protos)
{
  console.log('Index ' + i);
  
  var goat = new protos[i]('goat');
  goat.eat(protos[i]('sheep').eat(new protos[i]('cow')).eat('fish'));
  console.log('  ' + goat.whatIAte());
}
