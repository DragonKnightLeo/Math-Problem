import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

document.getElementById('data').addEventListener('click', getData);

function rewardPoints(transaction) {
  let rewards = 0;
  let point1 = 50;
  let point2 = 100;
  let rewardmultiplier = 2;

  if (transaction > 50 && transaction < 100) {
    rewards = transaction - point1;
  };
  if (transaction > 100) {
    rewards = transaction - point2;
    finalrewards = rewards * rewardmultiplier + 50;
    console.log(finalrewards);
  };
};

function getData() {
  fetch('/data.json', {mode: 'no-cors'})
  .then((res) => res.json())
  .then((data) => {
  let output = '<h2>Data</h2>';
  data.forEach(function(data){
    output += `
      <ul>
        <li>Month: ${data.month}</li>
        <li>Transaction: ${data.transaction}</li>
        <li>Price: ${data.price}</li>
    `;
  });
  document.getElementById('output').innerHTML = output;
  })
};

rewardPoints(`${data.price}`);

serviceWorker.unregister();
