# historical-permutations (WORK-IN-PROGRESS - DO NOT USE!)

A JavaScript library of historical permutation algorithms from 1956 onwards.  
I originally started collecting these algorithms together as I was doing some research on early permutation algorithms as part of an ongoing project about the "Permutation Poems" of the poet and artist Brion Gysin. However, I soon found that many of these algorithms were in hard-to-find papers and little documented, often because they were superseded by more efficient algorithms only years later.

I thought that this library might be of interest to those looking to learn about permutations or the history of early computing - especially those who are trying to find out more about the technology used to write early computational poetry.

Due to the focus of my own research, nearly all of these algorithms are from the period 1956-65.

Along with the algorithms themselves, now translated from ALGOL into JavaScript, there are a series of utilities, designed to make the use of the algorithms easier. These include a small program that allows the easy replacement of the elements within an array of permutations·

## Permutation Algorithms Implemented

- 1956 - Tompkins-Paige / 1962 - Peck-Schrack (ACM 86: PERMUTE)
- 1960 - Lehmer Constant Difference Method
- 1960 - Wells
- 1962 - Shen Lexicographic
- 1962 - Schrack-Shimrat Reverse Lexicographic
- 1962/63 - Steinhaus-Trotter-Johnson
- 1963 - Heap

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

If you just want to use the library and are not bothered about contributing to the project or running the testing suite that accompanies it, then there are no prequesites needed for running the library, as it does not need the use of any external libraries. If you are planning on running the testing suite you will need to be running `node.js` and install the devDependencies mentioned in the `package.json` file (these include `lodash`, `chai` and `mocha`).

### Installing

The simples way to use this library is to download or clone the folder from the github repository onto a folder on your hardrive containing the project you want to use it with, then require or import in the files, as mentioned below in the `Deployment` section.

### With node.js

If you are running your JavaScript using `node.js`, the easiest way to use this library is either to download it directly through the node package manager (npm) by using the commandline or terminal to navigate to the folder where you want to install the library and running:

```
npm i historical-permutations
```

## Testing

Tests are written in `chai` and `mocha` and can be run through `node.js` using the command `npm test`. The tests are written to ensure that all of the algorithms are implemented correctly and produce all possible permutations without repetition when given an array of a certain length.

## Deployment

The library can be included in your project by including either of the following lines at the top of your javascript file (implementation depends on the version of JavaScript you are using):

```JavaScript
const permutations = require('historical-permutations');

import permutations from 'historical-permutations';
```

This will require in or import all of the permutations in the library, which can then be used by invoking them via the variable assigned to the library:

```JavaScript
permutations.tompkinsPaige([1,2,3,4], 1);
```

If you only want to use a single algorithm, this can be done by destructuring it from the library when you import or require it in:

```JavaScript
const { tompkinsPaige } = require('historical-permutations');

tompkinsPaige([1,2,3,4], 1);
```

## Built With

- `node.js`

## Author

- David Pocknee

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- MENTION STEINHAUS-TROTTER LIBRARY!

# The Algorithms

## General Notes

Most of the algorithms below are taken from journals and articles from the 1950s and 1960s, when ALGOL was the standard language used in journals such as the <i>Communications of the ACM</i> and <i>The Computer Journal</i>.

Additionally, unlike many languages today, it was common not to use zero-based numbering for array elements; meaning that arrays are numbered starting from 1, not from 0. This means that for several of the modern JavaScript implementations an initial dummy element is added to the beginning of the arrays before feeding them into the algorithm and then removed upon termination.

For those algorithms from Sedgewick's paper, `process` is where each resultant permutation is output. Any filtering of results can happen here. In the JavaScript implementations, this is replaced by the callback function `cb()`.

---

## Tompkins-Paige Algorithm (1956)

Below is the ALGOL pseudo-code for the Tompkins-Paige Algorithm, as published in Robert Sedgewick's 1977 paper "Permutation Generation Methods" (Algorithm 5 in that paper on page 150).

