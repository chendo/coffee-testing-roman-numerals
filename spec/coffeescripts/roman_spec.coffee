describe 'toRoman()', ->

  testRoman = (integer, roman) ->
    it "should convert #{integer} to #{roman}", ->
      expect(toRoman(integer)).toEqual(roman)

  tests =
    1: 'I'
    2: 'II'
    3: 'III'

  for integer, roman of tests
    testRoman integer, roman
