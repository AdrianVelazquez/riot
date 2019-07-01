console.log("-----------------------------JS Promises-----------------------------")
// -----------------------------JS Promises
// src: https://www.youtube.com/watch?v=XJEHuBZQ5dU
"use strict";
// the promise object is used for defered and asynchronous computations
// represents an operation that hasnt completed yet, but is promised in the future

// an immediately resolved promise
// set the promise
const promise1 = Promise.resolve("foo");
// get the promise
promise1.then((response) => console.log(response));

// examples
const promise2 = new Promise(function(resolve, reject){
  setTimeout(() => resolve(4, 2000));
});

promise2.then((resolve) => {
  resolve +=3;
  console.log(resolve);
});

// fetch data from an api
