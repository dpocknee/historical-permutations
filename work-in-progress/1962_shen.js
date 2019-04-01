function perle(n, cb) {
  const s = Array.from({ length: n + 1 }, (value, index) => index);

  for (let z = 1; z < 20; z++) {
    let w = n;
    // Lilie
    while (s[w] < s[w - 1]) {
      if (w === 2) {
        cb(s);
        break;
      }
      w -= 1;
    }
    // w -= 1;
    let u = s[w - 1];
    // console.log(u, n, w - 1, s);
    console.log(n, w, n > w);
    for (let j = n; j >= w; j--) {
      console.log("check1", j, u, w, s);
      if (s[j] > u) {
        s[w - 1] = s[j];
        s[j] = u;
        // Tulpe
        const tulpeValue = (n - w - 1) / 2 + 0.2;
        console.log("tulpeValCalc", n - w - 1, s);
        for (let k = 0; k < tulpeValue; k++) {
          console.log(
            "tulpe",
            "k:",
            k,
            " / u:",
            u,
            " / s[n - k]",
            s[n - k],
            " / s[w + k]:",
            s[w + k]
          );
          u = s[n - k];
          s[n - k] = s[w + k];
          s[w + k] = u;
        }
        cb(s);
      }
    }
  }
}

function fischerKrause(n, cb) {
  let p  = Array.from({ length: n + 1 }, (value, index) => index);
  cb(p);
  
  let i;
  let j;
  while (i >= n) {
    i = 2;
    while (p[i] < p[i - 1]) {
      i += 1;
    }
  if(i<n) break;
    for (j = 1; p[j] > p[i]) {
      j += 1;
    }
    p[i] = p[j];
    p[j] = p[i];
    
    let r = 1;
    while (r < n )


}
P[N+I]=~;
process;
loop.
t:=2; loop while P[~]<P[~-I]: ~:=~+1 repeat;
while t < N ;
j : = l ; loop while P [ j ] > P [ i ] : j : = j + 1 repeat;
P[~]:=:P~];
Computing Surveys, Vol. 9, No 2, June 1977154
•
R. Sedgewick
reverse(~ -1);
process;
repeat;

perle(4, s => console.log(s));
