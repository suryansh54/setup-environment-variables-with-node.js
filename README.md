# Setup environment variables with Node.js + Dotenv

```javascript
// For installation "npm i dotenv"
var express = require('express');
var app = express();

const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.PORT);
console.log(process.env.NAME);
```
**Reference:**
https://www.npmjs.com/package/dotenv
