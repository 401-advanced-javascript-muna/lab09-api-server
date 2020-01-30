'use strict';

require('dotenv').config();

const server = require ('./lib/server');  // connect to sever

const mongoose = require ('mongoose');

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.MONGODB_URI, mongooseOptions);

server.start(process.env.PORT);



