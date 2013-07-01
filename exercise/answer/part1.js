/**
 * Animal
 * 
 * @exports Animal as Animal
 */
var Animal = exports.Animal = function(name)
{
  // If not using 'new'
  if (!(this instanceof Animal))
  {
    // Just return name, since its an Animal
    if (name instanceof Animal)
    {
      return name;
    }
    
    // New one!
    return new Animal(name);
  }
  
  // Ok get the name then
  if (name instanceof Animal)
  {
    name = name.name;
  }
  
  this.__construct(name);
};

/**
 * Proto
 */
Animal.prototype = 
{
  name: null,
  eaten: null,
  
  /**
   * 
   * @param {String|Animal} name
   */
  __construct: function(name)
  {
    this.name = name;
    this.eaten = new Array();
  },
  
  /**
   * 
   * @param {String|Animal} name
   * @return {Animal}
   */
  eat: function(name)
  {
    this.eaten.push(Animal(name));
    return this;
  },
    
  /**
   * 
   * @returns {String}
   */
  whatIAte: function()
  {
    var eaten = this.name + ' who ate ';
    
    if (this.eaten.length === 0)
    {
      return eaten + 'nothing';
    }
    else
    {
      eaten += 'a ';
    }
    
    for (var i = 0; i < this.eaten.length; i++)
    {
      var meal = this.eaten[i].whatIAte();
      
      if (i > 0)
      {
        eaten += ' and ';
      }
      
      eaten += meal;
    }
    
    return eaten;
  }
};
