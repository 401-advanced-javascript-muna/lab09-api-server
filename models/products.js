'use strict';

const schema = require('./categories-schema');

const dataModel = require('./model');

class Products extends dataModel{}

module.exports = new Products(schema);
