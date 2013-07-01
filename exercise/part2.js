/**
 * Create a prototype that can act as an array, but isn't
 * 
 */
var protos = new Array();
protos.push(
  require('./question/part2').Collection,
  require('./answer/part2').Collection
);

var log = function()
{
  arguments[0] = '  ' + arguments[0];
  console.log.apply(console.log, arguments);
};

for (var i in protos)
{
  console.log('Index ' + i);
  var Collection = protos[i];
  
  // Instantiate with one element
  var myColl = new Collection(1);
  log('Instance of Array?', (myColl instanceof Array));
  
  // Add three more elements
  myColl.push('a');
  myColl.push(new Date(), new Array());
  
  // Ensure length
  log('Length should be 4?', myColl.length);
  
  // Call the log method
  myColl.log(log);
  log(myColl.join(', '));
}
