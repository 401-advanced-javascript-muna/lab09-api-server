'use strict';

module.exports = (error, req, res, next) => {
  res.status(500);
  res.statusMessage = 'It is Server Error';
  res.json({error:error});
};