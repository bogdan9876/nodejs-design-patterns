const { Router } = require("express");
const UserController = require("./controllers/UserController.js");
const router = new Router()

router.post('/users', (req, res) => UserController.create(req, res))
router.get('/users', (req, res) => UserController.getAll(req, res))
router.get('/users/:id', (req, res) => UserController.getOne(req, res))
router.put('/users/:id', (req, res) => UserController.update(req, res))
router.delete('/users/:id', (req, res) => UserController.delete(req, res))

module.exports = router;