const userController = require('../Controller/UserController');
const express = require('express');

const zodmiddleware = require('../middleware/ZodMiddleware');
const UserSchemaValidation = require('../util/UserSchemaValidation');

const router = express.Router();
router.get('/user',userController.getAllUsers)
router.post('/user',zodmiddleware.validate(UserSchemaValidation),userController.createUser)
router.get('/user/:id',userController.getUserById)
router.delete('/user/:id',userController.deleteUser)
router.put('/user/:id',userController.updateUser)

module.exports = router;