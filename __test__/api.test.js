'use strict ';

const {server} = require('../lib/server');

const supergoose = require('@code-fellows/supergoose');

const mockReq = supergoose(server);

describe('Categories API', () => {
  it('can post a new category', () => {
    let obj = { name: 'name1',description:'des1' };
    mockReq.post('/api/v1/categories')
      .send(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get a record',()=>{
    // let obj = { name: 'name1',description:'des1' };
    mockReq.get('/api/v1/categories')
      .then(response => {
        expect(response.status).toEqual(200);
      });
  });
  it('can update() a record', () => {
    let obj = { name: 'name1',description:'des1' };
    mockReq.post(obj)
      .then(record => {
        // console.log(record);
        mockReq.get(record._id)
          .then(category => {
            console.log(category,'lllllllllllllllllll');
            Object.keys(obj).forEach(key => {
              expect(category[key]).toEqual(obj[key]);
            });
          });
      });
  });


  it('can delete a category', () => {
    let obj = { name: 'name1',description:'des1' };
    mockReq.post(obj)
      .then(record => {
        mockReq.get(record._id)
          .then(category => {
            console.log(category);
            Object.keys(obj).forEach(key => {
              expect(category[key]).toEqual(obj[key]);
            });
          });
      });
  });



});

describe('Products API', () => {
  it('can post a new product', () => {
    let obj = { name: 'name1',price:'p1',weight:'w1',quantityInStock:'111',category:'cat1' };
    mockReq.post('/api/v1/products')
      .send(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });


  it('can get a record',()=>{
    mockReq.get('/api/v1/products')
      .then(response => {
        expect(response.status).toEqual(200);
      });
  });
  it('can update() a record', () => {
    let obj = { name: 'name1',price:'p1',weight:'w1',quantityInStock:'111',category:'cat1' };
    mockReq.post(obj)
      .then(record => {
        // console.log(record);
        mockReq.get(record._id)
          .then(category => {
            // console.log(category,'lllllllllllllllllll');
            Object.keys(obj).forEach(key => {
              expect(category[key]).toEqual(obj[key]);
            });
          });
      });
  });


  it('can delete a product', () => {
    let obj = { name: 'name1',price:'p1',weight:'w1',quantityInStock:'111',category:'cat1' };
    mockReq.post(obj)
      .then(record => {
        mockReq.get(record._id)
          .then(category => {
            console.log(category);
            Object.keys(obj).forEach(key => {
              expect(category[key]).toEqual(obj[key]);
            });
          });
      });
  });
});