const {model, Schema} = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  name:{
    type: String
  },
  email:{
    type: String
  },
  phone:{
    type: String
  },
  password:{
    type: String
  },
  createAt:{
    type: Date,
    default: Date.now()
  }
});

userSchema.methods.encryptPassword = async(password)=>{
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

userSchema.methods.equalsPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.toJSON = function () {
  let user = this.toObject();
  delete user.password;
  return user;
}

module.exports = model('user',userSchema);