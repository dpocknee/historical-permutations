# historical-permutations

## A JavaScript library of historical permutation algorithms from 1956 to the present day.

[![Build Status](https://travis-ci.com/dpocknee/historical-permutations.svg?branch=master)](https://travis-ci.com/dpocknee/historical-permutations) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/dpocknee/historical-permutations/graphs/commit-activity) [![Generic badge](https://img.shields.io/badge/Contributions-Welcome-green.svg)](https://shields.io/)

I originally started collecting these algorithms together as I was doing some research on early permutation algorithms as part of an ongoing project about the "Permutation Poems" of the poet and artist Brion Gysin. However, I soon found that many of these algorithms were in hard-to-find papers and little documented, often because they were superseded by more efficient algorithms only years later.

I thought that this library might be of interest to those looking to learn about permutations or the history of early computing - especially those who are trying to find out more about the technology used to write early computational poetry.

Due to the focus of my own research, nearly all of these algorithms are from the period 1956-65.

I have tried to collect as many of the original papers as possible, and these now reside in the `papers` folder of this repository - this addition does make this repo very large, however, these pdfs are only included in the git repository, and not in the package available on `npm`.

Many of these algorithms are taken from Robert Sedgewick's 1977 paper _Permutation Generation Methods_.

Along with the algorithms themselves, now translated from ALGOL into JavaScript, there are a series of utilities, designed to make the use of the algorithms easier. These include a small program that allows the easy replacement of the elements within an array of permutations·

## Current Status

The current aim is to implement as many of the algorithms mentioned in the following section and release this as version 1.0.0. As of the end of April 2019, 18 of the 22 algorithms planned have been implemented and have been released on `npm` as version 1.0.0.

- 8 March 2019 (v 0.1.0)
  - Tompkins-Paige, Lehmer CDM, Hall, Coveyou-Sullivan, Wells, Peck-Schrack, Schrack-Shimrat, Heap, Myrvold-Ruskey
- 25 March 2019 (v 0.3.0)
  - Superpermutation algorithm added.
- 26 March 2019 (v 0.4.0)
  - Steinhaus-Johnson-Trotter added.
- 2 April 2019 (v 0.5.0)
  - Gysin-Sommerville added.
- 9 April 2019 (v 0.6.0)
  - Pandita added.
- 22 April 2019 (v 0.7.0)
  - Langdon added.
- 24 April 2019 (v 0.8.0)
  - Ord-Smith added.
- 24 April 2019 (v 1.0.0)
  - Version 1.0.0 released.

## Permutation Algorithms Implemented

Ticks indicate the algorithm works and has been tested. Crosses indicate that algorithm is not and will not be included in the library and is only mentioned below for historical context. Information on all of these algorithms and their original implementations can be found below. I have focused only on including algorithms which give different orderings to each other when run, hence why I have only decided to implement one of the several lexicographic algorithms below.

Currently, the two algorithms lacking are Eaves, Boothroyd (BCJ30) and Ives.

- 1400 - Pandita [lexicographic] &#9989;
  - `pandita(4)`
- 1956 - Tompkins-Paige &#9989;
  - `tompkinsPaige(["one", 2, 3, "4"], 1)`
- 1960 - Lehmer [Constant Difference Method] &#9989;
  - `lehmer([1, 2, 3, 4])`
- 1960 - Walker Backtrack Method [lexicographic] &#10060;
- 1960 - D. N. Lehmer Lexicographic [lexicographic] &#10060;
- 1960 - Hall &#9989;
  - `hall(4)`
- 1961 - Coveyou-Sullivan (ACM71: PERMUTATION) &#9989;
  - `coveyouSullivan(4)`
- 1961 - Wells (ACM115) [Transposition Method] &#9989;
  - `wells(["1", 2, "3", 4])`
- 1962 - Peck-Schrack (ACM86: PERMUTE) [Tompkins-Paige w/ leftwise rotation] &#9989;
  - `peckSchrack(4)`
- 1962 - Schrack-Shimrat (ACM102: PERMULEX) [lexicographic] &#9989;
  - `schrackShimrat(4)`
- 1962 - Eaves (ACM130: Permute) **for release in 2.0.0**
- 1962 - Howell (ACM87: PERMUTATION) [lexicographic] &#10060;
- 1962/63 - Shen (ACM202: PERLE) [lexicographic] &#10060;
- 1962/63 - Steinhaus-Trotter-Johnson (ACM115: PERM)
  - original &#9989; `steinhausJohnsonTrotter(4)`
  - loopless &#9989; `steinhausJohnsonTrotter(4, "loopless")`
  - Even's speedup &#9989; `steinhausJohnsonTrotter(4, "even")`
- 1963 - Heap &#9989;
  - `heap([1, 2, 3, 4])`
- 1964 - Sag (ACM242) [permutation with repetitions] &#10060;
- 1967 - Langdon &#9989;
  - `langdon(4)`
- 1967 - Phillips (BCJ28) [lexicographic] &#10060;
- 1967 - Boothroyd (BCJ29) [Wells] &#10060;
- 1967 - Boothroyd (BCJ30) [for _n_>=5] **for release in 2.0.0**
- 1967 - Ord-Smith (ACM308: perm) [pseudo-lexicographic] &#10060;
- 1968 - Ord-Smith (ACM323: BESTLEX) [reverse lexicographic] &#9989;
  - `ordSmithRevLex([1, 2, 3, 4])`
- 1976 - Ives **for release in 2.0.0**
- 2001 - Myrvold-Ruskey [remainder order] &#9989;
  - `myrvoldRuskey(4)`
- 2018 - Superpermutations &#9989;
  - `superpermutation(4)`
- 2019 - Pocknee-Gysin-Sommerville [8 different orderings] &#9989;
  - `gysinSommerville(4, 1, -1)`

**CURRENT PROGRESS: 18 / 22 Algorithms Complete**

### Types Of Algorithm:

**Lexicographic:** `pandita()`, `schrackShimrat()`\
**Tompkins-Paige:** `tompkinsPaige()`, `peckSchrack()`\
**Lehmer Constant Difference:** `lehmer()`\
**Hall:** `hall()`\
**Coveyou-Sullivan:** `coveyouSullivan()`\
**Wells:** `wells()`\
**Steinhaus-Johnson-Trotter:** `stenhausJohnsonTrotter()`\
**Heap:** `heap()`\
**Langdon:** `langdon()`\
**Reverse Lexicographic:** `ordSmithRevLex()`\
**Myrvold-Ruskey:** `myrvoldRuskey()`\
**Superpermutations:** `superpermutation()`\
**Pocknee-Gysin-Sommerville:** `gysinSommerville()`

## Utilities

- `rotate([1, 2, 3], 1)`
- `rotateArrays([[1, 2, 3], [1, 3, 2], [2, 1, 3]], 1)`
- `replace([[1, 2, 3], [1, 3, 2], [2, 1, 3]], [1, 2, 3], ["A", "B", "C"], 1)`
- `reverseArrays([[1, 2, 3], [1, 3, 2], [2, 1, 3]])`
- `swap([1, 2, 3, 4, 5], 0, 3)`
- `mutatedSwap([1, 2, 3, 4, 5], 0, 3)`
- `reverseNonMutate([1, 2, 3, 4, 5])`
- `compareArrays([[1, 2, 3, 4], [1, 3, 2, 4], [1, 2, 3, 4], [1, 3, 2, 4]])`
- `cyclicModulo(-2, 5)`
- `factorial(4)`

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

If you just want to use the library and are not bothered about contributing to the project or running the testing suite that accompanies it, then there are no prerequisites needed for running the library, as it does not need the use of any external libraries. If you are planning on running the testing suite you will need to be running `node.js` and install the devDependencies mentioned in the `package.json` file (these include `lodash`, `chai` and `mocha`).

### Installing

The simplest way to use this library is to download or clone the folder from the github repository onto a folder on your hardrive containing the project you want to use it with, then require or import in the files, as mentioned below in the `Deployment` section. If you are cloning from github

### With node.js

If you are running your JavaScript using `node.js`, the easiest way to use this library is either to download it directly through the node package manager (npm) by using the commandline or terminal to navigate to the folder where you want to install the library and running:

```
npm i historical-permutations
```

## Testing

Tests are written in `chai` and `mocha` and can be run through `node.js` using the following commands:

- `npm test` runs tests on all functions in the library, including utilities and ordering algorithms but excluding algorithms in the `work-in-progress` folder.
- `npm run test:utils` only runs tests for the utiliities
- `npm run test:algo` only runs tests for the finished permutation algorithms, excluding utilities.
- `npm run test:wip` only runs the tests in the `work-in-progress` folder.

The tests are written to ensure that all of the algorithms are implemented correctly and produce all possible permutations without repetition when given an array of a certain length. Tests are only included in the github repository, not in the npm release. On github, these tests are run through `travis-ci`.

## Contributions

Contributions to this library are welome and can be made using a pull request to the github repository. Permutation algorithms that are finished and fully tested are placed in the `algorithms` folder and their tests in the `spec` folder. Utilities are found in the `utils` folder and their tests are also kept in the `spec` folder. Algorithms currently in progress or which have either not been fully tested or are failing current tests are kept in the `work-in-progress` folder, which has its own `spec` folder for tests.

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

Some of these algorithms can work with an array containing any type, as their algorithm is based on the position of the object in the array, but others will only work with arrays of numbers, as they are dependent upon evaluating the value of each element, not just its position. See the **Usage** section at the bottom of each algorithm description for more information.

### Examples

Examples of usage can be found in the `examples` folder.

## Built With

- `node.js`
- `mocha`
- `chai`
- `lodash`
- `eslint`
- `prettier`
- `travis-ci`

## Author

- David Pocknee

## Links

- NPM: [https://www.npmjs.com/package/historical-permutations](https://www.npmjs.com/package/historical-permutations)
- github: [https://github.com/dpocknee/historical-permutations](https://github.com/dpocknee/historical-permutations)

## License

MIT

## Acknowledgments

- Special mention should go to the insipring repository at [https://github.com/nodash/steinhaus-johnson-trotter](https://github.com/nodash/steinhaus-johnson-trotter).

# The Algorithms

## General Notes

Most of the algorithms below are taken from journals and articles from the 1950s and 1960s, when ALGOL was the standard language used in journals such as the <i>Communications of the ACM</i> and <i>The Computer Journal</i>.

Additionally, unlike many languages today, it was common not to use zero-based numbering for array elements; meaning that arrays are numbered starting from 1, not from 0. This means that for several of the modern JavaScript implementations an initial dummy element is added to the beginning of the arrays before feeding them into the algorithm, which is then removed upon termination.

For those algorithms from Sedgewick's paper, `process` is where each resultant permutation is output. Any filtering of results can happen here. In the JavaScript implementations, this is replaced by the callback function `cb()`.

---

## Pandita Algorithm (1400s)

A lexicographic approach has been implemented as the function `pandita()`, taken from the wikipedia article on permutations:

> There are many ways to systematically generate all permutations of a given sequence. One classic, simple, and flexible algorithm is based upon finding the next permutation in lexicographic ordering, if it exists. It can handle repeated values, for which case it generates each distinct multiset permutation once. Even for ordinary permutations it is significantly more efficient than generating values for the Lehmer code in lexicographic order (possibly using the factorial number system) and converting those to permutations. It begins by sorting the sequence in (weakly) increasing order (which gives its lexicographically minimal permutation), and then repeats advancing to the next permutation as long as one is found. The method goes back to Narayana Pandita in 14th century India, and has been rediscovered frequently.[44]
>
> The following algorithm generates the next permutation lexicographically after a given permutation. It changes the given permutation in-place.
>
> 1.  Find the largest index _k_ such that _a[k]_ < _a[k + 1]_. If no such index exists, the permutation is the last permutation.
> 2.  Find the largest index _l_ greater than _k_ such that _a[k]_ < _a[l]_.
> 3.  Swap the value of _a[k]_ with that of _a[l]_.
> 4.  Reverse the sequence from _a[k + 1]_ up to and including the final element _a[n]_.

### Usage

```javaScript
pandita(4);
```

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

Use arrays containing: **anything**

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
lehmer([1, 2, 3, 4]);
```

Use arrays containing: **only numbers**

---

## Walker Backtrack Method (1960)

The Walker Backtrack method was first proposed by R. J. Walker in "An Enumerative Technique for a Class Of Combinatorial Problems".

> "There are various ways in which a linear order can be imposed on the
> elements of **A** so as to reduce this formulation to the general one stated above.
>
> One way of constructing a set _A_ is to build it up element by element.
> Suppose that _a_<sub>1</sub>, ... ,_a_<sub><i>k-1</i></sub> have been chosen. The given restrictions will
> then require that _a_<sub><i>k</i></sub>; belong to some subset _S_<sub><i>k</i></sub> of _U_. If _S_<sub><i>k</i></sub> is not empty an _a_<sub><i>k</i></sub>, can be chosen and the building-up process continued; if _S_<sub><i>k</i></sub>, is empty one must back-track and change one of the previous _a_’s. To do this systematically we shall assume that the elements of U have been linearly ordered, and shall always choose _a_<sub><i>k</i></sub> to be the least element of _S_<sub><i>k</i></sub>. If _S_<sub><i>k</i></sub> is empty we return to _S_<sub><i>k-1</i></sub> and change _a_<sub><i>k-1</i></sub> to the next larger element of _S_<sub><i>k-1</i></sub>; if this is impossible we back-track still further. The following condensed program contains the essential features of this process as it would be done by an automatic calculator. It is to be assumed that Step _s_ + 1 will follow Step _s_ unless otherwise specified.
>
> General program.
>
> 1.  Set _k_ = 1.
> 2.  Set _S_<sub><i>k</i></sub> = _S_<sub>1</sub>.
> 3.  If _S_<sub><i>k</i></sub> is empty jump to 9.
> 4.  Set _a_<sub><i>k</i></sub> equal to the smallest element of _S_<sub><i>k</i></sub>.
> 5.  If _k_ = _n_ jump to 14.
> 6.  Replace _k_ by _k_ + 1.
> 7.  Compute _S_<sub><i>k</i></sub>.
> 8.  Jump to 3.
> 9.  If _k_ = 1, stop.
> 10. Replace _k_ by _k_ — 1.
> 11. Compute _S_<sub><i>k</i></sub>.
> 12. Replace _S_<sub><i>k</i></sub> by _S_<sub><i>k</i></sub> &cap; {a| _a_ > _a_<sub><i>k</i></sub>}.
> 13. Jump to 3.
> 14. Record _A_ = {_a_<sub>1</sub>, ... , _a_<sub><i>n</i></sub>}.
> 15. Jump to 12.
>
> This program is set up to record all possible sets _A_. If, for example, they
> are merely to be counted, Step 14 may be modified accordingly. Other
> modifications might involve the use of other criteria than a fixed value of n
> for determining when a set _A_ is completed (Step 5), or other criteria for
> stopping the process (Step 9).
>
> Walker, R. J. "An Enumerative Technique for a Class Of Combinatorial Problems".
> In: Proceedings of Symposium Applied Mathematics: Combinatorial Analysis.
> 5.6 (June 1962), Vol. 10. Providence, R.I.:
> American Mathematical Society, 1960, pp. 179-193

although the following is not a permutation algorithm but _the basis of a technique_ which could be used for solving combinatorial problems, it is included here as Lehmer states that it was used for generating permutations and gives a verbal description:

> The Walker Backtrack Method, given elsewhere in this volume in more general form, is described by him as “‘completely unsophisticated.” One regards a permutation of the marks 0, 1, 2, ... ,(_n_ — 1) as simply a vector whose components are taken from the non-negative integers < _n_ but are all distinct. One proceeds to construct such vectors starting from 0, 0, 0, 0, ... , 0, 0 filling in at each opportunity the least available mark. When a
> permutation is completed the last two marks are removed and the penultimate address is filled by the next largest mark available. If there is no next largest element available one more mark is removed and replaced by the next larger available mark, etc. The result is a complete set of permutations in lexicographical order. This process was coded by Walker, for a general _n_, for the SWAC using only twenty-two commands. The program is slower than the Tompkins routine by a factor of two. I believe it could be altered to give random permutation and to skip over blocks of unwanted permutations. A similar program was devised by the writer to meet requirement (d) in 1955. Such programs are difficult to describe except in very general terms. In brief the machine keeps a sort of registry which shows at a glance which marks have been assigned to the permutation under construction and thereby avoids placing two marks in the same place and provides an automatic waiting list of marks as yet unassigned.
>
> Lehmer, D.H. "Teaching combinatorial tricks to a computer".
> In: Proceedings of Symposium Applied Mathematics: Combinatorial Analysis.
> 5.6 (June 1962), Vol. 10. Providence, R.I.:
> American Mathematical Society, 1960, pp. 179-193

---

## D. N. Lehmer Lexicographic (1960)

> A third way of setting up correspondence was, in effect, suggested by D. N. Lehmer as long ago as 1906. It may be called the lexicographic method since it generates permutations in this order.
>
> If in any permutation
> _a_<sub>1</sub>, _a_<sub>2</sub>, ..., _a_<sub>_n_</sub>
>
> of the numbers 0(1)_n_ — 1 we strike out a; and reduce by unity all the marks which exceed _a_<sub>1</sub>, we get a new permutation
>
> &alpha;<sub>1</sub>, &alpha;<sub>2</sub>, ..., &alpha;<sub>_n_-1</sub>
>
> of the numbers 0(1)_n_ — 2, which we may denote by
>
> _M_ (_a_<sub>1</sub>, _a_<sub>2</sub>, ..., _a_<sub>_n_</sub>).
>
> If we now define a rank function > _R_ (_a_<sub>1</sub>, _a_<sub>2</sub>, ..., _a_<sub>_n_</sub>) recursively by
>
> _R_(0) = 0,
>
> R(> _M_ (_a_<sub>1</sub>, _a_<sub>2</sub>, ..., _a_<sub>_n_</sub>).) = _a_<sub>1</sub>(_n_ — 1)! + _R_(_M_ (_a_<sub>1</sub>, _a_<sub>2</sub>, ..., _a_<sub>_n_</sub>))
>
> it is seen that _R_ is nothing but the rank or serial number of the permutation (_a_<sub>1</sub>, _a_<sub>3</sub>, ..., _a_<sub>_n_</sub>) in the lexicographical list of all permutations. In fact, in this list the first (_n_ — 1)! permutations have 0 as their first mark, the next (_n_ — 1)! permutations have 1 as their first mark, and so on. Since our permutation has a, as its first mark it is preceded by _a_<sub>1</sub>(_n_ — 1)! permutations whose first mark is less than _a_<sub>1</sub>. Among those permutations which begin with _a_<sub>1</sub>, ours has rank _R_(_M_ (_a_<sub>1</sub>, _a_<sub>2</sub>, ..., _a_<sub>_n_</sub>)). If one successively applies the operation M we get a sequence of » — 1 permutations whose first elements are the factorial digits of the rank of the original permutation. Thus for example, for n = 7, the permutation 1 4 2 0 5 6 3 gives rise to

```
1 4 2 0 5 6 3
  3 1 0 4 5 2
    1 0 3 4 2
      0 2 3 1
        1 2 0
          1 0
            0
```

> Hence the rank of 1 4 2 0 5 6 3 is
>
> 1, 3, 1, 0, 1, 1 = 6! + 3-5! + 4! 4+ 2! 4 1! = 1107.
>
> Conversely given the rank and its factorial digits
>
> _S_<sub>_n_—1</sub>, S<sub>n-2</sub>, ..., S<sub>2</sub>, S<sub>1</sub>
>
> we may reconstruct the permutation having this rank. Beginning with 0 we affix S<sub>1</sub> and in case S<sub>1</sub> is 0, we increase the original 0 to 1. Thus we get
>
> O 1 if S<sub>1</sub> = 0,
>
> 1 0 if S<sub>1</sub> = 1.

---

## Hall (1960) [Method of Derangements]

> "We turn now to a second way of making a permutation correspond to its
> factorial digits. This method was suggested by Marshall Hall and may be
> called the Method of Derangements. In the previous method the objects
> being permuted can be any computer words. In the Hall method the
> objects must be the numbers 0(1)_n_ — 1. In any such permutation we may,
> for each mark _k_ > 0, ask how many of the _k_ marks less than k actually
> follow k. Denoting this number by Sx we see at once that
>
> _S_<sub>_n_-1</sub>, _S_<sub>_n_-2</sub>, ... _S_<sub>2</sub>, _S_<sub>1</sub>
>
> is a set of factorial digits of a number which corresponds to the given
> permutation and which, conversely, characterizes this permutation. We
> have for example the following correspondencies when n = 7.
>
> | _S_<sub>6</sub> | _S_<sub>5</sub> | _S_<sub>4</sub> | _S_<sub>3</sub> | _S_<sub>2</sub> | _S_<sub>1</sub> |     |     |     |     |     |     |     |     |
> | --------------- | --------------- | --------------- | --------------- | --------------- | --------------- | --- | --- | --- | --- | --- | --- | --- | --- |
> | 0               | 0               | 0               | 0               | 0               | 0               |     | 0   | 1   | 2   | 3   | 4   | 5   | 6   |
> | 3               | 1               | 4               | 1               | 2               | 1               |     | 4   | 2   | 1   | 6   | 3   | 5   | 0   |
> | 1               | 2               | 2               | 3               | 1               | 1               |     | 3   | 1   | 4   | 5   | 2   | 6   | 0   |
> | 6               | 5               | 4               | 3               | 2               | 1               |     | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
>
> The coding of this method is fairly straightforward. The resulting routine
> is a good deal slower than the Tompkins-Paige method. The parities of
> successive permutations strictly alternate. The method is well suited to
> requirement (c) [in the paper]."
>
> Lehmer, D.H. "Teaching combinatorial tricks to a computer".
> In: Proceedings of Symposium Applied Mathematics: Combinatorial Analysis.
> 5.6 (June 1962), Vol. 10. Providence, R.I.:
> American Mathematical Society, 1960, pp. 179-193

### Usage

`hall(4)` will generate all possible permutations of the array `[1, 2, 3, 4]`.

---

## Coveyou-Sullivan (1961) [Algorithm ACM71]

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

## Usage

`coveyouSullivan(4)` will generate all possible permutations of the array `[1, 2, 3, 4]`.

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
wells(["1", 2, "3", 4]);
```

Use arrays containing: **anything**

---

## Peck-Schrack (1962)

This algorithm was implemented in `ALGOL` by Peck and Schrack in 1962. It gives the same result as the Tompkins-Paige algorithm with a left-wards rotation. i.e. in this library `peckSchrack(4)` gives the same result as `tompkinsPaige([1, 2, 3, 4], 1)` but not `tompkinsPaige([1, 2, 3, 4], -1)`.

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

## Usage

`peckSchrack(4)` will generate all possible permutations of the array `[1, 2, 3, 4]`.

---

## Howell (1962) [ACM87: PERMUTATION]

<pre>
<code>
<b>procedure</b> PERMUTATION (N, K);
<b>value</b> K, N; <b>integer</b> K; <b>integer array</b> N;
<b>comment</b> This procedure generates the next permutation in
  lexicographic order from a given permutation of the <i>K</i> marks
  0, 1, ..., (K-1) by the repeated addition of (K—1) radix K.
  The radix K arithmetic is simulated by the addition of 9 radix
  1O and a test to determine if the sum consists of only the original
  K digits. Before each entry into the <b>procedure</b> the K marks
  are assumed to have been previously specified either by input
  data or as the result of a previous entry. Upon each such entry a
  new permutation is stored in N[1] through N[K]. In case the
  given permutation Is (K—1), (K—2), ... , 1, 0, then the next
  permutation is taken to be 0, 1, ..., (K — 1). A FORTRAN
  subroutine for the IBM 7090 has been written and tested for
  several examples;
<b>begin integer</b> i, j, carry;
  <b>for</b> := 1 <b>step</b> 1 <b>until</b> K <b>do</b>
    <b>if</b> N[i] — K + i &ne; 0 <b>then go to</b> add;
  <b>for</b> i := 1 <b>step</b> 1 <b>until</b> K <b>do</b> N[i] := i — 1;
  <b>go to</b> exit;
add:  N[K] := N[K] + 9;
    <b>for</b> i := 1 <b>step</b> 1 <b>until</b> K—1 <b>do</b>
      <b>begin if</b> K > 10 <b>then go to</b> B;
          carry := N[K-i+1]&#247;10; <b>go to</b> C;
      B:  carry := N[K-i+1]&#247;K;
      C:  <b>if</b> carry = 0 <b>then go to</b> test;
          N[K-i] := N[K—i] + carry;
          N[K—i+1] := N[K—i+1] —10  &#215; carry
      <b>end</b> i;
test: <b>for</b> i := 1 <b>step</b> 1 <b>until</b> K <b>do if</b> N[i]- (K-1) > 0
    <b>then go to</b> add;
    <b>for</b> i := 1 <b>step</b> 1 <b>until</b> K-1 <b>do</b>
      <b>for</b> j := i+1 <b>step</b> 1 <b>until</b> K <b>do</b>
        <b>if</b> N[i]-N[j] = 0 <b>then go to</b> add;
exit: <b>end</b> PERMUTATION GENERATOR
</code>
Howell, John R. "Algorithm 87: Permutation generator". In:
Communications of the ACM 5.4 (Apr. 1962), p. 209.
</pre>

---

## Schrack-Shimrat (1962) [ACM102: PERMULEX lexicographic]

The algorithm below is also known as the <i>Fischer-Krause</i> algorithm, and has been known since 1812. This is how it is presented in Sedgewick's paper:

<pre>
<code>
P[<i>N</i> + 1] = &infin;;
<i>process</i>;
<b>loop</b>.
  <i>i</i>:=2; <b>loop while</b> P[<i>i</i>] < P[<i>i</i>-1]; <i>i</i>:=<i>i</i>+1 <b>repeat</b>;
<b>while</b> <i>i</i><<i>N</i>;
  <i>j</i>:=1; <b>loop while</b> P[<i>j</i>]>P[<i>i</i>]; <i>j</i>:=<i>j</i>+1 <b>repeat</b>;
  P[<i>i</i>]:=:P[<i>j</i>]
    <i>reverse</i>(<i>i</i>-1);
    <i>process;</i>
  <b>repeat</b>;
</code>
</pre>

where `reverse()` "inverts the order of the elements in `P[1],....,P[i]`:

<pre>
<code>
  <i>i</i>:=1;
  <b>loop while</b> <i>i</i><<i>N</i>+1-<i>i</i>;
        P[<i>i</i>]:=:P[<i>N</i>+1-<i>i</i>]; <i>i</i>:=<i>i</i>+1 <b>repeat</b>;
</code>
</pre>

Schrack and Shimrat later implemented this code as ACM Algorithm 102:

<pre>
<code>
<b>procedure</b> PERMULEX(n,p);
<b>integer</b> n; <b>integer array</b> p;
<b>comment</b> Successive calls of the procedure will generate all
permutations p of 1,2,3,---,n in lexicographical order. Before the
first call, the non-local Boolean variable ‘flag’ must be set to
<b>true</b>. If after an execution of PERMULEX ‘flag’ is <b>false</b>,
additional calls will generate further permutations—if true, all
permutations have been obtained ;

<b>begin integer array</b> q[1:n]; <b>integer</b> i, k, t; <b>Boolean</b> flag2;
<b>if</b> flag <b>then</b>
  <b>begin for</b> i := 1 <b>step</b> 1 <b>until</b> n <b>do</b>
  p[i] := i; flag2 := <b>true</b>; flag := <b>false</b>;
  <b>go to</b> EXIT
  <b>end</b> initialize;
<b>if</b> flag2 <b>then</b>
  <b>begin</b> t := p[n]; p[n] := p[n—1]; p[n—1] := t;
  flag2 := <b>false</b>; <b>go to</b> EXIT
  <b>end</b> bypass;
flag2 := <b>true</b>; <b>for</b> i := n—2 <b>step</b> —1 <b>until</b> 1 <b>do</b>
  <b>if</b> p[i] < p[i+1] <b>then go to</b> A;
  flag := <b>true</b>; <b>go to</b> EXIT;
A:  <b>for</b> k := 1 <b>step</b> 1 <b>until</b> n <b>do</b> q[k] := 0;
    <b>for</b> k := 1 <b>step</b> 1 <b>until</b> n <b>do</b> q[p[k]] := p[k];
    <b>for</b> k := p[i] + 1 <b>step</b> 1 <b>until</b> n <b>do</b>
    <b>if</b> q[k] &ne; 0 <b>then go to</b> B;
B:  p[i] := k; q[k] := 0;
    <b>for</b> k := 1 <b>step</b> 1 <b>until</b> n <b>do</b>
    if q[k] &ne; 0 <b>then begin</b> i := i + 1; p[i] := q[k] <b>end</b>
    <b>else if</b> i &ge; n <b>then go to</b> EXIT;
EXIT:
<b>end</b> PERMULEX
</code>
G. F. Schrack and M. Shimrat. "Algorithm 102: Permutation in lexicographical order". 
In: Communications of the ACM 5.6 (June 1962), p. 346.
</pre>

### Usage

```javaScript
schrackShimrat(4);
```

Use arrays containing: **only numbers**

---

## Eaves (1962) [ACM130: Permute]

<pre>
<code>
<b>procedure</b> PERMUTE (A, n, x)
<b>array</b> <i>A</i>; <b>integer</b> <i>n</i>, <i>x</i>;
<b>comment</b> Each entry into <i>PERMUTE</i> generates the next per-
  mutation of the first n elements of A. If A is read as a number
  (<i>A</i>[1]<i>A</i>[2] ... <i>A</i>[n]), each generation is larger than the last:
  <i>n</i> := 4, <i>x</i> := 1
    <i>A</i>[l] 1 1 1 8 8 8
    <i>A</i>[2] 1 8 8 1 1 8
    <i>A</i>[3] 8 1 8 1 8 1
    <i>A</i>[4] 8 8 1 8 1 1 end
    Permutations = 4!/2!2!
  Identical elements in <i>A</i> reduce the number of permutations. The
  array should be ordered before the first call on PERMUTE.
  Integer x specifies the first elements whose order should be pre-
  served: <i>n</i> := 4, <i>x</i> := 3
    <i>A</i>[1] 1 1 1 4
    <i>A</i>[2] 2 2 4 1
    <i>A</i>[3] 3 4 2 2
    <i>A</i>[4] 4 3 3 3 end
    Permutations = 4!/3!
  Before the first call on PERMUTE for a given array, first
  should be made true. If more is true, then PERMUTE was able
  to give another permutation;
<b>begin array</b> B[1:<i>n</i>]; <b>integer</b> <i>f,i,k,m,p</i>; <b>real</b> <i>r</i>; <b>own real</b> <i>t</i>;
  <b>if</b> <i>first</i> <b>then</b> <i>t</i> := <i>A</i>[<i>x</i>]; <i>first</i> := <b>false</b>;
  <b>for</b> <i>i</i> := 1 <b>step</b> 1 <b>until</b> <i>n</i> <b>do</b> <i>B</i>[<i>i</i>] := 0;
  <b>for</b> <i>i</i> := <i>n</i> <b>step</b> —1 <b>until</b> 2 <b>do</b>
    <b>begin if</b> <i>A</i>[<i>i</i>] > t&and;<i>A</i>[<i>i</i>] > <i>A</i>[<i>i</i> — 1] <b>then go to</b> <i>find</i>; <b>end</b>;
  <i>more</i> := <b>false</b>; <b>go to</b> <i>exit</i>;
<i>find</i>:  <b>for</b> <i>k</i> := <i>n</i> <b>step</b> —1 <b>until</b> <i>i</i> <b>do</b>
        <b>begin if</b> <i>A</i>[<i>k</i>] > <i>t</i>&and;<i>A</i>[<i>k</i>] > <i>A</i>[<i>i</i>—1] <b>then</b>
          <b>begin</b> <i>B</i>[<i>k</i>] := <i>A</i>[<i>k</i>]; <i>m</i> := <i>k</i>; <b>end</b>; <b>end</b>;
      <b>for</b> <i>k</i> := <i>n</i> <b>step</b> —1 <b>until</b> <i>i</i> <b>do</b>
        <b>begin if</b> <i>B</i>[<i>k</i>] > 0 <i>A</i>&and;<i>B</i>[<i>k</i>] < <i>B</i>[<i>m</i>] <b>then</b>
          <b>begin</b> <i>B</i>[<i>m</i>] := <i>B</i>[<i>k</i>]; <i>f</i> := <i>k</i>; <b>end</b>; <b>end</b>;
      <i>r</i> := <i>A</i>[<i>i</i>—1]; <i>A</i>[<i>i</i>—1]:= <i>B</i>[<i>m</i>]; <i>A</i>[<i>f</i>]] := <i>r</i>;
<i>schell</i>:  <i>p</i> := <i>i</i>—1; <i>m</i> := <i>n</i> — <i>p</i>;
        <b>for</b> <i>m</i> := <i>m</i>/2 — <i>A</i> <b>while</b> <i>m</i> > 0 <b>do</b>
          <b>begin</b> <i>k</i> := <i>n</i> — <i>m</i>;
            <b>for</b> <i>f</i> := <i>p</i> + 1 <b>step</b> 1 <b>until</b> <i>k</i> <b>do</b>
              <b>begin</b> <i>i</i> := <i>f</i>;
<i>comp</i>:  <b>if</b> <i>A</i>[<i>i</i>] > <i>A</i>[<i>i</i> + <i>m</i>] <b>then</b>
        <b>begin</b> <i>r</i> := <i>A</i>[<i>i</i> + <i>m</i>]; <i>A</i>[<i>i</i> + <i>m</i>] := <i>A</i>[<i>i</i>];
        <i>A</i>[<i>i</i>] := <i>r</i>; <i>i</i> := <i>i</i> — <i>m</i>;
        <b>if</b> <i>i</i> &ge; <i>p</i> + 1 <b>then go to</b> <i>comp</i>;
        <b>end end end</b> <i>schell</i>;
<i>exit</i>:  <b>end</b> <i>PERMUTE</i>
</code>
Eaves, B. C. "Algorithm 130: Permute". In:
Communications of the ACM 5.11 (Nov. 1962), p. 551.
</pre>

---

## Shen (1962/63) [lexicographic order]

Mok-Kong Shen's method of enumerating permutations in lexicographic order was first proposed in their 1962 paper _On the Generation of Permutations and Combinations_ and later formalized in the September 1963 issue of _Communications of the ACM_, in the form of Algorithm 202: PERLE:

<pre>
<code>
<b>procedure</b> <i>PERLE</i> (<i>S</i>, <i>N</i>, <i>I</i>, <i>E</i>)
<b>integer array</b> <i>S</i>; <b>integer</b> <i>N</i>; <b>Boolean</b> <i>I</i>; <b>label</b> <i>E</i>;
<b>comment</b> If the array <i>S</i> contains a certain permutation of the
  <i>N</i> digits <i>1, 2,..., N</i> before call, the procedure will replace
  this with the lexicographically next permutation. If initializa-
  tion is required set the Boolean variable <i>I</i> equal <b>true</b>, which
  will be changed automatically to <b>false</b> through the first call,
  otherwise set <i>I</i> equal <b>false</b>. If no further permutation can be
  generated, exit will be made to <i>E</i>. For reference see <i>BIT 2</i> (1962) , 228-231;
<b>begin integer</b> <i>j, u, w</i>;
<b>if</b> <i>I</i> <b>then begin for</b> <i>j</i> = 1 <b>step</b> 1 <b>until</b> <i>N</i> <b>do</b> <i>S</i>[<i>j</i>] := <i>j</i>;
             <i>I</i> := <b>false</b>; <b>go to</b> <i>Rose</i>
          <b>end</b>;
<i>w</i> :=  <i>N</i>;
<i>Lilie</i>:   <b>if</b> <i>S</i>[<i>w</i>] < <i>S</i>[<i>w</i>—1] <b>then</b>
          <b>begin if</b> <i>w</i> = 2 <b>then go to</b> <i>E</i>;
             <i>w</i> := <i>w</i> — 1; <b>go to</b> Lilie
          <b>end</b>;
<i>u</i> := <i>S</i>[<i>w</i>—1];
<b>for</b> <i>j</i> := <i>N</i> <b>step</b> —1 <b>until</b> <i>w</i> <b>do</b>
<b>begin if</b> <i>S</i>[<i>j</i>] > <i>u</i> <b>then</b>
      <b>begin</b> <i>S</i>[<i>w</i>—1] := <i>S</i>[<i>j</i>];
        <i>S</i>[<i>j</i>] := <i>u</i>; <b>go to</b> <i>Tulpe</i>
      <b>end</b>
  <b>end</b>;
<i>Tulpe</i>:   <b>for</b> <i>j</i> := 0 <b>step</b> 1 <b>until</b> (<i>N</i>—<i>w</i>—1)/2 + 0.1 <b>do</b>
          <b>begin</b> <i>u</i> := <i>S</i>[<i>N</i>—<i>j</i>];
           <i>S</i>[<i>N—j</i>] := <i>S</i>[<i>w</i>+<i>j</i>]; <i>S</i>[<i>w</i>+<i>j</i>] := <i>u</i>
          <b>end</b>;
<i>Rose</i>:
<b>end</b> <i>PERLE</i>
</code>
</pre>

---

## Steinhaus-Trotter-Johnson (1962/63) [ACM115: PERM]

This technique was "discovered" almost simultaneously by Steinhaus, Johnson and Trotter, although it has actually been in use in English bell-ringing since at least the 18th Century. Sedgewick formulates it as:

<pre>
<code>
<i>i</i>:=1;
<b>loop while</b> <i>i</i>&le;<i>N</i>; <i>i</i>:=<i>i</i>+1; <i>c[i]</i>:=1;
                <i>d[i]</i>:= <b>true</b>; <b>repeat</b>;
<i>c[1]</i>:=0;
<i>process</i>;
<b>loop</b>:
  <i>i</i>:=<i>N</i>; <i>x</i>:=0;
  <b>loop while</b> <i>c[i]</i>=<i>i</i>;
    <b>if not</b> <i>d[i]</i> <b>then</b> <i>x</i>:=<i>x</i>+1 <b>endif</b>;
    <i>d[i]</i>:=<b>not</b> <i>d[i]</i>; <i>c[i]</i>:=1; <i>i</i>= <i>i</i>-1;
  <b>repeat</b>;
<b>while</b> <i>i</i>>1;
  <b>if</b> <i>d[i]</i> <b>then</b> <i>k</i>:=<i>c[i]</i>+<i>x</i>
        <b>else</b> <i>k</i>:=<i>i</i>-<i>c[i]</i>+<i>x</i> <b>endif</b>;
  P[<i>k</i>]:=:P[<i>k</i>+1];
  <i>process</i>;
  <i>c[i]</i>:=:<i>c[i]</i>+1;
<b>repeat</b>;
</code>
</pre>

Trotter's version of this algorithm was published as PERM: ACM Algorithm 115, in 1962:

<pre>
<code>
<b>procedure</b> <i>PERM</i> (<i>x</i>, <i>n</i>); <b>value</b> <i>n</i>;
<b>integer</b> <i>n</i>; <b>array</b> <i>x</i>;
<b>comment</b> This algorithm was inspired by the procedure 
PERMUTE of Peck and Schrack (Algorithm 86, <i>Comm. ACM</i>
Apr. 1962) and performs the same function. Each call of PERM
changes the order of the first » components of z, and n! succes-
sive calls will generate all n! permutations. A nonlocal Boolean
variable ‘first’? is assumed, which must be true when PERM is
first called, to cause proper initialization. The first call of PERM
makes ‘first’? <b>false</b>, and it remains so (unless changed by the
external program) until the exit from the (n!)th call of PERM.
At that time z is restored to its original order and ‘first’ is made
<b>true</b>.

The excuse for adding PERM to the growing pile of permuta-
tion generators is that, at the expense of some extra <b>own</b> storage,
it cuts the manipulation of z to the theoretical minimum of n!
transpositions, and appears to offer an advantage in speed. It
also has the (probably useless) property that the permutations
it generates are alternately odd and even;

<b>begin own integer array</b> <i>p, d</i>[2:<i>n</i>]; <b>integer</b> <i>k,q</i>; <b>real</b> <i>t</i>;
  <b>if</b> <i>first</i> <b>then</b> <i>initialize</i>:
  <b>begin for</b> <i>k</i> := 2 <b>step</b> 1 <b>until</b> <i>n</i> <b>do</b> 
    <b>begin</b> <i>p</i>[<i>k</i>] := 0; <i>d</i>[<i>k</i>] := 1 <b>end</b>;
    <i>first</i> := <b>false</b>
  <b>end</b> initialize;
  <i>k</i> := 0;
  <i>INDEX</i>: <i>p</i>[<i>n</i>] := <i>q</i> := <i>p</i>[<i>n</i>] + <i>d</i>[<i>n</i>];
    <b>if</b> <i>q</i> = <i>n</i> <b>then</b>
    <b>begin</b> <i>d</i>[<i>n</i>] := —1; <b>go to</b> <i>LOOP</i> <b>end</b>;
    <b>if</b> q &ne; O <b>then go to</b> <i>TRANSPOSE</i>;
    <i>d</i>[<i>n</i>] := 1; <i>k</i> := <i>k</i> + 1;
    <i>LOOP</i>: <b>if</b> <i>n</i> > 2 <b>then begin</b>
      <b>comment</b> Note that <i>n</i> was called by value;
      <i>n</i> := <i>n</i>— 1; <b>go to</b> <i>INDEX</i> <b>end</b> <i>LOOP</i>;
  <i>Final exit</i>: <i>q</i> := 1; <i>first</i> := <b>true</b>;
  <i>TRANSPOSE</i>: <i>q</i> := <i>q</i> + <i>k</i>; <i>t</i> := <i>x</i>[<i>q</i>];
    <i>x</i>[<i>q</i>] := <i>x</i>[<i>q</i> + 1]; := <i>t</i>
<b>end</b> PERM;
</code>
Trotter, H. F. "Algorithm 115: Perm". In:
<i>Communications of the ACM</i> 5.8 (Aug. 1962), pp. 434-435.
</pre>

This algorithm can also be implemented as a **loopless** algorithm, which gives the same result but runs slightly slower. It is described by Sedgewick as:

<pre>
<code>
<i>i</i>:=0;
<b>loop while</b> <i>i</i>&le;<i>N</i>; <i>i</i>:=<i>i</i>+1; <i>c[i]</i>:=1; <i>d[i]</i>:= <b>true</b>;
                <i>s[i]</i>:= <i>i</i>-1; <i>x</i>[<i>i</i>]:=0 <b>repeat</b>;
<i>process</i>;
<b>loop</b>:
  <i>s</i>[<i>N</i>+1]:=<i>N</i>; <i>x</i>[<i>i</i>]:=0;
  <b>if</b> <i>c</i>[<i>i</i>] = <i>i</i> <b>then</b>
    <b>if not</b> <i>d[i]</i> 
        <b>then</b> <i>x</i>[<i>s</i>[<i>i</i>]]:=<i>x</i>[<i>s</i>[<i>i</i>]]+1; <b>endif</b>;
    <i>d[i]</i>:=<b>not</b> <i>d[i]</i>; <i>c[i]</i>:=1; 
    <i>s</i>[<i>i</i>+1]:= <i>s</i>[<i>i</i>]; <i>s</i>[<i>i</i>]:=<i>i</i>-1;
  <b>endif</b>;
  <i>i</i>:=<i>s</i>[<i>N</i>+1];
<b>while</b> <i>i</i>>1;
  <b>if</b> <i>d[i]</i> <b>then</b> <i>k</i>:=<i>c[i]</i>+<i>x</i>[<i>i</i>]
        <b>else</b> <i>k</i>:=<i>i</i>-<i>c[i]</i>+<i>x</i>[<i>i</i>] <b>endif</b>;
  P[<i>k</i>]:=:P[<i>k</i>+1];
  <i>process</i>;
  <i>c[i]</i>:=:<i>c[i]</i>+1;
<b>repeat</b>;
</code>
</pre>

A slightly different ordering can be found using a version popularised by Shimon Even in his 1973 book **Algorithmic Combinatorics**, commonly referred to as **Even's Speedup**. This results in a different ordering, in which the highest, rather than lowest number zig-zags across the permutations. This works by assigning each mark a direction of left or right. All marks start with a left-wards direction.

> Let us denote by an arrow above each integer its _direction_, namely, the direction in which it tends to o. We start with all the directions pointing from right to left. Thus, if _n_ = 4, our initial data are as follows:
>
> ```
> < < < <
> 1 2 3 4
> ```
>
> An integer _k_ is _mobile_ if there exists an integer smaller than _k_ adjacent to _k_ on the side where the direction of _k_ points to. For our example, in our initial position described above, the integers 2, 3, and 4 are mobile. In the case
>
> ```
> < > < <
> 2 3 4 1
> ```
>
> only 4 is mobile.
> **Algorithm 1.1**
>
> - (1) If there are no mobile integers, stop.
> - (2) Call the largest mobile integer _m_.
> - (3) Let _m_ switch places with the adjacent integer to which \_m_th direction points to.
> - (4) Switch the direction of all integers \_k* for which \_k* > _m_. Return to step (1).
>
> Let us demonstrate the algorithm for _n_ = 4:
>
> ```
> < < < <
> 1 2 3 4
> < < < <
> 1 2 4 3
> < < < <
> 1 4 2 3
> < < < <
> 4 1 2 3
> > < < <
> 4 1 3 2
> < > < <
> 1 4 3 2
> < < > <
> 1 3 4 2
> < < < >
> 1 3 2 4
> < < < <
> 3 1 2 4
> < < < <
> 3 1 4 2
> ...
> ```
>
> \- Shimon Even _Algorithmic Combinatorics_ (1973), Macmillan, New York, pp. 2-3.

### Usage

The **loopless** and **Even's Speedup** algorithms can be used by passing in a second argument into the function:

```JavaScript
steinhausJohnsonTrotter(4)
steinhausJohnsonTrotter(4, "loopless")
steinhausJohnsonTrotter(4, "even")

```

---

## Heap (1963)

The following implementation comes from Sedgewick's paper:

<pre>
<code>
<i>i</i>:=<i>N</i>; <b>loop</b>: <i>c</i>[<i>i</i>]:=1 <b>while</b> <i>i</i>>2: <i>i</i>:=<i>i</i>-1 <b>repeat</b>;
<i>process</i>;
<b>loop</b>
    <b>if</b> <i>c</i>[<i>i</i>]<<i>i</i>
    <b>then if</b> <i>i odd</i> <b>then</b> <i>k</i> := 1 <b>else</b> <i>k</i>:=<i>c</i>[<i>i</i>] <b>endif</b>;
    P[<i>i</i>]:=:P[<i>k</i>];
    <i>c</i>[<i>i</i>]:=<i>c</i>[<i>i</i>] + 1; <i>i</i>:=2;
    <i>process</i>,
  <b>else</b> <i>c</i>[<i>i</i>]:=1; <i>i</i>:=+1
  <b>endif</b>;
<b>while</b> <i>i</i>&le;<i>N</i> <b>repeat</b>;
</code>
</pre>

### Usage

```
heap([1, 2, 3, 4]);
```

---

## Langdon (1967)

The following version of Langdon's algorithm is partly taken from Sedgewick's paper, although his version mixes up the conditions in the first `IF` statement and misses out a piece of conditional logic that prevents duplicates. My implementation is:

<pre>
<code>
<i>i</i> := 1; <b>loop</b>: P[<i>i</i>]:=Q[i] <b>while</b> <i>i</i><</i>N</i> <i>i</i>:=<i>i</i>+1 <b>repeat</b>,
<i>process</i>;
<b>loop</b>:
    <i>rotate(i)</i>;
    <b>if</b> P[<i>i</i>] = <i>i</i> <b>then</b> <i>i</i>:=<i>i</i>-1  <b>else</b> <i>i</i>:=<i>N</i> <b>endif</b> ;
    <b>if</b> P &ne; Q <b>and</b> <i>i</i> = n <b>then</b> <i>process</i>; <b>endif</b> ;
<b>while</b> <i>i</i>&ge;1 <b>repeat</b>;
</code>
</pre>

### Usage

```
langdon(4);
```

---

## Boothroyd (1967) [BCJ30]

---

## Ord-Smith (1968) [ACM308][pseudo-lexicographic]

<pre>
<code>
<b>procedure</b> <i>perm</i> (<i>x</i>, <i>n</i>); <b>value</b> <i>n</i>; <b>integer</b> <i>n</i>; <b>array</b> <i>x</i>;
<b>begin own integer array</b> <i>q</i>[3:10]; <b>integer</b> <i>k, m</i>;
    <b>real</b> <i>t</i>; <b>own boolean</b> <i>odd</i>;
    <b>if</b> <i>first</i> <b>then begin</b> <i>odd</i> := <b>true</b>;
          <b>if</b> <i>n</i>> 2 <b>then begin</b> <i>first</i> := <b>false</b>;
          <b>for</b> <i>m</i> := 3 <b>step</b> 1 <b>until</b> 2 <b>do</b>
          <i>q</i>[<i>m</i>] := 1   <b>end</b>
        <b>end</b>
    <b>if</b> <i>odd</i> <b>then begin</b> <i>odd</i> := <b>false</b>;
          <i>t</i> := <i>x</i>[1]; <i>x</i>[1] := <i>x</i>[2]; <i>x</i>[2] := <i>t</i>;
          <b>goto</b> <i>finish</i>
        <b>end</b>;
    <i>odd</i> := <b>true</b>; <i>k</i> := 3;
<i>oop</i>:   <i>m</i> := <i>q</i>[<i>k</i>]; <b>if</b> <i>m</i> = <i>k</i> <b>then</b>
    <b>begin if</b> <i>k</i> < <i>n</i> <b>then begin</b> <i>q</i>[<i>k</i>] := 1;
              <i>k</i> := <i>k</i> + 1;
              <b>goto</b> <i>loop</i>
            <b>end</b>
        <b>else begin</b> <i>first</i> := <b>true</b>; <b>goto</b> <i>trinit</i> <b>end</b>
    <b>end</b>;
  <i>q</i>[<i>k</i>] := <i>m</i> + 1;
  <i>trinit</i>: <i>m</i> := 1;
  <i>transpose</i>: <i>t</i> = <i>x</i>[<i>m</i>]; <i>x</i>[<i>m</i>] := <i>x</i>[<i>k</i>]; <i>x</i>[<i>k</i>] := <i>t</i>;
      <i>m</i> := <i>m</i> + 1; <i>k</i> := <i>k</i> — 1;
      <b>if</b> <i>m</i> < <i>k</i> <b>then goto</b> <i>transpose</i>;
<i>finish</i>:  <b>end</b> <i>of procedure perm</i>;
</code>
R. J. Ord-Smith "Generation of permutation sequences: Part 1", <i>The Computer Journal</i>,
  (1970), 13.2, pp. 152-155
</pre>

Ord-Smith's pseudo-lexicographic algorithm can be seen above, but as was proved in the 1991 paper "Ord-Smith's pseudo-lexicographical permuta-tion procedure is the Tompkins-Paige algorithm" in _The Computer Journal_ - this algorithm gives out the same result as reversing the rotation direction in the Tompkins-Paige algorithm, so has not been implemented.

---

## Ord-Smith (1968) [ACM323][reverse lexicographic]

### Usage

```javaScript
ordSmithRevLex([1, 2, 3, 4])
```

---

## Ives (1976)

This is an alternate implementation of Ives' algorithm, given in Sedgewick's paper:

<pre>
<code>
<i>i</i>=<i>N</i>; <b>loop</b>: <i>c</i>[<i>i</i>]:=1; <b>while</b> <i>i</i>>1: <i>i</i>:=<i>i</i>-1 <b>repeat</b>
<i>process</i>;
<b>loop</b>
  <b>if</b> <i>c</i>[<i>i</i>]<<i>N</i>+1-<i>i</i>
  <b>then if</b> <i>odd</i> <b>then</b> P[<i>c</i>[<i>i</i>]]:=:P[<i>c</i>[<i>i</i>]+1]
        <b>else</b> P[<i>i</i>]:=:P[<i>N</i>+1-<i>i</i>] <b>endif</b>,
    <i>c</i>[<i>i</i>]:=<i>c</i>[<i>i</i>]+1, <i>i</i>=1;
    <i>process</i>
  <b>else</b> <i>c</i>[<i>i</i>]:=1; <i>i</i>=<i>i</i>+1;
  <b>endif</b>
<b>while</b> <i>i</i>&le;<i>N</i> <b>repeat</b>;
</code>
</pre>

---

## Myrvold and Ruskey (2001) [remainder order]

The following algorithm lies much outside the original timescale I set for the project but has been included as it is a useful way of selecting individual permutations by rank and the algorithm itself is novel.

> "The second order, which we call remainder order, was used by Myrvold and Ruskey [15]. Informally, let ( x , y ) denote the swap of the xth and yth symbol of a string. For example, applying ( 4 , 2 ) to 456123 gives 416523. Swaps are also called transpositions. In remainder order, the ith permutation is obtained from the identity permutation by a series of _n_ − 1 transpositions. The first indices of the transpositions are _n_, _n_ − 1 , ... , 2. The second indices are remainders when _i_ is successively divided by _n_, *n*− 1 , ... , 2, plus one. For example, here are the calculations for _i_ = 92 and _n_ = 5
>
> | 92 ÷ 5 = 18 | 18 ÷ 4 = 4  | 4 ÷ 3 = 1   | 1 ÷ 2 = 0     |
> | ----------- | ----------- | ----------- | ------------- |
> | remainder 2 | remainder 2 | remainder 1 | remainder 1 . |
>
> In this calculation, each successive quotient is used in the next division, and the divisors are in turn 5, 4, 3, 2. The underlined remainders (plus one) imply that the 92nd permutation for n = 5 is obtained from 12345 by successively applying the following transpositions: ( 5 , 3 ), ( 4 , 3 ), ( 3 , 2 ), ( 2 , 2 ) . The resulting permutation is 14253... [the first object has rank 0]... Although this description is somewhat unorthodox, it directly translates into a simple unranking algorithm, which converts an integer _i_ into the object of rank _i_. In remainder order, the unranking and ranking algorithms use O(_n_) arithmetic operations on values that can be as large as _n!_ ."
>
> Stephane Durocher, Pak Ching Li, Debajyoti Mondal, Frank Ruskey, Aaron Williams "Cool-lex order and k-ary Catalan structures", _Journal of Discrete Algorithms_, Volume 16, 2012, Pages 287-307,

### Usage

```
myrvoldRuskey(4);
```

---

## Superpermutations (2018)

"A superpermutation[1] is a string formed from a set of n symbols such that every one of the n! permutations of those symbols appears exactly once as a contiguous block of n characters in the string." - [Greg Egan](http://www.gregegan.net/SCIENCE/Superpermutations/Superpermutations.html)

This is my own implementation of a superpermutation algorithm that should give string lengths equivalent to:

> _L_ (_n_) = 1! + 2! + ... + _n_!

This gives a result where:

- _L_(2) = 3
- _L_(3) = 9
- _L_(4) = 33
- _L_(5) = 153
- _L_(6) = 873
- _L_(7) = 5913
- _L_(8) = 46,233
- _L_(9) = 409, 133

The algorithm takes a graph-based approach to creating small weight-1-cycle graphs (e.g. `[1, 2, 3, 4, 1, 2, 3]`) that contain all possible permutations that can be created through rotation (i.e. `[1, 2, 3, 4], [2, 3, 4, 1], [3, 4, 1, 2], [4, 1, 2, 3]`) that are then connected via reversing different-sized segments of each permutation.

More information on superpermutations can be found at [Greg Egan's site](http://www.gregegan.net/SCIENCE/Superpermutations/Superpermutations.html)

### Usage

```JavaScript
superpermutation(4);
// -> [1, 2, 3, 4, 1, 2, 3, 1, 4, 2, 3, 1, 2, 4, 3, 1, 2, 1, 3, 4, 2, 1, 3, 2, 4, 1, 3, 2, 1, 4, 3, 2, 1]
```

---

## Pocknee-Gysin-Sommerville (2019)

This is a unique collection of algorithms inspired by Brion Gysin and Ian Sommerville's pre-1965 _Permutation Poems_. Although many sources claim that these early poems were generated by computer, there seems to be little evidence to support this. Given the fact that none of these poems use permutation algorithms known at the time, the only other possibility is that they were either written by hand or used a unique algorithm designed by Ian Sommerville that is not found anywhere in the existing literature. I have attempted to create the type of algorithm that would have been needed to create these poems. Due to the large variety of orderings within these poems, this function contains 8 possible permutation options. These are examples of what I refer to as Gysin's "Magic Square"-esque approach to creating _Permutation Poems_. I want to stress that there is no evidence that Gysin or Sommerville actually used these algorithms and the implementation is my own creation.

The differnce between the 8 algorithms can be most easily seen by enumerating the permutations of n=3, seen below. The numbers in brackets above each set of permutations indicate the three arguments needed to be fed into the `gysinSommerville()` function to get these results.:

|              |              |              |              |
| ------------ | ------------ | ------------ | ------------ |
| `(3, 1, 1)`  | `(3, 2, 1)`  | `(3, 3, -1)` | `(3, 4, 1)`  |
| 1 2 3        | 1 2 3        | 1 2 3        | 1 2 3        |
| 2 3 1        | 2 3 1        | 2 1 3        | 2 1 3        |
| 3 1 2        | 3 2 1        | 3 1 2        | 3 2 1        |
| 1 3 2        | 1 3 2        | 1 3 2        | 1 3 2        |
| 2 1 3        | 2 1 3        | 2 3 1        | 2 3 1        |
| 3 2 1        | 3 1 2        | 3 1 2        | 3 1 2        |
|              |              |              |              |
| `(3, 1, -1)` | `(3, 1, -1)` | `(3, 3, 1)`  | `(3, 4, -1)` |
| 1 2 3        | 1 2 3        | 1 2 3        | 1 2 3        |
| 3 1 2        | 3 1 2        | 2 1 3        | 3 2 1        |
| 2 3 1        | 2 1 3        | 2 3 1        | 2 1 3        |
| 1 3 2        | 1 3 2        | 3 2 1        | 1 3 2        |
| 3 2 1        | 3 2 1        | 3 1 2        | 3 1 2        |
| 2 1 3        | 2 3 1        | 1 3 2        | 2 3 1        |

### Usage

The three arguments in this function are: `length of array`, `type of algorithm (1, 2, 3 or 4)`, `direction of rotation (1 or -1)`. There are four possible algorithms to choose from and each one can run using either a leftwise or rightwise rotation.

As an example, to create all permutations for n=4, using algorithm #3 with leftwise rotation, you would type:

```JavaScript
gysinSommerville(4, 3, -1)
```

---

# The Utilities

This is a series of utilities that are useful for manipulating the output of the permutation algorithms.

## rotate()

This rotates an array either left or right by a given number of elements. The direction of the rotation depends upon whether the second argument is more than or less than 0.

```JavaScript
rotate([1, 2, 3], 0);
// -> [1, 2, 3]

rotate([1, 2, 3], 1);
// -> [2, 3, 1]

rotate([1, 2, 3], 2);
// -> [3, 1, 2]

rotate([1, 2, 3], 3);
// -> [1, 2, 3]

rotate([1, 2, 3], -1);
// -> [3, 1, 2]

rotate([1, 2, 3], -2);
// -> [2, 3, 1]

rotate([1, 2, 3], -3);
// -> [1, 2, 3]
```

## rotateArrays()

Applies the above `rotate()` function to every array within an array.

```JavaScript
const testArray = [[1, 2, 3], [1, 3, 2], [2, 1, 3]];

rotateArrays(testArray, 1);
// -> [[2, 3, 1], [3, 2, 1], [1, 3, 2]];

rotateArrays(testArray, -2);
// -> [[2, 3, 1], [3, 2, 1], [1, 3, 2]]
```

## reverseArrays()

Reverses every array within an array.

```JavaScript
reverseArrays([[1, 2, 3], [1, 3, 2], [2, 1, 3]]);
// -> [[3, 2, 1], [2, 3, 1], [3, 1, 2]];

```

## swap()

Swaps the position of two elements within an array. First argument is the array this function to be applied to and the following two arguments are the indexes of the two arrays to swap. This is function does not mutate the original array, but returns a new shallow copy.

```JavaScript
swap([1, 2, 3, 4, 5], 0, 3);
// -> [4, 2, 3, 1, 5];
```

## mutatedSwap

Swaps the position of two elements within an array. First argument is the array this function to be applied to and the following two arguments are the indexes of the two arrays to swap. This is function **does** mutate the original array and is used in the Heap and Wells permutations.

```JavaScript
mutatedSwap([1, 2, 3, 4, 5], 0, 3);
// -> [4, 2, 3, 1, 5];
```

## replace()

Replaces all of the elements in an array of arrays with different elements. This is useful as many of the algorithms can only return permutations of sequential numbers and this allows the transformation of these arrays such that they can contain other elements.

The first argument is the array of permutaions to transform, the second is the elements contained in the original permutation, the third is an array of elements to replace those in argument 2 with and the last is either `0`/`false` or `1`/`true` indicating whether the output should contain the original array as well as the transformed version.

```Javascript
const testArray = [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]];

replace(testArray, [1, 2, 3], ["A", "B", "C"], 1);
/* -> [
        ["A", "B", "C"],
        ["A", "C", "B"],
        ["B", "A", "C"],
        ["B", "C", "A"],
        ["C", "A", "B"],
        ["C", "B", "A"]
      ];
*/

replace(testArray, [1, 2, 3], ["A", "B", "C"], 0);
/* -> [
        [ [ 1, 2, 3 ], [ 'A', 'B', 'C' ] ],
        [ [ 1, 3, 2 ], [ 'A', 'C', 'B' ] ],
        [ [ 2, 1, 3 ], [ 'B', 'A', 'C' ] ],
        [ [ 2, 3, 1 ], [ 'B', 'C', 'A' ] ],
        [ [ 3, 1, 2 ], [ 'C', 'A', 'B' ] ],
        [ [ 3, 2, 1 ], [ 'C', 'B', 'A' ] ]
      ]
*/

```

## reverseNonMutate()

Creates the same result as JavaScript's built-in `Array.prototype.reverse()` function, but without mutating the original array it is operating upon.

```JavaScript
reverseNonMutate([1, 2, 3, 4, 5])

// -> [5, 4, 3, 2, 1]
```

## compareArrays()

Checks if two arrays of arrays are the same.

```javaScript
compareArrays([[1, 2, 3, 4], [1, 3, 2, 4], [1, 2, 3, 4], [1, 3, 2, 4]])
// -> true`
```

## cyclicModulo()

A modulo function that wraps minus numbers back into a range between 0 and the modulo

```javaScript
cyclicModulo(-2, 5)
// -> 3`
cyclicModulo(7, 5)
// -> 2
```

## factorial()

Calcuates factorials.

```javaScript
factorial(4)
// -> 24`
```
