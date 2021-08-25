const array1 = [-1, 5, 10, 20, 28, 3];
const array2 = [26, 134, 135, 15, 17];

function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here
  let smallestDifference = Infinity;
  let smallestPair = [0, 0];
  for (let i = 0; i < arrayOne.length; i++) {
    let num1 = arrayOne[i];
    for (let j = 0; j < arrayTwo.length; j++) {
      let num2 = arrayTwo[j];
      if (Math.abs(num1 - num2) < smallestDifference) {
        smallestDifference = Math.abs(num1 - num2);
        [smallestPair[0], smallestPair[1]] = [num1, num2];
      }
    }
  }

  return smallestPair;
}


function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here
  console.log(arrayOne);
  console.log(arrayTwo);
  let smallestDifference = Infinity;
  let smallestPair = [0, 0];
  for (let i = 0; i < arrayOne.length; i++) {
    let num1 = arrayOne[i];
    for (let j = 0; j < arrayTwo.length; j++) {
      let num2 = arrayTwo[j];
      console.log(num1, num2);
      if (Math.abs(num1 - num2) < smallestDifference) {
        smallestDifference = Math.abs(num1 - num2);
        console.log(num1 - num2, "smallesetDifference", smallestDifference);
        console.log(smallestPair)[(smallestPair[0], smallestPair[1])] = [
          num1,
          num2,
        ];
        console.log(smallestPair, "we're here");
      }
    }
  }
  return smallestPair;
}

console.log("answer ---> ", smallestDifference(array1, array2));
