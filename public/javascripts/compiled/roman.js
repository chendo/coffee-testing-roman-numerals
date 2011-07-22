(function() {
  window.toRoman = function(number) {
    var output;
    output = '';
    number = number * 1;
    while (number > 0) {
      if (number === 4) {
        output += 'IV';
        number -= 4;
      } else {
        output += 'I';
        number--;
      }
    }
    return output;
  };
}).call(this);
