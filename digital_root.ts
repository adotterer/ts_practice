function digitalRoot(num: number, radix: number): number {
  if (num === 0) return 0
  let numInRadix = num.toString(radix)
  while (numInRadix.length > 1) {
    let sum = 0
    for (let dig of numInRadix) {
      const parsedInt = parseInt(dig, radix)
      sum += parsedInt
    }
    numInRadix = sum.toString(radix)
  }
  return Number(numInRadix)
}

console.log(digitalRoot(123, 16))
