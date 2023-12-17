const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.userPath = '/api/usuarios'
    // this.usuariosPath = '/api/usuarios';

    // // Middlewares
    this.middlewares(); //Funcion que agrega algo a mi web server, siempre se ejecuta al levantar el server

    // // Rutas de mi aplicación
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    // Parseo y lectura del body
    this.app.use(express.json())

    // Directorio público
    this.app.use(express.static("public"));

    // Lectura y parseo del body
    this.app.use(express.json());

    // API Endpoints
    // this.app.use(this.usuariosPath, require('../routes/usuarios'));
  }

  routes() {
   this.app.use(this.userPath, require('../routes/user'))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server is running on port", this.port);
    });
  }
}

module.exports = Server;
