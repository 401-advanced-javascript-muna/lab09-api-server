'use strict';

class OurModel{
  constructor(schema){
    this.schema = schema;
  }
  get(id){
    if(id){
        // console.log('kkkkkkkkkkkk')
      return this.schema.findById(id);  //search by id
    }
    else{
      return this.schema.find({});    //will return all records
    }
  }
  post(record){
    let newRecord = new this.schema(record);
    return newRecord.save();
  }
    update(_id, record) {
      return schema.findByIdAndUpdate(_id, record, { new: true });
    }

  delete(_id) {
    return schema.findByIdAndDelete(_id);
  }
}


module.exports = OurModel;