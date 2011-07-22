(function() {
  window.toRoman = function(number) {
    var output;
    output = '';
    number = number * 1;
    while (number > 0) {
      if (number >= 40) {
        output += 'XL';
        number -= 40;
      } else if (number >= 10) {
        output += 'X';
        number -= 10;
      } else if (number >= 9) {
        output += 'IX';
        number -= 9;
      } else if (number >= 5) {
        output += 'V';
        number -= 5;
      } else if (number >= 4) {
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
