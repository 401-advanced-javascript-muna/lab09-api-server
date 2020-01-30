'use strict';

const mongoose = require('mongoose');
require('./categories-schema');

const products = mongoose.Schema({
  name: { type: String, required: true },
  price :{type: String,required :true},
  weight :{type: String,required :true},
  quantity_in_stock:{type: String,required :true},
  category:{type: String,required :true},

}, { toObject: { virtuals: true}, toJSON: { virtuals: true }});

products.virtual('actualCat', {
  ref: 'categories',
  localField: 'category',
  foreignField: 'name',
  justOne: false,
});

// id :{ required :true},
// price :{required :true},
// weight :{required :true},
// quantity_in_stock:{required :true},

products.pre('findOne', function() {
  try {
    this.populate('actualCat');
  } catch(e) {
    console.error(e);
  }
});

module.exports = mongoose.model('products', products);