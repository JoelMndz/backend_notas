const {NoteService} = require('../services');

const noteService = new NoteService();

class NoteController{
  async create(req, res){
    try {
      const body = req.body;
      const data = await noteService.create(body);
      res.json(data);
    } catch (error) {
      res.json({error});
    }
  }

  async getAll(req, res){
    try {
      const {_user} = req.body;
      const data = await noteService.getAll(_user);
      res.json(data)
    } catch (error) {
      res.json(error);
    }    
  }
}

module.exports = NoteController;