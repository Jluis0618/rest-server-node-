const { Router } = require('express');
const { userGet, userDelete, userPatch, userPut, userPost } = require('../controllers/user');

const router = Router();

router.get("/", userGet);

router.put("/:id", userPut); // :id es un parametro que se puede mandar en la url

router.post("/", userPost);

router.delete("/", userDelete);

router.patch("/", userPatch);










module.exports = router;