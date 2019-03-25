const { superpermutation } = require("../index");

const fourTest = superpermutation(4);
// const fiveTest = superpermutation(5);
// const sixTest = superpermutation(6);
// const sevenTest = superpermutation(7);

console.log("four length:", fourTest.length, fourTest.join(", "));
// console.log("five length:", fiveTest.length, fiveTest.join(" "));
// console.log("six length:", sixTest.length, sixTest.join(" "));
// console.log("seven length:", sevenTest.length, sevenTest.join(" "));
