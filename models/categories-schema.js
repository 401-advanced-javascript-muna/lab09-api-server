
'use strict';
const mongoose = require('mongoose');
require('./products-schema.js');

const categoriesSchema = mongoose.Schema({
  name: { type: String, required: true },
}, { toObject: { virtuals: true }, toJSON: { virtuals: true }});
// id: { required: true },
// name: { required: true },
categoriesSchema.virtual('allProducts',{
  ref: 'products' ,
  localField: 'name',
  foreignField: 'category',
  justOne: false, ////////////////////////////???

});


categoriesSchema.pre('findOne',function(){
  try {

    this.populate('allProducts');   //HOCK : get populate {}
  }catch(e){
    console.error(e);

  }
});
module.exports = mongoose.model('categories',categoriesSchema);  //'categories' is collection name
