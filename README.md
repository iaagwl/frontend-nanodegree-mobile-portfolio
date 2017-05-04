## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884) and [Browser Rendering Optimization course](https://www.udacity.com/course/ud860).

Goals for this project:
* Identify and perform optimizations to achieve a PageSpeed score of 90 on index.html
* Identify and perform optimizations ensuring a consistent frame rate at 60fps when scrolling in pizza.html
* Time to resize pizzas is less than 5ms in pizza.html

## Part 1: Optimize PageSpeed Insights score for index.html

### Used optimizations
Minimize number of critical resources:
* Use media="print" for `print.css`
* Inline critical css and JS files
* Moved scripts to the bottom of body
* Added async attributes for scripts that are not required for rendering
* Download fonts and GA async from scripts

Minimize the total size:
* Made big images smaller
* Minified CSS and JS

### Part 1 Results:
PageSpeed Insights score when hosted with ngrok
* Desktop: 92/100
* Mobile: 95/100

Full PSI-results can be found in `PSI-results.txt`

## Part 2: Optimize Frames per Second in pizza.html

### Issue #1: Frame rate by scrolling the page

The problem with the `updatePositions` function was that `document.body.scrollTop` was accessed every loop iteration.
I've moved out code that can be executed once before the loop and the loop now only updates the element styles.

### Issue #2: Computational efficiency

The main problem with the `changePizzaSizes` was that it repeatedly forced reflow with `elem.offsetWidth`. It also made some unnecessary computations.
I've rewritten the function and it now uses very limited computations and no more forces reflow.

### Part 2 Results:
Tests made with the User Timing API
* Average time to Resize pizzas before: 79.00ms
* Average time to Resize pizzas after: 0.32ms
* Average time to generate 10 frames while scrolling before: 38.24ms
* Average time to generate 10 frames while scrolling after: 0.155ms

Full results can be found in `FPS-results.png`

### Run
To run the site locally and run a PSI test with grunt and ngrok
1. Download http-server globally by running
```
npm install npm install -g http-server
```

2. cd into dest directory and run http-server
```
cd dest
http-server
```

3. cd into main folder and install dependencies
```
cd ..
npm install
```

3. run PSI with grunt and ngrok
```
grunt psi-ngrok
```
