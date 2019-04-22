function howellAdd () {
  n[k] = n[k] + 9;
  for(let j = 1; j < k; j++) {
    let carry;
    if(k>10) carry = n[k-i+1]/k // B
    else carry = n[k-i+1]/10 // C
    if (carry === 0) howellTest();
    n[k-i] = n[k-i] + carry;
    n[k-i+1] = n[k-i+1] - 10 * carry;
  }      
}

function howellTest () {
  for (let l = 1; l <=k; l++) {
    if(n[i] - (k-1) > 0) howellAdd();
  }
  for (let l = 1; l< k; l++) {
    for (let j = i + 1; j <= k; j++) {
      if(n[l] - n[j] === 0) howellAdd();
    }
  }
}

function howell (length) {
  let k = length;
  let n = Array.from({length: length + 1}, (v, i) => i);
  for (let i = 1; i <= k; i++) {
    if(n[i] - k + i !== 0) {
      // add
      n[k] = n[k] + 9;
      for(let j = 1; j < k; j++) {
        let carry;
        if(k>10) {
          // B
          carry = n[k-i+1]/k
        } else {
          // C
          carry = n[k-i+1]/10
          if (carry === 0) {
            // test
            for (let l = 1; l <= k;l++) {
              if(n[i] - (k-1) > 0) 
            }
          } else {

          }
        }
      }
    } else {
      for(let i = 1; i < k; i++) {
        n[i] = i -1;
      }
    }
    console.log(n);
  }
}