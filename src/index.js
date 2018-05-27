import React from 'react';
import ReactDOM from 'react-dom';

const root = document.createElement('root');
document.body.appendChild(root);

function* fetchSomethingViaGenerator() {
  let response;
  let result;

  try {
      response = yield fetch('https://api.icndb.com/jokes/random');
  } catch (err) {
      return Promise.reject(new Error(`Network error: ${err}`));
  }
}

async function fetchSomethingViaAsyncAwait() {
  let response;
  let result;

  try {
    response = await fetch('https://api.icndb.com/jokes/random');
  } catch(err) {
    return Promise.reject(new Error(`Network error: ${err}`));
  }

  try {
    result = await response.json();
  } catch(err) {
    return Promise.reject(new Error(`Server error: ${err}`));
  }

  console.log('result', result);
}

fetchSomethingViaAsyncAwait();
// const gen = fetchSomethingViaGenerator()
// console.log('x', gen.next().value);

ReactDOM.render(
  <h1>hello world!!! :)</h1>,
  root
);
