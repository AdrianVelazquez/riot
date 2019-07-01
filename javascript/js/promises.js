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

// fetch data from an api using ajax, method, url
function getData(method, url){

  return new Promise(function(resolve, reject){
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function(){
      if(this.status >= 200 && this.status < 300){
        resolve(xhr.response)
      }else{
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };

    xhr.onerror = function(){
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    }
    xhr.send();
  });
}

getData("GET", "https://jsonplaceholder.typicode.com/todos")
  .then(function(data){
    let todos = JSON.parse(data);
    let output = "";

    for(let todo of todos){
      output += `
        <li>
          <h5>${todo.title}</h5>
          <p>${todo.completed}</p>
        </li>
      `;
    }
    document.getElementById("template").innerHTML = output;
    // console.log(data);
  })
  .catch(function(error){
    console.log(error);
  });
