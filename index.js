// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter1</h1>`;

import * as m1 from './es6/module/m1.js';
console.log(m1);

import * as m2 from './es6/module/m2.js';
console.log(m2);

import * as m3 from './es6/module/m3.js';
console.log(m3);
