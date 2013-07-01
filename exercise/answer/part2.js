/**
 * The Collection prototype
 * 
 * @exports Collection as Collection
 */
var Collection = exports.Collection = function() 
{
  // This is what the normal array constructor does
  // 
  this.push.apply(this, arguments);
};

Collection.prototype = new Array();

/**
 * 
 * @returns {Collection}
 */
Collection.prototype.log = function(func)
{
  func = (func || console.log);
  
  for (var i = 0; i < this.length; i++)
  {
    
    func(
      Object.prototype.toString.call(this[i]).replace(/\[\w+ (\w+)\]/, '$1'), 
      this[i]);
  }
  
  return this;
};

/**
 * Override the Array.join method
 * 
 * @param {String} glue
 * @returns {String}
 */
Collection.prototype.join = function(glue)
{
  return 'Collection: ' + Array.prototype.join.call(this, glue);
};
