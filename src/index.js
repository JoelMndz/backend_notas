const {Server} = require('./server');
const {dbConnection} = require('./database');


dbConnection();
Server.listen();