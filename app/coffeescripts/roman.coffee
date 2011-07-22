#
# Do roman numerals
#
window.toRoman = (number) ->
  output = ''
  number = number * 1
  processNumeral = (value, roman) ->
    if number >= value
      output += roman
      number -= value
      true

  while number > 0
    continue if processNumeral 50, 'L'
    continue if processNumeral 40, 'XL'
    continue if processNumeral 10, 'X'
    continue if processNumeral 9, 'IX'
    continue if processNumeral 5, 'V'
    continue if processNumeral 4, 'IV'
    processNumeral 1, 'I'
  output
