(function() {
  window.toRoman = function(number) {
    var output;
    output = '';
    while (number > 0) {
      output += 'I';
      number--;
    }
    return output;
  };
}).call(this);
