'use strict';

require('dotenv').config();

const server = require ('./lib/server');  // connect to sever

const mongoose = require ('mongoose');

// const categories = require('./models/categories-schema');


const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.MONGOOSE_URI, mongooseOptions);

// const clothing = new categories({ name: 'clothing' });

// clothing.save();

server.start(process.env.PORT);



