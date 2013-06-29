// Types
console.log({
  'Strings': {
    'literal': "Hello World" instanceof String,
    'construct': (new String("Hello World")) instanceof String
  },
  'Number': {
    'literal': 101 instanceof Number,
    'construct': (new Number(101)) instanceof Number
  },
  
  'Boolean': {
    'literal': true instanceof Boolean,
    'construct': (new Boolean()) instanceof Boolean
  },
  
  'Array': {
    'literal': ['a'] instanceof Array,
    'construct': (new Array('a')) instanceof Array
  },
  
  'Object': {
    'literal': {} instanceof Object,
    'construct': (new Object()) instanceof Object
  },
  
  'Function': {
    'anon': (function(){}) instanceof Object,
    'setTimeout': setTimeout instanceof Function
  },
  
  'Inheiritance': {
    'array': (new Array()) instanceof Object,
    'function': (function(){}) instanceof Object
  }
  
});

var x = 'x';
var y = new String('y');

console.log(x.substring === y.substring);

