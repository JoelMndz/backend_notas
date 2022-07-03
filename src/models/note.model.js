const {Schema, model, SchemaTypes} = require('mongoose');

const noteSchema = new Schema({
  title:{
    type: String
  },
  body:{
    type: String
  },
  ubication:{
    latitude: SchemaTypes.Decimal128,
    longitude: SchemaTypes.Decimal128
  },
  state: {
    type: Boolean,
    default: true
  },
  photo:{
    type: String
  },
  createAt:{
    type: Date,
    default: Date.now()
  },
  _user:{
    type: SchemaTypes.ObjectId,
    ref: 'user'
  }
});

module.exports = model('note', noteSchema);