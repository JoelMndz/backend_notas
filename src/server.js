const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const {PORT} = require('./config');

const {AuthRoute, NoteRoute} = require('./routes');

class Server{
  constructor(){
    this.app = express();
    this.config();
    this.middlewares();
    this.routes();
    this.app.use('/',(req, res)=>res.json({'ok':'OK'}))
  }

  config(){
    this.app.set('port',PORT);
  }

  routes(){
    this.app.use('/api/auth',AuthRoute);
    this.app.use('/api/note', NoteRoute)
  }

  middlewares(){
    this.app.use(cors());
    this.app.use(express.json()); 
    this.app.use(express.urlencoded({extended: false}));
    this.app.use(morgan('dev'));
  }

  listen(){
    this.app.listen(this.app.get('port'),()=>{
      console.log(`REST API corriendo en el puerto ${this.app.get('port')}`);
    });
  }
}

module.exports = {Server: new Server()};