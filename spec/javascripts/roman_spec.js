(function() {
  describe('toRoman()', function() {
    var integer, roman, testRoman, tests, _results;
    testRoman = function(integer, roman) {
      return it("should convert " + integer + " to " + roman, function() {
        return expect(toRoman(integer)).toEqual(roman);
      });
    };
    tests = {
      1: 'I',
      2: 'II',
      3: 'III',
      4: 'IV',
      5: 'V',
      6: 'VI',
      7: 'VII',
      8: 'VIII',
      9: 'XI',
      10: 'X'
    };
    _results = [];
    for (integer in tests) {
      roman = tests[integer];
      _results.push(testRoman(integer, roman));
    }
    return _results;
  });
}).call(this);
