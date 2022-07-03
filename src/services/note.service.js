const {NoteModel} = require('../models');

class NoteService{
  async create(entity){
    const {title, body} = entity;

    if(!title || !body){
      const error = new Error();
      error.status = 400;
      error.message = 'El title y el body son obligatorios!';
      throw error;
    }

    return await NoteModel.create(entity);
  }

  async getAll(_user){
    return await NoteModel.find({_user, state:true});
  }

}

module.exports = NoteService;