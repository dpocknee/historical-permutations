function rotate(arrayIn, rotation) {
  //Additional rotation code
  rotation = rotation * -1;
  return arrayIn.slice(rotation).concat(arrayIn.slice(0, rotation));
}

function swapper(inputArray, index1, index2) {
  let a = inputArray[index1];
  let b = inputArray[index2];
  inputArray[index1] = b;
  inputArray[index2] = a;
  return inputArray;
}

function arrayShift(arrayin, amountToShift) {
  //Does any rotations
  return arrayin.map(x => rotate(x, amountToShift % arrayin[0].length));
}

function arrayReverse(arrayin, onoff) {
  // reverses the array
  const outty = [];
  arrayin.forEach(x => {
    if (onoff) {
      outty.push(x.reverse());
    } else {
      outty.push(x);
    }
  });
  return outty;
}

// function arrayFormatter(arrayToOutput, divId, plain) {
//   //Formats the array into a css div design.
//   let outter = '';
//   arrayToOutput.forEach(x => {
//     let rowOutput = '';
//     x.forEach(y => {
//       rowOutput = plain
//         ? rowOutput + `   ` + mainArray[y - 1]
//         : rowOutput +
//           `<div class="element${y} indivElement">` +
//           mainArray[y - 1] +
//           `</div>`;
//     });
//     outter = plain
//       ? outter + rowOutput + '</br>'
//       : outter + '<div class="permutationRow">' + rowOutput + '</div>';
//   });
//   document.getElementById(divId).innerHTML = outter;
// }

// function shiftFunction(arrayToShift, targetDiv, shiftNumberId, reverseId) {
//   // Implements any rotations or reversing specified by the user.
//   arrayFormatter(
//     arrayReverse(
//       arrayShift(arrayToShift, document.getElementById(shiftNumberId).value),
//       document.getElementById(reverseId).checked
//     ),
//     targetDiv,
//     document.getElementById('plainTextBox').checked
//   );
// }

module.exports = { rotate, swapper, arrayShift };
