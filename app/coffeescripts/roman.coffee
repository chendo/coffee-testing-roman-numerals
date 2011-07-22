#
# Do roman numerals
#
window.toRoman = (number) ->
  output = ''
  while number > 0
    output += 'I'
    number--
  output
