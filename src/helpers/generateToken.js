const jwt = require('jsonwebtoken');
const {SECRET} = require('../config');

const generateToken = (id) =>{
  const token = jwt.sign({id}, SECRET, {expiresIn:'7d'});
  return token;
}

module.exports = generateToken;