<pre>
<code>
<i>i=N</i>; <b>loop</b>: <i>c[i]</i>=1 <b>while</b> <i>i</i>&gt;2: <i>i</i>:=<i>i</i>-1 <b>repeat</b>;
  <i>process</i>;
<b>loop</b>:
    <i>rotate(i)</i>
    <b>if</b> <i>c[i]</i>&lt;<i>i</i> <b>then</b> <i>c[i]</i>:=<i>c[i]</i>+1; <i>i</i>:=2;
                <i>process</i>;
              <b>else</b> <i>c[i]</i>:=1; <i>i</i>:=<i>i</i>+1
    <b>endif</b>;
<b>while</b> <i>i</i>&le;<i>N</i> <b>repeat</b>;
</code>

Sedgewick, Robert. "Permutation Generation Methods". 
In: ACM Comput. Surv. 9.2 (1977), pp. 137-164. 
issn : 0360-0300. doi : 10.1145/356689.356692. 
url : http://doi.acm.org/10.1145/356689.356692.
</pre>

NOTE: In the algorithm above, rotate() is a function that does a cyclic left-rotation of the first <i>i</i> elments of the array:

<pre>
<code>
  <i>t</i>:=P[1]; <i>k</i>:=2;
  <b>loop while</b> <i>k</i>&le;<i>i</i>: P[<i>k</i>-1]:=P[<i>k</i>] <b>repeat</b>;
  P[<i>i</i>]:=<i>t</i>;
</code>
</pre>

This algorithm was implemented in `ALGOL` by Peck and Schrack in 1962:

<pre>
<code>
  <b>procedure</b> PERMUTE (x,n);
  <b>array</b> x; <b>integer</b> n;
  <b>comment</b> Each call of PERMUTE executes a permutation of the first n components of x.  
    It assumes a nonlocal Boolean variable 'first', 
    which when true causes the procedure to initialise the signature vector p.  
      Thereafter 'first' remains false until after n! calls;
  <b>begin own integer array</b> p[2:n]; <b>integer</b> i k;
    <b>if</b> first <b>then</b>
    <b>begin for</b> i := 2 <b>step</b> 1 <b>until</b> n <b>do</b>
              p[i] := i; first := <b>false</b>
    <b>end</b> initialise;
    <b>for</b> k := 2 <b>step</b> 1 <b>until</b> n <b>do</b>
      <b>begin integer</b> km;  <b>real</b> t;
        t := x[1]; km := k - 1;
        <b>for</b> i := 1 <b>step</b> 1 <b>until</b> km <b>do</b>
          x[i] := x[i+1];
        x[k] := t; p[k] := p[k] - 1;
        <b>if</b> p[k] &#8800; 0 <b>then go to</b> EXIT;
        p[k] := k
      <b>end</b> k;
    first := <b>true</b>;
  EXIT: <b>end</b> PERMUTE
</code>

Peck, J. E. L. and G. F. Schrack. "Algorithm 86: Permute". 
In: Communications of the ACM 5.4 (Apr. 1962), pp. 208-209
</pre>

In my implementation, an extra parameter can be used to define whether the rotation command rotates parts of the array forwards or backwards, resulting in different outputs - this is done by specifying either `1` or `-1` as the second parameter. Other numbers can be used, but results will vary in success depending on the length of the array.

### Usage

```javaScript
const permutations = require('historical-permutations');

permutations.tompkinsPaige(["one", 2, 3, "4"], -1);
```

---

## D.H. Lehmer Constant Difference Method (1960)

This algorithm was originally proposed in D.H. Lehmer's 1960 paper <i>Teaching Combinatorial Tricks To A Computer</i>. In the paper, only a verbal description of the method is given, and there appears to be no easily-accessible implementation of it in modern languages.

```
We pass on to what may be called the Constant Difference Method.  Given a permutation like

2 3 1 5 4 0 7 6 8

one can obtain immediately another one by increasing every mark by unity, replacing 9 by 0 rather than by 10; thus

```
