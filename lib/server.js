
'use strict ';

//******************** Dependdencies **********/
const express = require('express');

const morgan = require ('morgan'); //HTTP request logger middleware for node.js

//******************** custom routes **********/

const apiRouter = require ('../routes/v1.js');

//******************** App constants **********/

const app = express();

app.use(express.json());    //To be global

app.use(morgan('dev'));

app.use(apiRouter);


//******************** App listening **********/

module.exports = {
  server: app,
  start: port =>{
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, ()=> console.log(`OUR SERVER IS LIVE 0N PORT ${PORT}`));
  },
};