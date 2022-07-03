const {AuthService} = require('../services');
const authService = new AuthService();

class AuthController{

  async login(req, res){
    try {
      const {body} = req;
      const data = await authService.login(body);
      res.json(data);
    } catch (error) {
      res.json({error})
    }
  }

  async register(req, res){
    try {
      const {body} = req;
      const data = await authService.register(body);
      res.json(data)
    } catch (error) {
      res.json({error})
    }
  }
}

module.exports= AuthController;