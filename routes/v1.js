/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
'use strict ';

const express = require('express');

const router = express.Router();

const categories = require('../models/categories');
const products = require('../models/products');

//////categories and products as generic route using switch

function anyModel(req, res, next) {
  let model = req.params.model;


  switch(model) {

  // middleware request
  // api/v1/categories
  case 'categories':
    req.model = categories;
    next();
    return;
    // api/v1/produts
  case 'products':
    req.model = products;
    next();
    return;
    // for errors
  default:
    next(' INVALID MODEL');
    return;
  }
}

router.param('model', anyModel);  //invoke anyModel

router.get('/api/v1/:model', getAllData); //to get all data
router.get('/api/v1/:model/:id', getById);
router.post('/api/v1/:model', postRecord);
router.put('/api/v1/:model/:id', update);
router.delete('/api/v1/:model/:id', deleteRecord);


function getAllData(req, res, next) {
  req.model.get()
    .then(data => {
      let count = data.length;
      res.status(200).json({count, data});
    });
}

function getById(req, res, next) {
  let id = req.params.id;
  req.model.get(id)
    .then(oneRecord => {
      res.status(200).json(oneRecord);
    })
    .catch(next);
}

function postRecord(req, res, next) {
  console.log(req.body,'*************************');

  req.model.create(req.body)
    .then(data=> {
      res.status(201).json(data);
    })
    .catch(next);
}

function update(req, res, next) {
  let id = req.params.id;
  req.model.update(id,req.body)
    .then(data => {
      res.status(200).json(data);
    }).catch(next);
}

function deleteRecord(req, res, next) {
  let id = req.params.id;
  const message = 'the record is no longer in the database';
  req.model.delete(id)
    .then(data => {
      console.log('data',data);
      res.status(200).json({message});
    }).catch(next);
}

module.exports = router;

