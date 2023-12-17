const { response, request } = require("express");


const userGet = (req = request, res = response) => {

  const {q, nombre = "no name", apikey, page = 1, limit} = req.query; //extraer los parametros de la url

    res.json({
      msg: "get API - Controlador",
      q, nombre, apikey, page, limit
    });
}


const userPut = (req, res = response) => {

    const id = req.params.id; //extraer el id de la url

    res.status(400).json({
      msg: "put API - Controlador",
      id
    });
}


const userPost = (req, res = response) => {

    // extraer body (lo que se esta mandando del client)
    const {nombre, edad} = req.body;

    res.status(201).json({
      msg: "post API - Controlador",
      nombre, edad
    });
}

const userDelete = (req, res = response) => {

    res.json({
      msg: "delete API - Controlador",
    });
  }

const userPatch = (req, res = response) => {

    res.json({
      msg: "patch API - Controlador",
    });
  }

module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete,
    userPatch

}