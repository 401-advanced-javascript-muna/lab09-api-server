'use strict';

module.exports = (req,res) => {
  res.status(404);
  res.statusMessage = ' Not Found  error 404';
  res.json({error:'Not Found'});
};