function walker(n) {
  const a = Array.from({ length: n + 1 }, (value, index) => index);
  const s = Array.from({ length: n + 1 }, () => false);
  // 1
  let k = 1;
  // 2
  s[k] = a[1];
  // 3
  for (let i = 1; i < 10; i++) {
    if (s[k]) {
      // 4
      let min = 100;
      s[k].forEach(element => {
        if (element < min) min = element;
      });
      a[k] = min;
      // 5
      if (k === n) {
        console.log(a);

        const aSet = a.filter(element => element > a[k]);
        // 12
        s[k] = [...s[k], ...aSet];
        // -> 3
      } else {
        // 6
        k += 1;
        // 7
        s[k] = s[k];
      }
    }
    // 3
    else {
      // 9
      if (k === 1) break;
      // 10
      k -= 1;
      // 11
      s[k] = k;
    }
  }
}

walker(4);

// 1. Set k = 1.
// 2. Set Sk = S1.
// 3. If Sk is empty jump to 9.
// 4. Set ak equal to the smallest element of Sk.
// 5. If k = n jump to 14.
// 6. Replace k by k + 1.
// 7. Compute Sk.
// 8. Jump to 3.
// 9. If k = 1, stop.
// 10. Replace k by k — 1.
// 11. Compute Sk.
// 12. Replace Sk by Sk ∩ {a| a > ak}.
// 13. Jump to 3.
// 14. Record A = {a1, ... , an}.
// 15. Jump to 12.
