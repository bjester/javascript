// Understanding prototype
Array.prototype.implode = function(glue)
{
  // There's already a method to do this
  return this.join(glue);
};

var a = ['So', 'cool'];
var b = new Array('this', 'is');
console.log(a.join(' '), b.implode(' '));
