var express = require('express');
var app = express();

const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.PORT);
console.log(process.env.NAME);