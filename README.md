# historical-permutations (WORK-IN-PROGRESS - DO NOT USE!)

A JavaScript library of historical permutation algorithms from 1956 onwards.  
I originally started collecting these algorithms together as I was doing some research on early permutation algorithms as part of an ongoing project about the "Permutation Poems" of the poet and artist Brion Gysin. However, I soon found that many of these algorithms were in hard-to-find papers and little documented, often because they were superseded by more efficient algorithms only years later.

I thought that this library might be of interest to those looking to learn about permutations or the history of early computing - especially those who are trying to find out more about the technology used to write early computational poetry.

Due to the focus of my own research, nearly all of these algorithms are from the period 1956-65.

I have tried to collect as many of the original papers as possible, and these now reside in the `papers` folder of this repository - this addition does make this repo very large.

Along with the algorithms themselves, now translated from ALGOL into JavaScript, there are a series of utilities, designed to make the use of the algorithms easier. These include a small program that allows the easy replacement of the elements within an array of permutations·

## Permutation Algorithms Implemented

(Ticks indicate algorithm works and has been tested)

- 1956 - Tompkins-Paige &#9989;
- 1960 - Lehmer [Constant Difference Method] &#9989;
- 1961 - Coveyou-Sullivan (ACM71: PERMUTATION)
- 1961 - Wells [Transposition Method] &#9989;
- 1962 - Peck-Schrack (ACM86: PERMUTE)
- 1962 - Howell (ACM87: PERMUTATION)
- 1962 - Schrack-Shimrat (ACM102: PERMULEX) [reverse lexicographic]
- 1962 - Eaves (ACM130: Permute)
- 1962/63 - Shen (ACM202: PERLE) [lexicographic]
- 1962/63 - Steinhaus-Trotter-Johnson (ACM115: PERM)
- 1963 - Heap
- 1968 - Ord-Smith (ACM323: ???) [pseudo-lexicographic]

## Ordering Functions Implements

- 1947 - Gray Code
- 19?? - Lehmer Linear Congruential Generator [random number generator]
- 1964 - Durstenfeld (ACM235: SHUFFLE) [random permutation algorithm ]

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

Additionally, unlike many languages today, it was common not to use zero-based numbering for array elements; meaning that arrays are numbered starting from 1, not from 0. This means that for several of the modern JavaScript implementations an initial dummy element is added to the beginning of the arrays before feeding them into the algorithm, which is then removed upon termination.

For those algorithms from Sedgewick's paper, `process` is where each resultant permutation is output. Any filtering of results can happen here. In the JavaScript implementations, this is replaced by the callback function `cb()`.

---

## Tompkins-Paige Algorithm (1956)

Below is the ALGOL pseudo-code for the Tompkins-Paige Algorithm, as published in Robert Sedgewick's 1977 paper "Permutation Generation Methods" (Algorithm 5 in that paper on page 150). This is probably the oldest published permutation algorithm implemented on a computer.

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

In my implementation, an extra parameter can be used to define whether the rotation command rotates parts of the array left or right, resulting in different outputs - this is done by specifying either `1` or `-1` as the second parameter. Other numbers can be used, but results will vary in success depending on the length of the array.

### Usage

```javaScript
tompkinsPaige(["one", 2, 3, "4"], -1);
```

---

## D.H. Lehmer Constant Difference Method (1960)

This algorithm was originally proposed in D.H. Lehmer's 1960 paper <i>Teaching Combinatorial Tricks To A Computer</i>. In the paper, only a verbal description of the method is given, and there appears to be no easily-accessible implementation of it in modern languages.

> "We pass on to what may be called the Constant Difference Method. Given a permutation like
>
> 2 3 1 5 4 0 7 6 8
>
> one can obtain immediately another one by increasing every mark by unity, replacing 9 by 0 rather than by 10; thus
>
> 3 4 2 6 5 1 8 0 7 9
>
> In fact, we get in this way 10 permutations all with the same set o differences modulo 10 between consecutive marks, namely
>
> 1 8 4 9 6 7 2 5 2
>
> One may take as representative of these 10 permutation whose first element
> is zero, namely
>
> 0 1 9 3 2 8 5 7 4 6.
>
> Similarly the permutation
>
> 1 0 3 2 8 5 7 4 6
>
> in which we have taken the marks modulo 9, is one of 9 represented by
>
> 0 8 2 1 7 4 6 3 5.
>
> This continues on down to the case of only two marks 0 1. This suggests the following method exemplified by the case of n = 5. We begin with the permutation 0 1 2 3 4. Adding 1 1 1 1 1 modulo 5 five times to return to 0 1 2 3 4. We now subtract 1 1 1 1 and then add it back again, this time modulo 4, obtaining 0 1 2 3 0. Once more we add 1 1 1 1, this time modulo 5, obtaining 0 2 3 4 1. This is our next permutation and there are four others it represents. Continuing we come to 0 4 1 2 3 which, after giving 1 0 2 3 4, 2 1 3 4 0, 3 2 4 0 1, 4 3 0 1 2, 0 4 1 2 3 gives rise in turn to
>
> 0 3 0 1 2, 0 0 1 2 3, 0 0 0 1 2, 0 0 1 2 0, 0 0 2 3 1
>
> and finally 0 1 3 4 2, our next permutation. The process finally returns to 0 1 2 3 4.
>
> This process has been coded for the SWAC and for the 701. It is about as fast as the Walker method. If permutations with specified properties of the differences between consecutive marks are required the process is very much faster than any previous one. An example of such a property is the requirement of the differences themselves forming a permutation as in cable splicing and other management problems. The method lends itself to fractional precision representation. For n = 8, for example, one permutation can be made from its predecessor in 128 microseconds on the SWAC."
>
> Lehmer, D.H. "Teaching combinatorial tricks to a computer".
> In: Proceedings of Symposium Applied Mathematics: Combinatorial Analysis.
> 5.6 (June 1962), Vol. 10. Providence, R.I.:
> American Mathematical Society, 1960, pp. 179-193

