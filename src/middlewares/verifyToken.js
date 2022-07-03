const jwt = require('jsonwebtoken');
const {SECRET} = require('../config');
const {UserModel} = require('../models');

const verifyToken = async(req, res, next)=>{
  try {
    const token = req.headers['x-access-token'];

    if(!token){
      const error = new Error();
      error.message = 'No ha enviado el token!';
      error.status = 400;
      throw error;
    }

    const decoded = jwt.decode(token);

    const user = await UserModel.findById(decoded.id);

    if(!user){
      const error = new Error();
      error.message = 'El token no corresponde a ningun usuario!';
      error.status = 401;
      throw error;
    }

    req.body._user = decoded.id;
    next();
  } catch (error) {
    res.json({error})
  } 
}

module.exports = verifyToken;