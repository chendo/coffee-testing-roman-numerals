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
      9: 'IX',
      10: 'X',
      11: 'XI',
      12: 'XII',
      13: 'XIII',
      14: 'XIV',
      15: 'XV',
      16: 'XVI',
      17: 'XVII',
      18: 'XVIII',
      19: 'XIX',
      20: 'XX',
      25: 'XXV',
      30: 'XXX',
      40: 'XL',
      45: 'XLV',
      49: 'XLIX',
      50: 'L'
    };
    _results = [];
    for (integer in tests) {
      roman = tests[integer];
      _results.push(testRoman(integer, roman));
    }
    return _results;
  });
}).call(this);