### Usage

```javaScript
lehmer(["one", 2, 3, "4"]);
```

---

## Coveyou and Sullivan (1961) [Algorithm ACM71]

This algorithm, named `PERMUTATION`, was originally published by R. R. Coveyou and J. G. Sullivan in the November 1961 issue of _Communications of the ACM_ as algorithm ACM71.

<pre>
<code>
<b>procedure</b> PERMUTATION (I, P, N);
    <b>value</b> I, N; <b>integer</b> N; <b>integer array</b> P; <b>boolean</b> I;
    <b>comment</b> This <b>procedure</b> produces all permutations of the integers from 0 through N.  
      Upon entry with I = <b>false</b> the <b>procedure</b> initializes itself producing no permutation.  
      Upon each successive entry into the <b>procedure</b> with I = <b>true</b> 
      a new permutation is stored in P[0] through P[N].  
      When the process has been exhausted a sentinel is set:
      P[0]: -1,
      N &ge; 0;
    <b>begin</b>
      <b>integer</b> i; <b>own integer array</b> x[0:N];
      <b>if</b> ¬ I <b>then</b>
      <b>begin for</b> i := 0 <b>step</b> 1 <b>until</b> N-1 <b>do</b> x[i] := 0; x[N] := -1;
        <b>go to</b> E <b>end</b>;
      <b>for</b> i := N <b>step</b> -1 <b>until</b> 0 <b>do begin if</b> x[i]&ne;i <b>then go to</b> A;     
        i := 0 <b>end</b>;
    P[0] := -1; <b>go to</b> E;
A:  x[i] := x[i]+1; P[0] := 0;
    <b>for</b> i:= 1 <b>step</b> 1 <b>until</b> N <b>do</b>
      <b>begin</b> P[i] := P[i-x[i]]; P[i-x[i]] := i <b>end</b>
E:  <b>end</b> PERMUTATION
</code>
Coveyou, R. R. and J. G. Sullivan. "Algorithm 71: permutation". 
In: Communications of the ACM 4.11
(Nov. 1961), p. 497.
</pre>

## NOT FINISHED!!!!

---

## Wells (1961)

This algorithm, by M. B. Wells, was originally described in the 15th issue of the journal _Mathematics of Computation_ in the article "Generation of permutations by transposition". This implementation is based Boothroyd's 1965 improvement, and taken from Sedgewick's paper:

<pre>
<code>
<b>procedure</b> <i>permutations</i>(<i>N</i>)
  <b>begin</b> <i>c</i>:=1;
    <b>loop</b>:
      <b>if</b> <i>N</i>>2 <b>then</b> <i>permutations</i>(<i>N</i>-1)
      <b>endif</b>;
    <b>while</b> <i>c</i><</i>N</i>;
      P[B[<i>N</i>,<i>c</i>]]:=:P[<i>N</i>];
      <i>c</i>:=<i>c</i>+1
    <b>repeat</b>
  <b>end</b>;
</code>
</pre>

in which `P[B[N,c]]:=:P[N];` is:

<pre>
<code>
<b>if</b> (N <i>even</i>) and (<i>c</i>>2)
  <b>then</b> P[<i>N</i>]:=:P[<i>N</i>-<i>c</i>]
  <b>else</b> P[<i>N</i>]:=:P[<i>N</i>-1] <b>endif</b>
</code>
</pre>

Wells, M. B. "Generation of permutations by transposition". In: _Mathematics of Computation_ 15 (1961) pp. 192-195.

NOTE: Because of the fact the original algorithm is based on an array in which the indexes start from 1 rather than 0, and that it will not work otherwise, the algorithm inserts a meaningless placeholder element in the first position (e.g. the \'0\' in [0,1,2,3,4,5]), then removes it for the output.'. This algorithm also only takes in

```javaScript
wells(["one", 2, 3, "4"]);
```

---

## Peck and Schrack (1962)

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
