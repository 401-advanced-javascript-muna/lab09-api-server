/* eslint-disable indent */
'use strict ';
/**
 * Dynamic Model to do CRUD
 */
class Model {

  constructor(schema){
    this.schema = schema;
  }
/**
 * To get a record by _id
 * @param {string} _id
 */
  get(_id){
    if(_id){
      return this.schema.findOne({_id});
    }

    else {
      return this.schema.find({});
    }
  }
/**
 * To create a new record
 * @param {object} record
 */
  create(record){
    // eslint-disable-next-line
      let newRecord = new this.schema(record);
    return newRecord.save();
  }
/**
 *
 * @param {string} _id
 * @param {object} record
 */
  update(_id,record){
    return this.schema.findByIdAndUpdate(_id,record,{ new:true});
  }

/**
 * To delete an item from database
 * @param {string} _id
 */
  delete(_id){
    return this.schema.findByIdAndDelete(_id);
  }

}
module.exports = Model;