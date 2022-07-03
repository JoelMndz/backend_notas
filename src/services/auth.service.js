const {UserModel} = require('../models');
const {generateToken} = require('../helpers');

class AuthService{

  async login(entity){
    const {email, password} = entity;

    if(!email || !password){
      const error = new Error();
      error.message = 'DDebe enviar estos datos email,password';
      error.status = 401;
      throw error;
    }

    const user = await UserModel.findOne({email});
    if(!user){
      const error = new Error();
      error.message = 'Email no registrado!';
      error.status = 401;
      throw error;
    }

    const valid = await user.equalsPassword(password);
    if(!valid){
      const error = new Error();
      error.message = 'Contraseña incorrecta!';
      error.status = 401;
      throw error;
    }
    const token = generateToken(user._id);
    
    return {...user.toJSON(),token};
  }
  
  async register(entity){
    const {name, email, phone, password} = entity;
    if(!name || !email || !phone || !password){
      const error = new Error();
      error.message = 'Debe enviar estos datos name,email,phone,password'
      error.status = 400;
      throw error;
    }

    let user = await UserModel.findOne({email});
    if (user) {
      const error = new Error();
      error.message = 'El email ya está registrado!'
      error.status = 400;
      throw error;
    }

    if(password.length < 8){
      const error = new Error();
      error.message = 'La contraseña debe tener al menos 8 caracteres!'
      error.status = 400;
      throw error;
    }
    
    user = UserModel(entity);
    user.password = await user.encryptPassword(password);
    
    return await user.save();
  }
}

module.exports = AuthService;