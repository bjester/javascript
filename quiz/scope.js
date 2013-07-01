// Understanding scope
var x = 101, y = 909;

(function()
{
  (function()
  {
    var x = 303;
    y = 707;
    z = 505;
  })();

  var y;
})();

console.log(x, y, z); // Values?
