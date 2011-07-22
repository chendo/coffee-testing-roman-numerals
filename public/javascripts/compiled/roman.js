(function() {
  window.toRoman = function(number) {
    var output, processNumeral;
    output = '';
    number = number * 1;
    processNumeral = function(value, roman) {
      if (number >= value) {
        output += roman;
        number -= value;
        return true;
      }
    };
    while (number > 0) {
      if (processNumeral(40, 'XL')) {
        continue;
      }
      if (processNumeral(10, 'X')) {
        continue;
      }
      if (processNumeral(9, 'IX')) {
        continue;
      }
      if (processNumeral(5, 'V')) {
        continue;
      }
      if (processNumeral(4, 'IV')) {
        continue;
      }
      processNumeral(1, 'I');
    }
    return output;
  };
}).call(this);
