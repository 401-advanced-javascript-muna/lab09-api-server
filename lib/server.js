
'use strict';

// //******************** Dependdencies **********/
// const express = require('express');
// const morgan = require ('morgan'); //HTTP request logger middleware for node.js

// //******************** custom routes **********/

// const apiRouter = require ('../routes/v1.js');

// //******************** App constants **********/

// const app = express();

// app.use(express.json());    //To be global

// app.use(morgan('dev'));

// app.use(apiRouter);


// //******************** App listening **********/

// module.exports = {
//   server: app,
//   start: port =>{
//     let PORT = port || process.env.PORT || 3000;
//     app.listen(PORT, ()=> console.log(`OUR SERVER IS LIVE 0N PORT ${PORT}`));
//   },
// };


// 3rd party dependencies
const express = require('express');
const morgan = require('morgan');

// custom middleware
// this is where your error handling middleware goes

// custom routes
const apiRouter = require('../routes/v1.js');

// application constants
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(apiRouter);

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3333;
    app.listen(PORT, () => console.log('server up:', PORT));
  }
}