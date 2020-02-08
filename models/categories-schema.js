
/* eslint-disable new-cap */
/* eslint-disable no-undef */
// eslint-disable-next-line strict
'use strict ';

const mongoose = require ('mongoose');

require('./products-schema.js');

const categorieSchema = mongoose.Schema({
  name : { type: String, required: true},
  description: { type: String, required: true},
},{ toObject: { virtuals: true }, toJSON: { virtuals: true },

});

categorieSchema.virtual('actualProducts', {

  ref: 'products',
  localField: 'name',
  foreignField: 'category',
  justOne: false,

});


categorieSchema.pre('findOne',function(){//connection before
  try {

    this.populate('allProducts');   //HOCK : get populate {}

  }catch(e){
    console.error(e);

  }
});
module.exports = mongoose.model('categorieSchema', categorieSchema);//'categoriesSchema' is collection name
