## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

Goals for this project:
* The PageSpeed score of 90 is for index.html (both mobile and laptop scores should be at least 90).
* The frame rate of 60fps should be obtained for the pizza page (views/pizza.html).

### Part 1: Optimize PageSpeed Insights score for index.html

## Used optimizations
Minimize number of critical resources:
* Use media="print" for `print.css`
* Inline critical css and JS files
* Moved scripts to the bottom of body
* Added async attributes for scripts that are not required for rendering
* Download fonts and GA async from scripts
Minimize the total size
* Made big images smaller
* Minified CSS and JS

### Part 1 Results:
PageSpeed Insights score when hosted with ngrok
* Desktop: 92/100
* Mobile: 95/100

Full PSI-results can be found in `PSI-results.txt`

### Part 2: Optimize Frames per Second in pizza.html

#### Issue #1: Frame rate by scrolling the page

The problem with the `updatePositions` function was that `document.body.scrollTop` was accessed every loop iteration.
I've moved out code that can be executed once before the loop and the loop now only updates the element styles.

#### Issue #2: Computational efficiency

The main problem with the `changePizzaSizes` was that it forced reflow `elem.offsetWidth`. It also made some unnecessary computations.
I've rewritten the function and it now uses very limited computations and no more forces reflow.

### Part 2 Results:
Tests made with the User Timing API
* Average time to Resize pizzas before: 79.00ms
* Average time to Resize pizzas after: 0.32ms
* Average time to generate 10 frames while scrolling before: 38.24ms
* Average time to generate 10 frames while scrolling after: 0.155ms

Full results can be found in `FPS-results.png`
