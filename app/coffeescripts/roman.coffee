#
# Do roman numerals
#
window.toRoman = (number) ->
  output = ''
  number = number * 1
  while number > 0
    if number >= 9
      output += 'XI'
      number -= 9
    else if number >= 5
      output += 'V'
      number -= 5
    else if number >= 4
      output += 'IV'
      number -= 4
    else
      output += 'I'
      number--
  output
