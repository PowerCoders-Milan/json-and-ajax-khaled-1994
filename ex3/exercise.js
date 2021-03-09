/*Let’s see Promise.all

https://www.freecodecamp.org/news/promise-all-in-javascript-with-example-6c8c5aea3e32/

Create 3 promises (new Promise) within each call the placeholder API to get some information.

Call the 3 promises with promise.all:
- make sure to nadle possible errors
- once all of them are done, console log the result*/

var object = {
    id: 1,
    title: "this is a note",
    content: "This is the amazing content of the note!"
  };


const promise1 =  new Promise((resolve, reject) => {
   fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json)) 

    if (object.id == 1) {
        resolve('I resolved!');
    } else {
        reject('I rejected!'); 
    }
  });
  
const promise2 =   new Promise((resolve, reject) => {
   fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
    if (object.title == "this is a note") {
        resolve('I resolved!');
    } else {
        reject('I rejected!'); 
    }
  });
 
const promise3 =  new Promise((resolve, reject) => {
   fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
    if (object.content == "This is the amazing content of the note!") {
        resolve('I resolved!');
    } else {
        reject('I rejected!'); 
    }
  });

  Promise.all([promise1, promise2, promise3])
  .then(result => { 
    console.log(result);
});

