const { ordSmith, ordSmithRevLex, tompkinsPaige } = require("../index");
const { compareArrays } = require("../utils/utils");

const ord = ordSmith(4);
const tomp = tompkinsPaige([1, 2, 3, 4], -1);

ord.forEach((el, index) => {
  console.log(el, tomp[index]);
});
// console.log(ordSmith(3, "sedgewick"));
