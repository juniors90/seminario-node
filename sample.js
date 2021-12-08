const os = require('os');
const {freeRAM, getEmail, joker } = require('./main.js');

let name = 'foo';
let lastname = 'bar';

const welcome = (name, lastname) => {
    console.log(`Hello ${name} ${lastname}!!...`);
    console.log(`Your emai is: ${getEmail(name, lastname)}`);
};

welcome(name, lastname);
freeRAM();
console.log(joker);