
function digitalRoot(num: number, radix: number): number {
  if (num === 0) return 0
  let hexadecimal = num.toString(radix)
  while (hexadecimal.length > 1) {
    let sum = 0
    for (let dig of hexadecimal) {
      const parsedInt = parseInt(dig, radix)
      sum += parsedInt
    }
    hexadecimal = sum.toString(radix)
  }
  return Number(hexadecimal)
}

console.log(digitalRoot(123, 16))
